'use client';

import { PortableText } from '@portabletext/react';
import { type Boat } from '../../../sanity/lib/queries';
import { urlForImage } from '../../../sanity/lib/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type BoatCardProps = {
  boat: Boat;
  featured?: boolean;
};

export const BoatCard = ({ boat, featured = false }: BoatCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const boatImages = boat.images.map((img) => ({
    src: urlForImage(img).width(1200).quality(90).url(),
    alt: boat.name,
  }));

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Boat Info */}
          <div className="p-8 lg:p-12 space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">{boat.name}</h3>

              {/* Boat Images Grid */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {boatImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer aspect-[4/3]"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
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
            </div>

            {/* Rich Text Description */}
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <PortableText
                value={boat.description}
                components={{
                  block: {
                    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-blue-900 mt-6 mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-blue-800 mt-6 mb-3">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">{children}</h3>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-semibold text-slate-900">{children}</strong>
                    ),
                  },
                }}
              />
            </div>

            {/* Features */}
            {boat.features && boat.features.length > 0 && (
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Features:</h4>
                <ul className="space-y-2">
                  {boat.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="text-orange-500 text-xl flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Capacity Info */}
            {boat.capacity_info && (
              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <h4 className="text-xl font-bold text-slate-800 mb-3">Capacity:</h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {boat.capacity_info}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {boat.max_passengers && (
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <p className="text-xs text-slate-600">Max Passengers</p>
                      <p className="text-lg font-bold text-blue-800">{boat.max_passengers}</p>
                    </div>
                  )}
                  {boat.max_weight && (
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <p className="text-xs text-slate-600">Max Weight</p>
                      <p className="text-lg font-bold text-blue-800">{boat.max_weight} lbs</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Pricing */}
          <div className="bg-gradient-to-b from-slate-50 to-white p-8 lg:p-12">
            <div className="sticky top-8 space-y-6">
              <h4 className="text-3xl font-bold text-blue-900 mb-6">Rates</h4>

              <div className="space-y-4">
                {/* Half Day */}
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-xs inline-block mb-2">
                        Half Day
                      </div>
                      <p className="text-sm text-slate-600">{boat.rates.half_day_hours} hours</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-blue-900">
                        ${boat.rates.half_day.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Three Quarter Day - Featured */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 shadow-xl border-4 border-orange-400 relative transform scale-105">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-bold px-4 py-1 rounded-full text-xs whitespace-nowrap">
                    Most Popular
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <div>
                      <div className="bg-white/20 font-semibold px-3 py-1 rounded-full text-xs inline-block mb-2">
                        Three Quarter Day
                      </div>
                      <p className="text-sm text-orange-100">
                        {boat.rates.three_quarter_day_hours} hours
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-5xl font-bold">
                        ${boat.rates.three_quarter_day.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Full Day */}
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-xs inline-block mb-2">
                        Full Day
                      </div>
                      <p className="text-sm text-slate-600">{boat.rates.full_day_hours} hours</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-blue-900">
                        ${boat.rates.full_day.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-900 rounded-xl p-6 text-white shadow-lg">
                <div className="space-y-3 text-sm">
                  <p className="flex justify-between">
                    <span>Base rate includes:</span>
                    <span className="font-semibold">{boat.base_passenger_count} passengers</span>
                  </p>
                  <p className="flex justify-between border-t border-blue-700 pt-3">
                    <span>Additional passenger:</span>
                    <span className="font-semibold">
                      ${boat.additional_passenger_rate.toLocaleString()} each
                    </span>
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact-us"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Book This Vessel
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for boat images */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={boatImages}
        on={{
          view: ({ index: currentIndex }) => setLightboxIndex(currentIndex),
        }}
      />
    </>
  );
};
