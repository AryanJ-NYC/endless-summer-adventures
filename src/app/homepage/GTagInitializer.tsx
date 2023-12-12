'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const GTagInitializer = () => {
  useEffect(() => ReactGA.initialize('AW-11433729910'));
  return null;
};
