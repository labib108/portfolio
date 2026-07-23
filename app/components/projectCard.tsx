"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/app/project/[id]/data";

const cardGradients = [
  "from-purple-200 to-indigo-400 dark:from-purple-900 dark:to-indigo-800",
  "from-pink-200 to-red-400 dark:from-pink-900 dark:to-red-800",
  "from-green-200 to-teal-400 dark:from-green-900 dark:to-teal-800",
  "from-yellow-200 to-orange-400 dark:from-yellow-900 dark:to-orange-800",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-indigo-50 dark:from-zinc-950 dark:to-zinc-900"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-zinc-100 text-center mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 dark:text-zinc-300 max-w-2xl mx-auto mb-10 sm:mb-16 text-base sm:text-lg md:text-xl px-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Selected professional work across backend systems, full-stack
        platforms, and dashboard experiences.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between text-black dark:text-zinc-100
            bg-gradient-to-br ${cardGradients[index % cardGradients.length]}
            transition-all duration-300 active:scale-[0.99] sm:hover:shadow-2xl sm:hover:scale-[1.02]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="space-y-3">
              {project.badge && (
                <span className="inline-block text-xs font-semibold bg-black/15 dark:bg-white/15 px-2.5 py-1 rounded-full">
                  {project.badge}
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-bold leading-snug">
                {project.title}
              </h3>
              <p className="text-sm font-medium opacity-90">{project.role}</p>
              <p className="text-sm text-black/80 dark:text-zinc-200/90 leading-relaxed">
                {project.description}
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80 mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/30 dark:bg-black/25 text-black dark:text-zinc-100 text-xs font-semibold px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={`/project/${project.id}`}
                className="inline-flex w-full sm:w-auto justify-center bg-white dark:bg-zinc-100 text-gray-900 px-4 py-3 sm:py-2 rounded-xl sm:rounded-lg hover:bg-gray-200 dark:hover:bg-white transition font-semibold active:scale-[0.98]"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
