"use client";

import { ProjectCard } from "./projectCard/projectCard";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projectsData = {
  fullstack: {
    available: [
      {
        title: 'Qflows',
        tech: 'Next.js, TypeScript, NeonDB',
        description: 'Step-by-step Code Visualizer App',
        video: 'https://res.cloudinary.com/dpiobntr2/video/upload/v1745995919/vrigjcrdprfwilzhiwor.mp4',
        link: 'https://qflows-annukumari.vercel.app/',
      },
      {
        title: 'Crisis Sync',
        tech: 'Next.js, Django, PostgreSQL',
        description: 'Real-time disaster detection platform.',
        video: 'https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4',
        link: 'https://crisis-sync.vercel.app/',
      },
      {
        title: 'AlgoFlow',
        tech: 'Next.js, TypeScript, Convex',
        description: 'DSA and Algorithms visualizer.',
        video: 'https://res.cloudinary.com/dpiobntr2/video/upload/v1745996059/seprhgoe0uguplcloopl.mp4',
        link: 'https://algoflow-three.vercel.app/',
      },
    ],
  },
};

export default function Projects() {
  return (
    <section className="w-full px-6 sm:px-16 py-24 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 drop-shadow-md"
      >
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          My Recent Projects
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="flex flex-wrap gap-8 justify-center mb-20 w-full"
      >
        {projectsData.fullstack.available.map((project, index) => (
          <ProjectCard key={project.title} {...project} i={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-7 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
        >
          View More Projects <ExternalLink size={20} />
        </a>
      </motion.div>
    </section>
  );
}
