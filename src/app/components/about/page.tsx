"use client";

import { motion } from "framer-motion";

  
export default function About() {
  return (
    <>
      <section className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 sm:px-16 py-24 flex flex-col items-center justify-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg sm:text-xl leading-8 text-center text-gray-700 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          I&apos;m a passionate Frontend Developer who thrives at the intersection of creativity and performance.
          I specialize in building modern, elegant UIs with frameworks like <span className="font-semibold text-purple-600 dark:text-purple-400">React, Next.js</span> and tools like <span className="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS, Framer Motion</span>.
          Currently working on <span className="italic">Codexio</span> — a portfolio and digital playground to showcase my skills, experiments, and products.
          <br /><br />
          I’m a night owl coder ✨ who loves smooth animations, pixel-perfect design, and pushing the boundaries of web experiences.
        </motion.p>
      </section>


    </>
  );
}