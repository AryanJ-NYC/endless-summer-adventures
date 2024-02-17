import React from 'react';
import { Section } from './Section';

export const PricingSection = () => {
  return (
    <Section className="space-y-12">
      <div>
        <p className="max-w-2xl font-medium text-3xl text-blue-900 text-center tracking-wider uppercase">
          Pricing
        </p>
      </div>
      <div className="flex flex-col gap-y-6 md:flex-row md:justify-between items-center w-full max-w-5xl">
        <Card>
          <p className="border border-cyan-700 font-medium rounded-full text-sm text-center text-cyan-700">
            4 hours
          </p>
          <div className="text-center">
            <p>🐟 Live bait 🐟</p>
            <p className="text-2xl">$450</p>
          </div>
        </Card>
        <Card>
          <p className="border border-cyan-700 font-medium rounded-full text-sm text-center text-cyan-700">
            6 hours
          </p>
          <div className="text-center">
            <p>🐟 Live bait 🐟</p>
            <p className="text-2xl">$650</p>
          </div>
        </Card>
        <Card>
          <p className="border border-cyan-700 font-medium rounded-full text-sm text-center text-cyan-700">
            8 hours
          </p>
          <div className="text-center">
            <p>🐟 Live bait 🐟</p>
            <p className="text-2xl">$800</p>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-y-2 max-w-sm text-blue-900 tracking-wide">
        <p>Our prices cover everything: tackle, license, bait, water, ice, and fish cleaning.</p>
        <p>
          The base fare includes <span className="font-semibold">two guests</span>. For the 3rd and
          4th passengers, a nominal fee of <span className="font-semibold">$25 each</span> applies,
          while children under 7 join for free. Please note the total weight limit for passengers is{' '}
          <span className="font-semibold">750 pounds</span>.
        </p>
      </div>
    </Section>
  );
};

const Card: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <div
      {...props}
      className="bg-white flex flex-col gap-y-8 py-8 px-24 rounded-lg shadow-xl shadow-cyan-200 text-gray-800"
    />
  );
};
