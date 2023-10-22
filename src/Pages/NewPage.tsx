import { Oh_Geese } from "../assets/SvgFiles";
import DisconnectWallet from "../Blockchain Service/DisconnectWallet";


const NewPage = () => {
  return (
    <div className="mx-[60px] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px]">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(Oh_Geese)}`}
        alt="oh-geese"
      />

      <DisconnectWallet />
    </div>
  );
};

export default NewPage;
