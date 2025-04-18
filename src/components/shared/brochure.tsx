"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Brochure() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen relative overflow-hidden">
      <motion.div
        ref={containerRef}
        className="w-full h-full"
        style={{ scale, y }}
      >
        <Image
          src="/aboutImage.jpg"
          alt="Image"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover sm:object-contain"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      </motion.div>
    </div>
  );
}
