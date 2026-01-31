"use client";

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "@/app/components/Education";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-4 text-gray-900 dark:text-gray-100 font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
        <Education />
      <Projects />
      <Contact />
    </main>
  );
}
