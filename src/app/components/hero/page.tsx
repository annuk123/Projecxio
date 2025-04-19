"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "I'm Annu Kumari",
  "I'm a Developer",
  "I'm a Graphic Designer",
  "I'm a Technical Content Writer",
  "I'm a UI/UX Enthusiast",
  "I'm a Open Source Ethusiast",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(texts[index].substring(0, subIndex));

      if (!deleting && subIndex === texts[index].length) {
        setTimeout(() => setDeleting(true), 1000); // pause before deleting
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      {text}
      <span className="border-r-2 border-fuchsia-500 animate-pulse ml-1" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center  dark:from-black dark:via-gray-900 dark:to-black text-center px-6">
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TypewriterText texts={titles} />
      </motion.h1>

      <motion.p
        className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Crafting beautiful web interfaces with React, Next.js, Tailwind CSS, and beyond.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
          View Projects
        </button>
        <button className="px-6 py-3 rounded-xl bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 font-semibold shadow hover:scale-105 transition-all duration-300">
          Download Resume
        </button>
      </motion.div>
    </section>
  );
}


