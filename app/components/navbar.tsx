"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "@/app/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("/");

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

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "/";

      navItems.forEach((item) => {
        if (!item.href.includes("#")) return;
        const id = item.href.split("#")[1];
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) current = item.href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    const [path, hash] = href.split("#");

    if (pathname !== path) {
      router.push(href);
    } else if (hash) {
      const section = document.getElementById(hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 safe-top bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md border-b border-transparent dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16">
        <button
          type="button"
          onClick={() => handleNavClick("/")}
          className="text-left text-base sm:text-xl font-semibold text-gray-900 dark:text-zinc-100 truncate max-w-[58%] sm:max-w-none"
        >
          <span className="sm:hidden">Labib</span>
          <span className="hidden sm:inline">Sheikh Abu Backkar Siddiq</span>
        </button>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                active === item.href
                  ? "bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                  : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 hover:bg-gray-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900"
              }`}
            >
              {item.name}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="touch-target rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen sheet */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-0 max-h-[calc(100dvh-4rem)] overflow-y-auto bg-white dark:bg-zinc-950 border-t dark:border-zinc-800 shadow-2xl rounded-b-3xl safe-bottom transition-transform duration-300 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="flex flex-col gap-2 p-4 pb-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-colors active:scale-[0.98] ${
                    active === item.href
                      ? "bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                      : "bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-zinc-200"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
