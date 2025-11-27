"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  // Update active section on scroll (only on home page)
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      navItems.forEach((item) => {
        if (!item.href.includes("#")) return;
        const id = item.href.split("#")[1];
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    const [path, hash] = href.split("#");

    if (pathname !== path) {
      // Navigate to home page first
      router.push(href);
    } else {
      // Already on page, scroll to section
      if (hash) {
        const section = document.getElementById(hash);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer">
          Sheikh Abu Backkar Siddiq
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                active === item.href
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-900 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="w-6 h-6 text-gray-800" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center space-y-3 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-md block transition-colors ${
                    active === item.href
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
