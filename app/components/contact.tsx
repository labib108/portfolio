"use client";

import { FaEnvelope, FaPhone, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 md:px-12">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side – Text Info */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contact <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have a question, project idea, or want to work together?  
            Feel free to reach out anytime. I usually reply within a few hours!
          </p>

          {/* Contact Cards */}
          <div className="space-y-4">
            
            {/* Email */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
              <FaEnvelope className="text-indigo-600 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">abubuckkersiddikh@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
              <FaPhone className="text-indigo-600 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+880 1720843651</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.facebook.com/siddikh.labib" target="_blank" className="p-3 bg-white rounded-full shadow hover:shadow-lg transition">
                <FaFacebook className="text-indigo-600 text-xl" />
              </a>
              <a href="https://github.com/labib108" target="_blank" className="p-3 bg-white rounded-full shadow hover:shadow-lg transition">
                <FaGithub className="text-indigo-600 text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/abu-buckker-siddikh-labib/" target="_blank" className="p-3 bg-white rounded-full shadow hover:shadow-lg transition">
                <FaLinkedin className="text-indigo-600 text-xl" />
              </a>
            </div>
          </div>
        </div>




        {/* Right Side – Contact Form */}
        <div className="bg-white shadow-xl p-8 rounded-2xl border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send a Message
          </h3>

          <form className="space-y-5">
            
            <div>
              <label className="font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-xl text-gray-700 bg-gray-100 outline-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 rounded-xl text-gray-700 bg-gray-100 outline-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                className="w-full mt-2 p-3 rounded-xl text-gray-700 bg-gray-100 outline-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-md transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
