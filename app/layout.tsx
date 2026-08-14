import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Wooblitz — Build your store by talking to an AI',
    template: '%s — Wooblitz',
  },
  description:
    'Tell us what you sell. Our AI builds your storefront, picks the layout, and gets you ready to take orders — no design skills or code required.',
  openGraph: {
    title: 'Wooblitz — Build your store by talking to an AI',
    description: 'Tell us what you sell and we build it for you. Free to start, no credit card.',
    type: 'website',
    siteName: 'Wooblitz',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
