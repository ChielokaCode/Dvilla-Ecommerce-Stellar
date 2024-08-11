import { HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Horizon, SorobanRpc, Contract } from 'stellar-sdk';
// import { Server } from "@stellar/stellar-sdk/rpc";
// const s = new Server("<some URL>", { headers: { "X-Custom-Header": "hello" }})


const MintTokens = ({recipientAddress, contractAddress}) => {
    // const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState(50); // Default to 50 tokens
    const [dvlaToken, setDvlaToken] = useState(0);


    const handleMint = async () => {
        try {
            // Setup connection to Stellar network
            // const horizonServer = new Horizon.Server('https://horizon-testnet.stellar.org');
            const sorobanRpcServer = new SorobanRpc.Server('https://soroban-testnet.stellar.org:443', { allowHttp: true });
            

            // Initialize your contract
            const contract = new Contract(contractAddress);

            // Call the mint function
            // const result = await contract.mint({
            //     to: recipientAddress,
            //     amount: amount.toString()
            // });

            const mintResult = await contract.call("mint", [
                new Address(recipientAddress).toScVal(),
                xdr.ScVal.scvI128(new ScInt(amount))
            ]);

            console.log('Minting successful:', result);
            // Handle success (e.g., show a success message)
        } catch (error) {
            console.error('Minting failed:', error);
            // Handle error (e.g., show an error message)
        }
    };

    const handleBalance = async () => {
        try {
            // Setup connection to Stellar network
            const sorobanRpcServer = new SorobanRpc.Server('https://soroban-testnet.stellar.org:443', { allowHttp: true });

            // Initialize your contract
            const contract = new Contract(contractAddress);

            // Call the mint function
            // const result = await contract.balance({
            //     to: recipientAddress
            // });

            const balanceResult = await contract.call("balance", [
                new Address(recipientAddress).toScVal()
            ]);

            setDvlaToken(result);
            console.log('Balance successful:', result);
            // Handle success (e.g., show a success message)
        } catch (error) {
            console.error('Balance failed:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div>
            <HStack>
            <Button variant='success' className='bg-blue-500 rounded-xl' onClick={handleMint}>Mint 50 Tokens</Button>
            <Button className='bg-blue-500 rounded-xl' onClick={handleBalance}>View Tokens</Button>
            <h2 className='font-extrabold'>{dvlaToken} DVLA</h2>
            </HStack>
        </div>
    );
};

export default MintTokens;