"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Intro = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.p className="text-gray-500 font-bold dark:text-white/80 font-inter text-sm sm:text-base mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span> 2/5 SPOTS AVAILABLE
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6"
            variants={textVariants}
            custom={0}
          >
            ALMOST THE BEST
          </motion.h1>
          
          <motion.h1 className="font-sans py-5 text-5xl sm:text-7xl md:text-[100px] font-extrabold leading-none text-black dark:text-white">
            <span className="bg-[#FF5A1E] px-2 -rotate-3 inline-block text-5xl sm:text-7xl md:text-[100px]">DESIGN</span> AGENCY
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto mb-8"
            variants={textVariants}
            custom={1}
          >
            We create stunning digital experiences that help businesses grow and succeed in the digital world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={textVariants}
            custom={2}
          >
            <motion.button
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-full transition hover:opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            
            <motion.button
              className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-bold text-lg rounded-full transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro; 