"use client";

import { motion } from "framer-motion";
import {
    Cloud,
    Database,
    GraduationCap,
    Layers,
    Network,
    Server,
    Target,
} from "lucide-react";

const focusAreas = [
    { label: "Distributed Systems", icon: Network },
    { label: "Microservices", icon: Layers },
    { label: "PostgreSQL & Redis", icon: Database },
    { label: "System Design", icon: Server },
    { label: "AWS & Cloud Technologies", icon: Cloud },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative py-14 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-indigo-50 to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950"
        >
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-zinc-100 text-center mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-center text-gray-700 dark:text-zinc-300 max-w-3xl mx-auto mb-10 sm:mb-16 text-base sm:text-lg md:text-xl px-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Backend Software Engineer passionate about building scalable,
                reliable, and maintainable systems. I enjoy solving complex
                engineering problems through clean architecture and thoughtful
                design.
            </motion.p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                <motion.div
                    className="space-y-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
                            What I Do
                        </h3>
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed text-lg">
                            I build backend services, APIs, and distributed
                            systems with a focus on performance, scalability,
                            and long-term maintainability.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                            <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            Career Vision
                        </h3>
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed text-lg">
                            My goal is to become a world-class backend engineer,
                            contribute to globally impactful startups, and
                            eventually build technology products that solve
                            real-world problems.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-indigo-100 dark:border-zinc-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-5">
                            Current Focus
                        </h3>
                        <ul className="space-y-3">
                            {focusAreas.map(({ label, icon: Icon }) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-3 text-gray-700 dark:text-zinc-300"
                                >
                                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-950/50 dark:to-zinc-900 p-6 rounded-2xl shadow-md border border-transparent dark:border-zinc-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
                            <GraduationCap className="w-6 h-6 text-purple-700 dark:text-purple-400" />
                            Education
                        </h3>
                        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow border border-transparent dark:border-zinc-800">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">
                                BSc in Computer Science & Engineering
                            </h4>
                            <p className="text-gray-700 dark:text-zinc-300 mt-1">
                                Khulna University of Engineering & Technology
                                (KUET)
                            </p>
                            <p className="text-gray-500 dark:text-zinc-500 text-sm mt-2">
                                2020 – 2025
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
