"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";

const projects = [
    {
        name: "RideFixr",
        tagline: "On-Road Vehicle Assistance Platform",
        description:
            "A comprehensive real-time mechanic booking platform connecting vehicle owners with nearby mechanics instantly. Features include geolocation-based services, real-time tracking, and automated service management.",
        detailedFeatures: [
            "Real-time mechanic availability tracking",
            "Geolocation-based service matching",
            "Admin dashboard for mechanic verification",
            "Request lifecycle management",
            "User & mechanic authentication system",
        ],
        tech: ["Next.js", "MongoDB", "Vercel", "REST APIs", "Geolocation API"],
        image: "/logos/ridefixr.png",
        gradient: "from-blue-500 via-blue-400  to-blue-500",
        link: "#",
        github: "https://github.com/Kondrolladinesh/RideFixr",
        duration: "Aug 2023 - Dec 2023",
        impact: "Streamlined roadside assistance booking",
        role: "Full Stack Developer",
    },
    {
        name: "Doctor Management DApp",
        tagline: "Healthcare Appointment System",
        description:
            "Modern healthcare web application enabling seamless appointment booking, medical records management, and secure doctor-patient interactions with real-time updates.",
        detailedFeatures: [
            "Appointment booking & scheduling",
            "Medical history tracking",
            "Role-based access control (Doctor/Patient)",
            "Firebase real-time notifications",
            "Secure document storage",
        ],
        tech: ["React", "Node.js", "Express", "Firebase", "Firestore"],
        image: "/logos/doctor-dapp.png",
        gradient: "from-blue-500 via-blue-400  to-blue-500",
        link: "#",
        github: "https://github.com/Kondrolladinesh/Doctor_Management_Website_-DApp-",
        duration: "Feb 2023 - May 2023",
        impact: "Enhanced healthcare accessibility",
        role: "Full Stack Developer",
    },
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="mb-20 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />
            </div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
                >
                    Featured Projects
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    Showcasing real-world applications built with modern technologies and best practices
                </motion.p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Gradient overlay on hover */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />

                        {/* Project Image with Overlay */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                            <img
                                src={project.image}
                                alt={project.name}
                                className={`w-full h-full object-cover transition-transform duration-700 bg-gradient-to-r ${project.gradient}`}
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="absolute top-4 right-4 z-20"
                            >
                                <div className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2`}>
                                    <Award className="w-4 h-4" />
                                    <span className="text-sm font-semibold">{project.role}</span>
                                </div>
                            </motion.div>

                            {/* Project Title Overlay */}
                            <div className="absolute bottom-4 left-4 z-20">
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    {project.name}
                                </h4>
                                <p className="text-blue-200 text-sm font-medium">
                                    {project.tagline}
                                </p>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 space-y-4">
                            {/* Duration & Impact */}
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <Calendar className="w-4 h-4 text-purple-500" />
                                    <span>{project.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <Users className="w-4 h-4 text-blue-500" />
                                    <span>{project.impact}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Key Features */}
                            <div className="space-y-2">
                                <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                                    Key Features:
                                </h5>
                                <ul className="space-y-1">
                                    {project.detailedFeatures.slice(0, 3).map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                        >
                                            <span className="text-purple-500 mt-1">•</span>
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tech.map((tech, techIdx) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: techIdx * 0.05 }}
                                        className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all`}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4">
                                {/*<motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>View Live</span>
                                </motion.a>*/}
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>Code</span>
                                </motion.a>
                            </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* View All Projects CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
            >
                <motion.a
                    href="https://github.com/Kondrolladinesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                    <Github className="w-5 h-5" />
                    <span>View All Projects on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Projects;