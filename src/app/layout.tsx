import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Who Wants To Be A Millionaire?',
  description: 'Play the game and win!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
