import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24 lg:px-20">
      <div className="mb-16 max-w-2xl">
        <h2 className="font-serif text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl">
          Proyectos
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative flex flex-col"
          >
            <Link to={`/case-study/${project.id}`} className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </Link>
            
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900">{project.title}</h3>
              <p className="mt-2 text-zinc-500">{project.description}</p>
              
              <div className="mt-4 rounded-lg bg-zinc-50 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Problema UX</span>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                  {project.problem}
                </p>
              </div>
              
              <Link
                to={`/case-study/${project.id}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 underline underline-offset-8 transition-colors hover:text-zinc-600"
              >
                Case study
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Projects CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 rounded-3xl bg-zinc-50 p-12 text-center lg:p-20"
      >
        <h3 className="font-serif text-3xl font-medium text-zinc-900 md:text-4xl">
          ¿Quieres ver más?
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
          Explora mi portfolio completo en Behance, donde incluyo proyectos de 
          <span className="font-semibold text-zinc-900"> Branding, RRSS</span> y otros casos de 
          <span className="font-semibold text-zinc-900"> UX Research & Design</span>.
        </p>
        <div className="mt-10">
          <a
            href="https://www.behance.net/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg active:scale-95"
          >
            Ver más proyectos en Behance
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
