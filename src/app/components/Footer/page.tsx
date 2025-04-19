
"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaAndroid
  // FaHashnode, // Removed as it is not a valid export
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/yourusername",
  },
  {
    name: "BioLink",
    icon: <FaAndroid />, // Removed as it is not a valid export
    href: "https://hashnode.com/@yourusername",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    href: "https://twitter.com/yourusername",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/yourusername",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 sm:px-12 lg:px-24 py-10 dark:bg-black border-t border-gray-200 dark:border-gray-800 ">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-center sm:text-left text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Annu Kumari — Built with ❤️ using Next.js
        </p>

        <div className="flex gap-5 text-xl">
          {socials.map(({ name, icon, href }, i) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition transform hover:scale-125"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.05 }}
              aria-label={name}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
