"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid hydration errors
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-12 h-12" />; // placeholder

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-500 ring-1 ring-black/10 dark:ring-white/10"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : -90,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        /* Changed to absolute and perfectly centered */
        className="absolute inset-0 flex items-center justify-center" 
      >
        <Moon className="w-5 h-5 text-[#c4a7e7]" strokeWidth={2} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 90 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        /* Changed to absolute and perfectly centered */
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-[#0055ff]" strokeWidth={2} />
      </motion.div>
    </button>
  );
}