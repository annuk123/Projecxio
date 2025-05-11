"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import clsx from "clsx";

type Project = {
  title: string;
  tech: string;
  description: string;
  video?: string;
  image?: string;
  link?: string;
};

export default function ProjectDrawer({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}) {
useEffect(() => {
  if (!project) {
    onOpenChange(false);
  }
}, [project, onOpenChange]);


  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="left">
        
      <DrawerContent
        className={clsx(
          "p-4 max-w-lg w-full h-full fixed left-0 top-0 bottom-0 z-50 bg-white dark:bg-zinc-950 shadow-xl border-r border-zinc-200 dark:border-zinc-800 flex flex-col"
        )}
      >

       

       <DrawerHeader className="flex items-start justify-between mb-2 space-x-4">
        <div className="flex flex-row mb-4 ">
         <p className="text-sm mr-30  text-zinc-500 dark:text-zinc-400 ">
                Back To Projects </p>

         <DrawerClose className="ml-14 ">
    <X className="w-6 h-6 text-zinc-600 dark:text-zinc-300 hover:text-red-500 transition" />
  </DrawerClose>
  </div>
  {/* Title + Subtitle */}
  <div className="flex-1">
    <DrawerTitle className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
      {project?.title}
    </DrawerTitle>
    
  {/* </div> */}
    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
      Discover featured and new projects
    </p>
  </div>

</DrawerHeader>


        {/* Media */}
        {project?.video ? (
          <video
            src={project.video}
            className="w-full h-48 object-cover rounded-lg mt-2"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : project?.image ? (
          <div className="relative w-full h-48 mt-2 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        ) : null}

        {/* Description */}
        <div className="mt-6 flex flex-col gap-4 overflow-y-auto">
          {/* About Section */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-1">
              About
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project?.description}
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project?.tech.split(",").map((t) => (
                <span
                  key={t.trim()}
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </section>

          {/* Project Link */}
          {project?.link && (
            <section>
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                Website
              </h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all"
              >
                Visit Project <ExternalLink size={16} />
              </a>
            </section>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
