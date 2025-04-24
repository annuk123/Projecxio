// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useForm, ValidationError } from "@formspree/react";
// import { Sparkles } from "lucide-react";
// import Navbar from "../navbar/page";

// export default function ContactForm() {
//   const [state, handleSubmit] = useForm("mblgngkk");
//   const [showPopup, setShowPopup] = useState(false);

//   // Show success popup and auto-hide it
//   useEffect(() => {
//     if (state.succeeded) {
//       setShowPopup(true);
//       const timeout = setTimeout(() => {
//         setShowPopup(false);
//       }, 2500);
//       return () => clearTimeout(timeout);
//     }
//   }, [state.succeeded]);

//   return (
//     <section>
//     <Navbar />
//     <section className="relative z-10 py-20 px-6 sm:px-12 lg:px-24 max-w-3xl mx-auto mt-24 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] backdrop-blur-2xl">
      
//       {/* Thank you popup */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-400 px-6 py-4 rounded-2xl shadow-lg border border-purple-300 dark:border-purple-600"
//             initial={{ opacity: 0, y: -20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -20, scale: 0.95 }}
//             transition={{ duration: 0.4 }}
//           >
//             <p className="text-lg font-semibold">🎉 Thank you! I’ll get back to you soon.</p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Heading */}
//       <motion.h2
//         className="text-4xl sm:text-5xl text-center mb-10 font-extrabold dark:text-white flex items-center justify-center gap-3"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Sparkles className="text-purple-500 animate-pulse w-10 h-10" />
        
        
//   <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
//   Let’s Connect
//   </span>
//   <span className="text-5xl animate-wiggle">✉️</span>
//       </motion.h2>

//       {/* Contact form */}
//       <motion.form
//         onSubmit={handleSubmit}
//         className="space-y-8"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 1 }}
//         viewport={{ once: true }}
//       >
//         {/* Name and Email */}
//         {[
//           { name: "name", label: "Name", type: "text", placeholder: "Your name" },
//           { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
//         ].map(({ name, label, type }) => (
//           <div key={name} className="relative">
//             <input
//               type={type}
//               name={name}
//               required
//               placeholder=" "
//               className="peer w-full px-4 pt-5 pb-2 text-sm rounded-xl bg-white/70 dark:bg-black/50 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-transparent"
//             />
//             <label className="absolute left-4 top-2.5 text-gray-500 dark:text-gray-400 text-xs peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all">
//               {label}
//             </label>
//             <ValidationError prefix={label} field={name} errors={state.errors} className="text-red-500 text-sm mt-1" />
//           </div>
//         ))}

//         {/* Message */}
//         <div className="relative">
//           <textarea
//             name="message"
//             required
//             placeholder=" "
//             rows={5}
//             className="peer w-full px-4 pt-5 pb-3 text-sm rounded-xl bg-white/70 dark:bg-black/50 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none placeholder-transparent"
//           />
//           <label className="absolute left-4 top-2.5 text-gray-500 dark:text-gray-400 text-xs peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all">
//             Message
//           </label>
//           <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
//         </div>

//         {/* Submit */}
//         <motion.button
//           type="submit"
//           disabled={state.submitting}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600  shadow-lg hover:scale-105 transition duration-300 text-purple-300 hover:text-white py-3 px-6 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {state.submitting ? "Sending..." : "Send Message"}
//         </motion.button>
//       </motion.form>
//     </section>
//     </section>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import Navbar from "@/component/navbar/page";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblgngkk");

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success("🎉 Thanks for reaching out! I’ll get back to you soon.");
    }
  }, [state.succeeded]);

  return (
    <section>
      <Navbar />
    <section className="relative z-10 py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-white/40 to-white/10 dark:from-black/40 dark:to-black/10 backdrop-blur-xl rounded-3xl shadow-2xl max-w-3xl mx-auto mt-20">


      {/* Heading */}
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
    </section>
  );
}
