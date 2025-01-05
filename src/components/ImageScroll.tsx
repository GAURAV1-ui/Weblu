"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ImageScroll() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <div className="min-h-screen overflow-hidden">
      <motion.div
        ref={containerRef}
        className="w-screen min-h-screen flex justify-center items-center"
        style={{ scale }}
      >
        <Image
          src="/aboutImage.png"
          alt="Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}
