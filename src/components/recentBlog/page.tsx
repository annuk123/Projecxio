"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
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
    <section className="w-full min-h-screen text-black dark:text-white px-6 sm:px-16 py-24 flex flex-col items-center justify-center bg-white/20 rounded-3xl dark:bg-zinc-900/20">
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
        {/* <span className="text-5xl animate-wiggle">📝</span> */}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          My Recent Blogs
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {/* Blog Cards */}
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
            image:
              "https://res.cloudinary.com/dpiobntr2/image/upload/v1745996586/r106fzylbltqqptpoape.png",
          },
        ].map((blog, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl overflow-hidden transition-all"
          >
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
            />
            <div className="relative p-6 mt-[-28px] bg-white dark:bg-zinc-800 rounded-t-lg z-10 border-t-4 border-zinc-300 dark:border-zinc-700">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.2, duration: 0.6 }}
                className="text-xl font-semibold text-zinc-900 dark:text-white mb-3"
              >
                {blog.title}
              </motion.h3>
              <motion.a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16"
      >
        <Link
          href="https://myfirstblog123.hashnode.dev/"
          target="_blank"
          className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg"
        >
          View More Blogs <ExternalLink size={20} />
        </Link>
      </motion.div>
    </section>
  );
}
