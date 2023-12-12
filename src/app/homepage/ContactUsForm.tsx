'use client';

import React from 'react';
import ReactGA from 'react-ga4';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { messageSchema } from '../api/send-message/Message';

export const ContactUsForm = () => {
  const { formState, handleSubmit, register, reset } = useForm({
    defaultValues: { emailAddress: '', message: '', telephoneNumber: '' },
    resolver: zodResolver(messageSchema),
    reValidateMode: 'onBlur',
  });

  const onSubmit = handleSubmit(async (data) => {
    ReactGA.event({
      action: 'submit',
      category: 'Contact Us',
      label: 'Contact Us Form',
    });
    await fetch('/api/send-message', {
      body: JSON.stringify(data),
      method: 'POST',
    });
    reset();
    toast.success('Email sent successfully!');
  });

  return (
    <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
      <label className="flex flex-col gap-y-1 self-start w-full">
        Phone Number
        <input className="py-1 px-2" {...register('telephoneNumber')} type="tel" />
      </label>
      <label className="flex flex-col gap-y-1 self-start w-full">
        Email Address
        <input className="py-1 px-2" {...register('emailAddress')} type="email" />
        <p className="text-red-500 text-xs">{formState.errors.emailAddress?.message || ' '}</p>
      </label>
      <label className="flex flex-col gap-y-1">
        <div>
          <p>Message</p>
          <p className="text-xs">
            Please include the size of your party and the date(s) you are interested in fishing.
          </p>
        </div>
        <textarea
          className="box-border p-4 resize-none w-full"
          {...register('message')}
          rows={12}
          cols={69}
        />
      </label>
      <div className="flex flex-col gap-y-1">
        <button
          className="bg-cyan-200 flex justify-center py-2 rounded-sm text-cyan-900"
          disabled={formState.isSubmitting}
          type="submit"
        >
          {formState.isSubmitting ? (
            <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
          ) : (
            'Send Message'
          )}
        </button>
        {/* @ts-expect-error: formState.errors.form is not a valid type, but it is the correct type. */}
        {formState.errors.form && (
          // @ts-expect-error: formState errors are not typed correctly.
          <p className="text-red-500 text-sm">{formState.errors.form.message}</p>
        )}
      </div>
    </form>
  );
};
