"use client";

import { FaEnvelope, FaPhone, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 py-14 sm:py-20 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-zinc-100 mb-4">
            Contact{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-zinc-400 mb-6 sm:mb-8">
            Have a question, project idea, or want to work together? Feel free
            to reach out anytime. I usually reply within a few hours!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:abubuckkersiddikh@gmail.com"
              className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow border border-transparent dark:border-zinc-800 active:scale-[0.99] transition"
            >
              <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-2xl shrink-0" />
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 dark:text-zinc-100">
                  Email
                </p>
                <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base break-all">
                  abubuckkersiddikh@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+8801720843651"
              className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow border border-transparent dark:border-zinc-800 active:scale-[0.99] transition"
            >
              <FaPhone className="text-indigo-600 dark:text-indigo-400 text-2xl shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-zinc-100">
                  Phone
                </p>
                <p className="text-gray-600 dark:text-zinc-400">
                  +880 1720843651
                </p>
              </div>
            </a>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.facebook.com/siddikh.labib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="touch-target p-3 bg-white dark:bg-zinc-900 rounded-full shadow border border-transparent dark:border-zinc-800"
              >
                <FaFacebook className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </a>
              <a
                href="https://github.com/labib108"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="touch-target p-3 bg-white dark:bg-zinc-900 rounded-full shadow border border-transparent dark:border-zinc-800"
              >
                <FaGithub className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/abu-buckker-siddikh-labib/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="touch-target p-3 bg-white dark:bg-zinc-900 rounded-full shadow border border-transparent dark:border-zinc-800"
              >
                <FaLinkedin className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 shadow-xl p-5 sm:p-8 rounded-2xl border border-indigo-100 dark:border-zinc-800">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-5 sm:mb-6">
            Send a Message
          </h3>

          <form className="space-y-4 sm:space-y-5">
            <div>
              <label className="font-medium text-gray-700 dark:text-zinc-300 text-sm sm:text-base">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3.5 rounded-xl text-gray-700 dark:text-zinc-200 bg-gray-100 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-zinc-300 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3.5 rounded-xl text-gray-700 dark:text-zinc-200 bg-gray-100 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-zinc-300 text-sm sm:text-base">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                className="w-full mt-2 p-3.5 rounded-xl text-gray-700 dark:text-zinc-200 bg-gray-100 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-indigo-500 resize-y min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md transition active:scale-[0.99]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
