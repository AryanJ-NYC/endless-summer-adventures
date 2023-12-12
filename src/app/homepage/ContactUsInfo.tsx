'use client';

import React from 'react';
import ReactGA from 'react-ga4';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export const ContactUsInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 xl:grid-cols-2 gap-x-24 self-start">
      <a
        className="flex flex-col gap-y-0.5"
        href="mailto:nick@endless-summer-adventures.com"
        onClick={() => ReactGA.event({ action: 'email click', category: 'Contact Us' })}
      >
        <span className="text-orange-800 text-3xl">
          <AiOutlineMail />
        </span>
        <p className="font-bold">Email</p>
        <p className="text-sm underline underline-offset-2">nick@endless-summer-adventures.com</p>
      </a>
      <a
        className="flex flex-col gap-y-0.5"
        href="tel:+12397844935"
        onClick={() => ReactGA.event({ action: 'telephone click', category: 'Contact Us' })}
      >
        <span className="text-orange-800 text-3xl">
          <AiOutlinePhone />
        </span>
        <p className="font-bold">Phone</p>
        <p className="text-sm underline underline-offset-2">(239) 784&ndash;4935</p>
      </a>
    </div>
  );
};
