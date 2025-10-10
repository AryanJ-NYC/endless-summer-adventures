'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type GalleryWithLightboxProps = {
  images: Array<{ src: string; alt: string }>;
};

export const GalleryWithLightbox = ({ images }: GalleryWithLightboxProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 group cursor-pointer aspect-[4/3]"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              alt={img.alt}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
        }}
      />
    </>
  );
};
