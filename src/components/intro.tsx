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
      className="flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 text-center"
    >
      <div>
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>

          <p className="text-gray-500 font-bold dark:text-white/80 font-inter text-sm sm:text-base mb-4">
            <span className="text-green-300 text-2xl">• </span> 2/5 SPOTS AVAILABLE
          </p>

          <h1 className="font-sans text-[120px] font-extrabold leading-none">
            WEB & DIGITAL
          </h1>
          <h1 className="font-sans text-[120px] font-extrabold leading-none">
            PRODUCT DESIGN
          </h1>

          {/* Subheading */}
          <p className="text-sm font-inter sm:text-lg mt-4 text-gray-700 dark:text-white/80 leading-relaxed mb-8">
            Resonance is a full-service creative studio creating beautiful
            digital experiences and products.
          </p>
        </Fade>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center font-inter gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 dark:bg-white/10 dark:hover:bg-gray-800 active:scale-95 transition-all"
            onClick={() => {
              setActiveSection("#contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Connect <Mail color={"#9ca3af"} />
          </Link>

          <a
            className="bg-gray-900 p-4 text-white flex items-center justify-center text-xl rounded-full focus:scale-105 hover:scale-105 active:scale-95 transition-all dark:bg-white/10 dark:text-white/80"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
