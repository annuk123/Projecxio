"use client";
import About from "../components/recentBlog/page";
import Footer from "../components/Footer/page";
import TechStack from "../components/techstack/page";
import Navbar from "../components/navbar/page";
import BlobDivider from "../components/blobdivider/blob";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { useEffect, useState } from "react";
import FootDivider from "../components/footdiv/foot";
import Reveal from "../components/reveal/reveal";
import Hero from "../components/abouts/page";
import { FloatingIcon } from "../components/FloatingIcon/float";
import { SiNextdotjs, SiTailwindcss, SiFigma, SiGit } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiChakraui,
  SiMongodb,
  SiRedux,
  SiShadcnui,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Projects from "@/components/projectsPage/project";

const ICONS = [
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  TbBrandFramerMotion,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiShadcnui,
  FaJava,
  SiGithub,
  SiMongodb,
  SiRedux,
  SiChakraui,
  SiVite,
  SiGit,
];

const generateUniquePositions = (count: number) => {
  const positions: { top: string; left: string }[] = [];

  while (positions.length < count) {
    const top = `${Math.floor(Math.random() * 70 + 5)}%`;
    const left = `${Math.floor(Math.random() * 90 + 5)}%`;

    const isOverlapping = positions.some(
      (pos) =>
        Math.abs(parseFloat(pos.top) - parseFloat(top)) < 15 &&
        Math.abs(parseFloat(pos.left) - parseFloat(left)) < 15
    );

    if (!isOverlapping) {
      positions.push({ top, left });
    }
  }

  return positions;
};

const positions = generateUniquePositions(ICONS.length);

const titles = [
  "I'm Annu Kumari",
  "I'm a Developer",
  "I'm a Graphic Designer",
  "I'm a Technical Content Writer",
  "I'm a UI/UX Enthusiast",
  "I'm a Open Source Ethusiast",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= texts.length) return;

    const currentText = texts[index];

    if (!deleting && subIndex === currentText.length) {
      const timeout = setTimeout(() => setDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 40 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
      {texts[index].substring(0, subIndex)}
      <span
        className={`ml-1 ${blink ? "border-r-2 border-fuchsia-500" : ""}`}
      />
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-white via-rose-50 to-violet-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500 bg-grid-dark">
      {/* Navbar */}
      <Navbar />
      {/* Animated or Static Blobs in Background */}



      {/* Hero Section with Typewriter */}
      <section className="flex z-10 relative flex-col items-center justify-center text-center w-full px-6 sm:px-12 lg:px-24 py-30 ">
        {/* Floating icons container */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {ICONS.map((Icon, i) => (
            <FloatingIcon
              key={i}
              Icon={Icon}
              delay={i * 0.3}
              top={positions[i].top}
              left={positions[i].left}
            />
          ))}
        </div>

        <Reveal>
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white overflow-hidden min-h-[3.5rem] sm:min-h-[4.5rem] z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[280px] sm:w-[900px] mx-auto text-center whitespace-nowrap overflow-hidden -top-30">
              <TypewriterText texts={titles} />
            </div>
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 text-center mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Crafting beautiful web interfaces with React, Next.js, Tailwind CSS,
            and beyond.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {/* Animated Available Badge */}
            <motion.div
              className="mt-8 px-5 py-3 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-black dark:text-white rounded-full text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Available for Freelance – Let’s Work Together!
            </motion.div>

            {/* 👨‍💻 Rotating Taglines */}

            {/* Contact Me Button */}
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            className="relative mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
          </motion.div>

          {/* Spotlight Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="spotlight" />
          </div>
        </Reveal>
      </section>

      <BlobDivider flip fillColor="#000000" />
      <section className="w-full relative z-10 py-4 bg-black">
        
        <Reveal>
          <Hero />
        </Reveal>
      </section>

      {/* Other Sections */}
       

      <section className="w-full px-6 sm:px-12 lg:px-24  mt-12">
        
        <Reveal>
          <About />
        </Reveal>
      </section>

      
      <section className="w-full relative z-10 py-4 mt-9 bg-black">
        <Reveal>
          <Projects />
        </Reveal>
      </section>
      <BlobDivider flip={false} fillColor="#000000" />

      <section className="w-full px-6 sm:px-12 lg:px-24 py-20">
        <Reveal>
          <TechStack />
        </Reveal>
      </section>

      <FootDivider flip fillColor="#000000" />

      <footer className="w-full relative z-10 py-10 bg-black">
        <Reveal>
          <Footer />
        </Reveal>
      </footer>
    </div>
  );
}
