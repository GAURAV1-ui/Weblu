"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    title: "LIGHTRIC MOTORS",
    category: "Photography",
    year: 2024,
    imageUrl: "/5.jpeg",
  },
  {
    title: "POSITIVE ENERGY",
    category: "Branding",
    year: 2023,
    imageUrl: "/2.jpeg",
  },
  {
    title: "XIONG WALL",
    category: "Marketplace",
    year: 2023,
    imageUrl: "/3.jpeg",
  },
  {
    title: "HIDEAWAY",
    category: "Web Design",
    year: 2022,
    imageUrl: "/4.jpeg",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen w-full rounded-xl mx-auto px-4 py-4 sm:px-8 lg:px-16 transition-colors duration-300"
    >
      <div className="w-full">
        <Fade direction="up" delay={400} cascade damping={0.1}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex-1">
              <h1 className="font-inter text-[48px] sm:text-[64px] font-extrabold leading-tight text-gray-900 dark:text-white mb-4 md:mb-0">
                FEATURED WORK
              </h1>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <p className="font-sans text-lg sm:text-xl leading-relaxed md:max-w-xl text-gray-700 dark:text-gray-400">
                Discover our best work in web development, design, and influencer marketing—turning ideas into digital success.
              </p>
            </div>
          </div>
        </Fade>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="bg-transparent backdrop-blur-[20px] border rounded-xl border-gray-300 dark:border-white/30 overflow-hidden transform transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div className="overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 1.6 }}>
                  <Image src={project.imageUrl} alt={project.title} width={720} height={480} className="w-full h-96 object-cover" />
                </motion.div>
                <div className="flex items-center justify-between p-4">
                  <div className="text-left">
                    <h2 className="font-inter text-gray-900 dark:text-white text-xl font-semibold">{project.title}</h2>
                    <p className="font-inter text-gray-600 dark:text-gray-400">{project.category}</p>
                  </div>
                  <motion.div className="flex items-center justify-center px-6 py-1" whileHover={{ scale: 1.08 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                    <motion.p
                      className="font-sans border border-gray-500 dark:border-white/50 px-6 py-1 rounded-full text-gray-700 dark:text-gray-400 font-semibold"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                    >
                      {project.year}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
