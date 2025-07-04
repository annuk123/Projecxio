"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/Footer/page";
import Reveal from "@/components/reveal/reveal";
import FootDivider from "@/components/footdiv/foot";

const categories = ["All", "Wins", "Gadgets", "Events", "Swags", "Travel", "Meetups"];

const galleryItems = [
  {
    title: "Won 1st prize in poster making🏆",
    category: "Wins",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751583536/microsoft_ulaib8.jpg",
  },
  {
    title: "Won Swag from Appwrite 🎉",
    category: "Wins",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751583526/appwrite_mvd2sc.jpg",
  },
  {
    title: "Attended GDG cloud DevFest Kolkata 2024",
    category: "Events",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582906/WhatsApp_Image_2024-12-23_at_12.13.01_AM_xl6o1i.jpg",
  },
  {
    title: "GDG Cloud Kolkata DevFest 2024",
    category: "Events",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582860/WhatsApp_Image_2024-12-24_at_12.07.55_AM_x5lmwt.jpg",
  },
  {
    title: "NicoPark Kolkata Meetup",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582733/WhatsApp_Image_2024-12-28_at_1.51.34_AM_whfv5t.jpg",
  },
  {
    title: "Food at GDG Cloud Kolkata DevFest 2024",
    category: "Events",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582686/WhatsApp_Image_2024-12-28_at_1.56.52_AM_wpioua.jpg",
  },
    {
    title: "IITM B.S Degree, Ranchi Meetup 2.0",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582662/WhatsApp_Image_2025-01-04_at_2.52.01_AM_irhhfi.jpg",
  },
  {
    title: "Parasnath Temple Visit",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582552/WhatsApp_Image_2025-01-09_at_2.47.59_AM_iaoq1a.jpg",
  },
  {
    title: "Visited Parasnath Hills",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582597/WhatsApp_Image_2025-01-09_at_2.48.06_AM_akaufl.jpg",
  },
  {
    title: "IITM B.S Degree, Ranchi Meetup",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582512/WhatsApp_Image_2025-01-14_at_9.05.15_PM_kpt5ld.jpg",
  },
  {
    title: "Swag from GDG Cloud Kolkata DevFest 2024",
    category: "Swags",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582443/WhatsApp_Image_2024-12-24_at_12.07.54_AM_lmyhml.jpg",
  },
  {
    title: "Parasnath Hills",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582407/WhatsApp_Image_2025-01-09_at_2.47.58_AM_rmupc0.jpg",
  },
  {
    title: "Monitor and laptop setup",
    category: "Gadgets",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751586452/laptop_y3xce2.jpg",
  },
  {
    title: "BitCoin Day 2025",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751582304/WhatsApp_Image_2025-06-04_at_2.54.50_PM_xoujox.jpg",
  },


  {
    title: "Waterfall of my city",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751580637/WhatsApp_Image_2025-06-29_at_9.51.05_PM_laofqm.jpg",
  },
  {
    title: "Waterfall",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751580704/WhatsApp_Image_2025-06-29_at_7.32.35_PM_1_ri4red.jpg",
  },
  {
    title: "Won Appwrite Keyboard",
    category: "Wins",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751580747/WhatsApp_Image_2025-06-22_at_5.30.46_PM_zzzvjz.jpg",
  },
  {
    title: "Appwrite Keyboard",
    category: "Gadgets",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751580778/WhatsApp_Image_2025-06-22_at_5.30.42_PM_koauwd.jpg",
  },
  {
    title: "Ranchi Travel",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751581161/WhatsApp_Image_2025-06-26_at_12.36.24_AM_erxii1.jpg",
  },
  {
    title: "Clg Annual Fest 2025 Day 1",
    category: "Events",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751581235/WhatsApp_Image_2025-06-09_at_12.23.29_AM_owfqh9.jpg",
  },
  {
    title: "Clg Annual Fest 2025 Day 3",
    category: "Events",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751581272/WhatsApp_Image_2025-06-09_at_12.23.28_AM_iz5s9l.jpg",
  },
  {
    title: "Discord Eddie's Space for Public Speaking",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751585233/discord_sgb2bx.jpg",
  },
  {
    title: "Nature Photography",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751585343/WhatsApp_Image_2025-06-29_at_9.51.03_PM_n81xf4.jpg",
  },
  {
    title: "Parsnath Hills beauty",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751585631/WhatsApp_Image_2025-01-09_at_2.48.07_AM_bpnclp.jpg",
  },
  {
    title: "Dog",
    category: "Wins",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751586240/dog_alqk6v.jpg",
  },
  {
    title: "Waterfall           ",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751585478/WhatsApp_Image_2025-06-29_at_9.51.06_PM_1_gfo8ea.jpg",
  },
  {
    title: "Nature beauty",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751586258/tree_ijygal.jpg",
  },
  {
    title: "Clg View",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751586434/nature_qnockb.jpg",
  },
  {
    title: "Ranchi Travels",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751586647/WhatsApp_Image_2025-07-04_at_5.11.15_AM_jxopy0.jpg",
  },
  {
    title: "Station View",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1751586634/WhatsApp_Image_2025-07-04_at_5.16.45_AM_xn3zpz.jpg",
  },
];


export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");
const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="min-h-screen px-6 sm:px-16 py-24 bg-black text-white relative z-0">
      <Navbar />

      {/* Section Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-pink-500 drop-shadow-lg">
        Explore My Journey
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 hover:scale-105 ${
              activeTab === tab
                ? "bg-pink-600 border-pink-600 text-white"
                : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Popup */}
<AnimatePresence>
  {hoveredImage && (
    <motion.div
      key="popup"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center px-4 sm:px-8 cursor-zoom-out"
      onClick={() => setHoveredImage(null)} // close on background click
    >
      <div
        className="w-full max-w-3xl max-h-[80vh] overflow-hidden rounded-xl bg-zinc-900 p-4 border border-zinc-700 shadow-xl"
        onClick={(e) => e.stopPropagation()} // prevent close if click inside
      >
        <Image
          src={hoveredImage}
          alt="Full Image"
          width={1000}
          height={700}
          className="rounded-lg mx-auto object-contain max-h-[65vh] w-auto h-auto"
        />
        <p className="text-center text-sm text-zinc-300 mt-3">
          Click outside to close
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredItems.map(({ title, image, category }) => (
           <motion.div
  key={title}
  layout
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 30 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
  onClick={() => setHoveredImage(image)} // 👈 use click to open
  className="cursor-zoom-in rounded-3xl overflow-hidden bg-white/10 border border-zinc-700 hover:shadow-pink-500/40 hover:shadow-md transition-all group backdrop-blur-md relative"
>

              {/* Thumbnail */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  placeholder="blur"
                  blurDataURL={image}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Caption */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {title}
                </h3>
                <p className="text-xs text-zinc-400">#{category}</p>
              </div>
            </motion.div>
          ))}

        </AnimatePresence>
        
      </motion.div>
      {/* Footer */}
        <FootDivider flip fillColor="#000000" />
          <footer className="w-full relative z-10 py-10 bg-black">
            <Reveal>
              <Footer />
            </Reveal>
          </footer>
    </section>
  );
}