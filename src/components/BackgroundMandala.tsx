"use client";
import { motion } from "framer-motion";

export default function BackgroundMandala() {
  return (
    <div className="fixed -top-1/4 -right-1/4 w-[400px] h-[400px] md:w-[900px] md:h-[900px] pointer-events-none z-[-1] hidden dark:block opacity-25 blur-[0.5px]">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full text-accent"
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1 1" opacity="0.2"/>
        
        {/* Creating 24 points of symmetry for a denser mandala */}
        {[...Array(24)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 15} 50 50)`}>
            {/* Outer Petals */}
            <path
              d="M50 2 Q60 20 50 35 Q40 20 50 2"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.12"
            />
            {/* Inner Intricate Loops */}
            <circle cx="50" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="0.08" opacity="0.5"/>
            <path
              d="M50 35 L52 45 L50 48 L48 45 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
            />
          </g>
        ))}

        {/* Center Seed of Life focus */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={`center-${i}`}
            cx={50 + 5 * Math.cos((i * 60 * Math.PI) / 180)}
            cy={50 + 5 * Math.sin((i * 60 * Math.PI) / 180)}
            r="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15"
          />
        ))}
        <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.5" />
      </motion.svg>
    </div>
  );
}