import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../data";
import { useEffect } from "react";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold text-zinc-900">Proyecto no encontrado</h1>
        <p className="mt-4 text-zinc-600">Lo sentimos, el caso de estudio que buscas no existe.</p>
        <Link
          to="/"
          className="mt-8 flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pb-24 pt-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-20">
        <Link
          to="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Volver al portfolio
        </Link>

        <header className="mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-serif text-5xl font-medium tracking-tight text-zinc-900 md:text-7xl"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl leading-relaxed text-zinc-600 md:text-2xl"
          >
            {project.description}
          </motion.p>
        </header>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20 aspect-[16/9] overflow-hidden rounded-3xl bg-zinc-100"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">El Problema UX</h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700 md:text-xl">
                {project.problem}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Descripción Completa</h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {caseStudy?.fullDescription}
              </p>
            </section>
          </div>

          <aside className="space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Mi Rol</h2>
              <p className="mt-2 text-lg font-medium text-zinc-900">{caseStudy?.role}</p>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Herramientas</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy?.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Enlaces Externos</h2>
              <div className="mt-4 space-y-3">
                {caseStudy?.externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-zinc-100 p-4 transition-all hover:border-zinc-900 hover:bg-zinc-50"
                  >
                    <span className="font-medium text-zinc-900">{link.name}</span>
                    <ExternalLink className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-900" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
