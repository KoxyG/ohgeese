import { OgheeseContextProps, UseOgheeseContext } from "../Store/ogheeseContext";
import {
  connect,
  disconnect,
  ConnectedStarknetWindowObject,
} from "@argent/get-starknet";
import { Contract } from "starknet";
import { useState } from "react";
import Erc20 from "../Abi/erc20.json";
import { ProviderInterface, AccountInterface } from "starknet";
import { ParseInputAmountToUint256 }from "./tokenService"

export const UsdcTokenAddressByNetwork = {
  "goerli-alpha":
    "0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
  "mainnet-alpha":
    "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
};


export interface WalletServiceProps extends OgheeseContextProps {
  isConnected: boolean;
  account: string | null;
  selectedAddress: string;
  provider: ProviderInterface | AccountInterface | undefined ;
  address: string | number | bigint  ;
  connection: string;
  UseconnectWallet: () => Promise<void>;
  UsedisconnectWallet: () => Promise<void>;
  Mint: () => void
  UsecompiledContract: () =>Promise<void>;
  UsewalletAddress: () =>Promise<void>;
  waitForTransaction: () => void;
  useGetBalance: () => void;
  chainId: string;

}



const WalletService = ( ) => {

 
  const wallet = UseOgheeseContext()

  const [connection, setConnection] = useState<
    ConnectedStarknetWindowObject | undefined
  >();
  const [provider, setProvider] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");
  const [chainId, setChainId] = useState<string>("");


 const UseconnectWallet = async () => {
    try {
      const conn = await connect({  webWalletUrl: "https://web.argent.xyz" });
      
      if (conn && conn.isConnected) {
        await conn.enable({ starknetVersion: "v4" });
        setConnection(conn);
        
        console.log(conn)
        wallet.setActive(true);
        setProvider(conn.account);
        console.log("provider here", conn.account)
        setAddress(conn.selectedAddress);
        console.log("active 1 add", conn.selectedAddress)
        wallet.setAddressActive(conn.selectedAddress)
        console.log("conn wallet:",wallet.addressActive )
        setChainId(conn.chainId)
        console.log("chainId here", conn.chainId)
        console.log(conn.chainId)

        let usdcTokenAddress;

    if (chainId === "0x534e5f474f45524c49" || chainId === "SN_GOERLI") {
      console.log("chainId is 1:", chainId);
      usdcTokenAddress = UsdcTokenAddressByNetwork["goerli-alpha"];
      console.log("usdcTokenAddress =", usdcTokenAddress);
    } else if (chainId === "0x534e5f4d41494e" || chainId === "SN_MAIN") {
      console.log("chainId is 2:", chainId);
      usdcTokenAddress = UsdcTokenAddressByNetwork["mainnet-alpha"];
      console.log("usdcTokenAddress =", usdcTokenAddress);
    } else {
      console.log("chainId is 3: ", chainId);
      usdcTokenAddress = UsdcTokenAddressByNetwork["goerli-alpha"];
      console.log("usdcTokenAddress =", usdcTokenAddress);
    }

    console.log("usdcTokenAddress =", usdcTokenAddress);

    const contract = new Contract(
      Erc20,
      usdcTokenAddress,
      conn.provider
    );
    console.log("CONTRACT", contract);
    console.log("active address", conn.selectedAddress);
  
    const balance = await contract.balanceOf(conn.selectedAddress);
    console.log("Initial balance =", balance);
    
    console.log("Initial balance =", ParseInputAmountToUint256(balance));

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
  const UsedisconnectWallet = async () => {
    try {
      await disconnect();
      setConnection(undefined);
      setProvider(null);
      setAddress("");
      wallet.setActive(false);
    } catch (error) {
      console.error("Error while disconnecting wallet", error);
      alert(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  const waitForTransaction = async (hash: string) => {
    if (!connection?.isConnected) {
      return
    }
    return connection.provider.waitForTransaction(hash)
  }

  const UsewalletAddress = async (): Promise<string | undefined> => {
    if (!connection?.isConnected) {
      return
    }
    console.log(connection.selectedAddress)
    return connection.selectedAddress
  }

  const UsecompiledContract = async (address: string) => {
    if (!connection?.isConnected || !connection.provider) {
      return null; // or handle accordingly
    }
    return connection.provider.getClassAt(address);
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
    UseconnectWallet,
    UsedisconnectWallet,
    chainId,
    waitForTransaction,
    Mint,
    UsecompiledContract,
    UsewalletAddress
  };
};

export default WalletService;


