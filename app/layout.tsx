import type { Metadata } from 'next';
import { Inter, Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Wooblitz — Build your store with AI in minutes',
    template: '%s — Wooblitz',
  },
  description:
    'Tell us what you sell. Our AI builds your storefront, picks the layout, and gets you ready to take orders — no design skills or code required.',
  openGraph: {
    title: 'Wooblitz — Build your store with AI in minutes',
    description:
      'Tell us what you sell and we build it for you. Free to start, no credit card.',
    type: 'website',
    siteName: 'Wooblitz',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}