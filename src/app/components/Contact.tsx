"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Globe,
    Copy,
    Check,
    Send,
    MessageCircle,
    Calendar,
} from "lucide-react";

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "dineshreddykondrolla@gmail.com",
            link: "mailto:dineshreddykondrolla@gmail.com",
            description: "Best for detailed inquiries",
            gradient: "from-red-500 to-pink-500",
            copyable: true,
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 95153 16904",
            link: "tel:+919515316904",
            description: "Available during business hours",
            gradient: "from-green-500 to-emerald-500",
            copyable: true,
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "kondrolla-dinesh",
            link: "https://linkedin.com/in/kondrolla-dinesh",
            description: "Let's connect professionally",
            gradient: "from-blue-600 to-blue-700",
            copyable: false,
        },
        {
            icon: Github,
            title: "GitHub",
            value: "Kondrolladinesh",
            link: "https://github.com/Kondrolladinesh",
            description: "Check out my code",
            gradient: "from-gray-700 to-gray-900",
            copyable: false,
        },
    ];

    const quickActions = [
        {
            icon: Send,
            title: "Send Email",
            description: "Open your email client",
            action: "mailto:dineshreddykondrolla@gmail.com?subject=Hello%20Dinesh",
            gradient: "from-purple-600 to-pink-600",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            description: "Chat on WhatsApp",
            action: "https://wa.me/919515316904",
            gradient: "from-green-500 to-emerald-600",
        },
        {
            icon: Calendar,
            title: "Schedule Call",
            description: "Book a meeting slot",
            action: "mailto:dineshreddykondrolla@gmail.com?subject=Schedule%20a%20Call",
            gradient: "from-blue-500 to-cyan-600",
        },
    ];

    const handleCopy = async (text: string, type: "email" | "phone") => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === "email") {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section id="contact" className="mb-20 relative w-full max-w-full overflow-x-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none max-w-full">
                <div className="absolute -top-40 right-0 w-64 h-64 md:w-96 md:h-96 bg-yellow-300 dark:bg-yellow-900 rounded-full opacity-20 blur-3xl transform translate-x-1/3" />
                <div className="absolute -bottom-40 left-0 w-64 h-64 md:w-96 md:h-96 bg-orange-300 dark:bg-orange-900 rounded-full opacity-20 blur-3xl transform -translate-x-1/3" />
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
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 bg-clip-text text-transparent mb-4"
                >
                    Let's Connect! 📬
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    I'm always open to discussing new opportunities, collaborations, or
                    just having a chat about tech!
                </motion.p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                {contactMethods.map((method, idx) => (
                    <motion.div
                        key={method.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
                    >
                        {/* Gradient Background on Hover */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />

                        <div className="relative z-10">
                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`bg-gradient-to-r ${method.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                            >
                                <method.icon className="w-7 h-7 text-white" />
                            </motion.div>

                            {/* Title */}
                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                {method.title}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                {method.description}
                            </p>

                            {/* Value with Copy/Link */}
                            <div className="flex items-center justify-between gap-2">
                                <a
                                    href={method.link}
                                    target={method.copyable ? undefined : "_blank"}
                                    rel={method.copyable ? undefined : "noopener noreferrer"}
                                    className="text-gray-700 dark:text-gray-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition flex-1 truncate"
                                >
                                    {method.value}
                                </a>

                                {method.copyable && (
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() =>
                                            handleCopy(
                                                method.value,
                                                method.title.toLowerCase() as "email" | "phone"
                                            )
                                        }
                                        className={`bg-gradient-to-r ${method.gradient} p-2 rounded-lg text-white shadow-md hover:shadow-lg transition-all`}
                                    >
                                        {(method.title === "Email" && copiedEmail) ||
                                        (method.title === "Phone" && copiedPhone) ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-4xl mx-auto"
            >
                <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
                    Quick Actions ⚡
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickActions.map((action, idx) => (
                        <motion.a
                            key={action.title}
                            href={action.action}
                            target={action.title === "WhatsApp" ? "_blank" : undefined}
                            rel={action.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-gradient-to-r ${action.gradient} text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center group cursor-pointer`}
                        >
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                                className="inline-block mb-3"
                            >
                                <action.icon className="w-8 h-8" />
                            </motion.div>
                            <h5 className="font-bold text-lg mb-1">{action.title}</h5>
                            <p className="text-white/80 text-sm">{action.description}</p>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Location Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 text-center"
            >
                <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
            Based in Gurugram, Haryana • Open to Remote/Hybrid/Onsite in Hyderabad
          </span>
                </div>
            </motion.div>

            {/* Response Time Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 text-center"
            >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-full shadow-lg">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-white rounded-full"
                    />
                    <span className="font-semibold text-sm">
            Usually responds within 24 hours
          </span>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;