"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-white tracking-wide">
          Experience
        </h2>
        <p className="text-slate-300 mt-3 text-lg">
          A journey of professional growth and real-world project contributions.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>

        {/* Card */}
        <div className="relative ml-16 bg-slate-900/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/30 transition duration-300 hover:scale-[1.01]">
          <div className="absolute -left-6 top-8 rounded-full w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex items-center justify-center">
            <Briefcase className="text-white" size={20} />
          </div>

          <h3 className="text-2xl font-bold text-white">
            BAE Innovation
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Sister concern of Nandonik Design & Development Ltd.
          </p>

          <div className="flex flex-wrap gap-5 mt-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-blue-400" />
              <span>Trainee Software Engineer</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-purple-400" />
              <span>July 2025 – Present</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-pink-400" />
              <span>Khulna, Bangladesh (Hybrid)</span>
            </div>
          </div>

          <p className="text-slate-300 mt-6 leading-relaxed">
            At BAE Innovation, I contributed to building high-quality applications 
            using <span className="text-blue-400 font-medium">PHP</span>,{" "}
            <span className="text-purple-400 font-medium">Laravel</span>, and{" "}
            <span className="text-pink-400 font-medium">MySQL</span>.  
            I worked on real-world production projects, collaborated with senior engineers, 
            and improved system performance, scalability, and code quality.  
          </p>

          <ul className="mt-5 space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">✔</span>
              Developed backend APIs for enterprise applications.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">✔</span>
              Implemented authentication & dashboard features.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">✔</span>
              Optimized MySQL queries, reduced load time significantly.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
