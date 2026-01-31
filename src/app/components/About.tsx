"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Zap,
  Heart,
  Target,
  Sparkles,
  TrendingUp,
  Coffee,
  Globe,
} from "lucide-react";

const aboutIntro = {
  greeting: "Hi, I'm Dinesh! 👋",
  tagline: "Full Stack Developer | Problem Solver | Tech Enthusiast",
  description:
      "I'm a passionate full-stack developer with 2+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies, mentoring juniors, or contributing to open-source projects.",
  highlights: [
    { icon: Code, text: "2+ Years of Professional Experience" },
    { icon: Zap, text: "Built apps serving 150+ users/minute" },
    { icon: Award, text: "Led tech clubs & organized hackathons" },
    { icon: Heart, text: "Passionate about clean code & best practices" },
  ],
  stats: [
    { number: "150+", label: "Users/Min", icon: TrendingUp },
    { number: "2+", label: "Years Exp", icon: Briefcase },
    { number: "5+", label: "Projects", icon: Code },
    { number: "80%+", label: "Test Coverage", icon: Target },
  ],
};

const aboutTimeline = [
  {
    year: "July 2024 - Present",
    title: "Software Development Engineer I",
    company: "DailyObjects",
    location: "Gurugram",
    type: "work",
    icon: Briefcase,
    gradient: "from-blue-600 to-purple-600",
    description:
        "Leading full-stack development initiatives, implementing Angular (13, 14 & 19) with SSR, and mentoring junior developers. Built scalable e-commerce solutions serving 150+ users per minute.",
    achievements: [
      "Contributed to Angular v14 → v19 migration",
      "Integrated UPI payment gateway",
      "Achieving 30 - 40% faster API response via Redis caching",
      "Achieved 80%+ Jest test coverage",
      "Reduced deployment time by 50%",
    ],
  },
  {
    year: "Jan - June 2024",
    title: "Full Stack Developer Intern",
    company: "DailyObjects",
    location: "Gurugram",
    type: "work",
    icon: Code,
    gradient: "from-purple-600 to-pink-600",
    description:
        "Developed responsive UI components and backend APIs for e-commerce platforms. Optimized MongoDB schemas and enhanced application performance.",
    achievements: [
      "Built core e-commerce features",
      "Improved code quality with optimized MongoDB queries",
      "Converted to full-time based on performance",
    ],
  },
  {
    year: "May - July 2023",
    title: "Web Developer Intern",
    company: "Celebal Technologies",
    location: "Jaipur",
    type: "work",
    icon: Globe,
    gradient: "from-pink-600 to-orange-600",
    description:
        "Built a full-featured blog platform with CRUD operations and user authentication. Recognized for exceptional project delivery.",
    achievements: ["Awarded Golden Badge Certificate"],
  },
  {
    year: "2020-2024",
    title: "B.Tech – Computer Science",
    company: "JK Lakshmipat University",
    location: "Jaipur",
    type: "education",
    icon: GraduationCap,
    gradient: "from-emerald-600 to-teal-600",
    description:
        "Graduated with CGPA 8.3. Led the Coding Club as President, organized HackJKLU 2.0 with 250+ participants, and served as Coursera Campus Ambassador.",
    achievements: [
      "CGPA: 8.3/10",
      "President – Coding Club",
      "Organized HackJKLU 2.0 (250+ participants)",
      "Coursera Campus Ambassador",
    ],
  },
];

const passions = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Heart,
    title: "User Experience",
    description: "Creating intuitive and delightful user interfaces",
  },
  {
    icon: Coffee,
    title: "Learning",
    description: "Constantly exploring new technologies and best practices",
  },
];

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

  return (
      <section id="about" className="mb-20 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full opacity-20 blur-3xl" />
        </div>

        {/* About Me Introduction */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
          <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center"
          >
            About Me
          </motion.h2>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <User className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {aboutIntro.greeting}
              </h3>
            </div>

            <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-6">
              {aboutIntro.tagline}
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {aboutIntro.description}
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {aboutIntro.highlights.map((highlight, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl"
                  >
                    <highlight.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {highlight.text}
                </span>
                  </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aboutIntro.stats.map((stat, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl shadow-lg text-center"
                  >
                    <stat.icon className="w-6 h-6 text-white mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* My Passions */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
          <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            What Drives Me ✨
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passions.map((passion, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                >
                  <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <passion.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
                    {passion.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {passion.description}
                  </p>
                </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            My Journey 🚀
          </motion.h3>

          <div className="relative pl-8">
            {/* Animated Timeline Line */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-3 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
            />

            <ul className="space-y-12">
              {aboutTimeline.map((item, idx) => (
                  <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      onMouseEnter={() => setActiveTimeline(idx)}
                      onMouseLeave={() => setActiveTimeline(null)}
                      className="relative ml-8 group"
                  >
                    {/* Timeline Node */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.3 }}
                        className={`absolute -left-11 top-6 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full border-4 border-white dark:border-gray-900 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform z-10`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Timeline Card */}
                    <motion.div
                        whileHover={{ x: 10 }}
                        className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      {/* Year Badge */}
                      <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg`}
                      >
                        {item.year}
                      </motion.div>

                      <h4 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                        {item.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {item.company}, {item.location}
                      </p>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-2"
                            >
                              <Sparkles className={`w-4 h-4 mt-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent flex-shrink-0`} />
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement}
                        </span>
                            </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
  );
};

export default About;