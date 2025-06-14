"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiFigma, SiGit } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
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
import { FloatingIcon } from "../FloatingIcon/float";

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


export default function Blog() {
  return (
<section className="w-full min-h-screen text-black dark:text-white px-6 sm:px-16 py-24 flex flex-col items-center justify-center bg-white/20 rounded-3xl dark:bg-zinc-900/20 relative overflow-hidden">
  
  {/* Floating Icons Layer */}
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {ICONS.map((Icon, i) => (
      <FloatingIcon
        key={i}
        Icon={Icon}
        delay={i * 0.3}
        top={positions[i].top}
        left={positions[i].left}
        rotation={Math.floor(Math.random() * 360)}
      />
    ))}
  </div>

  {/* Section Heading */}
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
      My Recent Blogs
    </span>
  </motion.h2>

  {/* Blog Cards */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
  >
    {[
      {
        title: "Unlocking the Secrets of the .next Folder in Next.js",
        url: "https://myfirstblog123.hashnode.dev/unlocking-the-secrets-of-the-next-folder-in-nextjs",
        image:
          "https://res.cloudinary.com/dpiobntr2/image/upload/v1745996567/sme2mqjdxpsfoo9rpnvt.png",
      },
      {
        title: "Understanding the Difference Between .ts and .tsx",
        url: "https://myfirstblog123.hashnode.dev/understanding-the-difference-between-ts-and-tsx-in-typescript-when-to-use-each",
        image:
          "https://res.cloudinary.com/dpiobntr2/image/upload/v1745996562/ahomqtlyouopd0hjcnwl.png",
      },
      {
        title: "Metaverse marketplace development - process and cost",
        url: "https://myfirstblog123.hashnode.dev/metaverse-marketplace-development-process-and-cost",
        image: "/assets/block.png",
      },
    ].map((blog, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.03, y: -6 }}
        whileTap={{ scale: 0.97 }}
        className="relative bg-white/10 dark:bg-zinc-800/20 backdrop-blur-md border border-white/30 dark:border-zinc-700 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group"
      >
        {/* Shine Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shine z-10 pointer-events-none" />

        {/* Blog Image */}
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
        />

        {/* Blog Details */}
        <div className="relative p-6 z-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.2, duration: 0.6 }}
            className="text-xl font-semibold text-white mb-3"
          >
            {blog.title}
          </motion.h3>
          <motion.a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-600 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
          >
            Read More <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* View More Button */}
  <motion.div
    className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  >
    <motion.a
      href="https://myfirstblog123.hashnode.dev/"
      target="_blank"
      className="relative px-5 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-lg hover:shadow-fuchsia-500/50 overflow-hidden group transition-transform duration-300 ml-20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        View More Blogs <ExternalLink size={20} />
      </span>
      {/* Shine Effect */}
      <span className="absolute left-[-75%] top-0 w-1/2 h-full bg-white opacity-20 transform skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
    </motion.a>
  </motion.div>
</section>

  );
}
