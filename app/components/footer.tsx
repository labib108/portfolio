"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 dark:bg-zinc-950 text-gray-300 border-t border-transparent dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-100">About Me</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Hi, I&apos;m Labib, a software engineer focused on building modern and scalable web applications. Skilled in Laravel, Next.js, PHP, and more.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-100">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#projects" className="hover:text-white transition duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition duration-300">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition duration-300">Skills</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-100">Contact</h3>
          <p className="flex items-center gap-2 hover:text-white transition duration-300">
            <FaEnvelope /> abubuckkersiddikh@gmail.com
          </p>
          <p className="mt-2 hover:text-white transition duration-300">+880 1720 843651</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-100">Follow Me</h3>
          <div className="flex items-center gap-5">
            <a href="https://github.com/labib108" target="_blank" className="hover:text-white transition transform hover:scale-110">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abu-buckker-siddikh-labib/" target="_blank" className="hover:text-white transition transform hover:scale-110">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:abubuckkersiddikh@gmail.com" className="hover:text-white transition transform hover:scale-110">
              <FaEnvelope size={24} />
            </a>
            <a href="https://x.com/Labib_20" target="_blank" className="hover:text-white transition transform hover:scale-110">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Labib. All rights reserved.
      </div>
    </motion.footer>
  );
}
