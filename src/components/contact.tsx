"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h- bg-black text-white text-center p-6 font-inter">
      <motion.h1
        className="font-sans text-5xl md:text-9xl font-bold"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={0}
      >
        LET'S WORK
        <br />
        TOGETHER
      </motion.h1>
      
      <motion.button
        className="mt-6 px-6 py-3 bg-white text-black font-bold text-lg rounded-full transition"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={1}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        CONTACT NOW
      </motion.button>

      <motion.p
        className="mt-6 max-w-2xl text-sm md:text-lg font-medium text-white"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={2}
      >
        BASED IN TOKYO, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST. MY
        PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE
        DESIGN IS EVIDENT IN MY WORK.
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-6 text-sm md:text-xl text-white"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={3}
      >
      <motion.div
        className="mt-6 flex space-x-6 text-sm md:text-xl text-white"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={3}
      >
        {["INSTAGRAM", "DRIBBBLE", "TWITTER"].map((platform, i) => (
          <motion.a
            key={i}
            href="#"
            className="font-semibold relative overflow-hidden"
            whileHover="hover"
          >
            {platform} ↗
            {/* Underline effect */}
            <motion.span
              className="absolute left-0 bottom-0 h-[2px] bg-white w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0 }}
              whileHover={{ scaleX: 1, transition: { duration: 0.3 } }}
              exit={{ scaleX: 0, transition: { duration: 0.3 } }}
              style={{ originX: 0 }}
            />
          </motion.a>
        ))}
      </motion.div>


      </motion.div>

      <motion.div
        className="relative w-full mt-10 flex flex-col items-center"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={5}
      >
        <div className="relative w-full h-[1px] bg-gray-600 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-glow"></div>
  </div>

        <p className="text-gray-200 text-sm font-semibold mt-3">
          &copy; 2024 WEBLO . ALL RIGHTS RESERVED.
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
