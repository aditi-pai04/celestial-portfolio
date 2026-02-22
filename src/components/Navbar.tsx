"use client";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-2 flex justify-between items-center bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-white/5 transition-all duration-700">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer"
      >
        <div className="font-romantic text-2xl dark:block hidden">aditi.</div>
        <div className="font-heading font-bold text-lg tracking-tighter block dark:hidden">
          ./ADITI_PAI
        </div>
      </div>

      {/* Navigation and Toggle Container */}
      <div className="flex items-center gap-10">
        <ul className="hidden md:flex gap-8 font-body text-[10px] uppercase tracking-[0.3em] opacity-60">
          <li
            onClick={() => scrollTo("about")}
            className="hover:text-accent cursor-pointer transition-colors"
          >
            About
          </li>
          <li
            onClick={() => scrollTo("systems")}
            className="hover:text-accent cursor-pointer transition-colors"
          >
            Systems
          </li>
          <li
            onClick={() => scrollTo("geometry")}
            className="hover:text-accent cursor-pointer transition-colors"
          >
            Geometry
          </li>
          <li
            onClick={() => scrollTo("signal")}
            className="hover:text-accent cursor-pointer transition-colors"
          >
            Signal
          </li>
        </ul>

        <div className="flex items-center h-full pt-1">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
