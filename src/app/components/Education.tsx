"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, Trophy } from "lucide-react";

const educationData = [
    {
        degree: "B.Tech – Computer Science and Engineering",
        institution: "JK Lakshmipat University",
        location: "Jaipur, Rajasthan",
        period: "2020 – 2024",
        score: "CGPA: 8.3/10",
        gradient: "from-blue-600 to-purple-600",
        achievements: [
            "President – Coding Club (2022-2023)",
            "Coursera Campus Ambassador (2022-2023)",
            "Organized HackJKLU 2.0 with 250+ participants",
            "Class Representative (2020-2022)",
        ],
    },
    {
        degree: "Intermediate (MPC)",
        institution: "Sri Chaitanya Junior College",
        location: "Hyderabad, Telangana",
        period: "2018 – 2020",
        score: "Percentage: 93.4%",
        gradient: "from-purple-600 to-pink-600",
        achievements: [
            "Telangana State Board",
            "Specialized in Mathematics, Physics, Chemistry",
        ],
    },
];

const Education = () => {
    return (
        <section id="education" className="mb-20 relative w-full max-w-full overflow-x-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none max-w-full">
                <div className="absolute -top-40 left-0 w-64 h-64 md:w-80 md:h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl transform -translate-x-1/3" />
                <div className="absolute -bottom-40 right-0 w-64 h-64 md:w-80 md:h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl transform translate-x-1/3" />
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
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
                >
                    Education 🎓
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    Academic background and achievements
                </motion.p>
            </motion.div>

            {/* Education Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
                    >
                        {/* Gradient overlay on hover */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />

                        {/* Icon */}
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`bg-gradient-to-br ${edu.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
                        >
                            <GraduationCap className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Degree */}
                        <h4 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-3 relative z-10`}>
                            {edu.degree}
                        </h4>

                        {/* Institution */}
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 relative z-10">
                            {edu.institution}
                        </p>

                        {/* Meta Info */}
                        <div className="space-y-2 mb-4 relative z-10">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Calendar className="w-4 h-4 text-purple-500" />
                                <span className="text-sm">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <MapPin className="w-4 h-4 text-pink-500" />
                                <span className="text-sm">{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-yellow-500" />
                                <span className={`text-sm font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                  {edu.score}
                </span>
                            </div>
                        </div>

                        {/* Achievements */}
                        {edu.achievements && (
                            <div className="relative z-10">
                                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                    <Award className="w-4 h-4 text-indigo-500" />
                                    Highlights
                                </h5>
                                <ul className="space-y-1">
                                    {edu.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                        >
                                            <span className="text-purple-500 mt-1">•</span>
                                            <span>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Overall Achievement Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
            >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl">
                    <GraduationCap className="w-6 h-6" />
                    <span className="text-lg font-bold">Strong Academic Foundation in Computer Science</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;