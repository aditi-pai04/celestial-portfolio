import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center pt-32 pb-24 transition-colors duration-700">
      <Starfield />
      <Navbar />

      <header className="text-center space-y-6 px-8 mb-24 mt-20">
        <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tight">
          Aditi N Pai
        </h1>
        <p className="font-body text-xl text-accent dark:hidden">
          MTS-1 @ Cohesity | Systems Engineer
        </p>
        <p className="font-romantic text-4xl md:text-5xl text-accent hidden dark:block">
          Art Lover & Dreamer
        </p>
      </header>

      <About />

      <section className="w-full max-w-6xl px-8 mt-24">
        <h2 className="font-heading text-3xl mb-12 text-center uppercase tracking-widest dark:hidden">
          Technical Inventory
        </h2>
        <h2 className="font-romantic text-6xl mb-12 text-center text-accent hidden dark:block">
          The Creative Orbit
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}