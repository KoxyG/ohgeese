import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { BasicIcons } from "../../assets/SvgFiles";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const controls = useAnimation();

  const variants = {
    enter: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  const transition = { duration: 1, ease: 'easeInOut' };



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
            variants={variants}
            initial="enter"
            exit="exit"
            transition={transition}
            animate={controls}
            
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
