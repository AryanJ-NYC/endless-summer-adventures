import { twMerge } from 'tailwind-merge';
import React from 'react';

export const Section = ({ className, ...props }: Props) => (
  <div
    {...props}
    className={twMerge('flex flex-col items-center gap-y-4 px-2 sm:px-8 py-16', className)}
  />
);
type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
