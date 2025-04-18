"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { categories } from "@/lib/data";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (categories.length - 2));
  };

  const visibleCategories = categories.slice(currentIndex, currentIndex + 3);

  return (
    <section id="services" className="w-full dark:bg-dark py-20 overflow-hidden">
      <motion.div 
        ref={ref}
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full">
          <Fade direction="up" delay={200} cascade damping={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex-1">
                <h1 className="font-inter text-[32px] sm:text-[48px] md:text-[64px] font-extrabold leading-tight text-black dark:text-white mb-4 md:mb-0">
                  OUR SERVICES
                </h1>
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed md:max-w-xl text-black/80 dark:text-white/80">
                  We offer a comprehensive range of services to help your business thrive in the digital landscape.
                </p>
              </div>
            </div>
          </Fade>

          <div className="relative flex items-center">
            <div className="w-[90%] overflow-x-hidden">
              <div className="flex">
                {visibleCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: 1,
                      x: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.1
                    }}
                    className="relative group cursor-pointer min-w-full sm:min-w-[50%] md:min-w-[33.333%] px-2 sm:px-4"
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  >
                    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
                      <Image
                        src={category.imageUrl}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{category.name}</h3>
                          <p className="text-white/80 text-xs sm:text-sm">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCategory}
              className="w-[10%] flex justify-center items-center"
            >
              <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-full p-4 sm:p-6 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-4 mt-8"
          >
            {categories.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index >= currentIndex && index < currentIndex + 3
                    ? 'bg-orange-500'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedCategory(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-black dark:bg-gray-900 rounded-lg max-w-6xl w-full h-[80vh] overflow-hidden flex flex-col md:flex-row"
                  onClick={(e) => e.stopPropagation()}
                >
                  {categories
                    .filter((category) => category.id === selectedCategory)
                    .map((category) => (
                      <div key={category.id} className="flex flex-col md:flex-row w-full h-full">
                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{category.name}</h2>
                            <p className="text-base sm:text-lg mb-6 text-white/80">{category.description}</p>
                            <div className="space-y-4">
                              {category.services.map((service, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-start space-x-4"
                                >
                                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                  <div>
                                    <h3 className="font-semibold text-white text-sm sm:text-base">{service.title}</h3>
                                    <p className="text-white/60 text-xs sm:text-sm">
                                      {service.description}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedCategory(null)}
                            className="mt-6 w-full md:w-auto bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                          >
                            Close
                          </motion.button>
                        </div>
                        <div className="w-full md:w-1/2 h-[40vh] md:h-full relative">
                          <Image
                            src={category.imageUrl}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
