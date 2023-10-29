import WalletService, {  } from "./WalletService";
import Button from "../Component/Button";
// import { GetBalance } from "./tokenService";




const ConnectWallet = () => {

  const walletService = WalletService()



  return (
    <>
      {/* connect wallet */}
      <div className="grid pt-[50px] pb-[100px] justify-center">
       
          {!walletService.connection ? (
            <Button
            className="px-4 sm:px-6 py-[10px] sm:py-[20px] text-[15px] sm:text-[25px] text-white bg-[#1c4ed8]"
            onClick={async () => {
              try {
                await walletService.UseconnectWallet()
                // await GetBalance();
              } catch (error) {
                console.error("An error occurred:", error);
                // You can handle the error here, such as displaying a user-friendly message
              }
            }}
            type="button"
          >
            {" "}
            connect wallet
          </Button>
          
           ) : (
            <>
            <Button
            className="px-4 sm:px-6 py-[10px] sm:py-[20px] text-[15px] sm:text-[25px] text-white bg-[#1c4ed8]"
            onClick={async () => {await walletService.Mint();}}
            type="button"
          >
            {" "}
            Mint
          </Button>
          </>
          )}  
      </div>
    </>
  );
};
export default ConnectWallet;
