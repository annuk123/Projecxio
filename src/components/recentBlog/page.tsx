"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const blogs = [
  {
    title: "Unlocking the Secrets of the .next Folder in Next.js",
    url: "https://myfirstblog123.hashnode.dev/unlocking-the-secrets-of-the-next-folder-in-nextjs",
    date: "Dec 27, 2024",
  },
  {
    title: "Understanding the Difference Between .ts and .tsx",
    url: "https://myfirstblog123.hashnode.dev/understanding-the-difference-between-ts-and-tsx-in-typescript-when-to-use-each",
    date: "Jan 3, 2025",
  },
  {
    title: "Metaverse Marketplace Development - Process and Cost",
    url: "https://myfirstblog123.hashnode.dev/metaverse-marketplace-development-process-and-cost",
    date: "April 5, 2025",
  },
];

export default function Blog() {
  return (
    <section className="w-full min-h-screen text-black dark:text-white px-6 sm:px-16 py-24 flex flex-col items-center justify-center bg-gradient-to-b from-white/30 to-zinc-100/20 dark:from-black/20 dark:to-zinc-900/10 backdrop-blur-lg rounded-3xl relative overflow-hidden border border-white/10 dark:border-zinc-800 shadow-xl">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 drop-shadow-md"
      >
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          My Recent Blogs
        </span>
      </motion.h2>

      {/* Blogs */}
      <div className="w-full flex flex-col gap-10 z-10">
        {blogs.map((blog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * idx, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/20 dark:bg-zinc-800/30 border border-white/10 dark:border-zinc-700 rounded-xl p-6 backdrop-blur-lg shadow-md hover:shadow-xl hover:scale-[1.015] transition-all duration-300 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-pink-500 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  📝 Published on {blog.date}
                </p>
              </div>

              <motion.a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read full blog: ${blog.title}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 mt-2 sm:mt-0 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md hover:shadow-fuchsia-500/40 transition-transform group"
              >
                Read Full Blog
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://myfirstblog123.hashnode.dev/"
          target="_blank"
          className="inline-flex items-center px-6 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md hover:shadow-pink-500/30 transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More on Hashnode <ExternalLink size={20} className="ml-2" />
        </motion.a>
      </motion.div>
    </section>
  );
}