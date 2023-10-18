import Button from "../Component/Button";
import Carousel from "../Component/Carousel";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [next, setNext] = useState<boolean>(false);

  const handleNext = () => {
    setNext(next);
  };
  return (
    <div className="container mx-auto">
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="text-center "
        >
          <h1 className="font-black text-4xl sm:text-6xl  pt-[50px]">
            Build Something Amazing
          </h1>
          <p className="text-gray text-[12px] sm:text-[22px] pt-[10px]">
            Must today firm from bag. Investment try cold a when <br /> capital.
            Everything wait person service.
          </p>
        </motion.div>

        {/* carousel image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            y: { duration: 1 },
          }}
        >
          <Carousel />
        </motion.div>

        <div className="grid pb-[100px] justify-center">
          <Button
            className="px-4 sm:px-6 py-[10px] sm:py-[20px] text-[15px] sm:text-[25px] text-white bg-[#1c4ed8]"
            onClick={handleNext}
            type="button"
          >
            {" "}
            connect wallet
          </Button>
        </div>
      </section>


      <section>
        
      </section>
    </div>
  );
};

export default Home;
