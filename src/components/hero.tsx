"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function Hero() {
  const { ref } = useSectionInView("#home");

  return (
    <motion.section
      className="max-w-[1137px]  mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 gap-12 items-center lg:text-start">
          <div>
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent rounded-full"></span>
                  <span className="w-6 h-6 bg-yellow-300 rounded-full"></span>
                  <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                </div>

                <h1 className="text-5xl font-extrabold leading-tight">
                  <span className="block">
                    <span className="text-black">Community</span>
                    <span className="px-2 py-1 bg-accent text-black rounded-lg ml-2">
                      Powered
                    </span>
                  </span>
                  <span className="block">
                    <span className="text-black">Arts</span>
                    <span className="mx-1 text-white-500 px-6 rounded-xl bg-[#faca11]">→</span>
                    <span className="text-black">Where</span>
                  </span>
                  <span className="block">
                    <span className="px-2 py-1 bg-accent text-black rounded-lg">
                      Creativity
                    </span>
                    <span className="ml-2 text-black">Connects</span>
                  </span>
                </h1>

                <p className="text-gray-600">
                  We believe art unites and inspires. By offering resources,
                  mentorship, and a collaborative platform, we empower creators
                  to reflect and celebrate our community's diverse voices.
                </p>

                <div className="flex items-center gap-6 mt-6">
                  <button className="py-3 px-5 text-l bg-yellow-400 text-black font-semibold rounded-3xl shadow-md hover:bg-yellow-300">
                    Get Started
                  </button>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {["User 1", "User 2"].map((user, index) => (
                      <img
                        key={index}
                        src="https://via.placeholder.com/40"
                        alt={user}
                        className="w-8 h-8 rounded-full"
                      />
                    ))}
                    <span className="ml-2">
                      Trusted by more than{" "}
                      <span className="font-bold text-black">5k</span> users
                      worldwide
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <Fade direction="right" delay={600} cascade damping={0.1} triggerOnce>
            <div>
              <Image
                src="/hero.png"
                width="600"
                height="600"
                alt="portrait"
                quality="100"
                priority
                className="rounded-full object-cover"
              />
            </div>
          </Fade>
        </div>
      </div>
    </motion.section>
  );
}
