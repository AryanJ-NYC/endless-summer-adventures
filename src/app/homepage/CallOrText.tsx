'use client';

import React from 'react';
import ReactGA from 'react-ga4';

export const CallOrText = () => {
  return (
    <a
      href="tel:2397844935"
      onClick={() => ReactGA.event({ action: 'telephone click', category: 'Contact Us' })}
    >
      <p className="text-cyan-600 text-xs text-center">Call or Text</p>
      <p className="text-cyan-950">(239) 784-4​935</p>
    </a>
  );
};
