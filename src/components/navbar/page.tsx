"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Github, Twitter, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", target: "_blank"},
  { href: "/gallery", label: "Gallery" },
  { href: "https://myfirstblog123.hashnode.dev/", target: "_blank", label: "Blogs" },
  { href: "https://www.behance.net/annukumari40", target: "_blank", label: "Graphic Designs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Apply dark mode on mount and toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-3xl backdrop-blur-lg bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-zinc-800 w-[80%] max-w-6xl transition-all ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Image
                src="/assets/logo.png"
                alt="Projexio Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Projexio
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ href, label, target }) => {
              const isActive = pathname === href;
              return (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`relative text-sm font-medium ${
                    isActive ? "text-purple-500" : "text-gray-700 dark:text-gray-300"
                  } group`}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="group-hover:text-purple-500 transition-colors duration-300">
                    {label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </motion.a>
              );
            })}

            {/* Social Icons - Desktop Only - Show After Scroll */}
            {isScrolled && (
              <motion.div
                className="hidden md:flex space-x-4 ml-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link
                  href="https://github.com/annuk123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-500 hover:scale-110 transition-colors"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://x.com/Annu66126617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-500 hover:scale-110 transition-colors"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/annu-kumari-540337237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300  hover:scale-110  transition-transform"
                >
                  <Linkedin size={20} />
                </Link>
              </motion.div>
            )}
          </div>
          {/* Login Button */}
            {/* <Link href="/login">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="hidden md:inline-flex px-4 py-2 bg-purple-500 text-white rounded-md font-medium hover:bg-purple-600 hover:scale-105 transition-all"
              >
                Login
              </motion.button>
            </Link> */}

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9, rotate: 180 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:scale-105 transition-all"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:scale-105"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.95 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 150 }}
            className="md:hidden bg-white dark:bg-zinc-900 overflow-hidden border-t border-zinc-200 dark:border-zinc-800 rounded-b-xl"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map(({ href, label, target }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                  className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-purple-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
