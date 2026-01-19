import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Scott Low - Product Manager & Chief of Staff',
    template: '%s | Scott Low',
  },
  description:
    'Personal website of Scott Low, a Canadian Product Manager and Chief of Staff based in Seattle. Writing about leadership, cooking, and life.',
  keywords: ['Scott Low', 'Product Manager', 'Chief of Staff', 'Seattle', 'Leadership'],
  authors: [{ name: 'Scott Low' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Scott Low',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
