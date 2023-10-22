import WalletService from "../Blockchain Service/WalletService";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { UseOgheeseContext } from "../Store/ogheeseContext";


const DisconnectWallet = () => {

  const { disconnectWallet } = WalletService();

  const { setConnect } = UseOgheeseContext();

  const navigate = useNavigate();



  async function handleHome() {
    try {
      await disconnectWallet();
      setConnect(false);
      navigate("/");
    } catch (error) {
      console.log("Error connecting:", error);
    }
  }



  return (
    <div className="grid justify-center pt-[40px]">
      <Button
        className="px-4 sm:px-6 py-[10px] sm:py-[20px] text-[15px] sm:text-[25px] text-white bg-[#1c4ed8]"
        onClick={handleHome}
        type="button"
      >
        {" "}
        Disconnect
      </Button>
    </div>
  );
};
export default DisconnectWallet;
