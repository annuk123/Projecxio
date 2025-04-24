"use client";
import About from "../component/about/page";
import Footer from "../component/Footer/page";
import TechStack from "../component/techstack/page";
import Navbar from "../component/navbar/page";
import BlobDivider from "../component/blobdivider/blob";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import FootDivider from "../component/footdiv/foot";
import Reveal from "../component/reveal/reveal";
import Hero from "../component/hero/page";

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
    <div className="relative flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-white via-rose-50 to-violet-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />
      {/* Animated or Static Blobs in Background */}

      {/* Hero Section with Typewriter */}
      <section className="flex flex-col items-center justify-center text-center w-full px-6 sm:px-12 lg:px-24 py-30 ">
        <Reveal>
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white overflow-hidden min-h-[3.5rem] sm:min-h-[4.5rem]"
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
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              View Projects
            </button>

            <Link
              href="/FrontendResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-xl bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 font-semibold shadow hover:scale-105 transition-all duration-300">
                Download Resume
              </button>
            </Link>
          </motion.div>
        </Reveal>
      </section>

      <BlobDivider flip fillColor="#000000" />
      {/* <WaveDivider /> */}
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
