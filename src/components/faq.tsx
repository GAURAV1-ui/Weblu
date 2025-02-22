"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "UI/UX DESIGN",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "WEB DEVELOPMENT",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "SOCIAL MEDIA MARKETING",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "INFLUENCER MARKETING",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full mx-auto px-4 sm:px-8 lg:px-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full">
        <Fade direction="up" delay={400} cascade damping={0.1}>
          <h1 className="font-inter text-[48px] sm:text-[64px] font-extrabold leading-tight text-gray-900 dark:text-white mb-4 md:mb-0">
            WHAT WE DO
          </h1>
        </Fade>

        <motion.div
          className="space-y-6 w-full"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-transparent p-6 border-b border-gray-300 dark:border-gray-700 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="font-inter text-4xl font-light text-gray-900 dark:text-white"
                >
                  {faq.question}
                </motion.div>

                <motion.button
                  className="mt-4 text-gray-900 dark:text-white px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.2 }}
                >
                  {openIndex === index ? (
                    <span className="text-3xl">&#8722;</span>
                  ) : (
                    <span className="text-3xl">&#43;</span>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      marginTop: "16px",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      marginTop: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="font-sans mt-4 text-gray-700 dark:text-[#858585] bg-gray-100 dark:bg-[#0A0A0A] p-4 rounded-lg"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="text-left"
                    >
                      {faq.answer}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="text-center font-inter text-lg font-medium text-gray-900 dark:text-white mt-4 border-2 border-gray-300 dark:border-gray-700 max-w-48 py-1"
                    >
                      Start From $3000
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
