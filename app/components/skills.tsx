"use client";

import { motion } from "framer-motion";

import {
    SiMysql,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiPostgresql,
    SiNodedotjs,
    SiDocker,
    SiNestjs,
    SiRedis,
    SiLinux,
    SiAuth0,
    SiPostman,
    SiGithubactions,
} from "react-icons/si";

import {
    Cloud,
    Code2,
    Database,
    Layers,
    Layout,
    Network,
    Wrench,
    Workflow,
    Boxes,
    Zap,
    Search,
    Server,
} from "lucide-react";

const categories = [
    {
        title: "Backend Engineering",
        icon: <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
        skills: [
            {
                name: "TypeScript",
                icon: <SiTypescript className="text-blue-600 dark:text-blue-400" />,
            },
            {
                name: "Node.js",
                icon: <SiNodedotjs className="text-green-600 dark:text-green-400" />,
            },
            {
                name: "NestJS",
                icon: <SiNestjs className="text-red-600 dark:text-red-400" />,
            },
            {
                name: "REST API",
                icon: <SiPostman className="text-orange-500" />,
            },
            {
                name: "gRPC",
                icon: <Network className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
            },
            {
                name: "Authentication & Authorization",
                icon: <SiAuth0 className="text-orange-600 dark:text-orange-400" />,
            },
        ],
    },
    {
        title: "Databases & Caching",
        icon: <Database className="w-6 h-6 text-green-700 dark:text-green-400" />,
        skills: [
            {
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-sky-700 dark:text-sky-400" />,
            },
            {
                name: "Redis",
                icon: <SiRedis className="text-red-600 dark:text-red-400" />,
            },
            {
                name: "MySQL",
                icon: <SiMysql className="text-blue-700 dark:text-blue-400" />,
            },
            {
                name: "Database Design",
                icon: <Boxes className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            },
            {
                name: "Query Optimization",
                icon: <Search className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
            },
        ],
    },
    {
        title: "Architecture",
        icon: <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
        skills: [
            {
                name: "Microservices",
                icon: <Boxes className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
            },
            {
                name: "Distributed Systems",
                icon: <Network className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
            },
            {
                name: "Clean Architecture",
                icon: <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
            },
            {
                name: "Event-Driven Architecture",
                icon: <Zap className="w-5 h-5 text-yellow-500" />,
            },
            {
                name: "System Design",
                icon: <Workflow className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
            },
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
        skills: [
            {
                name: "Docker",
                icon: <SiDocker className="text-sky-600 dark:text-sky-400" />,
            },
            {
                name: "AWS (Learning)",
                icon: <Cloud className="w-5 h-5 text-orange-500" />,
            },
            {
                name: "Git & GitHub",
                icon: (
                    <span className="flex items-center gap-0.5">
                        <SiGit className="text-orange-600 dark:text-orange-400" />
                        <SiGithub className="text-gray-900 dark:text-zinc-100" />
                    </span>
                ),
            },
            {
                name: "CI/CD",
                icon: <SiGithubactions className="text-blue-600 dark:text-blue-400" />,
            },
            {
                name: "Linux",
                icon: <SiLinux className="text-gray-800 dark:text-zinc-200" />,
            },
        ],
    },
    {
        title: "Frontend",
        icon: <Layout className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
        skills: [
            {
                name: "React",
                icon: <SiReact className="text-cyan-500" />,
            },
            {
                name: "Next.js",
                icon: <SiNextdotjs className="text-black dark:text-white" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-teal-400" />,
            },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="w-full py-14 sm:py-20 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-white to-indigo-50 dark:from-zinc-950 dark:to-zinc-900"
        >
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-zinc-100 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Skills & Technologies
            </motion.h1>

            <motion.p
                className="text-center text-gray-700 dark:text-zinc-300 max-w-2xl mx-auto mb-10 sm:mb-16 text-base sm:text-lg md:text-xl px-1"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Backend-focused expertise across engineering, architecture,
                databases, cloud, and modern frontend tools.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 sm:gap-8 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        className="p-5 sm:p-8 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800
                        transition-all duration-300
                        sm:hover:shadow-2xl sm:hover:-translate-y-2 sm:hover:shadow-purple-300/50 dark:sm:hover:shadow-purple-900/40"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                            {category.icon}
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-zinc-100">
                                {category.title}
                            </h2>
                        </div>

                        <div className="space-y-2.5 sm:space-y-3">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-zinc-800
                                    active:bg-gray-50 dark:active:bg-zinc-800
                                    sm:hover:bg-gray-50 dark:sm:hover:bg-zinc-800
                                    transition-all duration-300"
                                >
                                    <div className="text-xl shrink-0">{skill.icon}</div>
                                    <span className="text-gray-800 dark:text-zinc-200 font-medium text-sm">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
