import { WalletServiceProps } from "./WalletService";
import { Contract } from "starknet";
import { UseOgheeseContext } from "../Store/ogheeseContext";
// import fs from 'fs'
import { utils } from "ethers"
import { num,  uint256 } from "starknet"


function getUint256CalldataFromBN(bn: num.BigNumberish) {
  return { type: "struct" as const, ...uint256.bnToUint256(bn) }
}

export function ParseInputAmountToUint256(
  input: string,
  decimals: number = 18,
) {
  return getUint256CalldataFromBN(utils.parseUnits(input, decimals).toString())
}


export const UsdcTokenAddressByNetwork = {
  "goerli-alpha":
    "0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
  "mainnet-alpha":
    "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
};

const getAbi = [
  {
    inputs: [
      {
        name: "account",
        type: "felt",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const GetBalance = async (walletService: WalletServiceProps) => {
  const Context = UseOgheeseContext()
  try {
    const ChainId = await walletService.chainId;

    // const compiledContract = walletService.compiledContract;
    let usdcTokenAddress;

    if (ChainId === "0x534e5f474f45524c49" || ChainId === "SN_GOERLI") {
      console.log("chainId is 1:", ChainId);
      usdcTokenAddress = UsdcTokenAddressByNetwork["goerli-alpha"];
      console.log("usdcTokenAddress =", usdcTokenAddress);
    } else if (ChainId === "0x534e5f4d41494e" || ChainId === "SN_MAIN") {
      console.log("chainId is 2:", ChainId);
      usdcTokenAddress = UsdcTokenAddressByNetwork["mainnet-alpha"];
      console.log("usdcTokenAddress =", usdcTokenAddress);
    } else {
      console.log("chainId is 3: ", ChainId);
      usdcTokenAddress = UsdcTokenAddressByNetwork["goerli-alpha"];
      console.log("usdcTokenAddress =", usdcTokenAddress);
    }

    console.log("usdcTokenAddress =", usdcTokenAddress);

    const contract = new Contract(
      getAbi,
      usdcTokenAddress,
      walletService.provider
    );
    console.log("CONTRACT", contract);
    console.log("active address", Context.addressActive);
    console.log("wallet address", walletService.address);
    console.log("wallet provider",walletService.provider);
    console.log("wallet chainId", ChainId);

    const balance = await contract.balanceOf(walletService.address);

    console.log("Initial balance =", balance.res.toString());

    return balance;
  } catch (error) {
    console.error("Error in GetBalance:", error);
  }



};
