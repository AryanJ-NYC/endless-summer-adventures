'use client';

import React from 'react';
import { Carousel as ImportedCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carousel = (props: Partial<React.ComponentProps<typeof ImportedCarousel>>) => {
  return (
    <ImportedCarousel
      autoPlay
      infiniteLoop
      {...props}
      interval={props.interval ?? 5_000}
      showArrows={props.showArrows ?? false}
      showIndicators={props.showIndicators ?? false}
      showStatus={props.showStatus ?? false}
      showThumbs={props.showThumbs ?? false}
    />
  );
};
