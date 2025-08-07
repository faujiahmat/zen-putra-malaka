import type { Metadata } from 'next';
import { Geist_Mono, Oswald, Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Zen Putra Malaka | Kontraktor Listrik & Galian Profesional',
    template: '%s | Zen Putra Malaka',
  },
  description:
    'Zen Putra Malaka adalah perusahaan kontraktor terpercaya untuk proyek instalasi listrik dan galian tanah di Indonesia.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Kontraktor Listrik',
    'Kontraktor Galian',
    'Instalasi Kabel Tanah',
    'Zen Putra Malaka',
    'Kontraktor Profesional',
    'Instalasi Listrik',
    'Galian Tanah',
    'Instalasi Kabel Bawah Tanah Aceh',
    'Instalasi Kabel Bawah Tanah Sumatera Utara',
  ],
  metadataBase: new URL('https://zenputramalaka.com'),
  openGraph: {
    title: 'Zen Putra Malaka | Kontraktor Listrik & Galian Profesional',
    description:
      'Zen Putra Malaka melayani instalasi listrik dan galian untuk kebutuhan industri, komersial, dan pemerintahan.',
    url: 'https://zenputramalaka.com',
    siteName: 'Zen Putra Malaka',
    images: [
      {
        url: 'https://zenputramalaka.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zen Putra Malaka - Kontraktor Listrik & Galian',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zen Putra Malaka | Kontraktor Listrik & Galian',
    description:
      'Zen Putra Malaka melayani proyek instalasi listrik dan galian di seluruh Indonesia.',
    images: ['https://zenputramalaka.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: 'Ahmat Fauji Mrp', url: 'https://zenputramalaka.com' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} ${geistMono.variable} ${oswald.variable} antialiased min-h-dvh bg-background text-foreground max-w-screen-2xl mx-auto`}
      >
        <header className="sticky top-0 z-50 w-full flex justify-center bg-background border-b-[1.5px]">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
