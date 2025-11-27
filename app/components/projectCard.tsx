"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "lexicon",
    name: "Lexicon - IELTS Mock Test System",
    description:
      "An online platform providing authentic IELTS mock tests with instant scoring and analytics.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/labib108/lexicon.git",
  },
  {
    id: "patient-consultation",
    name: "Patient Consultation System",
    description:
      "A comprehensive system for doctors to manage patients, appointments, and health history.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/labib108/Patient-Consultation-System-Laravel.git",
  },
  {
    id: "shop-management",
    name: "Shop Management System",
    description:
      "An efficient system to manage shops including products, sales, and inventory tracking.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/labib108/Shop-Management-System.git",
  },
  {
    id: "kuet-bank",
    name: "KUET Bank",
    description:
      "A banking system project with core functionalities like account management and transactions.",
    tech: ["Java", "MySQL"],
    github: "https://github.com/labib108/Kuet_Bank.git",
  },
];

export default function Projects() {
  const cardGradients = [
    "from-purple-200 to-indigo-400",
    "from-pink-200 to-red-400",
    "from-green-200 to-teal-400",
    "from-yellow-200 to-orange-400",
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-12 bg-gradient-to-b from-white to-indigo-50"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        A selection of my notable projects showcasing my skills in full-stack development, Laravel, Next.js, and database management.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`p-6 rounded-2xl shadow-lg flex flex-col justify-between text-black
            bg-gradient-to-br ${cardGradients[index % cardGradients.length]}
            hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-black/80">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 text-black text-xs font-semibold px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 hover:text-black transition font-semibold"
              >
                <FaGithub /> GitHub
              </Link>
              <Link
                href={`/project/${project.id}`}
                className="bg-white text-gray-900 px-3 py-1 rounded hover:bg-gray-200 transition font-semibold"
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
