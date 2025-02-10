"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    title: "LIGHTRIC MOTORS",
    category: "Photography",
    year: 2024,
    imageUrl: "/1.jpeg",
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
      className="flex items-center justify-center min-h-screen w-full mx-auto text-white px-4 sm:px-8 lg:px-16">
      <div className="w-full">
        <Fade direction="up" delay={400} cascade damping={0.1} >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex-1">
              <h1 className="font-inter text-[48px] sm:text-[64px] font-extrabold leading-tight text-white mb-4 md:mb-0">
                FEATURED WORK
              </h1>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <p className="font-sans text-lg sm:text-xl text-gray-500 leading-relaxed md:max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
        </Fade>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-transparent backdrop-blur-[20px] border rounded-xl border-white/20 border-gray-300  overflow-hidden transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5,
              }}
            >
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.6 }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={720}
                  height={480}
                  className="w-full h-96 object-cover"
                />
              </motion.div>
              <div className="flex items-center justify-between p-4">
                <div className="text-left">
                  <h2 className="font-inter text-gray-400 text-xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="font-inter text-gray-600">{project.category}</p>
                </div>
                <motion.div
                  className="flex items-center justify-center px-6 py-1 border-1 border-white/30 rounded-full bg-transparent"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <motion.p
                    className="font-sans border border-white/20 px-6 py-1 rounded-full text-gray-500 font-semibold"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                  >
                    {project.year}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
