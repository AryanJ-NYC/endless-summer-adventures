import React from 'react';
import { Section } from './Section';

export const PricingSection = () => {
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-sky-50 py-16 md:py-24">
      <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">Charter Pricing</h2>
          <p className="text-xl text-slate-700">
            All-inclusive packages for your perfect fishing adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* 4 Hour Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-2 border-slate-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm">
                Half Day
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2">4 hours</p>
                <p className="text-5xl font-bold text-blue-900">$450</p>
              </div>
              <ul className="text-left space-y-2 text-slate-700 w-full">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Live bait included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> All tackle & gear
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Fishing license
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Fish cleaning
                </li>
              </ul>
            </div>
          </div>

          {/* 6 Hour Package - FEATURED */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl transform md:scale-105 border-4 border-orange-400 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-bold px-6 py-1 rounded-full text-sm whitespace-nowrap">
              Most Popular
            </div>
            <div className="flex flex-col items-center text-center space-y-6 text-white">
              <div className="bg-white/20 font-semibold px-4 py-2 rounded-full text-sm">
                Three Quarter Day
              </div>
              <div>
                <p className="text-orange-100 text-sm mb-2">6 hours</p>
                <p className="text-6xl font-bold">$650</p>
              </div>
              <ul className="text-left space-y-2 w-full">
                <li className="flex items-center gap-2">
                  <span className="text-amber-300">✓</span> Live bait included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-300">✓</span> All tackle & gear
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-300">✓</span> Fishing license
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-300">✓</span> Fish cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-300">✓</span> More fishing time!
                </li>
              </ul>
            </div>
          </div>

          {/* 8 Hour Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-2 border-slate-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm">
                Full Day
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2">8 hours</p>
                <p className="text-5xl font-bold text-blue-900">$800</p>
              </div>
              <ul className="text-left space-y-2 text-slate-700 w-full">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Live bait included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> All tackle & gear
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Fishing license
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Fish cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Maximum adventure!
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="bg-white rounded-xl p-8 max-w-2xl shadow-md border border-slate-200">
          <h3 className="font-bold text-lg text-slate-800 mb-4">What&apos;s Included</h3>
          <div className="space-y-3 text-slate-700">
            <p>
              ✓ All prices include tackle, fishing license, live bait, water, ice, and fish cleaning
            </p>
            <p>
              ✓ Base fare covers <span className="font-semibold text-blue-800">two guests</span>
            </p>
            <p>
              ✓ Additional passengers (3rd & 4th):{' '}
              <span className="font-semibold text-blue-800">$25 each</span>
            </p>
            <p>
              ✓ Children under 7 fish <span className="font-semibold text-blue-800">free</span>
            </p>
            <p>
              ✓ Maximum passenger weight:{' '}
              <span className="font-semibold text-blue-800">750 lbs</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
