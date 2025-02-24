"use client";

import CalendlyEmbed from "@/containers/calendly-embed";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSidebar({ isOpen, onClose }: ContactSidebarProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      onClose();
      setFormSubmitted(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.4 }}
      className="fixed top-0 right-0 z-10 h-screen w-1/2 bg-white dark:bg-black shadow-lg p-6 flex flex-col overflow-y-auto"
    >
      <button
        className="absolute top-4 right-4 text-gray-700 dark:text-white"
        onClick={onClose}
      >
        ✕
      </button>

      <h2 className="text-xl font-bold text-black dark:text-white mb-4 text-center">
        Contact Us
      </h2>

      <div className="mt-6 h-full w-full">
        <CalendlyEmbed url="https://calendly.com/iamgaurav201/30min" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-4 bg-white text-[#727272] rounded-md w-full border border-gray-300"
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          required
          className="p-4 bg-white text-[#727272] rounded-md w-full border border-gray-300"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="p-4 bg-white text-[#727272] rounded-md w-full border border-gray-300"
        ></textarea>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 bg-white text-black font-semibold rounded-md w-full"
        >
          {formSubmitted ? "Sent!" : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
}
