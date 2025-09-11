"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar/page";


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
  {
    title: "GDG Cloud Kolkata Team Dinner Party 2025",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353567/WhatsApp_Image_2025-08-05_at_5.46.24_AM_u2qscs.jpg",
  },
    {
    title: "Team Dinner Party 2025",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353577/WhatsApp_Image_2025-08-05_at_5.46.23_AM_aokury.jpg",
  },
  {
    title: "CCD Cloud Kolkata Volunteer ID",
    category: "Swags",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353558/WhatsApp_Image_2025-08-05_at_5.46.22_AM_saz99g.jpg",
  },
  {
    title: "CCD Cloud Kolkata Volunteer prize",
    category: "Wins",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353589/WhatsApp_Image_2025-08-05_at_5.46.22_AM_1_sax0d8.jpg",
  },
  {
    title: "aam panna",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353612/WhatsApp_Image_2025-08-05_at_5.46.21_AM_fznrs4.jpg",
  },
    {
    title: "Taj Taal kutir Kolkata",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353613/WhatsApp_Image_2025-08-05_at_5.46.20_AM_t2mycr.jpg",
  },
  {
    title: "Amazing view of Taj Taal kutir Kolkata",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353613/WhatsApp_Image_2025-08-05_at_5.46.19_AM_mqhqlc.jpg",
  },
  {
    title: "Taj Taal kutir",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353613/WhatsApp_Image_2025-08-05_at_5.46.18_AM_1_wechlj.jpg",
  },
  {
    title: "CCD Cloud Kolkata Lunch",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353613/WhatsApp_Image_2025-08-05_at_5.46.16_AM_qu4urv.jpg",
  },
  {
    title: "Eco Park Kolkata",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353614/WhatsApp_Image_2025-08-05_at_5.46.18_AM_mktj1e.jpg",
  },

  {
    title: "Visit to Eco Park Kolkata",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353614/WhatsApp_Image_2025-08-05_at_5.46.17_AM_s8t0ix.jpg",
  },
  {
    title: "Soup at CCD Cloud Kolkata",
    category: "Travel",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353614/WhatsApp_Image_2025-08-05_at_5.46.15_AM_1_tancsk.jpg",
  },
  {
    title: "Crowd at CCD Cloud Kolkata",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353615/WhatsApp_Image_2025-08-05_at_5.46.15_AM_v3fkpi.jpg",
  },
  {
    title: "Kolkata's weather mood",
    category: "Nature",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353615/WhatsApp_Image_2025-08-05_at_5.46.14_AM_1_gwaen2.jpg",
  },
  {
    title: "Statue",
    category: "Aesthetics",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353631/WhatsApp_Image_2025-08-05_at_5.46.17_AM_1_kup3sd.jpg",
  },
  {
    title: "All Volunteers of CCD Cloud Kolkata",
    category: "Meetups",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353655/WhatsApp_Image_2025-08-05_at_5.46.14_AM_vrl8w1.jpg",
  },
  {
    title: "CCD Cloud Kolkata",
    category: "Events",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353659/WhatsApp_Image_2025-08-05_at_5.46.00_AM_dy0trr.jpg",
  },
  {
    title: "CCD Cloud Kolkata Volunteers",
    category: "Events",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353659/WhatsApp_Image_2025-08-05_at_5.46.06_AM_sjqk8e.jpg",
  },
  {
    title: "Vibing with Appwrite keyboard, t-shirt, and cap",
    category: "Gadgets",
    image: "https://res.cloudinary.com/dar54qs52/image/upload/v1754353658/WhatsApp_Image_2025-08-05_at_5.45.57_AM_fckaqn.jpg",
  }
];


export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");
const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="min-h-screen px-6 sm:px-16 py-24 dark:bg-black dark:text-white text-black relative z-0">
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
  onClick={() => setHoveredImage(image)} 
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
                <h3 className="text-lg font-semibold mb-1 dark:text-white">
                  {title}
                </h3>
                <p className="text-xs dark:text-zinc-400 text-zinc-500">#{category}</p>
              </div>
            </motion.div>
          ))}

        </AnimatePresence>
        
      </motion.div>      
    </section>
  );
}