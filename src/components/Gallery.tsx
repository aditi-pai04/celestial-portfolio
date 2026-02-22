"use client";
import { motion } from "framer-motion";

const skills = ["C++", "Python", "Go", "Angular", "React", "FastAPI", "MySQL", "Docker", "gRPC"];

// Focused entirely on your Mandalas
const mandalaWorks = [
  { title: "Geometric Flow", desc: "Hand-drawn Symmetry", image: "intricate.jpeg" },
  { title: "Solar Core", desc: "Ink & Precision", image: "waves.jpeg" },
  { title: "Stardust Pattern", desc: "Meditative Geometry", image: "durga.jpeg" },
  { title: "The Great Balance", desc: "Complex Mandala", image: "first.jpeg" }
];

export default function Gallery() {
  return (
    <section className="w-full max-w-6xl px-8 py-24 mx-auto">
      
      {/* ☀️ LIGHT MODE: Technical Matrix (unchanged) */}
      <div className="dark:hidden">
        <h2 className="font-heading text-3xl mb-12 uppercase tracking-widest border-b border-black pb-4">
          Core Proficiencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="border border-black p-6 font-body font-bold text-center hover:bg-black hover:text-white transition-all">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* 🌙 DARK MODE: The Mandala Atelier */}
      <div className="hidden dark:block">
        <h2 className="font-romantic text-6xl mb-4 text-accent text-center">
          Geometric Meditations
        </h2>
        <p className="font-body text-center opacity-60 mb-16 uppercase tracking-[0.3em] text-xs">
          Exploring the symmetry between code and cosmos
        </p>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {mandalaWorks.map((work, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className="break-inside-avoid bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md group"
            >
              {/* This is where your Mandala image will go */}
              <div className="relative aspect-square bg-black/40 rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-white/5">
                {/* Visual Placeholder: A slow spinning geometric shape */}
                {/* <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 border-2 border-dashed border-accent/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-32 h-32 border border-accent/30 rotate-45" />
                  <div className="absolute w-32 h-32 border border-accent/30 -rotate-45" />
                </motion.div> */}
                <img 
    src={work.image} 
    alt={work.title} 
    /* Removed 'group-hover:scale-110' to stop the zoom */
    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80" 
  />
{/*                 
                <span className="absolute bottom-4 right-4 text-[10px] opacity-20 font-body uppercase">
                  Awaiting_Image_{i+1}.png
                </span> */}
              </div>

              <h3 className="font-heading text-2xl mb-1">{work.title}</h3>
              <p className="font-romantic text-3xl text-accent/80">{work.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}