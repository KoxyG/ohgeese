import WalletService from "../Blockchain Service/WalletService";
import Button from "../Component/Button";






const ConnectWallet = () => {
  
  const { connectWallet, connection, Mint} = WalletService();
  

  return (
    <>
      {/* connect wallet */}
      <div className="grid pt-[50px] pb-[100px] justify-center">
       
          {!connection ? (
          <Button
            className="px-4 sm:px-6 py-[10px] sm:py-[20px] text-[15px] sm:text-[25px] text-white bg-[#1c4ed8]"
            onClick={async () => {
             await connectWallet();
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
            onClick={async () => {await Mint();}}
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
