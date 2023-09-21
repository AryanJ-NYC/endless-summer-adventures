import z from 'zod';

export const messageSchema = z
  .object({
    emailAddress: z.union([z.string().email().nullish(), z.literal('')]),
    message: z.string(),
    telephoneNumber: z.string().nullish(),
  })
  .refine((input) => input.emailAddress || input.telephoneNumber, {
    message: 'Either an email address or a telephone number is required.',
    path: ['form'],
  });

export type Message = z.infer<typeof messageSchema>;
