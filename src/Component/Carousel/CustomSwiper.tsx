import React, { useRef, useEffect } from "react";
import SwiperCore, { Swiper } from "swiper";
import { Swiper as SwiperReact } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Scrollbar } from 'swiper/modules';
// import { BasicIcons } from "../../assets/SvgFiles";

SwiperCore.use([]);

type CustomSwiperProps = {
  slidesPerView?: number;
  spaceBetween?: number;
  slidesPerGroup?: number;
  loop?: boolean;
  children: React.ReactNode;
};

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  slidesPerView = 3,
  spaceBetween = 100,
  loop = false,
  children,
}) => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
     const interval = setInterval(() => {
       if (swiperRef.current) {
         swiperRef.current.slideNext();
       }
     }, 5000); // Adjust the interval as needed (in milliseconds)
 
     return () => {
       clearInterval(interval);
     };
   }, []);

  return (
    <>
      {/* <button
        className="btn-prev absolute top-1/2 text-dark -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 z-20  left-0 p-2 hover:cursor-pointer"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        {BasicIcons.prev}
      </button>
      <button
        className="btn-next absolute top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 z-20 right-0 p-2 hover:cursor-pointer"
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        {BasicIcons.next}
      </button> */}

      <SwiperReact
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1280: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {children}
      </SwiperReact>
    </>
  );
};

export default CustomSwiper;
