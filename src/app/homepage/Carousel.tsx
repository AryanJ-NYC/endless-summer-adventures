'use client';

import { Carousel as ImportedCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';

export const Carousel = ({ imgUrls }: { imgUrls: string[] }) => {
  return (
    <ImportedCarousel
      autoPlay
      className="flex relative"
      infiniteLoop
      interval={5_000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      {imgUrls.map((imgUrl) => (
        <>
          <img alt="hi" className="h-[66vh] object-cover" key={imgUrl} src={imgUrl} />
          <div className="absolute top-0 bg-black opacity-50 h-full w-full" />
        </>
      ))}
    </ImportedCarousel>
  );
};
