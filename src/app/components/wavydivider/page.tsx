
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const WaveDivider = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Top SVG curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="w-full h-[120px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="black"
            d="M0,64L48,90.7C96,117,192,171,288,181.3C384,192,480,160,576,138.7C672,117,768,107,864,106.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
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

    </section>
        </section>
  );
};




export default WaveDivider;
