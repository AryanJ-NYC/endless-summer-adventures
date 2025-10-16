import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { GTagInitializer } from './homepage/GTagInitializer';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  description:
    'Family owned and operated since 2011. Endless Summer Adventures specializes in backwater fishing and paddle board eco tours but offers a variety of back country adventures throughout the year.',
  keywords: ['fishing charter', 'marco island', 'naples', 'fishing'],
  title:
    'Endless Summer Adventures | Fishing Charters in Marco Island, Isles of Capri and all Southwest Florida',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {children}
        <GTagInitializer />
        <Analytics />
      </body>
    </html>
  );
}
