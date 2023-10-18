// src/App.tsx
import React from 'react';
import ImageCarousel from './CarouselProps';

const Carousel: React.FC = () => {
  const images = [
    '/images/s1ngoose1.png',
    '/images/screw.jpg',
    '/images/fluent-emoji-flat_check-mark-button.png',
  ];

  return (
    <div className="my-[50px]">
      <ImageCarousel images={images} />
    </div>
  );
};

export default Carousel;
