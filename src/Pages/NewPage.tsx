import { Oh_Geese } from "../assets/SvgFiles";
import DisconnectWallet from "../Blockchain Service/DisconnectWallet";

const NewPage = () => {
  return (
    <div>
      <DisconnectWallet />
      <div className="relative flex justify-center w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] max-w-2xl mx-auto">
        <div className=" mx-[60px] sm:mx-[0px] mb-[60px]">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(Oh_Geese)}`}
            alt="oh-geese"
          />
        </div>
      </div>
    </div>
  );
};

export default NewPage;
