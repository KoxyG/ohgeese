// src/App.tsx
import React from 'react';
import ImageCarousel from './CarouselProps';

const Carousel: React.FC = () => {
  const images = [
    '/images/s1ngoose1.png',
    '/images/s1ngoose1.png',
    '/images/s1ngoose1.png',
  ];

  return (
    <div className="my-[50px]">
      <ImageCarousel images={images} />
    </div>
  );
};

export default Carousel;
