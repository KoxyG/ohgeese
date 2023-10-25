import {
  connect,
  disconnect,
  ConnectedStarknetWindowObject,
} from "@argent/get-starknet";
import { useState } from "react";
import { UseOgheeseContext } from "../Store/ogheeseContext";



export interface WalletServiceProps {
  isConnected: boolean;
  account: string | null;
  selectedAddress: string;
}

// ... (previous imports and code)

const WalletService = () => {

  const {setActive} = UseOgheeseContext();

  const [connection, setConnection] = useState<
    ConnectedStarknetWindowObject | undefined
  >();
  const [provider, setProvider] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");
  const [chainId, setChainId] = useState<string>("");


 const connectWallet = async () => {
    try {
      const conn = await connect({  webWalletUrl: "https://web.argent.xyz" });

      if (conn && conn.isConnected) {
        await conn.enable({ starknetVersion: "v4" });
        setConnection(conn);
        setActive(true);
        setProvider(conn.account);
        setAddress(conn.selectedAddress);
        setChainId(conn.chainId)
      } else {
        throw new Error("User rejected wallet selection or silent connect found nothing");
      }

      //  make RPC calls here
     
    } catch (error) {
      console.error("Error while connecting to wallet", error);
      alert(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };



  // Disconnecting wallet
  const disconnectWallet = async () => {
    try {
      await disconnect();
      setConnection(undefined);
      setProvider(null);
      setAddress("");
      setActive(false);
    } catch (error) {
      console.error("Error while disconnecting wallet", error);
      alert(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };



  const Mint = async () => {
    try {
      console.log("Minting");
    } catch (error) {
      console.error("Error while disconnecting wallet", error);
      alert(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };
  

  

  

  return {
    connection,
    setConnection,
    provider,
    address,
    connectWallet,
    disconnectWallet,
    chainId,
    Mint,
  };
};

export default WalletService;


