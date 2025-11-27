"use client";

import { useParams } from "next/navigation";
import { projects } from "./data";
import { motion } from "framer-motion";
import { FaCopy, FaEnvelope, FaJava } from "react-icons/fa";
import { SiJavascript, SiLaravel, SiMysql, SiPhp, SiTailwindcss } from "react-icons/si";
import { JSX, useState } from "react";
import Image from "next/image";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Project Not Found
      </div>
    );
  }

  // Global tech icons map
  const techIcons: Record<string, JSX.Element> = {
    Laravel: <SiLaravel className="text-red-600 w-5 h-5" />,
    PHP: <SiPhp className="text-purple-600 w-5 h-5" />,
    MySQL: <SiMysql className="text-blue-600 w-5 h-5" />,
    JavaScript: <SiJavascript className="text-yellow-500 w-5 h-5" />,
    TailwindCSS: <SiTailwindcss className="text-teal-400 w-5 h-5" />,
    Java: <FaJava className="text-orange-600 w-5 h-5" />,
  };

  return (
    <section className="min-h-screen py-30 px-6 md:px-16 bg-gradient-to-b from-indigo-50 to-white">

      {/* TITLE + DESCRIPTION */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
        <p className="text-gray-700 mt-4 leading-relaxed text-lg">{project.longDescription}</p>
      </div>

      {/* BANNER + CONTACT */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Banner */}
        <motion.div
          className="lg:col-span-2 flex flex-col gap-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={project.banner}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-[400px] object-contain rounded-xl shadow-xl"
          />

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-3 mt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md font-medium text-sm shadow hover:bg-indigo-200 transition"
              >
                {techIcons[tech] || null}
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="p-6 h-fit rounded-xl shadow-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white lg:sticky lg:top-20"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-indigo-100 mb-4">Have questions about this project?</p>
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
            <FaEnvelope className="text-white text-xl" />
            <span className="text-lg font-medium">{project.contactEmail}</span>
          </div>
        </motion.div>
      </div>

      {/* FEATURES */}
      <motion.div
        className="mt-16 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {project.features.map((f, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg bg-white border border-indigo-100"
          >
            <p className="font-semibold text-lg text-indigo-700 mb-3">{f.title}</p>

            {/* Feature items */}
            {f.items && (
              <ul className="list-disc pl-6 mb-3 space-y-1">
                {f.items.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            )}

            {/* Feature technologies */}
            <div className="flex flex-wrap gap-3 mt-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-medium text-sm shadow-sm hover:bg-indigo-100 transition"
                >
                  {techIcons[tech] || null}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* IMAGE GALLERY */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images?.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-md border border-indigo-100 bg-white"
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

      {/* INSTALLATION */}
      <motion.div
        className="mt-12 p-6 rounded-xl shadow-lg bg-white border border-indigo-100"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Installation Guide</h2>
        <div className="space-y-6">
          {project.installation.steps.map((step, idx) => (
            <div key={idx}>
              <p className="font-medium text-gray-900 mb-2">{step.label}</p>
              {step.code && (
                <div className="relative bg-gray-900 text-gray-100 p-4 rounded-lg shadow-lg">
                  <pre className="whitespace-pre-wrap text-sm">{step.code}</pre>
                  <button
                    onClick={() => copy(step.code!)}
                    className="absolute top-2 right-2 text-white hover:text-indigo-300"
                  >
                    <FaCopy />
                  </button>
                  {copied && (
                    <span className="absolute bottom-2 right-3 text-green-300 text-xs">
                      Copied!
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
