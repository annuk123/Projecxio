"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
    <section ref={ref} className="relative  text-white overflow-hidden">
      <div className="min-h-[90vh] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24 text-center">
        <motion.main
          animate={controls}
          className="flex flex-col items-center justify-center"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Transforming Ideas into Elegant Interfaces
            </span>
            <span className="inline-block text-5xl animate-wiggle"> 💡</span>
          </motion.h1>

          <motion.p className="text-gray-400 dark:text-gray-300 max-w-2xl text-lg md:text-xl mt-4">
  I&apos;m <strong>Annu Kumari</strong> — a Full Stack Developer who weaves code like poetry, shaping elegant
  experiences from imagination and logic. I believe great design speaks, and great code listens — together,
  they create magic. From pixel-perfect interfaces to robust architecture, I build with purpose, passion,
  and a love for crafting stories the web can tell.
  <br /><br />
  This portfolio is not just a canvas of my journey — it&apos;s a gateway. Whether you&apos;re seeking a creative mind for your next project,
  or a dedicated developer to bring your vision to life, I&apos;m open to freelance opportunities that spark innovation and impact.
</motion.p>



          <motion.a
            href="/components/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg transition-all"
          >
            Explore My Work <ArrowRight size={18} />
          </motion.a>
        </motion.main>
      </div>

      {/* Optional subtle glow */}
      {/* <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 w-[50vw] h-[50vw] bg-purple-500/10 blur-2xl rounded-full pointer-events-none z-0" /> */}
    </section>
  );
};

export default Hero;


