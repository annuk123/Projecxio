"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlobDividerProps {
  flip?: boolean;
  fillColor?: string;
}

export default function BlobDivider({
  flip = true,
  fillColor = "#000000",
}: BlobDividerProps) {
  return (
    <div className="overflow-hidden leading-none relative mb-0">
<motion.svg
  viewBox="0 0 1440 320"
  className={`w-full h-[150px] ${flip ? "" : "rotate-180"}`}
  preserveAspectRatio="none"
  animate={{
    y: [0, 10, 0], // Slow up and down
    x: [0, 5, 0, -5, 0], // Faster left and right swaying
    scale: [1, 1.02, 1], // Slight breathing effect
  }}
  transition={{
    y: { repeat: Infinity, duration: 6, ease: "easeInOut" }, // Slow float
    x: { repeat: Infinity, duration: 2, ease: "easeInOut" }, // Faster sway
    scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }, // Breathing
  }}
>
        <path
          d="M0,256L48,240C96,224,192,192,288,160C384,128,480,96,576,106.7C672,117,768,171,864,186.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill={fillColor}
        />
      </motion.svg>
    </div>
  );
}
