"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (


  <section className="min-h-screen flex flex-col items-center justify-center  dark:from-black dark:via-gray-900 dark:to-black text-center px-6">
      {/* Main Intro Section */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full px-6 sm:px-12 lg:px-24 py-20 flex flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >

  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
  Crafting Code with Creativity and Passion 
  </span>
  <span className="text-5xl animate-wiggle">💡</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 dark:text-gray-300 max-w-3xl text-lg md:text-xl mt-6"
        >
          I’m Annu Kumari — a frontend developer passionate about building beautiful,
          performant web experiences with a touch of magic ✨
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          href="#projects"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all shadow-lg hover:scale-105"
        >
          Explore My Work <ArrowRight size={18} />
        </motion.a>
      </motion.main>

      {/* About Section */}
      {/* <section className="w-full px-6 sm:px-12 lg:px-24 py-20">
        <About />
      </section>
      <section className="w-full px-6 sm:px-12 lg:px-24 py-20">
        <TechStack />
      </section> */}

      {/* Footer */}
      {/* <footer className="w-full px-6 sm:px-12 lg:px-24 py-12">
        <Footer />
      </footer> */}
    </section>
  );
}
