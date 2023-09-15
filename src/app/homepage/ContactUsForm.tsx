'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

export const ContactUsForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: { emailAddress: '', message: '', telephoneNumber: '' },
  });

  const onSubmit = handleSubmit(async (data) => {
    await fetch('/api/send-message', {
      body: JSON.stringify(data),
      method: 'POST',
    });
  });

  return (
    <form className="flex flex-col max-w-lg gap-y-4" onSubmit={onSubmit}>
      <label className="flex flex-col gap-y-1 self-start w-full">
        Phone Number
        <input className="py-1 px-2" {...register('telephoneNumber')} type="tel" />
      </label>
      <label className="flex flex-col gap-y-1 self-start w-full">
        Email Address
        <input className="py-1 px-2" {...register('emailAddress')} type="email" />
      </label>
      <label className="flex flex-col gap-y-1">
        <p>Message</p>
        <textarea
          className="box-border p-4 resize-none w-full"
          {...register('message')}
          rows={12}
          cols={69}
        />
      </label>
      <button className="bg-cyan-200 px-6 py-2 rounded-sm text-cyan-900" type="submit">
        Send Message
      </button>
    </form>
  );
};
