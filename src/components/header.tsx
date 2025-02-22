"use client";

import React from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";
import { Link } from "@/lib/types";
import Image from "next/image";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="hidden md:flex items-center justify-between w-full px-8 mt-4">
      <div className="flex items-center">
        <NextLink href="/" passHref>
          <motion.div
            className="cursor-pointer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Image
              src="/weblob.png"
              alt="WebLo"
              width={120}
              height={120}
              className="w-[120px] block dark:hidden"
            />

            <Image
              src="/weblow.png"
              alt="WebLo"
              width={120}
              height={120}
              className="w-[120px] hidden dark:block"
            />
          </motion.div>
        </NextLink>
      </div>

      <motion.div
        className="flex p-1 backdrop-blur-md sm:rounded-full
             text-gray-900 dark:text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul
          className="flex flex-wrap items-center justify-center gap-y-1 text-[1rem] 
                 font-inter font-bold text-black dark:text-white"
        >
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center px-3 py-3 group"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <NextLink
                className={clsx(
                  "flex w-full items-center justify-center transition",
                 
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <motion.span>{link.nameEng}</motion.span>
              </NextLink>
              <motion.div
  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-[3px] bg-black dark:bg-white 
             origin-center scale-x-0 transition-transform duration-300 ease-in-out 
             group-hover:scale-x-100"
/>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="flex items-center">
        <NextLink href="/contact" passHref>
          <motion.button
            className={clsx(
              "px-4 py-2 font-inter font-bold rounded-full border-2 transition-all duration-500 ease-in-out",
              "dark:border-white dark:text-white dark:bg-transparent",
              "border-black text-black bg-transparent",
              "hover:bg-black/90 hover:text-white dark:hover:bg-white dark:hover:text-black"
            )}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            CONTACT US
          </motion.button>
        </NextLink>
      </div>
    </header>
  );
}
