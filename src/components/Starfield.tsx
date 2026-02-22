"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Starfield() {
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: string; delay: number }[]
  >([]);

  useEffect(() => {
    // Generate star data ONLY on the client after mount
    const generatedStars = [...Array(50)].map((_, i) => ({
      id: i,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 3 + "px",
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  // Return null or empty div if stars haven't been generated yet (prevents mismatch)
  if (stars.length === 0) {
    return (
      <div className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block" />
    );
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
