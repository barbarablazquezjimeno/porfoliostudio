import { motion, useScroll, useSpring } from "motion/react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-zinc-900"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 z-40 flex w-full items-center justify-between bg-zinc-50/80 px-6 py-6 backdrop-blur-md lg:px-20">
        <div className="text-xl font-bold tracking-tighter text-zinc-900">
          PD<span className="text-zinc-400">.</span>
        </div>
        <div className="hidden gap-10 text-sm font-medium text-zinc-600 md:flex">
          <a href="#hero" className="transition-colors hover:text-zinc-900">Inicio</a>
          <a href="#projects" className="transition-colors hover:text-zinc-900">Proyectos</a>
          <a href="#about" className="transition-colors hover:text-zinc-900">Sobre mí</a>
        </div>
        <a
          href="mailto:hola@tuemail.com"
          className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Contacto
        </a>
      </nav>

      <main>
        <Hero />
        <Projects />
        <About />
      </main>

      <Footer />
    </div>
  );
}
