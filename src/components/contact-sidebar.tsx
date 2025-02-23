"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

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
      className="fixed top-0 right-0 z-10 h-full w-1/2 bg-white dark:bg-black shadow-lg p-6 flex flex-col"
    >
      <button
        className="absolute top-4 right-4 text-gray-700 dark:text-white"
        onClick={onClose}
      >
        ✕
      </button>

      <h2 className="text-xl font-bold text-black dark:text-white mb-4 text-center">Contact Us</h2>

      

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-4 bg-white text-[#727272] rounded-md w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          required
          className="p-4 bg-white text-[#727272] rounded-md w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="p-4 bg-white text-[#727272] rounded-md w-full"
        ></textarea>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 bg-white text-black font-semibold rounded-md w-full"
        >
          {formSubmitted ? "Sent!" : "Send Message"}
        </motion.button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-black dark:text-white">Book a Call</h3>
        <InlineWidget url="https://calendly.com/your_scheduling_page" />
      </div>

    </motion.div>
  );
}