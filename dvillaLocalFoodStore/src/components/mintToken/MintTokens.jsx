import { HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Horizon, SorobanRpc, Contract, Address, xdr, ScInt } from 'stellar-sdk';
// import { Server } from "@stellar/stellar-sdk/rpc";
// const s = new Server("<some URL>", { headers: { "X-Custom-Header": "hello" }})


const MintTokens = ({recipientAddress, contractAddress}) => {
    // const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState(50); // Default to 50 tokens
    const [dvlaToken, setDvlaToken] = useState(0);


    const handleMint = async () => {
        try {
            // const horizonServer = new Horizon.Server('https://horizon-testnet.stellar.org');
            const sorobanRpcServer = new SorobanRpc.Server('https://soroban-testnet.stellar.org:443', { allowHttp: true });
            const contract = new Contract(contractAddress);
            const mintResult = contract.call("mint", [
                new Address(recipientAddress).toScVal(),
                xdr.ScVal.scvI128(new ScInt(amount))
            ]);
            console.log('Minting successful:', mintResult);
        } catch (error) {
            console.error('Minting failed:', error);
        }
    };

    const handleBalance = async () => {
        try {
            const sorobanRpcServer = new SorobanRpc.Server('https://soroban-testnet.stellar.org:443', { allowHttp: true });
            const contract = new Contract(contractAddress);

            const balanceResult = contract.call("balance", [
                new Address(recipientAddress).toScVal()
            ]);
            console.log('Balance successful:', balanceResult);
        } catch (error) {
            console.error('Balance failed:', error);
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