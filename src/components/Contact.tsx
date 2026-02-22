"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xzdajode", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("IDLE"), 5000); // Reset message after 5s
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="signal" className="w-full max-w-4xl mx-auto py-32 px-8 mt-16 border-t border-black/10 dark:border-white/10 transition-all duration-700">
      
      {/* ☀️ SYSTEMS MODE */}
      <div className="dark:hidden space-y-8 font-mono">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-accent">[Open_Uplink]</h2>
          <p className="text-[10px] opacity-50 uppercase tracking-widest">Establish a direct connection to the MTS-1 node.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="sender_id" required type="text" placeholder="SENDER_ID" className="bg-black/5 border border-black/20 p-4 focus:border-accent outline-none text-xs" />
            <input name="email" required type="email" placeholder="RETURN_PATH" className="bg-black/5 border border-black/20 p-4 focus:border-accent outline-none text-xs" />
          </div>
          <textarea name="message" required placeholder="ENCODE_MESSAGE_BODY..." rows={5} className="w-full bg-black/5 border border-black/20 p-4 focus:border-accent outline-none text-xs" />
          <button type="submit" disabled={status === "SENDING"} className="w-full bg-black text-white py-4 font-bold uppercase tracking-[0.4em] hover:bg-accent transition-all text-xs disabled:opacity-50">
            {status === "SENDING" ? "TRANSMITTING..." : status === "SUCCESS" ? "DONE. SIGNAL_RECEIVED" : "> EXECUTE_TRANSMIT"}
          </button>
        </form>
      </div>

      {/* 🌙 SYMMETRY MODE */}
      <div className="hidden dark:block text-center space-y-12">
        <div className="space-y-4">
          <h2 className="font-romantic text-7xl text-accent drop-shadow-[0_0_15px_rgba(196,167,231,0.3)]">Send a Signal</h2>
          <p className="font-body text-xs opacity-60 uppercase tracking-[0.5em]">Into the vastness of the cosmos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 max-lg mx-auto">
          <div className="relative group">
            <input name="name" required type="text" placeholder="YOUR NAME" className="w-full bg-white/[0.02] border-b border-white/40 p-5 focus:border-accent outline-none font-body text-center transition-all placeholder:text-white/30 placeholder:text-[9px] placeholder:tracking-[0.3em] hover:bg-white/[0.05]" />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full group-focus-within:w-full shadow-[0_0_12px_#c4a7e7]" />
          </div>

          <div className="relative group">
            <textarea name="message" required placeholder="YOUR MESSAGE..." rows={4} className="w-full bg-white/[0.02] border-b border-white/40 p-5 focus:border-accent outline-none font-body text-center transition-all placeholder:text-white/30 placeholder:text-[9px] placeholder:tracking-[0.3em] hover:bg-white/[0.05] resize-none" />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full group-focus-within:w-full shadow-[0_0_12px_#c4a7e7]" />
          </div>
          
          <div className="flex flex-col items-center gap-8 pt-4">
<motion.button 
  type="submit"
  disabled={status === "SENDING"}
  whileHover={{ 
    scale: 1.02, 
    /* This creates the 'bloom' effect around the button without hiding the text */
    boxShadow: "0px 0px 25px rgba(196, 167, 231, 0.4)",
    borderColor: "rgba(196, 167, 231, 1)" 
  }}
  whileTap={{ scale: 0.98 }}
  /* Removed hover:bg-accent to keep text visible */
  className="px-20 py-5 rounded-full border border-accent/40 text-accent font-romantic text-3xl transition-all duration-300 disabled:opacity-30 bg-transparent"
>
  {status === "SENDING" ? "Launching..." : "Launch into Orbit"}
</motion.button>
            <p className="text-[9px] opacity-40 uppercase tracking-[0.4em] italic text-accent">
              {status === "SUCCESS" ? "Signal reached the stars." : status === "ERROR" ? "Uplink failed. Try again." : "Geometry in motion."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}