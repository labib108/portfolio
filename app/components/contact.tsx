"use client";

import { useActionState, useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { CheckCircle2, X } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false, message: "" };

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (state.ok) {
      setShowSuccess(true);
      setFormKey((k) => k + 1);
    }
  }, [state]);

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

          <form key={formKey} action={formAction} className="space-y-4 sm:space-y-5">
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="contact-name"
                className="font-medium text-gray-700 dark:text-zinc-300 text-sm sm:text-base"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full mt-2 p-3.5 rounded-xl text-gray-700 dark:text-zinc-200 bg-gray-100 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="font-medium text-gray-700 dark:text-zinc-300 text-sm sm:text-base"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full mt-2 p-3.5 rounded-xl text-gray-700 dark:text-zinc-200 bg-gray-100 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="font-medium text-gray-700 dark:text-zinc-300 text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Write your message..."
                rows={5}
                className="w-full mt-2 p-3.5 rounded-xl text-gray-700 dark:text-zinc-200 bg-gray-100 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-indigo-500 resize-y min-h-[120px]"
              />
            </div>

            {state.message && !state.ok && (
              <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-3 py-2 rounded-lg">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-2xl border border-indigo-100 dark:border-zinc-800 text-center animate-in fade-in zoom-in-95">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute top-3 right-3 p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/50">
              <CheckCircle2 className="w-9 h-9 text-green-600 dark:text-green-400" />
            </div>

            <h4
              id="success-title"
              className="text-xl font-bold text-gray-900 dark:text-zinc-100"
            >
              Message Sent!
            </h4>
            <p className="mt-2 text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
              Thanks for reaching out. I&apos;ll get back to you as soon as
              possible.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
