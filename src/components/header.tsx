"use client";

import React from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";
import { Link } from "@/lib/types";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="hidden md:flex items-center justify-between fixed z-[999] w-full px-8 mt-4">
      <div className="flex items-center">
        <NextLink href="/" passHref>
          <motion.div
            className=" font-inter text-2xl font-bold text-gray-900 dark:text-gray-100 hover:opacity-80 transition-opacity"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            WebLu
          </motion.div>
        </NextLink>
      </div>

      <motion.div
        className="flex p-1 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[1rem] font-inter font-bold text-gray-500">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <NextLink
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.hash,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.nameEng}
                {link.hash === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
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
              "px-4 py-2 font-inter font-bold rounded-full shadow-md transition-all",
              "hover:text-gray-950 dark:hover:text-gray-300",
              "bg-gray-100 text-gray-950",
              "dark:bg-gray-950 dark:text-gray-200"
            )}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Contact
          </motion.button>
        </NextLink>
      </div>
    </header>
  );
}
