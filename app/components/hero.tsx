"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
    const texts = [
        { text: "I'm Sheikh Abu Backkar Siddiq", color: "text-purple-600 dark:text-purple-400" },
        { text: "I'm a Software Engineer", color: "text-blue-600 dark:text-blue-400" },
    ];

    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

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
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-24 pb-12 overflow-hidden bg-gradient-to-b from-indigo-50 via-pink-50 to-yellow-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
            <motion.div
                className="pointer-events-none absolute w-40 h-40 sm:w-64 sm:h-64 bg-purple-300 dark:bg-purple-600 rounded-full opacity-20"
                animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "easeInOut",
                }}
                style={{ top: "10%", left: "-8%" }}
            />
            <motion.div
                className="pointer-events-none absolute w-32 h-32 sm:w-48 sm:h-48 bg-pink-300 dark:bg-pink-600 rounded-full opacity-20"
                animate={{ x: [-20, 60, -20], y: [0, -30, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 28,
                    ease: "easeInOut",
                }}
                style={{ bottom: "10%", right: "-8%" }}
            />

            <motion.img
                src="/images/labib.png"
                alt="Sheikh Abu Backkar Siddiq"
                className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border-4 border-gray-900 dark:border-zinc-100 mb-5 sm:mb-6 shadow-lg object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />

            <motion.h1
                className="relative z-10 text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 min-h-[3.5rem] sm:min-h-[3rem] md:min-h-12 px-2 transition-colors leading-snug"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <span className={texts[textIndex].color}>{displayedText}</span>
                <span className="border-r-2 border-gray-900 dark:border-zinc-100 ml-1 animate-pulse"></span>
            </motion.h1>

            <motion.p
                className="relative z-10 text-gray-700 dark:text-zinc-300 max-w-2xl mb-6 text-sm sm:text-base md:text-xl leading-relaxed px-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                I’m a CSE’19 graduate from{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">
                    Khulna University of Engineering & Technology
                </span>
                . I enjoy building reliable backend systems that solve
                real-world problems. My current focus is{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    distributed systems
                </span>
                ,{" "}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                    cloud infrastructure
                </span>
                , and scalable architecture. My long-term goal is to become a
                technical founder building products for a global market.
            </motion.p>

            <motion.div
                className="relative z-10 flex flex-col sm:flex-row w-full max-w-sm sm:max-w-none sm:w-auto sm:flex-wrap justify-center gap-3 sm:gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.8 }}
            >
                <Link
                    href="#projects"
                    className="w-full sm:w-auto px-6 py-3.5 sm:py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl sm:rounded-md font-semibold text-center active:scale-[0.98] transition"
                >
                    View My Work
                </Link>
                <Link
                    href="#contact"
                    className="w-full sm:w-auto px-6 py-3.5 sm:py-2.5 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl sm:rounded-md font-semibold text-center active:scale-[0.98] transition"
                >
                    Get in Touch
                </Link>
            </motion.div>

            <motion.div
                className="relative z-10 flex justify-center gap-5 text-gray-900 dark:text-zinc-100 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
            >
                <a
                    href="https://github.com/labib108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target rounded-full bg-white/60 dark:bg-zinc-800/60 shadow-sm"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/abu-buckker-siddikh-labib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target rounded-full bg-white/60 dark:bg-zinc-800/60 shadow-sm"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:abubuckkersiddikh@gmail.com"
                    className="touch-target rounded-full bg-white/60 dark:bg-zinc-800/60 shadow-sm"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </motion.div>
        </section>
    );
}
