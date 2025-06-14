"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar/page";
import { useState } from "react";
import ProjectDrawer from "@/components/projectDrawer/projectDrawer";

type Project = {
  title: string;
  tech: string;
  description: string;
  video?: string;
  image?: string;
  link?: string;
  i?: number;
    onClick?: () => void; // add this line
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const SectionTitle = ({ title }: { title: string }) => (
  <motion.h2
    className="text-3xl sm:text-4xl py-15 font-bold mb-8 text-center text-gray-800 dark:text-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    custom={0}
  >
    {title}
  </motion.h2>
);


const projectsData = {
  frontend: [
    {
      title: "Pikify",
      tech: "HTML, CSS, JS",
      description: "Wallpaper world with High resolution images.",
      video:
        "https://res.cloudinary.com/dpiobntr2/video/upload/v1745995935/vyt7tp7l1bnjnbxyzjcj.mp4",
      link: "https://gallary-photoshop.vercel.app/",
    },

    {
      title: "My Blog",
      tech: "HTML, CSS, Js",
      description: "Pure CSS art showcase.",
      video:
        "https://res.cloudinary.com/dpiobntr2/video/upload/v1745995939/hmvph9yzf030ns8jow27.mp4",
      link: "https://blog-y9y4.vercel.app/",
    },
    {
      title: "My Music",
      tech: "HTML, CSS, Js",
      description: "Pure CSS art showcase.",
      video:
        "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996033/wyheigrromnxcyxtxc17.mp4",
      link: "https://music-player-annu.vercel.app/",
    },
    {
      title: "Gift Shop",
      tech: "HTML, CSS, Js",
      description: "Pure CSS art showcase.",
      video:
        "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996057/bqauahzhazatuxlfybmk.mp4",
      link: "https://gift-shop-annu.netlify.app/",
    },
    {
      title: "Registration Form",
      tech: "HTML, CSS",
      description: "Pure CSS art showcase.",
      video:
        "https://res.cloudinary.com/dpiobntr2/video/upload/v1745995906/ft0gdrz8kd5yfc3kku9d.mp4",
      link: "https://registration-form-rosy.vercel.app/",
    },
    {
      title: "Merry Christmas",
      tech: "HTML, CSS",
      description: "Pure CSS art showcase.",
      video:
        "https://res.cloudinary.com/dpiobntr2/video/upload/v1745995911/gnyeeltmnya5jcsn3ktf.mp4",
      link: "https://merry-christmas-using-html-css.vercel.app/",
    },
  ],
  fullstack: {
available: [
  {
    title: "Qflows",
    tech: "Next.js, TypeScript, NeonDB, Prisma ORM, Framer Motion, Tailwind CSS",
    description:
      "An advanced code visualization platform that brings algorithms to life through interactive, step-by-step execution views — perfect for learners and educators.",
    video:
      "https://res.cloudinary.com/dpiobntr2/video/upload/v1745995919/vrigjcrdprfwilzhiwor.mp4",
    link: "https://qflows-annukumari.vercel.app/",
  },
  {
    title: "Crisis Sync",
    tech: "Next.js, Django, PostgreSQL, Framer Motion, Tailwind CSS",
    description:
      "A real-time disaster response dashboard that monitors, detects, and syncs critical events globally to enhance crisis awareness and emergency coordination.",
    video:
      "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4",
    link: "https://crisis-sync.vercel.app/",
  },
  {
    title: "AlgoFlow",
    tech: "Next.js, TypeScript, Convex, Tailwind CSS, Framer Motion, Shadcn",
    description:
      "A powerful data structures and algorithms visualizer designed to simplify complex logic through clean animations, intuitive controls, and a modern UI experience.",
    video:
      "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996059/seprhgoe0uguplcloopl.mp4",
    link: "https://algoflow-three.vercel.app/",
  },
],

    comingSoon: [
      {
        title: "Eloqu AI",
        tech: "Next.js, TypeScript, Convex, Novel Editor",
        description: "",
        image:
          "https://res.cloudinary.com/dpiobntr2/image/upload/v1745996570/lmbl3m49icmycnv2xiiu.avif",
        link: "#",
      },
      {
        title: "Chain Nova",
        tech: "Next.js, Sonar API",
        description: "",
        image:
          "https://res.cloudinary.com/dpiobntr2/image/upload/v1745996570/lmbl3m49icmycnv2xiiu.avif",
        link: "#",
      },
      {
        title: "Hearo",
        tech: "Next.js, Convex, Sonar API",
        description: "",
        image:
          "https://res.cloudinary.com/dpiobntr2/image/upload/v1745996570/lmbl3m49icmycnv2xiiu.avif",
        link: "#",
      },
    ],
  },
};

const ProjectCard = ({
  title,
  tech,
  description,
  video,
  image,
  onClick,
  i,
}: Project) => (
<motion.div
  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)]"
  custom={i}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  onClick={onClick}
>
  <Card
    className="rounded-3xl overflow-hidden bg-white/20 dark:bg-zinc-900/30 backdrop-blur-xl shadow-md border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-in-out cursor-pointer h-full flex flex-col group"
  >
    {/* Media Section */}
    <div className="relative w-full h-52 overflow-hidden">
      {video ? (
        <video
          src={video}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      ) : null}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Card Content */}
    <CardContent className="flex flex-col flex-grow p-5">
      
      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-zinc-800 dark:text-zinc-100 transition-colors">
        {title}
      </h3>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.split(',').map((t) => (
          <span
            key={t.trim()}
            className="bg-purple-200 text-purple-800 dark:bg-zinc-700 dark:text-purple-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
          >
            {t.trim()}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* View Details CTA */}
      <span className="mt-auto inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm sm:text-base font-medium hover:underline group-hover:translate-x-1 transition-transform duration-300">
        View Details →
      </span>
    </CardContent>
  </Card>
</motion.div>


);

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
const [drawerOpen, setDrawerOpen] = useState(false);

  return (
   <main className="min-h-screen w-full py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 bg-grid-dark">
  
  {/* Navbar */}
  <Navbar />

  {/* Full Stack Projects Section */}
  <section className="mb-24">
    <SectionTitle title="Full Stack Projects" />

    <h3 className="text-2xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400">
      Available Projects
    </h3>
    <div className="flex flex-wrap gap-6 justify-center">
      {projectsData.fullstack.available.map((p, i) => (
        <ProjectCard
          key={p.title}
          {...p}
          i={i}
          onClick={() => {
            setSelectedProject(p);
            setDrawerOpen(true);
          }}
        />
      ))}
    </div>
  </section>

  {/* Frontend Projects Section */}
  <section className="mb-24">
    <SectionTitle title="Frontend Projects" />

    <div className="flex flex-wrap gap-6 justify-center">
      {projectsData.frontend.map((p, i) => (
        <ProjectCard
          key={p.title}
          {...p}
          i={i}
          onClick={() => {
            setSelectedProject(p);
            setDrawerOpen(true);
          }}
        />
      ))}
    </div>
  </section>

  {/* Coming Soon Section */}
  <section className="mb-24">
    <h3 className="text-2xl font-bold mb-8 text-center text-gray-600 dark:text-gray-400">
      Coming Soon
    </h3>

    <div className="flex flex-wrap gap-6 justify-center">
      {projectsData.fullstack.comingSoon.map((p, i) => (
        <ProjectCard key={p.title} {...p} i={i} />
      ))}
    </div>
  </section>

  {/* Drawer for Project Details */}
  <ProjectDrawer
    open={drawerOpen}
    onOpenChange={(open) => {
      setDrawerOpen(open);
      if (!open) setSelectedProject(null);
    }}
    project={selectedProject}
  />
</main>

  );
}

