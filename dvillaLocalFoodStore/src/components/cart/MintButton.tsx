import { dvilla } from "shared/contracts";
import { Button } from "./Button";
import toast from "react-hot-toast";
import { useAccount } from "../hooks/useAccount";


/**
 * Mint 100.0000000 tokens to the user's wallet for testing
 */
export function MintButton() {
  const account = useAccount()
  
    const displayAmount = 50
    const amount = BigInt(displayAmount * 10 ** 6)
  
    return (
      <Button
        styles="bg-blue-500 rounded-xl"
        title={`Mint ${displayAmount} DVLA`}
        onClick={async () => {
          await dvilla.mint({ to: account?.address, amount })
          toast.success("Mint 50 DVLA Successful")
        }}
       />
    )
  }

  //  onClick: () => void