"use client";
import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { Mail } from "lucide-react";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "@/containers/active-section";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex items-center justify-center min-h-screen max-w-full mx-auto text-center"
    >
      <div>
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <p className="text-gray-500 font-bold dark:text-white/80 font-inter text-sm sm:text-base mb-4">
            <span className="text-green-500 text-2xl">• </span> 2/5 SPOTS AVAILABLE
          </p>

          <h1 className="font-sans text-5xl sm:text-7xl md:text-[100px] font-extrabold leading-none">
            ALMOST THE BEST
          </h1>
          <h1 className="font-sans py-5 text-5xl sm:text-7xl md:text-[100px] font-extrabold leading-none">
            <span className="bg-[#FF5A1E] px-2 -rotate-3 inline-block">DESIGN</span> AGENCY
          </h1>

          <p className="text-sm font-inter sm:text-xl md:text-xl mt-4 text-gray-700 dark:text-white leading-relaxed mb-8">
            Web Development, Graphics, Social Media Marketing & Influencer Branding – All in One Place!
          </p>
        </Fade>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="#contact"
            className="group bg-black text-white px-6 py-3 sm:px-7 sm:py-3 flex items-center font-inter text-base sm:text-lg font-bold gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition-all dark:bg-white dark:text-black"
            onClick={() => {
              setActiveSection("#contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Connect <Mail color={"#ffffff"} className="dark:fill-black" />
          </Link>

          <a
            className="bg-black p-3 sm:p-4 text-white flex items-center justify-center text-xl rounded-full focus:scale-105 hover:scale-110 active:scale-95 transition-all dark:bg-white dark:text-black hover:text-gray-100 dark:hover:text-gray-900"
            href="https://www.linkedin.com/company/webloservices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="transition-all duration-300 transform hover:scale-110" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
