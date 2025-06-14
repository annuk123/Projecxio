"use client";

import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  SiNextdotjs, SiReact, SiJavascript, SiPython, SiNeovim,
  SiTailwindcss, SiPrisma, SiShadcnui, SiNodedotjs,
  SiThreedotjs, SiExpress, SiPostcss, SiPostgresql, SiPostman,
  SiLinux, SiGit, SiGithub
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiFigma } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


const techStack = [
  { name: "Next.js", icon: <SiNextdotjs />, colorFrom: "#000000", colorTo: "#333333", desc: "A fullstack React framework for building fast, SEO-friendly, scalable web apps" },
  { name: "React", icon: <SiReact />, colorFrom: "#38bdf8", colorTo: "#0ea5e9", desc: "A JavaScript library for building modern, component-based user interfaces" },
  { name: "JavaScript", icon: <SiJavascript />, colorFrom: "#facc15", colorTo: "#eab308", desc: "The core scripting language of the web, enabling interactivity and dynamic content" },
  { name: "Python", icon: <SiPython />, colorFrom: "#3b82f6", colorTo: "#1d4ed8", desc: "A versatile, beginner-friendly programming language used in data, AI, and web" },
  { name: "NeonDB", icon: <SiNeovim />, colorFrom: "#22c55e", colorTo: "#16a34a", desc: "A modern serverless PostgreSQL database with branching and scaling support" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, colorFrom: "#06b6d4", colorTo: "#0ea5e9", desc: "A utility-first CSS framework for rapidly building custom user interfaces" },
  { name: "Prisma", icon: <SiPrisma />, colorFrom: "#0ea5e9", colorTo: "#2563eb", desc: "A next-generation ORM for Node.js and TypeScript" },
  { name: "Shadcn/ui", icon: <SiShadcnui />, colorFrom: "#6366f1", colorTo: "#8b5cf6", desc: "Beautifully designed components built with Radix UI and Tailwind CSS" },
  { name: "Node.js", icon: <SiNodedotjs />, colorFrom: "#16a34a", colorTo: "#15803d", desc: "A runtime environment for executing JavaScript server-side" },
  { name: "Express.js", icon: <SiExpress />, colorFrom: "#6b7280", colorTo: "#374151", desc: "A minimal and flexible Node.js web application framework" },
  { name: "Three.js", icon: <SiThreedotjs />, colorFrom: "#0f172a", colorTo: "#1e293b", desc: "A powerful 3D JavaScript library for rendering 3D content in the browser" },
  { name: "PostCSS", icon: <SiPostcss />, colorFrom: "#db2777", colorTo: "#be185d", desc: "A tool for transforming CSS with JavaScript plugins" },
  { name: "PostgreSQL", icon: <SiPostgresql />, colorFrom: "#2563eb", colorTo: "#1d4ed8", desc: "A powerful, open-source object-relational database system" },
  { name: "Postman", icon: <SiPostman />, colorFrom: "#f97316", colorTo: "#ea580c", desc: "An API platform for building, testing, and managing APIs efficiently" },
  { name: "Java", icon: <FaJava />, colorFrom: "#ea580c", colorTo: "#c2410c", desc: "A robust, object-oriented programming language used in enterprise and Android development" },
  { name: "Git", icon: <SiGit />, colorFrom: "#ef4444", colorTo: "#dc2626", desc: "A distributed version control system for tracking code changes" },
  { name: "GitHub", icon: <SiGithub />, colorFrom: "#000000", colorTo: "#171717", desc: "A platform for hosting, collaborating on, and reviewing code repositories" },
  { name: "Linux", icon: <SiLinux />, colorFrom: "#6b7280", colorTo: "#4b5563", desc: "A family of open-source Unix-like operating systems used for development and deployment" },
  { name: "Figma", icon: <SiFigma />, colorFrom: "#fbbf24", colorTo: "#f59e0b", desc: "A web-based UI/UX design tool for collaborative design and prototyping" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion />, colorFrom: "#4ade80", colorTo: "#22c55e", desc: "A production-ready motion library for React" },
  { name: "TypeScript", icon: <SiTypescript />, colorFrom: "#3b82f6", colorTo: "#1d4ed8", desc: "A superset of JavaScript that adds static types" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (


<section className="w-full bg-white/20 rounded-3xl dark:bg-zinc-900/20 py-24 px-6 sm:px-16 flex flex-col items-center justify-center">
  {/* Section Title */}
  <motion.h2
    className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    My Tech Stack
  </motion.h2>

  {/* Animated Divider */}
  <motion.div
    className="w-24 h-1 mb-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    viewport={{ once: true }}
  />

  {/* Tech Grid */}
  <motion.div
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl"
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {techStack.map(({ name, icon, colorFrom, colorTo, desc }) => (
      <Tooltip.Provider key={name}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <motion.div
              variants={item}
              className={`relative group px-5 py-4 rounded-xl text-md sm:text-lg font-semibold text-purple-400 cursor-pointer
              bg-gradient-to-br from-[${colorFrom}] to-[${colorTo}]
              shadow-md hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-md`}
              whileHover={{ scale: 1.08 }}
            >
              {/* Floating Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 blur-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 -z-10" />
              <div className="flex items-center gap-3 justify-center">
                {icon}
                {name}
              </div>
            </motion.div>
          </Tooltip.Trigger>

          {/* Tooltip */}
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              sideOffset={8}
              className="z-50 rounded-md bg-black/90 text-white px-3 py-2 text-sm shadow-lg backdrop-blur-sm animate-fadeIn max-w-[200px] text-center"
            >
              {desc}
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    ))}
  </motion.div>
</section>

  );
}
