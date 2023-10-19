// Carousel.tsx
import React from "react";
import CustomSwiper from "./CustomSwiper";
import { SwiperSlide } from "swiper/react";

const Carousel: React.FC = () => {
  const images = [
    "/images/s1ngoose1.png",
    "/images/screw.jpg",
    "/images/fluent-emoji-flat_check-mark-button.png",
  ];

  return (
    <div className="relative flex justify-center w-full max-w-2xl mx-auto">
      <CustomSwiper slidesPerView={1} spaceBetween={150} loop={true}>
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="mx-[60px]">
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

export default Carousel;
