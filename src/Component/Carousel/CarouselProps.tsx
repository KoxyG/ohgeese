import React, { useState, useEffect} from "react";
import { motion, Transition} from "framer-motion";
import { BasicIcons } from "../../assets/SvgFiles";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  // Auto-play slides using useEffect
  useEffect(() => {
     const intervalId = setInterval(handleNext, 3000); // Change 3000 to the desired interval in milliseconds
     return () => clearInterval(intervalId); // Cleanup on component unmount
   }, [currentIndex]);

  
  
  const easeInOut: Transition = { type: "easeInOut" };


  return (
    <div className="relative flex  justify-center w-full max-w-2xl mx-auto">
      <button
        className="absolute top-1/2 transform -translate-y-1/2 ml-[20px] sm:ml-[0px] left-0"
        onClick={handlePrev}
      >
        {BasicIcons.prev}
      </button>

      <div>
      
          <motion.img
            key={currentIndex}
            className="w-[300px] frameImg sm:h-[300px]  sm:w-[500px] sm:h-[500px]"
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{
               opacity: 1,
               x: 1,
               transition: {
                 type: "spring",
                 duration: 1,
                 stiffness: 50 ,
                 restSpeed: 0.5,
                 ease: easeInOut, // Use the easing function here
               },
          overflow: "show",
          }}

          />
     
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 mr-[20px] sm:mr-[0px] right-0"
        onClick={handleNext}
      >
        {BasicIcons.next}
      </button>
    </div>
  );
};

export default ImageCarousel;
