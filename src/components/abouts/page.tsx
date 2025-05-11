"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="relative text-white overflow-hidden">
      <div className="min-h-[90vh] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24 text-center">
        <motion.main animate={controls} className="flex flex-col items-center justify-center">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
            <span className="inline-block text-5xl animate-wiggle"> 👩‍💻</span>
          </motion.h1>

          <motion.p className="text-gray-400 dark:text-gray-300 max-w-2xl text-lg md:text-xl mt-6">
            Hey, I&apos;m <strong>Annu Kumari</strong> — a passionate Full Stack Developer and Creative Technologist who thrives at the intersection of design and engineering. I specialize in crafting modern, scalable, and high-performance web applications that not only look stunning but work seamlessly.
            <br /><br />
            With a strong foundation in frontend technologies and backend systems, I bring ideas to life — from elegant user interfaces to robust architecture. Whether you’re a startup looking to launch fast or a creator with a bold vision, I’m here to help you build digital experiences that resonate.
            <br /><br />
            <span className="text-pink-400 font-medium">Let’s create something meaningful, beautiful, and impactful together.</span>
          </motion.p>
        </motion.main>
      </div>

      {/* Animated Glow Background */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[60vw] h-[38vw] bg-pink-500/10 blur-2xl rounded-full pointer-events-none z-0" />
    </section>
  );
};

export default About;
