"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90, icon: "🟨" },
  { name: "TypeScript", level: 85, icon: "🔷" },
  { name: "React", level: 85, icon: "⚛️" },
  { name: "Next.js", level: 80, icon: "⏭️" },
  { name: "Angular", level: 75, icon: "🅰️" },
  { name: "Node.js", level: 80, icon: "🟩" },
  { name: "Express.js", level: 75, icon: "🚂" },
  { name: "MongoDB", level: 80, icon: "🍃" },
  { name: "MySQL", level: 70, icon: "🐬" },
  { name: "AWS", level: 70, icon: "☁️" },
];

const Skills = () => (
  <section id="skills" className="mb-16">
    <motion.h3
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl font-bold text-purple-600 mb-8"
    >
      Skills
    </motion.h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {skills.map((skill, idx) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 + idx * 0.1 }}
          className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-blue-600 to-pink-400"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
