"use client";

import { motion } from "framer-motion";

import {
    SiPhp,
    SiLaravel,
    SiMysql,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiPostgresql,
    SiPrisma,
    SiNodedotjs,
    SiJavascript,
} from "react-icons/si";

import { Code2, Layers, Database, Wrench } from "lucide-react";

const categories = [
    {
        title: "Programming Languages",
        icon: <Code2 className="w-6 h-6 text-purple-600" />,
        skills: [
            {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-500" />,
            },
            {
                name: "TypeScript",
                icon: <SiTypescript className="text-blue-600" />,
            },
            { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
            { name: "Java", icon: <SiNodedotjs className="text-green-600" /> },
        ],
    },
    {
        title: "Frameworks & Technologies",
        icon: <Layers className="w-6 h-6 text-blue-600" />,
        skills: [
            { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
            { name: "React", icon: <SiReact className="text-cyan-500" /> },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-teal-400" />,
            },
            { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        ],
    },
    {
        title: "Databases",
        icon: <Database className="w-6 h-6 text-green-700" />,
        skills: [
            { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-sky-700" />,
            },
            {
                name: "Prisma ORM",
                icon: <SiPrisma className="text-indigo-700" />,
            },
        ],
    },
    {
        title: "Tools & Platforms",
        icon: <Wrench className="w-6 h-6 text-amber-600" />,
        skills: [
            { name: "Git", icon: <SiGit className="text-orange-600" /> },
            { name: "GitHub", icon: <SiGithub className="text-gray-900" /> },
            { name: "VS Code", icon: <Code2 className="text-blue-500" /> },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen w-full py-20 px-6 md:px-16 bg-gradient-to-b from-white to-indigo-50"
        >
            <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Skills & Technologies
            </motion.h1>

            <motion.p
                className="text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg md:text-xl"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                A comprehensive overview of my technical expertise across
                multiple domains in full-stack development.
            </motion.p>

            {/* ⭐ UPDATED GRID — Now 4 Cards in a Row on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="p-8 rounded-2xl shadow-lg bg-white border border-gray-200
                        hover:shadow-2xl transition-all duration-300
                        hover:-translate-y-2 hover:shadow-purple-300/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {category.icon}
                            <h2 className="text-xl font-bold text-gray-900">
                                {category.title}
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {category.skills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 
                                    hover:bg-gray-50 hover:shadow-md hover:shadow-purple-200
                                    transition-all duration-300"
                                    whileHover={{ scale: 1.04 }}
                                >
                                    <div className="text-2xl">{skill.icon}</div>
                                    <span className="text-gray-800 font-medium">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
