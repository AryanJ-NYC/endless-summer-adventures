import React from 'react';
import { Section } from './Section';

export const PricingSection = () => {
  return (
    <Section className="space-y-12">
      <p className="max-w-2xl font-medium text-3xl text-center tracking-wide uppercase">Pricing</p>
      <div className="flex flex-col gap-y-6 md:flex-row md:justify-between items-center w-full max-w-5xl">
        <Card>
          <p className="border border-cyan-700 font-medium rounded-full text-sm text-center text-cyan-700">
            4 hours
          </p>
          <div className="text-center">
            <p>🐟 Live bait 🐟</p>
            <p className="text-2xl">$450</p>
          </div>
          <div className="text-center">
            <p className="text-xs">Artifical bait</p>
            <p className="text-xl">$400</p>
          </div>
        </Card>
        <Card>
          <p className="border border-cyan-700 font-medium rounded-full text-sm text-center text-cyan-700">
            6 hours
          </p>
          <div className="text-center">
            <p>🐟 Live bait 🐟</p>
            <p className="text-2xl">$625</p>
          </div>
          <div className="text-center">
            <p className="text-xs">Artifical bait</p>
            <p className="text-xl">$550</p>
          </div>
        </Card>
        <Card>
          <p className="border border-cyan-700 font-medium rounded-full text-sm text-center text-cyan-700">
            8 hours
          </p>
          <div className="text-center">
            <p>🐟 Live bait 🐟</p>
            <p className="text-2xl">$750</p>
          </div>
          <div className="text-center">
            <p className="text-xs">Artifical bait</p>
            <p className="text-xl">$650</p>
          </div>
        </Card>
      </div>
      <p className="max-w-sm">
        All tackle, licensing, bait, bottled water, ice, and fish cleaning included in the price.
      </p>
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
