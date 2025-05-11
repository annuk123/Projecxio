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
        video:
          'https://res.cloudinary.com/dpiobntr2/video/upload/v1745995919/vrigjcrdprfwilzhiwor.mp4',
        link: 'https://qflows-annukumari.vercel.app/',
      },
      {
        title: 'Crisis Sync',
        tech: 'Next.js, Django, PostgreSQL',
        description: 'Real-time disaster detection platform.',
        video:
          'https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4',
        link: 'https://crisis-sync.vercel.app/',
      },
      {
        title: 'AlgoFlow',
        tech: 'Next.js, TypeScript, Convex',
        description: 'DSA and Algorithms visualizer.',
        video:
          'https://res.cloudinary.com/dpiobntr2/video/upload/v1745996059/seprhgoe0uguplcloopl.mp4',
        link: 'https://algoflow-three.vercel.app/',
      },
    ],
  },
};

export default function Projects() {
  return (
    <section className="w-full px-6 sm:px-16 py-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 drop-shadow-md">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          My Recent Projects
        </span>
      </h2>

      <div className="flex flex-wrap gap-6 justify-center mb-16 w-full">
        {projectsData.fullstack.available.map((p, i) => (
          <ProjectCard key={p.title} {...p} i={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="/projects"
          target="_blank"
          className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg"
        >
          View More Projects <ExternalLink size={20} />
        </a>
      </motion.div>
    </section>
  );
}
