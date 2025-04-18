"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show footer when user is near the bottom (within 100px)
      setIsVisible(scrollHeight - (scrollTop + clientHeight) < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer 
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black py-5 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black dark:via-white to-transparent opacity-50" />
        </div>
        <div className="text-center">
          <small className="text-sm font-inter font-medium tracking-wide text-black/80 dark:text-white/80">
            &copy; 2024 WEBLO . ALL RIGHTS RESERVED.
          </small>
        </div>
      </div>
    </motion.footer>
  );
}
