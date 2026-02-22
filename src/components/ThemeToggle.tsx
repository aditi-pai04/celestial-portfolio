"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Orbit } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-44 h-11" />;

  const isDark = theme === "dark";

  return (
    <div className="flex flex-col items-end gap-2 group">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative flex items-center bg-black/5 dark:bg-white/5 w-44 h-11 rounded-full p-1 border border-black/10 dark:border-white/10 transition-all duration-500 hover:border-accent"
        aria-label="Switch Personality"
      >
        {/* The Sliding Personality Capsule */}
        <motion.div
          animate={{ x: isDark ? 84 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className="absolute w-[86px] h-9 bg-white dark:bg-accent rounded-full shadow-md z-0"
        />

        {/* Labels & Icons*/}
        <div className="relative flex w-full z-10 pointer-events-none">
          {/* Light*/}
          <div
            className={`flex-1 flex items-center justify-center gap-2 transition-all duration-500 ${!isDark ? "text-black" : "text-white/20"}`}
          >
            <Terminal size={14} strokeWidth={!isDark ? 2.5 : 1.5} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Systems
            </span>
          </div>

          {/* Dark*/}
          <div
            className={`flex-1 flex items-center justify-center gap-2 transition-all duration-500 ${isDark ? "text-black" : "text-black/20"}`}
          >
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Orbit
            </span>
            <Orbit size={14} strokeWidth={isDark ? 2.5 : 1.5} />
          </div>
        </div>
      </button>

      <p className="text-[8px] mr-4 uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity duration-700">
        Initiating Context Swap...
      </p>
    </div>
  );
}
