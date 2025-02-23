import type { Metadata } from "next";
import { Instrument_Sans, Inter_Tight } from 'next/font/google';
import "./globals.css";
import Providers from "@/containers/providers";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-controller";
import Navbar from "@/components/navbar";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700',],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "WebLo",
  description: "Frontend Advance Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${instrumentSans.variable} ${interTight.variable}
        flex flex-col
        bg-[#F9FAFB]
        text-gray-950 relative
        dark:bg-[#0F0F10] 
        dark:text-gray-50 dark:text-opacity-90`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
