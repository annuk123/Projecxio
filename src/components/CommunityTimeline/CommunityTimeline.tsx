'use client'

import { motion } from 'framer-motion'

const timelineData = [
  {
    title: 'SWoC Mentor',
    date: 'Jan 2025 – May 2025',
    description: 'Mentored open-source contributors, reviewed PRs, guided student teams.',
  },
  {
    title: 'GDG Cloud Kolkata',
    date: 'May 2025 – Jul 2025',
    description: 'Designed event creatives, posters, and social media posts.',
  },
  {
    title: 'Volunteer Designer (CNCF)',
    date: 'Jan 2025 – Present',
    description: 'Helped with creative assets for CNCF India events.',
  },
  {
    title: 'GDG Ranchi',
    date: 'June 2025 – Present',
    description: 'Created visuals for community meetups and bootcamps.',
  },
  {
    title: 'Founder & Community Lead (Projexio)',
    date: 'Jan 2025 – Present',
    description: 'Built a student community focused on projects and mentorship.',
  },
  {
    title: 'Open Source Contributor',
    date: '2025 – Present',
    description: 'Involved in various projects and initiatives on GitHub.',
  },
    {
        title: 'Open Source Partner (IGC GDG on Campus)',
        date: '2025 – Present',
        description: 'Collaborating with IGC to promote open source contributions among students.',
    },
]

export function CommunityTimeline() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-12 border-white/10 shadow-xl dark:bg-[#0f172a]/40 bg-gradient-to-b from-white/30 to-zinc-100/20 dark:from-black/20 dark:to-zinc-900/10 backdrop-blur-lg rounded-3xl border dark:border-indigo-500/20 text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
          Community Involvement
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A journey of giving back through mentorship, design, and open source.
        </p>
      </div>

      {/* Vertical Line */}
      <div className="relative mt-20 max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-500/30" />

        <div className="space-y-16">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                } group`}
              >
                {/* Content box */}
                <div
                  className={`dark:bg-gray-900 bg-white/40 border dark:border-cyan-700/30 rounded-xl p-6 shadow-xl w-full md:w-[calc(50%-2rem)] 
                  ${
                    isLeft
                      ? 'md:order-1 text-left'
                      : 'md:order-2 text-left md:text-right'
                  } hover:scale-[1.02] transition-transform duration-300`}
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight mb-1">{item.title}</h3>
                  <span className="text-sm dark:text-gray-400 text-gray-500">{item.date}</span>
                  <p className="text-sm dark:text-gray-300 text-gray-400 mt-2">{item.description}</p>
                </div>

                {/* Circle Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 w-5 h-5 rounded-full z-10 border-4 border-[#0f172a] shadow-indigo-500 shadow-md " />

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-[50%]"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
