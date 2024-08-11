#![no_std]
use core::cmp;
use soroban_sdk::{contract, contractimpl, contracttype, token, Address, Env, String, Symbol, Vec};

#[derive(Clone)]
#[contracttype]
pub enum DataKey {
    Order(u64),
    Recipient,
    User(Address),
    Token,
    RecipientClaimed,
    TargetAmount,
    OrderCounter,
    UserOrderTracker(Address),
    Balance(Address),
    UserRewards(Address),
}

#[derive(Clone)]
#[contracttype]
pub struct UserOrderTracker {
    total_value: i128,
    reward_percentage: u32,
    rewards: Vec<i128>,
}

#[derive(Clone)]
#[contracttype]
pub struct Order {
    id: u64,
    user: Address,
    amount: i128,
    fulfilled: bool,
    timestamp: u64,
}

#[contract]
pub struct LocalFoodNetwork;

#[contractimpl]
impl LocalFoodNetwork {
    pub fn token(e: Env) -> Address {
        Self::get_token(&e)
    }

    pub fn recipient(e: Env) -> Address {
        Self::get_recipient(&e)
    }

    fn get_recipient(e: &Env) -> Address {
        e.storage()
            .instance()
            .get::<_, Address>(&DataKey::Recipient)
            .expect("not initialized")
    }

    fn get_token(e: &Env) -> Address {
        e.storage()
            .instance()
            .get::<_, Address>(&DataKey::Token)
            .expect("not initialized")
    }

    fn get_user_deposited(e: &Env, user: &Address) -> i128 {
        e.storage()
            .instance()
            .get::<_, i128>(&DataKey::User(user.clone()))
            .unwrap_or(0)
    }

    fn set_user_deposited(e: &Env, user: &Address, amount: &i128) {
        e.storage()
            .instance()
            .set(&DataKey::User(user.clone()), amount);
    }

    fn get_balance(e: &Env, contract_id: &Address) -> i128 {
        let client = token::Client::new(e, contract_id);
        client.balance(&e.current_contract_address())
    }

    // fn get_recipient_claimed(e: &Env) -> bool {
    //     e.storage()
    //         .instance()
    //         .get::<_, bool>(&DataKey::RecipientClaimed)
    //         .expect("not initialized")
    // }

    // fn set_recipient_claimed(e: &Env) {
    //     e.storage()
    //         .instance()
    //         .set(&DataKey::RecipientClaimed, &true);
    // }

    // Transfer tokens from the contract to the recipient
     fn transfer(e: &Env, to: &Address, amount: &i128) {
        let token_contract_id = &Self::get_token(e);
        let client = token::Client::new(e, token_contract_id);
        client.transfer(&e.current_contract_address(), to, amount);
    }

    pub fn initialize(e: Env, recipient: Address, target_amount: i128, token: Address) {
        assert!(
            !e.storage().instance().has(&DataKey::Recipient),
            "already initialized"
        );

        e.storage().instance().set(&DataKey::Recipient, &recipient);
        e.storage()
            .instance()
            .set(&DataKey::TargetAmount, &target_amount);
        e.storage().instance().set(&DataKey::Token, &token);
    }

    fn deposit(e: Env, user: Address, amount: i128) {
        user.require_auth();

        assert!(amount > 0, "amount must be positive");

        let token_id = Self::get_token(&e);

        let recipient = Self::get_recipient(&e);
        assert!(user != recipient, "recipient may not deposit");

        let balance = Self::get_user_deposited(&e, &user);
        Self::set_user_deposited(&e, &user, &(balance + amount));

        let client = token::Client::new(&e, &token_id);
        client.transfer(&user, &e.current_contract_address(), &amount);

        let contract_balance = Self::get_balance(&e, &token_id);

        // emit events
        events::placed_order_changed(&e, contract_balance);
    }

    pub fn place_order(e: Env, user: Address, amount: i128) -> u64 {
        user.require_auth();

        // First, attempt to deposit the amount
        Self::deposit(e.clone(), user.clone(), amount);

        // Get and increment the order counter
        let order_id = e
            .storage()
            .instance()
            .get(&DataKey::OrderCounter)
            .unwrap_or(0)
            + 1;
        e.storage()
            .instance()
            .set(&DataKey::OrderCounter, &order_id);

        let order = Order {
            id: order_id,
            user: user.clone(),
            amount,
            fulfilled: true,
            timestamp: e.ledger().timestamp(),
        };

        // Store the order individually
        e.storage()
            .instance()
            .set(&DataKey::Order(order_id), &order);

        // Update user's total order value tracker
        let mut tracker = e
            .storage()
            .instance()
            .get::<_, UserOrderTracker>(&DataKey::UserOrderTracker(user.clone()))
            .unwrap_or(UserOrderTracker {
                total_value: 0,
                reward_percentage: 2,
                rewards: Vec::new(&e),
            });

        tracker.total_value += amount;

        // Calculate and store reward
        let reward_amount = if tracker.total_value >= 50_0000000 {
            let reward = (tracker.total_value * tracker.reward_percentage as i128) / 100;
            tracker.total_value = 0; // Reset total_value after reaching threshold
            if tracker.reward_percentage == 2 {
                tracker.reward_percentage = 1; // Change to 1% for subsequent rewards
            }
            reward
        } else {
            0 // No reward if total_value is below threshold
        };

        if reward_amount > 0 {
            tracker.rewards.push_back(reward_amount);

            // Store cumulative rewards
            let mut user_rewards = e
                .storage()
                .instance()
                .get::<_, Vec<i128>>(&DataKey::UserRewards(user.clone()))
                .unwrap_or(Vec::new(&e));
            user_rewards.push_back(reward_amount);
            e.storage()
                .instance()
                .set(&DataKey::UserRewards(user.clone()), &user_rewards);

            events::reward_earned(&e, &user, reward_amount);
        }

        // Store updated tracker
        e.storage()
            .instance()
            .set(&DataKey::UserOrderTracker(user.clone()), &tracker);

        events::order_placed(&e, &user, order_id, amount);

        order_id
    }

    pub fn get_order_by_id(e: Env, order_id: u64) -> Option<Order> {
        let order = e.storage().instance().get(&DataKey::Order(order_id));
        order
    }

    pub fn get_user_rewards(e: Env, user: Address) -> Vec<i128> {
        user.require_auth();
        e.storage()
            .instance()
            .get::<_, Vec<i128>>(&DataKey::UserRewards(user))
            .unwrap_or(Vec::new(&e))
    }

    pub fn get_total_user_rewards(e: Env, user: Address) -> i128 {
        user.require_auth();
        let rewards = Self::get_user_rewards(e, user);
        rewards.iter().sum()
    }

    pub fn process_user_reward(e: Env, user: Address) -> bool {
        user.require_auth();

        let rewards = Self::get_user_rewards(e.clone(), user.clone());
        let total_reward = rewards.iter().sum();

        if total_reward == 0 {
            return false; // No rewards to process
        }

        // Perform the withdrawal
        let token = Self::get_token(&e);
        Self::transfer(&e, &user, &total_reward);

        // Clear the rewards
        let mut tracker = e
            .storage()
            .instance()
            .get::<_, UserOrderTracker>(&DataKey::UserOrderTracker(user.clone()))
            .unwrap_or(UserOrderTracker {
                total_value: 0,
                reward_percentage: 2,
                rewards: Vec::new(&e),
            });

        // Clear the rewards vector
        tracker.rewards = Vec::new(&e);

        // Update the tracker in storage
        e.storage()
            .instance()
            .set(&DataKey::UserOrderTracker(user.clone()), &tracker);

        // // Clear the cumulative rewards
        // e.storage().instance().set(&DataKey::UserRewards(user.clone()), &);

        // Emit an event for the reward claim
        events::customer_reward_claimed(&e, &user, total_reward);

        // Update contract balance
        let contract_balance = Self::get_balance(&e, &token);
        events::placed_order_changed(&e, contract_balance);

        true // Rewards were successfully processed and cleared
    }

    pub fn get_orders_by_user(e: Env, user: Address, start: u64, limit: u64) -> Vec<Order> {
        let mut orders = Vec::new(&e);
        let order_count = e
            .storage()
            .instance()
            .get(&DataKey::OrderCounter)
            .unwrap_or(0);

        for id in start..cmp::min(start + limit, order_count + 1) {
            if let Some(order) = e
                .storage()
                .instance()
                .get::<DataKey, Order>(&DataKey::Order(id))
            {
                if order.user == user {
                    orders.push_back(order);
                }
            }
        }

        orders
    }
}

mod events {
    use super::*;

    pub(crate) fn placed_order_changed(e: &Env, contract_balance: i128) {
        let topics = (Symbol::new(e, "placed_order_changed"),);
        e.events().publish(topics, contract_balance);
    }

    pub(crate) fn customer_reward_claimed(e: &Env, user: &Address, total_reward: i128) {
        let topics = (Symbol::new(e, "customer_reward_claimed"), user.clone());
        e.events().publish(topics, total_reward);
    }

    pub(crate) fn reward_earned(e: &Env, user: &Address, reward_amount: i128) {
        let topics = (Symbol::new(e, "customer_reward_claimed"), user.clone());
        e.events().publish(topics, reward_amount);
    }

    pub(crate) fn order_placed(e: &Env, user: &Address, order_id: u64, amount: i128) {
        let topics = (Symbol::new(e, "order_placed"), user.clone(), order_id);
        e.events().publish(topics, amount);
    }
}
