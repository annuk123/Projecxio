"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  PenTool,
  Codepen,
} from "lucide-react"

const socialLinks = [
  { href: "https://github.com/annuk123", icon: Github },
  { href: "https://www.linkedin.com/in/annu-kumari-540337237/", icon: Linkedin },
  { href: "https://x.com/Annu66126617", icon: Twitter },
  { href: "https://www.youtube.com/channel/UC3wYJlVEy9cMi5e_sZG-Q7Q", icon: Youtube },
  { href: "https://hashnode.com/@Annuk123", icon: PenTool },
  { href: "https://codepen.io/Annu-Kumar", icon: Codepen },
]

export function MobileBottomNav() {

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md border shadow-xl rounded-2xl px-5 py-3 flex flex-col items-center space-y-3 md:hidden max-w-[22rem] w-[90%]"
    >
      {/* Theme Toggle */}
      {/* <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:scale-105 transition-all"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.button> */}

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-4">
        <AnimatePresence>
          {socialLinks.map(({ href, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
