"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full mx-auto px-4 sm:px-8 lg:px-16 text-gray-900 dark:text-white transition-colors duration-300">
      <motion.div
        className="space-y-8 max-w-3xl lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="font-inter text-2xl font-bold uppercase tracking-wider">
          Our Path Forward
        </h2>
        <p className="font-sans text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          As a young team, we develop content that the unreachable want to see
          and build sustainable communities. Facts: 65% of social media ads are
          swiped away in the first 2.5 seconds. We are changing that and
          creating content that the unreachable are interested in. We ensure
          that these people enjoy seeing your advertising.
        </p>
        <h2 className="font-inter text-2xl font-bold uppercase tracking-wider">
          Behind the Scenes
        </h2>
        <p className="font-sans text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          We are the world's first agency dedicated to targeting the elusive—
          those who live social-first and instinctively swipe away ads that
          fail to capture their attention. Our innovative approach is tailored
          to connect with this elusive audience through engaging, authentic
          content that resonates with their unique preferences and habits.
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/gauravsignb.png"
            alt="Gaurav"
            width={200}
            height={80}
            className="h-16 dark:hidden" 
          />
          <Image
            src="/gauravsignw.png"
            alt="Gaurav"
            width={200}
            height={80}
            className="h-16 hidden dark:block"
          />
          <Image
            src="/abhisignb.png"
            alt="Abhishek"
            width={200}
            height={80}
            className="h-16 dark:hidden"
          />
          <Image
            src="/abhisignw.png"
            alt="Abhishek"
            width={200}
            height={80}
            className="h-16 hidden dark:block"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex lg:w-1/2 justify-end mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="text-center lg:text-right">
          <h2 className="text-5xl font-sans font-extrabold">
            VOICE OF{" "}
            <span className="text-[#FF5A1E] font-extrabold">CE-YO.</span>
          </h2>
          <div className="mt-8">
            <Image
              src="/CEYOABHI.jpg"
              alt="CE-YO"
              width={400}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
