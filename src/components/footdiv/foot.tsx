"use client";
import { motion } from "framer-motion";

interface FootDividerProps {
  flip?: boolean;
  fillColor?: string; // Accepts a HEX, RGB, or Tailwind-compatible color
}

const FootDivider = ({
  flip = true,
  fillColor = "#000000", // Solid black
}: FootDividerProps) => (
  <div className="relative overflow-hidden leading-none">
    <motion.svg
      viewBox="0 0 1440 100"
      className={`w-full h-[120px] ${flip ? "" : "rotate-180"}`}
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
    {/* <svg
      viewBox="0 0 1440 100"
      className={`w-full h-[120px] ${flip ? "" : "rotate-180"}`}
      preserveAspectRatio="none"
    > */}
      <path
        fill={fillColor}
        d="M0 50 Q 180 0 360 50 T 720 50 T 1080 50 T 1440 50 L1440 100 L0 100 Z"
      />
      </motion.svg>
    {/* </svg> */}
  </div>
);

export default FootDivider;
