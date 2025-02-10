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
  title: "WebLu",
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
        bg-gray-50
        text-gray-950 relative
        dark:bg-black 
        dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-[10]  flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
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
