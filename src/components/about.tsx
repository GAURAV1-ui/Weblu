"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen w-full mx-auto px-4 sm:px-8 lg:px-16 text-gray-900 dark:text-white transition-colors duration-300">
      <motion.div
        className="space-y-8 max-w-3xl lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="font-inter text-2xl font-bold uppercase tracking-wider">
          Our Path Forward
        </h2>
        <p className="font-sans text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          At Weblo, we create data-driven marketing strategies that not only attract attention but drive real results. From brand awareness to lead generation, we blend innovation, storytelling, and cutting-edge tech to help your brand thrive. Let’s turn ideas into impact and fuel lasting growth together!
        </p>
        <h2 className="font-inter text-2xl font-bold uppercase tracking-wider">
          Behind the Scenes
        </h2>
        <p className="font-sans text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          At Weblo, we blend creativity with data to craft impactful digital campaigns. Our team of strategists, designers, and developers collaborates to elevate brands through research, trends, and innovation. We focus on delivering measurable results to help businesses thrive in the digital world. Your success is our mission.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Image src="/gauravsignb.png" alt="Gaurav" width={200} height={80} className="h-16 dark:hidden" />
          <Image src="/gauravsignw.png" alt="Gaurav" width={200} height={80} className="h-16 hidden dark:block" />
          <Image src="/abhisignb.png" alt="Abhishek" width={200} height={80} className="h-16 dark:hidden" />
          <Image src="/abhisignw.png" alt="Abhishek" width={200} height={80} className="h-16 hidden dark:block" />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:w-1/2 justify-center lg:justify-end mt-8 lg:mt-0 text-center lg:text-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-5xl font-sans font-extrabold">
          VOICE OF{" "}
          <span className="text-[#FF5A1E] font-extrabold">CE-YO.</span>
        </h2>
        <div className="mt-8 hidden lg:block">
          <Image src="/CEYOABHI.jpg" alt="CE-YO" width={400} height={400} className="rounded-lg shadow-lg mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
