/* eslint-disable max-len */
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { twMerge } from 'tailwind-merge';

import './globals.css';

export const metadata: Metadata = {
  title: 'KM/MI',
  description: 'Convert paces from kilometers to miles and vice versa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={GeistMono.className}>
        <main>
          <div className={twMerge(
            'flex w-full items-center justify-center h-[100vh]',
            'text-8xl font-bold',
          )}>
            <div className="translate-y-[-1rem] space-y-4">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
