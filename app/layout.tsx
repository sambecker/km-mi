/* eslint-disable max-len */
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { twMerge } from 'tailwind-merge';
import { BASE_URL, DESCRIPTION, TITLE } from '@/meta';

import './globals.css';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: '/image',
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: '/image',
  },
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
      <body
        className={twMerge(
          GeistMono.className,
          'h-[100dvh]',
        )}
      >
        <main className="h-full">
          <div className={twMerge(
            'flex w-full items-center justify-center h-full',
            'text-8xl font-bold',
          )}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
