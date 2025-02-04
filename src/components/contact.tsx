'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const isInView = useInView(ref, { margin: '-100px' });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_94y20xo',
        'template_v10u2oh',
        formRef.current,
        'pX_2hasGmGcuvjXIW'
      )
      .then(
        () => setSuccess(true),
        () => setError(true)
      );
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 p-6"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="flex-1 space-y-6 text-white" variants={variants}>
        <motion.h1 className="text-5xl md:text-7xl font-bold font-mono" variants={variants}>
          Let’s work together
        </motion.h1>
        <motion.div className="space-y-2" variants={variants}>
          <h2 className="text-xl font-semibold">Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="space-y-2" variants={variants}>
          <h2 className="text-xl font-semibold">Address</h2>
          <span>Hello street, New York</span>
        </motion.div>
        <motion.div className="space-y-2" variants={variants}>
          <h2 className="text-xl font-semibold">Phone</h2>
          <span>+1 234 5678</span>
        </motion.div>
      </motion.div>

      <div className="flex-1 relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="200px" height="200px" viewBox="0 0 32.666 32.666" className="stroke-orange-500">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858..."
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="flex flex-col gap-4 p-6 rounded-lg shadow-lg"
        >
          <input type="text" name="name" placeholder="Name" required className="p-3 bg-[#0F0F0F]  text-white rounded-md" />
          <input type="email" name="email" placeholder="Email" required className="p-3 bg-[#0F0F0F] text-white rounded-md" />
          <textarea name="message" placeholder="Message" rows={5} className="p-3 bg-[#0F0F0F] text-white rounded-md"></textarea>
          <button type="submit" className="py-3 px-6 bg-white text-black font-semibold rounded-md">Submit</button>
          {error && <p className="text-red-500">Error sending message.</p>}
          {success && <p className="text-green-500">Message sent successfully!</p>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
