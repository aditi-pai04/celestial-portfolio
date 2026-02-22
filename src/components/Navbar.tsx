"use client";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-700">
      <div className="font-heading font-bold text-xl tracking-tighter dark:hidden">
        ./ADITI_PAI
      </div>
      <div className="font-romantic text-3xl hidden dark:block">
        aditi.
      </div>
      
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-6 font-body text-xs uppercase tracking-widest opacity-60">
          <li className="hover:text-accent cursor-pointer transition-colors">Work</li>
          <li className="hover:text-accent cursor-pointer transition-colors">Art</li>
          <li className="hover:text-accent cursor-pointer transition-colors">Contact</li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}