"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full max-w-4xl mx-auto py-24 px-8 mt-16 border-t border-black/10 dark:border-white/10 transition-colors duration-700">
      
      {/* ☀️ LIGHT MODE BIO: The Hardworking Engineer */}
      <div className="dark:hidden space-y-6">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-accent">
          System Diagnostics
        </h2>
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            I engineer complex backend systems and resilient full-stack applications. 
            I thrive in high-stakes environments, navigating massive C++ codebases and 
            architecting enterprise-grade frameworks from the ground up.
          </p>
          <p>
            With a foundation in Computer Science from RV College of Engineering, 
            my approach is fiercely analytical. Whether I am building Machine Learning models 
            for Intrusion Detection or delivering data-heavy Angular dashboards, I build 
            systems that simply do not break.
          </p>
          <div className="pt-4 flex gap-4 font-bold text-sm">
            <span className="bg-black/5 px-3 py-1 rounded-md">C++ / Go / Python</span>
            <span className="bg-black/5 px-3 py-1 rounded-md">Angular / React</span>
            <span className="bg-black/5 px-3 py-1 rounded-md">Distributed Systems</span>
          </div>
        </div>
      </div>

      {/* 🌙 DARK MODE BIO: The Celestial Art Lover */}
      <div className="hidden dark:block space-y-6">
        <h2 className="text-5xl font-romantic text-accent tracking-wide">
          A Romantic in the Cosmos
        </h2>
        <div className="text-xl leading-loose space-y-6 text-white/80">
          <p>
            I am an artist who paints with logic. Beyond the terminal, my soul is captivated 
            by the vastness of space, the rhythm of ambient music, and the quiet beauty of 
            the night sky. 
          </p>
          <p>
            I believe that the best code is written with a creative heart. My love for 
            astronomy and visual arts bleeds into my work—whether I am designing dynamic 
            visualizations or finding elegant solutions to complex puzzles. The universe 
            is my canvas, and software is simply my medium.
          </p>
          <p className="font-romantic text-3xl pt-4 text-accent/80">
            "We are made of star-stuff, and logic."
          </p>
        </div>
      </div>

    </section>
  );
}