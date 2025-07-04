"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ProductCard } from "@/components/productsPage/ProductCard";
import Link from "next/link";

const productsData = {
  tools: [
    {
      title: "AlgoFlow",
      tech: "Next.js, TypeScript, Convex",
      description: "DSA and Algorithms visualizer.",
      updated: "June 27, 2025",
      link: "https://www.algoflux.tech/",
    },
    {
      title: "PixelUi Room",
      tech: "Next.js, TypeScript, Convex",
      description:
        "Step into the PixelUI Room — a dynamic, immersive space where beautifully crafted UI components come to life.",
      updated: "July 3, 2025",
      link: "https://pixelui-room.vercel.app/",
    },
  {
    title: "cmdease",
    tech: "Node.js, Convex, TypeScript",
    description:
      "A command-line tool with offline support, Convex integration, and task automation features.",
    updated: "June 23, 2025",

    link: "https://www.npmjs.com/package/cmdease",
  },
  ],
};

export default function ProductsPage() {
  return (
    <section className="w-full px-6 sm:px-16 py-24 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 drop-shadow-md"
      >
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          My Recent Products
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap gap-8 justify-center mb-20 w-full"
      >
        {productsData.tools.map((product, index) => (
          <ProductCard key={product.title} {...product} i={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
{/* <Link
  href="/products"
>
  <span className="flex items-center gap-2">
    View More Products 
  </span>
</Link> */}

 <Link
                href="/products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 mt-2 sm:mt-0 rounded-full font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-md hover:shadow-fuchsia-500/40 transition-transform group"
              >
                Read Full Blog
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
      </motion.div>
    </section>
  );
}
