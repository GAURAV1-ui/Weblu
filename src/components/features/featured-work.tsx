"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { projects } from "@/lib/data";

export default function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="projects" className="w-full dark:bg-[#0F0F0F] py-20 overflow-hidden">
      <motion.div 
        ref={ref}
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full">
          <Fade direction="up" delay={200} cascade damping={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex-1">
                <h1 className="font-inter text-[48px] sm:text-[64px] font-extrabold leading-tight text-black dark:text-white mb-4 md:mb-0">
                  FEATURED WORK
                </h1>
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <p className="font-sans text-lg sm:text-xl leading-relaxed md:max-w-xl text-black/80 dark:text-white/80">
                  Discover our best work in web development, design, and influencer marketing—turning ideas into digital success.
                </p>
              </div>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative group overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-[400px]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.category} • {project.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
