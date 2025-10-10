'use client';

import React from 'react';
import ReactGA from 'react-ga4';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { messageSchema } from '../api/send-message/Message';
import { messasgeConversion } from './lib/gtagEventTrackers';

export const ContactUsForm = () => {
  const { formState, handleSubmit, register, reset } = useForm({
    defaultValues: { emailAddress: '', message: '', telephoneNumber: '' },
    resolver: zodResolver(messageSchema),
    reValidateMode: 'onBlur',
  });

  const onSubmit = handleSubmit(async (data) => {
    messasgeConversion();
    await fetch('/api/send-message', {
      body: JSON.stringify(data),
      method: 'POST',
    });
    reset();
    toast.success('Email sent successfully!');
  });

  return (
    <form
      className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
      onSubmit={onSubmit}
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number
          </label>
          <input
            {...register('telephoneNumber')}
            type="tel"
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            placeholder="(239) 555-1234"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            {...register('emailAddress')}
            type="email"
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            placeholder="your@email.com"
          />
          <p className="text-red-500 text-sm mt-1 min-h-[20px]">
            {formState.errors.emailAddress?.message || ' '}
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Message <span className="text-orange-500">*</span>
          </label>
          <p className="text-xs text-slate-500 mb-2">
            Please include party size and preferred date(s)
          </p>
          <textarea
            {...register('message')}
            rows={8}
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
            placeholder="I'd like to book a charter for..."
          />
        </div>

        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-400 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
        >
          {formState.isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {/* @ts-expect-error: formState.errors.form is not a valid type, but it is the correct type. */}
        {formState.errors.form && (
          // @ts-expect-error: formState errors are not typed correctly.
          <p className="text-red-500 text-sm text-center">{formState.errors.form.message}</p>
        )}
      </div>
    </form>
  );
};
