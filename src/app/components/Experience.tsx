"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	Briefcase,
	MapPin,
	Calendar,
	TrendingUp,
	Award,
	Code,
	Rocket,
	CheckCircle2
} from "lucide-react";

const experiences = [
	{
		company: "DailyObjects",
		logo: "/logos/dailyobjects.png",
		role: "Software Development Engineer I",
		date: "Jul 2024 – Present",
		duration: "2+ years",
		location: "Gurugram, Haryana",
		type: "Full-time",
		gradient: "from-blue-600 via-purple-600 to-pink-600",
		highlights: [
			{
				icon: Code,
				text: "Contributed to Angular v14 to v19 migration with SSR, mentoring juniors and optimizing performance",
			},
			{
				icon: TrendingUp,
				text: "Built full-stack platform serving 150+ users/min with 40% faster API response via Redis caching",
			},
			{
				icon: Rocket,
				text: "Integrated UPI Intent Flow improving payment conversion rates and third-party APIs (BlueDart, ShipRocket, MoEngage)",
			},
			{
				icon: CheckCircle2,
				text: "Implemented Jest testing achieving 80%+ coverage, streamlined CI/CD reducing deployment time 50%",
			},
		],
		skills: ["Angular (13, 14 & 19)", "Node.js", "TypeScript", "MongoDB", "Redis", "Elasticsearch", "Jest", "EC2", "S3", "CloudFront", "Jenkins", "REST APIs"],
	},
	{
		company: "DailyObjects",
		logo: "/logos/dailyobjects.png",
		role: "Full Stack Developer Intern",
		date: "Jan 2024 – Jun 2024",
		duration: "6 months",
		location: "Gurugram, Haryana",
		type: "Internship",
		gradient: "from-emerald-600 via-teal-600 to-cyan-600",
		highlights: [
			{
				icon: Code,
				text: "Developed responsive UI components using Angular and implemented backend APIs with Node.js/TypeScript",
			},
			{
				icon: TrendingUp,
				text: "Optimized MongoDB schemas and refactored code using Prettier, improving stability and maintainability",
			},
			{
				icon: Award,
				text: "Converted to full-time SDE-1 based on strong performance and technical contributions",
			},
		],
		skills: ["Angular", "Node.js", "MongoDB", "TypeScript", "REST APIs"],
	},
	{
		company: "Celebal Technologies",
		logo: "/logos/celebal.png",
		role: "Web Developer Intern",
		date: "Jun 2023 – Jul 2023",
		duration: "2 months",
		location: "Jaipur, Rajasthan",
		type: "Internship",
		gradient: "from-orange-600 via-red-600 to-pink-600",
		highlights: [
			{
				icon: Code,
				text: "Built full-featured blog platform with CRUD operations, user authentication, and responsive design",
			},
			{
				icon: Award,
				text: "Awarded Golden Badge Certificate for exceptional project delivery",
			},
		],
		skills: ["Web Development", "CRUD", "Authentication", "Responsive Design"],
	},
];

const Experience = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<section id="experience" className="mb-20 relative">
			{/* Background Decoration */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-20 blur-3xl" />
				<div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl" />
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
					className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
				>
					Work Experience
				</motion.h3>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
				>
					My professional journey building scalable web applications
				</motion.p>
			</motion.div>

			{/* Timeline */}
			<div className="relative pl-4 md:pl-8">
				{/* Animated Timeline Line */}
				<motion.div
					initial={{ height: 0 }}
					whileInView={{ height: "100%" }}
					viewport={{ once: true }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute left-6 md:left-10 top-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-lg"
				/>

				<ul className="space-y-8 md:space-y-12">
					{experiences.map((exp, idx) => (
						<motion.li
							key={idx}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.2 }}
							onMouseEnter={() => setActiveIndex(idx)}
							onMouseLeave={() => setActiveIndex(null)}
							className="relative ml-12 md:ml-16 group"
						>
							{/* Timeline Node */}
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
								className="absolute -left-16 md:-left-20 top-6 w-16 h-16 bg-white rounded-full border-4 border-purple-500 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10"
							>
								<img
									src={exp.logo}
									alt={exp.company}
									className="w-10 h-10 object-contain"
								/>
								{/* Pulse Effect */}
								<motion.div
									animate={{
										scale: [1, 1.2, 1],
										opacity: [0.5, 0, 0.5],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="absolute inset-0 rounded-full border-4 border-purple-400"
								/>
							</motion.div>

							{/* Experience Card */}
							<motion.div
								whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
								className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
							>
								{/* Gradient Border on Hover */}
								{/*<div
									className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
								/>*/}

								{/* Card Header */}
								<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<motion.div
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.6 }}
												className={`bg-gradient-to-r ${exp.gradient} p-2 rounded-lg shadow-lg`}
											>
												<Briefcase className="w-5 h-5 text-white" />
											</motion.div>
											<h4 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
												{exp.role}
											</h4>
										</div>
										<p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
											{exp.company}
										</p>
									</div>

									{/* Type Badge */}
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.3 }}
										className={`bg-gradient-to-r ${exp.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
									>
										{exp.type}
									</motion.div>
								</div>

								{/* Meta Information */}
								<div className="flex flex-wrap gap-4 mb-6 text-sm">
									<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
										<Calendar className="w-4 h-4 text-purple-500" />
										<span className="font-medium">{exp.date}</span>
										<span className="text-gray-400">•</span>
										<span className="text-purple-600 dark:text-purple-400 font-semibold">
                      {exp.duration}
                    </span>
									</div>
									<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
										<MapPin className="w-4 h-4 text-pink-500" />
										<span>{exp.location}</span>
									</div>
								</div>

								{/* Highlights */}
								<div className="space-y-3 mb-6">
									{exp.highlights.map((highlight, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: i * 0.1 }}
											className="flex items-start gap-3 group/item"
										>
											<div className={`bg-gradient-to-r ${exp.gradient} p-1.5 rounded-lg shadow-md group-hover/item:scale-110 transition-transform`}>
												<highlight.icon className="w-4 h-4 text-white" />
											</div>
											<p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
												{highlight.text}
											</p>
										</motion.div>
									))}
								</div>

								{/* Skills Tags */}
								<div className="flex flex-wrap gap-2">
									{exp.skills.map((skill, skillIdx) => (
										<motion.span
											key={skill}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ delay: skillIdx * 0.05 }}
											whileHover={{ scale: 1.1 }}
											className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-all cursor-default"
										>
											{skill}
										</motion.span>
									))}
								</div>

								{/* Hover Indicator */}
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: activeIndex === idx ? "100%" : 0 }}
									transition={{ duration: 0.3 }}
									className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${exp.gradient}`}
								/>
							</motion.div>
						</motion.li>
					))}
				</ul>
			</div>

			{/* Total Experience Summary */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="mt-12 text-center"
			>
				<div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-full shadow-2xl">
					<Award className="w-6 h-6" />
					<span className="text-lg font-bold">2+ Years of Professional Experience</span>
				</div>
			</motion.div>
		</section>
	);
};

export default Experience;