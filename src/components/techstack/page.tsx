'use client';

import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  SiNextdotjs, SiReact, SiJavascript, SiPython, SiNeovim,
  SiTailwindcss, SiPrisma, SiShadcnui, SiNodedotjs,
  SiThreedotjs, SiExpress, SiPostcss, SiPostgresql, SiPostman,
  SiLinux, SiGit, SiGithub, SiFigma, SiTypescript
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';


const techStack = [
  { name: "Next.js", icon: <SiNextdotjs />, desc: "Fullstack React framework" },
  { name: "React", icon: <SiReact />, desc: "Component-based UI library" },
  { name: "JavaScript", icon: <SiJavascript />, desc: "Scripting language" },
  { name: "Python", icon: <SiPython />, desc: "General-purpose language" },
  { name: "NeonDB", icon: <SiNeovim />, desc: "Serverless PostgreSQL" },
  { name: "Tailwind", icon: <SiTailwindcss />, desc: "Utility-first CSS" },
  { name: "Prisma", icon: <SiPrisma />, desc: "ORM for TypeScript" },
  { name: "shadcn/ui", icon: <SiShadcnui />, desc: "Styled Radix components" },
  { name: "Node.js", icon: <SiNodedotjs />, desc: "JS runtime" },
  { name: "Express", icon: <SiExpress />, desc: "Node.js framework" },
  { name: "Three.js", icon: <SiThreedotjs />, desc: "3D JS library" },
  { name: "PostCSS", icon: <SiPostcss />, desc: "CSS transformer" },
  { name: "PostgreSQL", icon: <SiPostgresql />, desc: "Database system" },
  { name: "Postman", icon: <SiPostman />, desc: "API testing tool" },
  { name: "Java", icon: <FaJava />, desc: "Enterprise language" },
  { name: "Git", icon: <SiGit />, desc: "Version control" },
  { name: "GitHub", icon: <SiGithub />, desc: "Code hosting" },
  { name: "Linux", icon: <SiLinux />, desc: "Open-source OS" },
  { name: "Figma", icon: <SiFigma />, desc: "Design tool" },
  { name: "TypeScript", icon: <SiTypescript />, desc: "Typed JS superset" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section className="w-full py-15 text-black dark:text-white px-6 sm:px-16 flex flex-col items-center justify-center bg-gradient-to-b from-white/30 to-zinc-100/20 dark:from-black/20 dark:to-zinc-900/10 backdrop-blur-lg rounded-3xl relative overflow-hidden border border-white/10 dark:border-zinc-800 shadow-xl">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tools I Build With
      </motion.h2>

      <motion.div
        className="w-24 h-1 mb-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
          {techStack.map(({ name, icon, desc }) => (
            <Tooltip.Provider key={name}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div
                    variants={item}
                    className="group bg-gradient-to-br from-black via-zinc-900/30 to-zinc-950 backdrop-blur-md border border-white/10 text-white/50 px-8 hover:rotate-[5deg] py-3 rounded-xl text-xs sm:text-sm font-medium hover:scale-105 text-center shadow hover:shadow-pink-500/20"
                  >
                    <div className="flex flex-row items-center justify-center gap-1">
                      <div className="text-lg sm:text-2xl">{icon}</div>
                      <span>{name}</span>
                    </div>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    sideOffset={6}
                    className="z-50 rounded bg-white text-black px-3 py-1 text-xs shadow-lg backdrop-blur-sm max-w-[180px] text-center"
                  >
                    {desc}
                    <Tooltip.Arrow className="fill-white" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
