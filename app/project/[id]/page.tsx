"use client";

import { useParams } from "next/navigation";
import { projects } from "./data";
import { motion } from "framer-motion";
import { FaEnvelope, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import {
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";
import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { Network, Boxes } from "lucide-react";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-zinc-100">
        Project Not Found
      </div>
    );
  }

  const techIcons: Record<string, JSX.Element> = {
    Laravel: <SiLaravel className="text-red-600 w-5 h-5" />,
    PHP: <SiPhp className="text-purple-600 w-5 h-5" />,
    MySQL: <SiMysql className="text-blue-600 w-5 h-5" />,
    JavaScript: <SiJavascript className="text-yellow-500 w-5 h-5" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400 w-5 h-5" />,
    TypeScript: <SiTypescript className="text-blue-600 w-5 h-5" />,
    NestJS: <SiNestjs className="text-red-600 w-5 h-5" />,
    gRPC: <Network className="w-5 h-5 text-sky-600" />,
    PostgreSQL: <SiPostgresql className="text-sky-700 w-5 h-5" />,
    Redis: <SiRedis className="text-red-600 w-5 h-5" />,
    Docker: <SiDocker className="text-sky-600 w-5 h-5" />,
    Microservices: <Boxes className="w-5 h-5 text-violet-600" />,
    React: <SiReact className="text-cyan-500 w-5 h-5" />,
    "Vue.js": <SiVuedotjs className="text-green-600 w-5 h-5" />,
    "Inertia.js": <SiNodedotjs className="text-indigo-500 w-5 h-5" />,
    "Eloquent ORM": <SiLaravel className="text-red-500 w-5 h-5" />,
  };

  return (
    <section className="min-h-screen pt-24 pb-12 sm:py-30 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        {project.badge && (
          <span className="inline-block mb-4 text-xs font-semibold tracking-wide uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full">
            {project.badge}
          </span>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 px-1 leading-snug">
          {project.title}
        </h1>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-3">
          {project.role}
        </p>
        <p className="text-gray-700 dark:text-zinc-300 mt-4 leading-relaxed text-base sm:text-lg">
          {project.longDescription}
        </p>
      </div>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
        <motion.div
          className="lg:col-span-2 flex flex-col gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {project.banner ? (
            <Image
              src={project.banner}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto max-h-[280px] sm:max-h-[400px] object-contain rounded-xl shadow-xl bg-white dark:bg-zinc-900"
            />
          ) : (
            <div className="w-full min-h-[180px] sm:h-[280px] rounded-xl shadow-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white px-6 py-10 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-bold">{project.title}</p>
                <p className="mt-2 text-indigo-100">{project.role}</p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-md font-medium text-sm shadow"
              >
                {techIcons[tech] || null}
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition active:scale-[0.98]"
            >
              <FaExternalLinkAlt /> Live Project
            </Link>
          )}

          {project.note && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200">
              <FaLock className="mt-1 shrink-0" />
              <p className="text-sm">{project.note}</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="p-6 h-fit rounded-xl shadow-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white lg:sticky lg:top-20"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-indigo-100 mb-4">
            Have questions about this project?
          </p>
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
            <FaEnvelope className="text-white text-xl shrink-0" />
            <span className="text-sm font-medium break-all">
              {project.contactEmail}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 space-y-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {project.features.map((f, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800"
          >
            <p className="font-semibold text-lg text-indigo-700 dark:text-indigo-400 mb-3">
              {f.title}
            </p>
            {f.items && (
              <ul className="list-disc pl-6 space-y-2">
                {f.items.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-zinc-300">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </motion.div>

      {project.images && project.images.length > 0 && (
        <motion.div
          className="mt-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden shadow-md border border-indigo-100 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <Image
                  src={img}
                  alt={`Project image ${idx}`}
                  width={500}
                  height={350}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
