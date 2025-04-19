"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblgngkk");

  if (state.succeeded) {
    return (
      <section className="py-20 text-center">
        <motion.h2
          className="text-3xl font-bold text-purple-600 dark:text-purple-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎉 Thanks for reaching out! I’ll get back to you soon.
        </motion.h2>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-white/40 to-white/10 dark:from-black/40 dark:to-black/10 backdrop-blur-xl rounded-3xl shadow-2xl max-w-3xl mx-auto mt-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-black dark:text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let’s Connect ✉️
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            name="name"
            required
            placeholder="Your Name"
            className="rounded-xl px-4 py-3 bg-white/80 dark:bg-black/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-xl px-4 py-3 bg-white/80 dark:bg-black/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            required
            placeholder="Let's create something amazing..."
            rows={5}
            className="rounded-xl px-4 py-3 bg-white/80 dark:bg-black/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={state.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
}
