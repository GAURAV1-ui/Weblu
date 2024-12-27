"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); 

  const faqs = [
    {
      question: "UI/UX DESIGN",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "WEB DEVELOPMENT",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "SOCIAL MEDIA MARKETING",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        question: "INFLUENCER MARKETING",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
  ];

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full mx-auto text-white px-4 sm:px-8 lg:px-16">
    <div className="w-full">
      <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
      <h1 className="font-inter text-[48px] sm:text-[64px] font-extrabold leading-tight text-white mb-4 md:mb-0">
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
            className="bg-transparent p-6 border-b border-gray-300 mb-4"
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5,
              }}
          >
            <div 
              className="flex items-center justify-between"
              onClick={() => handleToggle(index)}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-inter text-4xl font-light text-white"
              >
                {faq.question}
              </motion.div>

              <motion.button
                className="mt-4 text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.2 }}
              >
                {openIndex === index ? (
                  <span className="text-2xl">-</span> 
                ) : (
                    <span className="text-2xl">+</span> 
                )}
              </motion.button>
            </div>

            {openIndex === index && (
             <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{
               duration: 0.8,
               ease: "easeInOut",
             }}
             className="font-sans mt-4 text-gray-600"
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
                className="text-center font-inter text-l font-medium text-white mt-4 border-2 max-w-48 py-1">
                Start From $3000
             </motion.p> 
           </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Faq;
