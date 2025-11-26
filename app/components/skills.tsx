"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  return (
    <div className="min-h-screen w-full py-16 px-6 md:px-16 bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
      >
        Skills & Technologies
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12"
      >
        A comprehensive overview of my technical skills and expertise across different domains.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li>Java</li>
            <li>PHP</li>
            <li>JavaScript / TypeScript</li>
            <li>C++</li>
            <li>Python (basic)</li>
          </ul>
        </motion.div>

        {/* Frameworks & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Frameworks & Tech</h3>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li>Laravel</li>
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>REST APIs</li>
          </ul>
        </motion.div>

        {/* Databases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">Databases</h3>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Firebase (basic)</li>
          </ul>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-900">Tools & Platforms</h3>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Figma (basic)</li>
            <li>Vercel / cPanel</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
