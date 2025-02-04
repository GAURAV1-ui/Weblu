"use client";
import React from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";

const testimonials = [
  {
    name: "Anne Weying",
    role: "Cloud Sales Executive, AMD",
    text: "With Mike's user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, forecasting - it's all automated and accessible in one place.",
    logo: "/amd-logo.png",
    rating: 5,
  },
  {
    name: "Rick O'Connell",
    role: "Gameplay Programmer, Microsoft",
    text: "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that delight.",
    logo: "/microsoft-logo.png",
    rating: 4,
  },
  {
    name: "Eddie Brock",
    role: "Design Manager, HBO",
    text: "I hired Mecheale to redesign my company's website. The process was smooth and easy. They listened to all my needs and delivered a site that exceeded my expectations.",
    logo: "/hbo-logo.png",
    rating: 5,
  },
  {
    name: "Kate McCallister",
    role: "Home Advisor, Apple Inc.",
    text: "I was impressed by his designer's ability to grasp my vision and bring it to digital life. The site they created optimized user experience and functionality.",
    logo: "/apple-logo.png",
    rating: 3, 
  },
  {
    name: "John Fitzgerald",
    role: "Division Manager, Airbus",
    text: "We've seen an increase in site traffic, lead generation, and sales. I can't recommend Mecheale Beauregard enough. He truly transformed our website!",
    logo: "/airbus-logo.png",
    rating: 4,
  },
  {
    name: "Ellie Sattler",
    role: "Visual Designer, Bose",
    text: "Mecheale Beauregard expert developer took my Photoshop files and turned them into pixel-perfect, responsive websites. The clean, responsive layout made my designs shine.",
    logo: "/bose-logo.png",
    rating: 5,
  },
];

const Testimonial = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          style={{ color: i < rating ? "gold" : "gray", fontSize: "20px" }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="text-white py-10 space-y-10 w-full mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 right-0 z-10 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />
        <Ticker duration={30}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0F0F0F] w-full max-w-[550px] h-[300px] p-5 rounded-lg border border-[#262626] shadow-lg mx-auto"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.role}
                  height={40}
                  width={40}
                  className="mr-3"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <h4 className="font-inter text-xl font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="font-sans text-lg text-[#ccc]">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="mt-2">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <div className="flex items-center mb-4 border-[1px] border-[#262626] bg-[#0D0D0D] p-4 rounded-lg">
                <p className="font-sans text-lg">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Ticker>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 right-0 z-10 bg-gradient-to-l from-black via-transparent to-transparent pointer-events-none" />
        <Ticker duration={30} direction={1}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0F0F0F] w-full max-w-[550px] h-[300px] p-5 rounded-lg border border-[#262626] shadow-lg mx-auto"
  
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.role}
                  height={40}
                  width={40}
                  className="mr-3"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <h4 className="font-inter text-xl font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="font-sans text-lg text-[#ccc]">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="mt-2">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <div className="flex items-center mb-4 border-[1px] border-[#262626] bg-[#0D0D0D] p-4 rounded-lg">
                <p className="font-sans text-lg">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Ticker>
      </div>
    </div>
  );
};

export default Testimonial;
