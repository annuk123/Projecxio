"use client";
import { motion } from "framer-motion";
import Navbar from "../navbar/page";
export default function Projects() {
    return(
        <section>
            <Navbar />
            <motion.h2
                className="text-4xl sm:text-5xl text-center mt-14 font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-10 px-7 dark:text-white flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>
            <motion.p
                className="max-w-3xl mx-auto text-lg sm:text-xl leading-8 text-center text-gray-700 dark:text-gray-300 mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                viewport={{ once: true }}
            >
                Developer is Currently busy so It&apos;ll take some time to update the projects. Thank you for your patience.
            </motion.p>
        </section>
    );
}