"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail, Sun, Moon } from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar background
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: rect.top };
      });

      // Find the section that's currently in view
      const current = offsets.find((section) => section.top >= -100 && section.top <= 300);
      if (current) {
        setActive(current.id);
      } else {
        // Fallback to the last section before the viewport
        const passed = offsets.filter((section) => section.top < 0);
        if (passed.length > 0) {
          setActive(passed[passed.length - 1].id);
        }
      }
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for dark mode preference on mount
  useEffect(() => {
    // Check if dark class exists or localStorage preference
    if (typeof window !== 'undefined') {
      const isDark =
          localStorage.getItem('darkMode') === 'true' ||
          document.documentElement.classList.contains('dark');
      setDarkMode(isDark);

      // Apply dark mode
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (typeof window !== 'undefined') {
      // Save preference to localStorage
      localStorage.setItem('darkMode', String(newDarkMode));

      // Toggle dark class on html element
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const handleNavClick = (id: string) => {
    setActive(id);
    setOpen(false);

    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
      <>
        {/* Main Navbar */}
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
                    : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo/Name */}
              <motion.a
                  href="#home"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={() => handleNavClick("home")}
                  className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-20 h-10 md:w-22 md:h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl md:text-2xl">KDR</span>
                </div>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {sections.map((section, idx) => {
                  const isActive = active === section.id;
                  return (
                      <motion.a
                          key={section.id}
                          href={`#${section.id}`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * idx }}
                          onClick={() => handleNavClick(section.id)}
                          className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group cursor-pointer ${
                              isActive
                                  ? "text-white"
                                  : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                          }`}
                      >
                        {/* Active background */}
                        {isActive && (
                            <motion.div
                                layoutId="activeSection"
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg shadow-lg"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}

                        {/* Icon and Label */}
                        <span className="relative z-10 flex items-center gap-2">
                      <section.icon className="w-4 h-4" />
                          {section.label}
                    </span>

                        {/* Hover underline for non-active items */}
                        {!isActive && (
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                        )}
                      </motion.a>
                  );
                })}
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-3">
                {/* Dark Mode Toggle */}
                 <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    aria-label="Toggle menu"
                >
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                >
                  <div className="px-4 py-4 space-y-2">
                    {sections.map((section, idx) => {
                      const isActive = active === section.id;
                      return (
                          <motion.a
                              key={section.id}
                              href={`#${section.id}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              onClick={() => handleNavClick(section.id)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                                  isActive
                                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg"
                                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                              }`}
                          >
                            <section.icon className="w-5 h-5" />
                            {section.label}
                          </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Spacer to prevent content from hiding under fixed navbar */}
        <div className="h-16 md:h-20" />
      </>
  );
};

export default Navbar;