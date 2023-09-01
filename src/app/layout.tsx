import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Endless Summer Adventures',
  description:
    'Family owned and operated since 2011. Endless Summer Adventures specializes in backwater fishing and paddle board eco tours but offers a variety of back country adventures throughout the year.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
