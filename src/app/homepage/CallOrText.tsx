'use client';

import React from 'react';
import { phoneConversion } from './lib/gtagEventTrackers';

export const CallOrText = () => {
  return (
    <a href="tel:+12397844935" onClick={phoneConversion}>
      <p className="text-cyan-600 text-xs text-center">Call or Text</p>
      <p className="text-cyan-950">(239) 784-4​935</p>
    </a>
  );
};
