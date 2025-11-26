"use client";
import { motion } from "framer-motion";
import {
    FaUniversity,
    FaLaptopCode,
    FaJs,
    FaReact,
    FaDatabase,
    FaFutbol,
    FaGlobe,
} from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white via-indigo-50 to-pink-50"
        >
            {/* Section Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                About Me
            </motion.h2>

            {/* Short Intro */}
            <motion.p
                className="text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                A dedicated full-stack developer focused on building clean,
                scalable, and efficient web applications with modern
                technologies.
            </motion.p>

            {/* Two Columns */}
            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                {/* Left Column: Journey */}
                <div className="flex flex-col space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">
                        My Journey
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                        I completed my BSc in Computer Science & Engineering
                        from{" "}
                        <span className="font-semibold text-purple-700">
                            Khulna University of Engineering & Technology
                        </span>{" "}
                        in 2025. Throughout my academic years, I developed a
                        strong foundation in software engineering, algorithms,
                        and backend-focused development.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        I work primarily with{" "}
                        <span className="font-semibold text-blue-600">
                            PHP & Laravel
                        </span>{" "}
                        for backend systems and{" "}
                        <span className="font-semibold text-pink-600">
                            Next.js & React
                        </span>{" "}
                        for frontend applications. My workflow includes database
                        design, API development, authentication systems,
                        structured backend logic, and building responsive UIs.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        I am currently developing full-stack projects including
                        a QR-based Restaurant POS & Ordering System. I stay
                        passionate about writing clean code, improving system
                        design, and learning new technologies that enhance my
                        engineering capabilities.
                    </p>
                </div>

                {/* Right Column: Education + Interests */}
                <div className="flex flex-col space-y-10">
                    {/* Education */}
                    <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                            <FaUniversity className="text-purple-700" /> Education
                        </h3>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="text-lg font-semibold text-gray-900">
                                BSc in Computer Science & Engineering
                            </h4>
                            <p className="text-gray-700">
                                Khulna University of Engineering & Technology
                            </p>
                            <p className="text-gray-500 text-sm">2020 – 2025</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="text-lg font-semibold text-gray-900">
                                Higher Secondary
                            </h4>
                            <p className="text-gray-700">Govt. B L College</p>
                            <p className="text-gray-500 text-sm">2017 – 2019</p>
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                            <FaLaptopCode className="text-pink-600" /> Interests
                        </h3>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2">
                                <FaJs className="text-yellow-500" /> Backend
                                Development – PHP, Laravel, MySQL
                            </li>

                            <li className="flex items-center gap-2">
                                <FaReact className="text-blue-500" /> Frontend
                                Development – React, Next.js
                            </li>

                            <li className="flex items-center gap-2">
                                <FaFutbol className="text-green-600" /> Football & Karate
                            </li>

                            <li className="flex items-center gap-2">
                                <FaGlobe className="text-purple-600" /> Traveling &
                                Learning New Technologies
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
