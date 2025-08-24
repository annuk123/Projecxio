"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  PenTool,
  Codepen,
  Coffee,
  Mail,
} from "lucide-react";
import NewsletterSubscribe from "../NewsLetter/news";

const socials = [
  { href: "https://github.com/annuk123", icon: Github },
  { href: "https://www.linkedin.com/in/annu-kumari-540337237/", icon: Linkedin },
  { href: "https://x.com/Annu66126617", icon: Twitter },
  { href: "https://www.youtube.com/channel/UC3wYJlVEy9cMi5e_sZG-Q7Q", icon: Youtube },
  { href: "https://hashnode.com/@Annuk123", icon: PenTool },
  { href: "https://codepen.io/Annu-Kumar", icon: Codepen },
  { href: "mailto:anuk35168@gmail.com", icon: Mail },
  { href: "https://buymeacoffee.com/anuk35168l", icon: Coffee },
];

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 sm:px-12 lg:px-24 py-10 bg-black border-b border-zinc-800">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-center sm:text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Annu Kumari</span> — Built with love, creativity, and just the right amount of {" "}
          <span className="text-pink-500 font-semibold">caffeine</span> ☕️💻✨
        </p>
        <NewsletterSubscribe />

        <div className="flex gap-5 text-xl">
          <AnimatePresence>
            
            {socials.map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="text-zinc-400 hover:text-white transition-colors "
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </footer>
  );
}
