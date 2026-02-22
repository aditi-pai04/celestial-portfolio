"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectCard({ project }: { project: any }) {
  // Use state to randomize values on the client to avoid hydration errors
  const [drift, setDrift] = useState({ y: -10, rotate: 0, duration: 4 });

  useEffect(() => {
    setDrift({
      y: Math.random() * -30 - 20, // Moves up 20px to 50px
      rotate: Math.random() * 4 - 2, // Tilts between -2 and +2 degrees
      duration: Math.random() * 2 + 4, // 4 to 6 seconds per cycle
    });
  }, []);

  return (
    <motion.div
      // Deep Space Wobble (Dark Mode Only)
      animate={{
        y: [0, drift.y, 0],
        rotate: [0, drift.rotate, 0],
      }}
      transition={{
        duration: drift.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="group relative p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md transition-all duration-700 rounded-none dark:rounded-[3rem] hover:border-accent hover:shadow-[0_0_30px_rgba(196,167,231,0.2)]"
    >
      <div className="space-y-4">
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
            <span
              key={t}
              className="text-[10px] border border-black/20 dark:border-white/20 px-2 py-1 uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
