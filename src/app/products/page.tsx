"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar/page";
import ProjectDrawer from "@/components/projectDrawer/projectDrawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/page";
import Reveal from "@/components/reveal/reveal";
import FootDivider from "@/components/footdiv/foot";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const FILTERS = [
  "All",
  "CLI Tools",
  "Education Platforms",
  "UI Libraries",
  "B2B Products",
  "Chrome Extensions",
  "VS Code Extensions",
  "Others",
];

type Project = {
  title: string;
  tech: string;
  description: string;
  category: string;
  video: string;
  link: string;
};

const projectsData: Project[] = [
  {
    title: "AlgoFlow",
    tech: "Next.js, TypeScript, Convex",
    description:
      "DSA and Algorithms visualizer designed to simplify complex logic with clean animations and intuitive UI.",
    category: "Education Platforms",
    video:
      "https://www.youtube.com/embed/hnE_cfJZvyM",
    link: "https://www.algoflux.tech//",
  },
  {
    title: "Pixel UI",
    tech: "Next.js, Tailwind, Shadcn, Three.js",
    description: "Beautiful and functional UI component library.",
    category: "UI Libraries",
    video:
      "https://www.youtube.com/embed/cKZ6U5pn4Hk",
    link: "https://pixelui-room.vercel.app/",
  },
  {
    title: "cmdease",
    tech: "Node.js, Convex, TypeScript",
    description:
      "A command-line tool with offline support, Convex integration, and task automation features.",
    category: "CLI Tools",
    video:
      "https://www.youtube.com/embed/qKb_gSPxzv8",
    link: "https://www.npmjs.com/package/cmdease",
  },
  {
    title: "Qflows",
    tech: "Next.js, Convex, TypeScript",
    description: "Step-by-step code visualizer app that helps you understand complex algorithms and data structures.",
    category: "Education Platforms",
    video:
      "https://www.youtube.com/embed/gvK5fqSjEmI",
    link: "https://qflows-annukumari.vercel.app/",
  },
   {
    title: "Crisis Sync",
    tech: "Next.js, TypeScript, Django, postgreSQL",
    description: "Real-time crisis management tool for organizations.",
    category: "B2B Products",
    video:
      "https://www.youtube.com/embed/Z3_UKPD1HTk",
    link: "https://crisis-sync.vercel.app/",
  },
  //    {
  //   title: "Pikify",
  //   tech: "HTML, CSS, JavaScript",
  //   description: "Real-time image gallery app for showcasing photos.",
  //   category: "Others",
  //   video:
  //     "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4",
  //   link: "https://gallary-photoshop.vercel.app/",
  // },

  //     {
  //   title: "Blog app",
  //   tech: "HTML, CSS, JavaScript",
  //   description: "A simple my blog app with a clean design and easy navigation.",
  //   category: "Others",
  //   video:
  //     "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4",
  //   link: "https://blog-y9y4.vercel.app/",
  // },
  //       {
  //   title: "Music Player",
  //   tech: "HTML, CSS, JavaScript",
  //   description: "A simple music player app with a clean design and easy navigation.",
  //   category: "Others",
  //   video:
  //     "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4",
  //   link: "https://music-player-annu.vercel.app/",
  // },
  //         {
  //   title: "Gift Shop",
  //   tech: "HTML, CSS, JavaScript",
  //   description: "A simple gift shop app with a clean design and easy navigation.",
  //   category: "Others",
  //   video:
  //     "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4",
  //   link: "https://gift-shop-annu.netlify.app/",
  // },
  //           {
  //   title: "Registration Form",
  //   tech: "HTML, CSS",
  //   description: "A simple registration form app with a clean design and easy navigation.",
  //   category: "Others",
  //   video:
  //     "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4",
  //   link: "https://registration-form-rosy.vercel.app/",
  // },
  //             {
  //   title: "Merry Christmas",
  //   tech: "HTML, CSS",
  //   description: "A simple Merry Christmas app with a clean design and easy navigation.",
  //   category: "Others",
  //   video:
  //     "https://res.cloudinary.com/dpiobntr2/video/upload/v1745996025/ju2iq5hplitnnx4gcvmj.mp4",
  //   link: "https://merry-christmas-using-html-css.vercel.app/",
  // },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
<main className="min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900">
  <Navbar />

  <section className="px-6 sm:px-12 lg:px-24 py-26">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
    >
      Explore My Products
    </motion.h1>

    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {FILTERS.map((f) => (
        <Button
          key={f}
          variant={filter === f ? "default" : "outline"}
          onClick={() => setFilter(f)}
          className={cn(
            "text-sm px-4 py-1 rounded-full",
            filter === f && "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          )}
        >
          {f}
        </Button>
      ))}
    </div>

    {/* Project Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((project, i) => (
        <motion.div
          key={project.title}
          custom={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={() => {
            setSelectedProject(project);
            setDrawerOpen(true);
          }}
          className="cursor-pointer"
        >
          <Card className="rounded-3xl overflow-hidden border bg-white dark:bg-zinc-900 shadow hover:shadow-xl hover:scale-[1.03] transition-all">
            <div className="relative w-full h-52 overflow-hidden">
              <iframe
                src={project.video}
                loading="lazy" //  Lazy loading iframe
                className="w-full h-full"
                title={project.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <CardContent className="p-5">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                {project.tech}
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 line-clamp-3">
                {project.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>

  {/* Drawer only rendered if selectedProject is available */}
  {selectedProject && (
    <ProjectDrawer
      open={drawerOpen}
      onOpenChange={(open) => {
        setDrawerOpen(open);
        if (!open) setSelectedProject(null);
      }}
      project={selectedProject}
    />
  )}
  {/* Footer */}
  <FootDivider flip fillColor="#000000" />
   <footer className="w-full relative z-10 py-10 bg-black">
        <Reveal>
          <Footer />
        </Reveal>
      </footer>
</main>

  );
}
