"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Nagorik Technologies Limited",
    subtitle: null,
    role: "Junior Software Engineer",
    period: "March 2026 – Present",
    location: "Dhaka, Bangladesh",
    summary:
      "Working on a large-scale multi-tenant commerce platform focused on scalable backend systems and enterprise software architecture.",
    contributions: [
      "Developing production features across a microservice-based architecture.",
      "Working with backend services, APIs, databases, and service communication patterns.",
      "Contributing to scalable solutions involving authentication, business workflows, and distributed systems.",
      "Collaborating with engineering teams to design and implement reliable software solutions.",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "gRPC",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Microservices",
    ],
    accent: "from-purple-500 to-pink-500",
    iconColor: {
      building: "text-blue-500 dark:text-blue-400",
      calendar: "text-purple-500 dark:text-purple-400",
      map: "text-pink-500 dark:text-pink-400",
    },
  },
  {
    company: "BAE Innovation",
    subtitle: "Sister Concern of Nandonik Design & Development Ltd.",
    role: "Junior Software Engineer",
    period: "August 2025 – February 2026",
    location: "Khulna, Bangladesh",
    summary:
      "Worked on full-stack web applications, contributing to backend development, API implementation, and dashboard-based systems.",
    contributions: [
      "Developed and maintained backend APIs using Laravel.",
      "Built application features including dashboards, authentication, and business workflows.",
      "Designed database structures and optimized queries for better performance.",
      "Collaborated with senior engineers to improve code quality and application reliability.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "React", "JavaScript"],
    accent: "from-green-500 to-teal-500",
    iconColor: {
      building: "text-green-500 dark:text-green-400",
      calendar: "text-teal-500 dark:text-teal-400",
      map: "text-pink-500 dark:text-pink-400",
    },
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          Experience
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-base sm:text-lg px-2">
          A journey of professional growth and real-world project contributions.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto space-y-6 sm:space-y-10">
        <div className="hidden sm:block absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative sm:ml-16 bg-white dark:bg-slate-900/60 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-8 shadow-xl transition duration-300"
          >
            <div
              className={`sm:absolute sm:-left-6 sm:top-8 mb-4 sm:mb-0 inline-flex rounded-full w-10 h-10 bg-gradient-to-br ${exp.accent} shadow-lg items-center justify-center`}
            >
              <Briefcase className="text-white" size={20} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {exp.company}
            </h3>
            {exp.subtitle && (
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {exp.subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 mt-5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Building2 size={18} className={exp.iconColor.building} />
                <span>{exp.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className={exp.iconColor.calendar} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className={exp.iconColor.map} />
                <span>{exp.location}</span>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mt-5 leading-relaxed text-sm sm:text-base">
              {exp.summary}
            </p>

            <ul className="mt-4 space-y-2.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
              {exp.contributions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-purple-500 dark:text-purple-400 mt-0.5 shrink-0">
                    ✔
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
