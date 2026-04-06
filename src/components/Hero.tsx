import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[80vh] flex-col justify-center px-6 pt-20 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-zinc-900 md:text-7xl lg:text-8xl">
          Diseño soluciones digitales <span className="italic text-zinc-400">centradas en el usuario</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
          Soy un Product Designer apasionado por transformar problemas complejos en experiencias intuitivas y elegantes. Con más de 5 años de experiencia ayudando a startups y empresas a escalar sus productos.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-white transition-colors hover:bg-zinc-800"
          >
            Ver proyectos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            Descargar CV
            <Download className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>
      
      <div className="absolute bottom-10 left-6 lg:left-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-12 w-[1px] bg-zinc-300"
        />
      </div>
    </section>
  );
}
