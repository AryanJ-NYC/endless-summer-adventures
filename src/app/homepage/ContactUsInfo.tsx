'use client';

import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { emailConversion, phoneConversion } from './lib/gtagEventTrackers';

export const ContactUsInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-6">
          <a
            href="tel:+12397844935"
            onClick={phoneConversion}
            className="flex items-start gap-4 hover:translate-x-1 transition-transform"
          >
            <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
              <AiOutlinePhone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Phone</p>
              <p className="text-lg font-semibold">(239) 784-4935</p>
            </div>
          </a>

          <a
            href="mailto:nick@endless-summer-adventures.com"
            onClick={emailConversion}
            className="flex items-start gap-4 hover:translate-x-1 transition-transform"
          >
            <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
              <AiOutlineMail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Email</p>
              <p className="text-sm font-semibold break-all">
                nick@endless-summer-adventures.com
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-200">
        <h4 className="font-bold text-slate-800 mb-3">Response Time</h4>
        <p className="text-slate-700">
          We typically respond within{' '}
          <span className="font-semibold text-orange-600">24 hours</span>. For same-day bookings,
          please call directly.
        </p>
      </div>
    </div>
  );
};
