"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="w-full max-w-4xl mx-auto py-24 px-8 mt-16 border-t border-black/10 dark:border-white/10 transition-all duration-700">
      
      {/* ☀️ LIGHT MODE: The System Log */}
      <div className="dark:hidden space-y-8">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-widest text-accent">
          [Transmit Signal]
        </h2>
        <form className="space-y-4 font-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="SENDER_NAME" 
              className="bg-transparent border border-black/20 p-4 focus:border-accent outline-none uppercase text-sm"
            />
            <input 
              type="email" 
              placeholder="SENDER_EMAIL" 
              className="bg-transparent border border-black/20 p-4 focus:border-accent outline-none uppercase text-sm"
            />
          </div>
          <textarea 
            placeholder="DATA_PAYLOAD..." 
            rows={4}
            className="w-full bg-transparent border border-black/20 p-4 focus:border-accent outline-none uppercase text-sm"
          />
          <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-accent transition-colors">
            Execute_Transfer
          </button>
        </form>
      </div>

      {/* 🌙 DARK MODE: The Celestial Message */}
      <div className="hidden dark:block text-center space-y-8">
        <h2 className="font-romantic text-6xl text-accent">
          Send a Message to the Stars
        </h2>
        <form className="space-y-6 max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-white/5 border-b border-white/20 p-4 focus:border-accent outline-none font-body text-center transition-all"
          />
          <textarea 
            placeholder="Write your message here..." 
            rows={3}
            className="w-full bg-white/5 border-b border-white/20 p-4 focus:border-accent outline-none font-body text-center transition-all"
          />
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(196, 167, 231, 0.4)" }}
            className="px-12 py-3 rounded-full border border-accent text-accent font-romantic text-3xl hover:bg-accent hover:text-white transition-all"
          >
            Launch into Orbit
          </motion.button>
        </form>
      </div>

    </section>
  );
}