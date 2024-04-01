import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';

import "./globals.css";

export const metadata: Metadata = {
  title: "KM/MI",
  description: "Convert running paces from kilometers to miles and vice versa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  );
}
