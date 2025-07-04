'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Product = {
  title: string;
  tech: string;
  description: string;
  updated: string;
  link?: string;
  i: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export const ProductCard = ({
  title,
  tech,
  description,
  updated,
  link,
  i,
}: Product) => {
  return (
    <motion.div
      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)]"
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl transition-transform duration-300 ease-in-out group bg-white dark:bg-zinc-900 hover:scale-[1.02] hover:shadow-purple-500/30 cursor-pointer p-6">
        <div className="flex flex-col h-full justify-between gap-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 italic mt-1">
            📅 Last Updated: {updated}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.split(',').map((t) => (
              <span
                key={t.trim()}
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-xs font-medium px-2.5 py-1 rounded-md"
              >
                {t.trim()}
              </span>
            ))}
{link && (
  <Link
    href={link}
    className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all"
  >
    View Product <ExternalLink size={16} />
  </Link>
)}

         </div>
        </div>
      </div>
    </motion.div>
  );
};
