"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
type FloatingIconProps = {
  Icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  top: number | string;
  left: number | string;
};


export const FloatingIcon = ({ Icon, delay = 0, top, left }: FloatingIconProps) => {
    const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 5 + Math.random() * 2, // random duration
        delay,
        ease: "easeInOut",
      }}
      style={{ position: "absolute", top, left }}
    >
      <Icon className="w-10 h-10 text-purple-500 dark:text-purple-300 opacity-20" />
    </motion.div>
  );
};
