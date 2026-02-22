"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      // Floating effect for Dark Mode (Space vibe)
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="group relative p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all duration-700 rounded-none dark:rounded-3xl hover:border-accent"
    >
      <div className="space-y-4">
        {/* Personality-shifting Sub-header */}
        <p className="font-body text-xs uppercase tracking-[0.2em] text-accent dark:hidden">
          {project.engineerDetail}
        </p>
        <p className="font-romantic text-2xl text-accent hidden dark:block">
          {project.artistDetail}
        </p>

        <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase dark:capitalize dark:font-normal italic dark:not-italic">
          {project.title}
        </h3>

        <p className="opacity-70 leading-relaxed font-body text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex gap-2 pt-4">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[10px] border border-black/20 dark:border-white/20 px-2 py-1 uppercase tracking-tighter">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}