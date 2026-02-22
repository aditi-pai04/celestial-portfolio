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
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-all duration-700">
      {/* Branding */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer"
      >
        <div className="font-heading font-bold text-xl tracking-tighter dark:hidden">
          ./ADITI_PAI
        </div>
        <div className="font-romantic text-3xl hidden dark:block">
          aditi.
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8 font-body text-[10px] uppercase tracking-[0.3em] opacity-60">
          <li onClick={() => scrollTo('about')} className="hover:text-accent cursor-pointer transition-colors hover:opacity-100">
            About
          </li>
          <li onClick={() => scrollTo('work')} className="hover:text-accent cursor-pointer transition-colors hover:opacity-100">
            Systems
          </li>
          <li onClick={() => scrollTo('art')} className="hover:text-accent cursor-pointer transition-colors hover:opacity-100">
            Geometry
          </li>
          <li onClick={() => scrollTo('contact')} className="hover:text-accent cursor-pointer transition-colors hover:opacity-100">
            Signal
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}