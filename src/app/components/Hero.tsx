"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Download,
    ChevronDown,
    Code2,
    Sparkles,
    Globe,
} from "lucide-react";

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (typeof window === 'undefined') return;
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const roles = [
        "Full Stack Developer",
        "Node.js Developer",
        "Problem Solver",
        "SDE1",
    ];

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/Kondrolladinesh",
            color: "hover:bg-gray-900",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/kondrolla-dinesh",
            color: "hover:bg-blue-600",
        },
        {
            name: "Email",
            icon: Mail,
            url: "mailto:dineshreddykondrolla@gmail.com",
            color: "hover:bg-red-500",
        }
    ];

    const techStack = [
        "Angular (13, 14, 19)",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "AWS",
    ];

    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4 w-full max-w-full"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden max-w-full">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                    }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: -mousePosition.x,
                        y: -mousePosition.y,
                    }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: mousePosition.y,
                        y: mousePosition.x,
                    }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-500 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 -z-10">
                {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Profile Image with Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative mb-8 inline-block"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"
                    />
                    <motion.img
                        src="/profile.jpeg"
                        alt="Kondrolla Dinesh Reddy"
                        whileHover={{ scale: 1.05 }}
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
                    />
                    {/* Status Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-full h-full bg-green-400 rounded-full"
                        />
                    </motion.div>
                </motion.div>

                {/* Greeting Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg mb-6"
                >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Available for opportunities
          </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
                >
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Kondrolla Dinesh Reddy
          </span>
                </motion.h1>

                {/* Role with Typing Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-4"
                >
                    <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        <Code2 className="w-6 h-6 text-purple-500" />
                        <motion.span
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {roles[currentRole]}
                        </motion.span>
                    </div>
                </motion.div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-6"
                >
                    <MapPin className="w-8 h-8"/>
                    <span>Hyderabad, Telangana • Open to Remote/Hybrid/Onsite</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                >
                    Building scalable web applications with{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
            2+ years
          </span>{" "}
                    of experience. Specialized in modern JavaScript frameworks, cloud
                    technologies, and creating beautiful user experiences.
                </motion.p>

                {/* Tech Stack Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                >
                    {techStack.map((tech, idx) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + idx * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold shadow-md"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-wrap gap-4 justify-center mb-8"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full shadow-xl font-semibold flex items-center gap-2 hover:shadow-2xl transition-all"
                    >
                        <Mail className="w-5 h-5" />
                        Get in Touch
                    </motion.a>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-full shadow-xl font-semibold flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
                    >
                        <Download className="w-5 h-5" />
                        Download CV
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="flex gap-4 justify-center mb-12"
                >
                    {socialLinks.map((social, idx) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + idx * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:text-white transition-all ${social.color}`}
                            aria-label={social.name}
                        >
                            <social.icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom--12 left-1/2 -translate-x-1/2"
                >
                    <motion.a
                        href="#about"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                        <span className="text-sm font-medium">Scroll to explore</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.a>
                </motion.div>
            </div>

            {/* Custom CSS for grid pattern */}
            <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(128, 128, 128, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(128, 128, 128, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
        </section>
    );
};

export default Hero;