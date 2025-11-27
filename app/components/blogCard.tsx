"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const blogs = [
  {
    id: "1",
    title: "Laravel কি, কেন, কিভাবে ব্যবহার করবো",
    desc: "Laravel হল একটি ওপেন-সোর্স PHP Framework, যা মূলত Model-View-Controller (MVC) আর্কিটেকচারের উপর ভিত্তি করে তৈরি। ২০১১ সালে Taylor Otwell মূলত CodeIgniter ফ্রেমওয়ার্কের একটি বিকল্প হিসেবে Laravel তৈরি করে, কারণ CodeIgniter তখন বিল্ট-ইন User Authentication এবং Authorization সাপোর্ট দিত না। .....",
    date: "March 18, 2025",
    image: "/images/blogs/blog1.jpg",
    link: "https://www.linkedin.com/pulse/%E0%A6%95-%E0%A6%95%E0%A6%A8-%E0%A6%95%E0%A6%AD%E0%A6%AC-laravel-%E0%A6%95-%E0%A6%95-%E0%A6%A8-%E0%A6%95-%E0%A6%AD-%E0%A6%AC--nwhbc/?trackingId=17RNyYapTgmalzSskHCgDg%3D%3D",
  },
  {
    id: "2",
    title: "Laravel এর Request Lifecycle কি, কিভাবে কাজ করে ?",
    desc: "Requests হল application এবং client এর মধ্যে যোগাযোগের মাধ্যম। Response হলো সার্ভারের পক্ষ থেকে ক্লায়েন্টের (ব্যবহারকারীর) জন্য পাঠানো উত্তর বা ফলাফল। Laravel Request Lifecycle হলো একটি HTTP রিকুয়েস্ট কীভাবে Laravel অ্যাপ্লিকেশনে প্রবেশ করে, প্রসেস হয়, এবং শেষে রেসপন্স হয়ে ইউজারের ব্রাউজারে পৌঁছে, সেই সম্পূর্ণ যাত্রা।",
    date: "March 20, 2025",
    image: "/images/blogs/blog2.png",
    link: "https://www.linkedin.com/pulse/%E0%A6%95-%E0%A6%95%E0%A6%A8-%E0%A6%95%E0%A6%AD%E0%A6%AC-laravel-abu-buckker-siddikh-labib-pgizc/?trackingId=zMWiD13IR2qpPuKAHFA2nA%3D%3D",
  },
];

export default function BlogPage() {
  return (
    <section id="blog" className="py-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Latest Blogs</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Articles, insights & things I learn while building projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {blog.desc}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-500 text-xs mt-3">
                <Calendar size={14} />
                <span>{blog.date}</span>
              </div>

              {/* Read More */}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 font-medium text-indigo-600 hover:text-indigo-800 transition gap-2"
              >
                <FaLinkedin /> Read More ...
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
