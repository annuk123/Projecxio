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
  <motion.h2
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    }}
    className="text-4xl sm:text-5xl font-extrabold text-center mb-14 drop-shadow-md flex items-center gap-4"
  >
    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
      About Projexio
    </span>
  </motion.h2>

<motion.p className="text-gray-400 dark:text-gray-300 max-w-2xl text-lg md:text-xl leading-relaxed">
  <span className="text-pink-400 font-medium">Projecxio</span> is not just a portfolio — it&apos;s a playground for bold ideas, rapid builds, and impactful digital experiences.
  <br /><br />
  It&apos;s where <span className="text-purple-400 font-medium">experiments turn into products</span>, where creators move fast, and where indie tools are designed to empower developers, entrepreneurs, and makers to build smarter, leaner, and faster.
  <br /><br />
  Whether it&apos;s a developer utility, an interactive visualizer, or a launch-ready MVP — Projecxio is about <span className="text-pink-400 font-medium">building with purpose, precision, and passion.</span>
  <br /><br />
  Let&apos;s build things that matter — <span className="text-purple-400 font-medium">fast, fearless, and future-ready.</span>
</motion.p>

        </motion.main>
      </div>

      {/* Animated Glow Background */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[60vw] h-[38vw] bg-pink-500/10 blur-2xl rounded-full pointer-events-none z-0" />
    </section>
  );
};

export default About;
