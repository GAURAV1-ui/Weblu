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
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white dark:bg-black text-black dark:text-white text-center p-6 font-inter">
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
        className="mt-6 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-full transition hover:opacity-90"
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
        className="mt-6 max-w-2xl text-sm md:text-lg font-medium text-black/80 dark:text-white/80"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={2}
      >
      BASED IN INDIA, WE CRAFT IMPACTFUL BRANDS THROUGH WEB DEVELOPMENT, UI/UX DESIGN, AND DIGITAL MARKETING.
      <br />
      MINIMAL. MEANINGFUL. MADE TO STAND OUT.
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-6 text-sm md:text-xl text-black dark:text-white"
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
            <motion.span
              className="absolute left-0 bottom-0 h-[2px] bg-black dark:bg-white w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0 }}
              whileHover={{ scaleX: 1, transition: { duration: 0.3 } }}
              exit={{ scaleX: 0, transition: { duration: 0.3 } }}
              style={{ originX: 0 }}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
