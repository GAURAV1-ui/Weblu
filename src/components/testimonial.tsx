"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    src: "/6.webp",
    title: "Inspiring Growth",
    description: "Helping businesses reach new heights.",
  },
  {
    src: "/6.webp",
    title: "Innovative Ideas",
    description: "Creative solutions for modern challenges.",
  },
  {
    src: "/6.webp",
    title: "Sustainable Success",
    description: "Building a better tomorrow, today.",
  },
  {
    src: "/6.webp",
    title: "Global Reach",
    description: "Connecting the world one step at a time.",
  },
  {
    src: "/6.webp",
    title: "Team Excellence",
    description: "Power in collaboration and teamwork.",
  },
  {
    src: "/6.webp",
    title: "Customer Focus",
    description: "Delivering value-driven solutions for everyone.",
  },
];

export default function Testimonial() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center bg-black text-white px-6">
      <div className="space-y-6 w-full">
        {/* Infinite Scroll Effect */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ y: 0 }}
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            duration: 25, // Adjust speed as needed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate cards to create the seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={testimonial.src}
                alt={testimonial.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{testimonial.title}</h3>
              <p className="text-gray-400">{testimonial.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
