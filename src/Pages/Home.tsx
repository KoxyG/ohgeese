import Carousel from "../Component/Carousel";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container mx-auto">
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
        <h1 className="font-black text-4xl sm:text-6xl  pt-[100px]">
          Build Something Amazing
        </h1>
        <p className="text-gray-500 text-[12px] sm:text-[22px] pt-[10px]">
          Must today firm from bag. Investment try cold a when <br /> capital.
          Everything wait person service.
        </p>
      </motion.div>

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
    </div>
  );
};

export default Home;
