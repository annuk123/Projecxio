"use client";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { SiNextdotjs, SiReact, SiJavascript, SiPython, SiNeovim, SiTailwindcss, SiPrisma, SiJouav, SiShadcnui, SiNodedotjs, SiThreedotjs, SiExpress, SiPostcss, SiPostgresql, SiPostman, SiLinux, SiGit, SiGithub } from "react-icons/si";


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
    { name: "Java", icon: <SiJouav />, colorFrom: "#ea580c", colorTo: "#c2410c", desc: "A robust, object-oriented programming language used in enterprise and Android development" },
    { name: "Git", icon: <SiGit />, colorFrom: "#ef4444", colorTo: "#dc2626", desc: "A distributed version control system for tracking code changes" },
    { name: "GitHub", icon: <SiGithub />, colorFrom: "#000000", colorTo: "#171717", desc: "A platform for hosting, collaborating on, and reviewing code repositories" },
    { name: "Linux", icon: <SiLinux />, colorFrom: "#6b7280", colorTo: "#4b5563", desc: "A family of open-source Unix-like operating systems used for development and deployment" },
  ];

export default function TechStack() {

    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 py-24 px-6 sm:px-16 flex flex-col items-center justify-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {techStack.map(({ name, icon, colorFrom, colorTo, desc }, i) => (
            <Tooltip.Provider key={name}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div
                    className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-medium text-purple-300 hover:text-purple-600 bg-gradient-to-br from-[${colorFrom}] to-[${colorTo}] shadow-md hover:shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out backdrop-blur-sm`}
                    whileHover={{ rotateY: 8 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    {icon}
                    {name}
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="z-50 rounded-md bg-black text-white px-3 py-2 text-sm shadow-md animate-fadeIn">
                    {desc}
                    <Tooltip.Arrow className="fill-black" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </motion.div>
      </section>
    )
}