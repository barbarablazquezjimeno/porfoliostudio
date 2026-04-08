import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 pt-20 lg:px-20">
      {/* Silhouette Background */}
      <div className="absolute right-0 bottom-0 -z-10 opacity-[0.03] lg:opacity-[0.05]">
        <svg
          width="600"
          height="800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-auto w-[400px] lg:w-[600px]"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-zinc-900 md:text-7xl lg:text-8xl">
          Bárbara Blázquez
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
          Product Designer creando soluciones intuitivas y escalables para marcas como Real Madrid e Inditex.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-8">
          <motion.a
            href="#projects"
            whileHover={{ x: 5 }}
            className="group flex items-center gap-2 text-lg font-medium text-zinc-900 underline underline-offset-8 transition-colors hover:text-zinc-600"
          >
            Ver mis proyectos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
