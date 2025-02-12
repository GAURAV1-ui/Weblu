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
                 font-inter font-bold text-gray-900 dark:text-gray-200"
        >
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <NextLink
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition",
                  "text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  animate={
                    activeSection === link.hash ? { scale: 1.15 } : { scale: 1 }
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {link.nameEng}
                </motion.span>

                {link.hash === activeSection && (
                  <motion.div
                    className="absolute bottom-2 left-2 w-[85%] h-[3px] 
                         bg-black dark:bg-white"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NextLink>
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
