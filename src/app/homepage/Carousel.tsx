'use client';

import React, { Fragment } from 'react';
import { Carousel as ImportedCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
        <Fragment key={imgUrl}>
          <img alt="hi" className="h-[66vh] object-cover" src={imgUrl} />
          <div className="absolute top-0 bg-black opacity-60 h-full w-full" />
        </Fragment>
      ))}
    </ImportedCarousel>
  );
};
