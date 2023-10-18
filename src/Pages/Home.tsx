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
    <div className="">
      <section className="container mx-auto">
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
          <p className="text-[12px] sm:text-[22px] pt-[10px]">
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

        {/* connect wallet */}
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

      {/* frequently asked queestion */}
      <section className=" bg-[#f9fafb]">
        <div className="py-[100px]  text-center ">
          <h1 className="font-black text-3xl sm:text-5xl  pt-[50px]">
            Frequently Asked Questions
          </h1>
          <p className="text-dark text-[12px] sm:text-[22px] pt-[10px]">
            Cupiditate reprehenderit dignissimos maxime distinctio <br /> quia
            iste. Eum aliquam nulla voluptatum iure.
          </p>
        </div>

        <div className="container pt-[50px] pb-[100px]  text-center text-black mx-auto px-8 grid justify-center py-[100px] gap-4 ">
          
          <div className="grid text-center  pb-[60px]">
            <h3 className="font-bold text-xl sm:text-2xl ">
              Move weight here just either attorney?
            </h3>
            <p  className="text-[8px] sm:text-[16px] pt-[10px]">
              Officier journal personnage maintenant. Métier arracher cou
              secours voler air.<br  /> Maintenant parole prévenir creuser froid
              distinguer affaire rocher.
            </p>
          </div>

          <div className="grid pb-[60px]">
            <h3 className="font-bold text-xl sm:text-2xl ">
              Move weight here just either attorney?
            </h3>
            <p  className="text-[8px] sm:text-[16px] pt-[10px]">
              Officier journal personnage maintenant. Métier arracher cou
              secours voler air.<br  /> Maintenant parole prévenir creuser froid
              distinguer affaire rocher.
            </p>
          </div>

          <div className="grid pb-[60px] ">
            <h3 className="font-bold text-xl sm:text-2xl ">
              Move weight here just either attorney?
            </h3>
            <p  className="text-[8px] sm:text-[16px] pt-[10px]">
              Officier journal personnage maintenant. Métier arracher cou
              secours voler air.<br  /> Maintenant parole prévenir creuser froid
              distinguer affaire rocher.
            </p>
          </div>

          <div className="grid">
            <h3 className="font-bold text-xl sm:text-2xl ">
              Move weight here just either attorney?
            </h3>
            <p  className="text-[8px] sm:text-[16px] pt-[10px]">
              Officier journal personnage maintenant. Métier arracher cou
              secours voler air.<br  /> Maintenant parole prévenir creuser froid
              distinguer affaire rocher.
            </p>
          </div>


        </div>
      </section>
      <hr />

      <section>
          <footer className="flex justify-between container mx-auto px-8  py-[30px]">
          <p className="mb-6 md:mb-0">
            © {new Date().getFullYear()} ohgeese
          </p>
          <p className="">Documentation</p>
          </footer>
      </section>
    </div>
  );
};

export default Home;
