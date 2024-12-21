'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTransform, motion, useScroll, easeInOut } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { projects } from '@/lib/data';

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup function to avoid memory leaks
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        const range = [i * 0.25, 1];

        const { title, description, src, link, color } = project;

        const cardScroll = useRef<HTMLDivElement>(null);
        const { scrollYProgress: cardProgress } = useScroll({
          target: cardScroll,
          offset: ['start end', 'start start'],
        });

        // Apply easing to create smooth transformations
        const imageScale = useTransform(cardProgress, [0, 1], [1.5, 1], { ease: easeInOut });
        const scale = useTransform(scrollYProgress, range, [1, targetScale], { ease: easeInOut });
        const top = useTransform(scrollYProgress, range, ['-5vh', `${i * 25}px`]);

        return (
          <div
            ref={cardScroll}
            key={`p_${i}`}
            className="h-screen flex items-center justify-center sticky top-0"
          >
            <motion.div
              style={{
                backgroundColor: color,
                scale,
                top,
              }}
              className="relative flex flex-col top-[-25%] h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
            >
              <h2 className="text-center m-0 text-[28px]">{title}</h2>
              <div className="flex h-full mt-[50px] gap-[50px]">
                {/* Description Section */}
                <div className="relative top-[10%] w-[40%]">
                  <p className="text-[16px] first-letter:text-[28px] first-letter:font-title">
                    {description}
                  </p>
                  <span className="flex items-center gap-[5px]">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] underline cursor-pointer"
                    >
                      See more
                    </a>
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>

                {/* Image Section */}
                <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
                  <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                    <Image
                      fill
                      src={`/images/${src}`}
                      alt={`${title} image`}
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </main>
  );
}
