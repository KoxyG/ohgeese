import WalletService from "../Blockchain Service/WalletService";
import Button from "../Component/Button";
import { useNavigate, } from "react-router-dom";
import { UseOgheeseContext } from "../Store/ogheeseContext";



const ConnectWallet = () => {



  const navigate = useNavigate();

  const {setConnect} = UseOgheeseContext();

  const { connectWallet, connection } = WalletService();




  async function handleNewPage() {
    try {
      await connectWallet();
      setConnect(true);
      navigate("/new");
    } catch (error) {
      console.log("Error connecting:", error);
    }
  }


  
  return (
    <>
      {/* connect wallet */}
      <div className="grid pt-[50px] pb-[100px] justify-center">
        {connection && (
          <Button
            className="px-4 sm:px-6 py-[10px] sm:py-[20px] text-[15px] sm:text-[25px] text-white bg-[#1c4ed8]"
            onClick={handleNewPage}
            type="button"
          >
            {" "}
            connect wallet
          </Button>
        )}  
      </div>
    </>
  );
};
export default ConnectWallet;
