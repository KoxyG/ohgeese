import { connect, disconnect, ConnectedStarknetWindowObject } from "@argent/get-starknet";
import { useState } from "react";

export interface WalletServiceProps {
  isConnected: boolean;
  account: string | null;
  selectedAddress: string;
}

const WalletService = () => {
  const [connection, setConnection] = useState<ConnectedStarknetWindowObject | undefined
>();

  // const [connection, setConnection] = useState<WalletServiceProps | null>(null);
  const [provider, setProvider] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");

  const connectWallet = async () => {
    try {
      const connection = await connect({
        webWalletUrl: "https://web.argent.xyz",
      });
      console.log(connection);
      // to reconnect to a previously connected wallet on load:
      // const connection = await connect({modalMode: "neverAsk", webWalletUrl: "https://web.argent.xyz"})

      if (connection && connection.isConnected) {
        setConnection(connection);
        setProvider(connection.account);
        setAddress(connection.selectedAddress);
      }

     //  make RPC calls here
     
    } catch (error) {
      console.log("Error while connecting to wallet", error);
    }
  };

  //Disconnecting wallet
  const disconnectWallet = async () => {
   await disconnect();
    setConnection(undefined);
    setProvider(null);
    setAddress('');
  }


  return {
    connection,
    setConnection,
    provider,
    address,
    connectWallet,
    disconnectWallet,
  };
};

export default WalletService;