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
      About Me
    </span>
  </motion.h2>

          <motion.p className="text-gray-400 dark:text-gray-300 max-w-2xl text-lg md:text-xl leading-relaxed">
            Hey, I&apos;m <strong>Annu Kumari</strong> — a passionate Indie Hacker and Full Stack Developer, building impactful tools, products, and digital experiences under <span className="text-pink-400 font-medium">Projecxio</span>.
            <br /><br />
            Projecxio isn&apos;t just a project — it&apos;s a playground for bold ideas, fast builds, and real-world solutions. I thrive on creating <span className="text-purple-400 font-medium">lean, scalable, and creator-friendly</span> products that empower developers, entrepreneurs, and indie hackers to launch faster and build smarter.
            <br /><br />
            Whether it&apos;s a quick MVP, a developer tool, or a long-term product vision — I&apos;m on a mission to bring ideas to life with clarity, simplicity, and purpose.
            <br />
            <span className="text-pink-400 font-medium">
              Let&apos;s build things that matter — fast, fun, and fearlessly.
            </span>
          </motion.p>
        </motion.main>
      </div>

      {/* Animated Glow Background */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[60vw] h-[38vw] bg-pink-500/10 blur-2xl rounded-full pointer-events-none z-0" />
    </section>
  );
};

export default About;
