import type { Metadata } from "next";
import { Instrument_Sans, Inter_Tight } from 'next/font/google';
import "./globals.css";
import Providers from "@/containers/providers";
import Footer from "@/components/layout/footer";
import ThemeSwitch from "@/components/ui/theme-controller";
import Navbar from "@/components/layout/navbar";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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
  description: "Frontend Advanced Personal Portfolio",
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
        min-h-screen relative bg-white dark:bg-black
        antialiased`}
      >
        <Providers>
          <div className="min-h-screen relative">
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
            <ThemeSwitch />
          </div>
        </Providers>
      </body>
    </html>
  );
}
