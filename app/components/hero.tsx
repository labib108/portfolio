"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
    const texts = [
        { text: "I'm Sheikh Abu Backkar Siddiq", color: "text-purple-600" },
        { text: "I'm a Software Engineer", color: "text-blue-600" },
    ];

    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    // Typewriter effect
    useEffect(() => {
        const timeout = setTimeout(
            () => {
                if (!deleting) {
                    setDisplayedText(
                        texts[textIndex].text.slice(0, charIndex + 1)
                    );
                    setCharIndex(charIndex + 1);
                    if (charIndex + 1 === texts[textIndex].text.length)
                        setDeleting(true);
                } else {
                    setDisplayedText(
                        texts[textIndex].text.slice(0, charIndex - 1)
                    );
                    setCharIndex(charIndex - 1);
                    if (charIndex - 1 === 0) {
                        setDeleting(false);
                        setTextIndex((textIndex + 1) % texts.length);
                    }
                }
            },
            deleting ? 50 : 100
        );
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, textIndex]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-0 pt-24 overflow-hidden bg-gradient-to-b from-indigo-50 via-pink-50 to-yellow-50">
            {/* Floating animated shapes */}
            <motion.div
                className="absolute w-64 h-64 bg-purple-300 rounded-full opacity-20"
                animate={{ x: [0, 250, 0], y: [0, 100, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "easeInOut",
                }}
                style={{ top: "10%", left: "-10%" }}
            />
            <motion.div
                className="absolute w-48 h-48 bg-pink-300 rounded-full opacity-20"
                animate={{ x: [-50, 180, -50], y: [0, -50, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 28,
                    ease: "easeInOut",
                }}
                style={{ bottom: "10%", right: "-10%" }}
            />
            <motion.div
                className="absolute w-56 h-56 bg-green-300 rounded-full opacity-20"
                animate={{ x: [0, -200, 0], y: [0, 50, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 22,
                    ease: "easeInOut",
                }}
                style={{ top: "35%", right: "20%" }}
            />

            {/* Profile Picture */}
            <motion.img
                src="/images/labib.png"
                alt="Sheikh Abu Backkar Siddiq"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-gray-900 mb-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />

            {/* Animated Name / Role */}
            <motion.h1
                className="text-3xl md:text-4xl font-extrabold mb-2 h-12 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <span className={texts[textIndex].color}>{displayedText}</span>
                <span className="border-r-2 border-gray-900 ml-1 animate-pulse"></span>
            </motion.h1>

            {/* Description */}
            <motion.p
                className="text-gray-700 max-w-2xl mb-6 text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                I’m a CSE’19 graduate from{" "}
                <span className="text-purple-600 font-semibold">
                    Khulna University of Engineering & Technology
                </span>{" "}
                with hands-on experience in building full-stack web
                applications. I’ve interned at{" "}
                <span className="text-blue-600 font-semibold">
                    BAE Innovation
                </span>
                , working with PHP, Laravel, and MySQL, and I’m passionate about
                creating clean, efficient, and user-friendly software.
                Currently, I’m diving deeper into full-stack development with{" "}
                <span className="text-green-600 font-semibold">Next.js</span>,
                building projects that solve real problems and create seamless
                user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.8 }}
            >
                <Link
                    href="#projects"
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 transition"
                >
                    View My Work
                </Link>
                <Link
                    href="#contact"
                    className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md hover:from-green-500 hover:to-blue-600 transition"
                >
                    Get in Touch
                </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                className="flex justify-center gap-6 text-gray-900 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
            >
                <a
                    href="https://github.com/labib108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/abu-buckker-siddikh-labib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:abubuckkersiddikh@gmail.com"
                    className="hover:text-red-600 transition"
                >
                    <FaEnvelope />
                </a>
            </motion.div>
        </section>
    );
}
