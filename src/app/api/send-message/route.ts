import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { messageSchema } from './Message';

export async function POST(request: NextRequest) {
  const transporter = nodemailer.createTransport({
    auth: { pass: process.env.SENDGRID_API_KEY, user: 'apikey' },
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
  });

  const body = await request.json();
  const parsedBody = await messageSchema.parseAsync(body);

  let text = "You've received a new customer inquiry.";
  if (parsedBody.emailAddress) {
    text += `\n\nEmail: ${parsedBody.emailAddress}`;
  }
  if (parsedBody.telephoneNumber) {
    text += `\n\nPhone: ${parsedBody.telephoneNumber}`;
  }
  text += `\n\nMessage: ${parsedBody.message}`;

  await transporter.sendMail({
    from: '"Captain Nick" <nick@endless-summer-adventures.com>',
    replyTo: parsedBody.emailAddress ?? 'captnick2660@aol.com',
    to: 'captnick2660@aol.com',
    subject: 'New Customer Inquiry',
    text: text,
  });

  return new NextResponse('OK');
}
