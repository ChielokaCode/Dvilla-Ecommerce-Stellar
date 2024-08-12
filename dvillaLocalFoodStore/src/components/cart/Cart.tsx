require('dotenv').config();
import React, { FunctionComponent, useEffect, useState } from 'react';
import StellarSdk from 'stellar-sdk';
import Link from 'next/link';
import { Button, Stack, Table } from 'react-bootstrap';
import Image from 'next/image';
import { HStack } from '@chakra-ui/react';
// import { MintButton } from "./MintButton";
// import { Utils } from "../../../shared/utils";
import toast, { ToastBar } from 'react-hot-toast';
import { isConnected, getPublicKey } from '@stellar/freighter-api';
import { executeSmartContractFunction, contract, numberToU64, accountToScVal, numberToi128, stringToScValString, accountPub } from '../freighter/utils';
const dvillacontractId = "CAP6X7MGWYVXYAMJ3A3Y65CW3EFCOMJSB2PNWTZWPQUCW634MKN3L5W4"; // Replace with your deployed contract ID
const localfoodstoreContractId = "CAEXCQ3KEEDXNQLGCEVR2UVIKMIU6FHZG44W26QFUXUPKI4244DRTUTU";
import { Operation, SorobanRpc, Horizon, Transaction, xdr } from 'stellar-sdk';
import MintTokens from '../mintToken/MintTokens';

const sorobanServer = new SorobanRpc.Server("https://soroban-testnet.stellar.org:443");

const horizonServer = new Horizon.Server("https://horizon-testnet.stellar.org");

// Define the type for cart items
interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IResSubmit {
    status: string
    value?: string
    symbol?: string
    error?: string
  }

const Cart: React.FC = props => {
    const [balance, setBalance] = React.useState<number>(0)
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [decimals, setDecimals] = React.useState<number>(0);
    const [symbol, setSymbol] = React.useState<string>("");
    const [account, setAccount] = React.useState<string>("");
    const [totalAmount, setTotalAmount] = React.useState<number>(0)
    const [dvlaBalance, setDVLABalance] = useState(0)

    const [amount, setAmount] = useState<number>()

    useEffect(() => {
      // Load cart items from local storage on component mount
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    }, []);


    useEffect(() => {
        checkConnection();
      }, []);
    
      const checkConnection = async () => {
        const connected = await isConnected();
        if (connected) {
          const publicKey = await getPublicKey();
          setAccount(publicKey);
          fetchBalances(publicKey);
        }
      };

      const fetchBalances = async (publicKey: string) => {
        const dvlaBalance = await horizonServer.loadAccount(publicKey).then((account: { balances: any[]; }) => {
          return account.balances.find((b: { asset_type: string; }) => b.asset_type === 'native')?.balance || '0';
        });
        setDVLABalance(dvlaBalance);
        console.log(dvlaBalance);
    }



    // const myBalance = async (currency = 'XLM') => {
    //     const _account = await horizonServer.loadAccount(account);
    //     const _currency = currency === 'XLM' ? 'native' : currency;
    //     const _currencyTypeField = currency === 'XLM' ? 'asset_type' : 'asset_code';
    //     const _balance = _account.balances.find((b: { [x: string]: string; }) => b[_currencyTypeField] === _currency);
    //     setDVLABalance(_balance.balance);
    //     return parseFloat(_balance ? _balance.balance : '0');
    //   };

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(items => items.map(item =>
          item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 0) } : item
        ));
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    useEffect(() => {
        const calculateTotal = () => {
          return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        };
        
        const newTotal = calculateTotal();
        setTotalAmount(newTotal);
        setAmount(newTotal);
      }, [cartItems]);

    const handleOrder = async() => {
        if(await isConnected()){
        localStorage.removeItem('cartItems');
        setCartItems([]);
        alert('Order placed!');
        } else {
            toast.error("Connect to Wallet to place order");
        }
    };

    ///Mint token to user
    // const handleMintToken = async () => {
    //     const publicKey = await getPublicKey();
    //     const publicKeyScVal = accountToScVal(publicKey); // Convert to ScVal
    //     const amount = numberToi128(50); // Convert to i128 ScVal
    //     console.log(publicKeyScVal);
    //     console.log(amount);

    //     try {
    //       const result = await executeSmartContractFunction(
    //         dvillacontractId,
    //         "mint",
    //         [publicKeyScVal, amount]
    //       );
    //       toast.success("Minted 50 DVLA Successful");
    //       console.log("Mint token:", result);
    //       // Handle successful order placement (e.g., show success message, update UI)
    //     } catch (error) {
    //        toast.error("Error minting tokens");
    //       console.error("Error minting token:", error);
    //       // Handle error (e.g., show error message to user)
    //     }
    //   };
    


    //View minted tokens by user
    // const handleMintBalance = async () => {
    //     try {
    //       const result = await executeSmartContractFunction(
    //         contract(dvillacontractId),
    //         "balance",
    //         accountToScVal(account)
    //       );
    //       console.log("Mint token:", result);
    //       // Handle successful order placement (e.g., show success message, update UI)
    //     } catch (error) {
    //       console.error("Error minting token:", error);
    //       // Handle error (e.g., show error message to user)
    //     }
    //   };

    ///Place order for foods bought by user
    // const handleClaimReward = async () => {
    //     try {
    //       const result = await executeSmartContractFunction(
    //         ContractAddress,
    //         "claim_reward",
    //         rewardId
    //       );
    //       console.log("Reward claimed:", result);
    //       // Handle successful reward claim (e.g., show success message, update UI)
    //     } catch (error) {
    //       console.error("Error claiming reward:", error);
    //       // Handle error (e.g., show error message to user)
    //     }
    //   };

    ///claim rewards by user

    const handleConnectWallet = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        toast.error("Please connect your wallet");
      };
    return (
        <div className="p-4">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Image</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Price</th>
                        <th className="border border-gray-300 p-2">Quantity</th>
                        <th className="border border-gray-300 p-2">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td><Image width={300} height={200} src={item.image} alt={item.name} className="object-cover" /></td>
                            <td>{item.name}</td>
                            <td>{item.price} XLM</td>
                            <td className="flex items-center justify-center">
                                <Button
                                    variant="secondary"
                                    onClick={() => updateQuantity(item.id, -1)}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </Button>
                                <span className="mx-2">{item.quantity}</span>
                                <Button
                                    variant="secondary"
                                    onClick={() => updateQuantity(item.id, 1)}
                                >
                                    +
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="text-right font-bold ">Total: {totalAmount} DVLA</div>
            <HStack>
            <div className="mt-4 text-right">
                <Button className='ml-auto' variant="primary" onClick={account ? handleOrder : handleConnectWallet}>Place Order</Button>
            </div>
            <div className='mt-4 text-right'>
                <HStack>
                {/* <MintButton/>  */}
                <MintTokens recipientAddress={account} contractAddress={dvillacontractId}/>           
          {/*<h6>Your balance: {dvlaBalance} DVLA</h6>*/}
            </HStack>
            </div>
            </HStack>
            <div className="mt-4 text-center">
                <Link href="/foodItems" passHref>
                    <Button variant="success">Back to Food Store</Button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
