import { twMerge } from 'tailwind-merge';
import React, { PropsWithChildren } from 'react';

export const Section: React.FC<PropsWithChildren<Props>> = ({ className, ...props }) => (
  <div
    {...props}
    className={twMerge(
      'odd:bg-cyan-50 even:bg-orange-50 even:text-cyan-950 odd:text-orange-950 flex flex-col items-center gap-y-4 px-2 sm:px-8 py-16',
      className
    )}
  />
);
type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
