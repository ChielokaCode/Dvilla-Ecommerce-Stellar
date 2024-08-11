import {
    Contract,
    SorobanRpc,
    TransactionBuilder,
    Networks,
    BASE_FEE,
    nativeToScVal,
    Address,
    ScAddress,
    xdr,
    Account,
  Keypair,
  Operation,
  scValToNative,
  } from "@stellar/stellar-sdk";
  import {
    isConnected,
    signTransaction,
    getPublicKey,
    setAllowed,
  } from "@stellar/freighter-api";
  
  const rpcUrl = "https://soroban-testnet.stellar.org";
  const provider = new SorobanRpc.Server(rpcUrl, { allowHttp: true });


  const params = {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  };
  
  // Utility functions (unchanged)
  const accountToScVal = (account) => Address.fromString(account).toScAddress;
  const stringToScValString = (value) => nativeToScVal(value, { type: "string" });
  const numberToU64 = (value) => nativeToScVal(value, { type: "u64" });
  const numberToi128 = (value) => nativeToScVal(value, { type: "i128" });
  const contract = (contractId) => new Contract(contractId);
  const accountPub = (publicKey) => provider.getAccount(publicKey);
  
  // Freighter-specific functions
  const userSignTransaction = async (xdr, network, signWith) => {
    try {
      const signedTransaction = await signTransaction(xdr, {
        network,
        accountToSign: signWith,
      });
      return signedTransaction;
    } catch (error) {
      console.error("Error signing transaction:", error);
      throw error;
    }
  };
  
  const getUserPublicKey = async () => {
    try {
      await isConnected();
      const publicKey = await setAllowed();
      console.log("User public key" + publicKey)
      return publicKey;
    } catch (error) {
      console.error("Error getting user's public key:", error);
      throw error;
    }
  };
  
  // Renamed main functions
  async function prepareSmartContractCall(contractAddress, functionName, args) {
    const contract = new Contract(contractAddress);
    const publicKey = await getPublicKey();
    const sourceAccount = await provider.getAccount(publicKey);
  
    const scValArgs = Array.isArray(args) ? args : [args];
  
    const buildTx = new TransactionBuilder(sourceAccount, params)
      .addOperation(contract.call(functionName, ...scValArgs))
      .setTimeout(30)
      .build();
  
    return await provider.prepareTransaction(buildTx);
  }
  
  async function signAndSubmitTransaction(preparedTx) {
    try {
      const signedTx = await userSignTransaction(
        preparedTx.toXDR(),
        params.networkPassphrase,
        await getUserPublicKey()
      );
      return await provider.sendTransaction(signedTx);
    } catch (error) {
      console.error("Error signing or sending transaction:", error);
      throw error;
    }
  }
  
  // Main function to execute smart contract function
  // async function executeSmartContractFunction(contractAddress, functionName, args) {
  //   try {
  //     const preparedTx = await prepareSmartContractCall(contractAddress, functionName, args);
  //     const result = await signAndSubmitTransaction(preparedTx);
  //     console.log("Transaction result:", result);
  //     return result;
  //   } catch (error) {
  //     console.error("Error executing smart contract function:", error);
  //     throw error;
  //   }
  // }

  async function executeSmartContractFunction(contractAddress, functionName, args) {
    try {
      console.log(`Preparing call to ${functionName} with args:`, args);
      const preparedTx = await prepareSmartContractCall(contractAddress, functionName, args);
      console.log("Transaction prepared successfully");
      
      console.log("Signing and submitting transaction...");
      const result = await signAndSubmitTransaction(preparedTx);
      console.log("Transaction result:", result);
      return result;
    } catch (error) {
      console.error(`Error in executeSmartContractFunction for ${functionName}:`, error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
      throw error;
    }
  }
  
  // Export the main function for use in components
  export { executeSmartContractFunction, contract, numberToU64, accountToScVal, numberToi128, stringToScValString, accountPub };