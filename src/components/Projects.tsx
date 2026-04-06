import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "1",
    title: "EcoTrack",
    description: "Plataforma de seguimiento de huella de carbono.",
    problem: "Los usuarios encontraban difícil entender el impacto real de sus acciones cotidianas en el medio ambiente.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    figmaUrl: "#",
  },
  {
    id: "2",
    title: "Lumina Health",
    description: "Dashboard de gestión para profesionales de la salud.",
    problem: "Sobrecarga de información en los registros de pacientes, dificultando la toma de decisiones rápidas.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    figmaUrl: "#",
  },
  {
    id: "3",
    title: "SwiftPay",
    description: "Flujo de pago optimizado para e-commerce.",
    problem: "Alta tasa de abandono del carrito debido a formularios complejos y falta de confianza en el proceso.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    figmaUrl: "#",
  },
  {
    id: "4",
    title: "Nexus CRM",
    description: "Herramienta de gestión de relaciones con clientes.",
    problem: "Dificultad para visualizar el embudo de ventas de manera clara y colaborativa entre equipos.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    figmaUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24 lg:px-20">
      <div className="mb-16 max-w-2xl">
        <h2 className="font-serif text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl">
          Proyectos seleccionados
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          Una muestra de mi trabajo resolviendo problemas complejos a través del diseño.
        </p>
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
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </div>
            
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900">{project.title}</h3>
              <p className="mt-2 text-zinc-500">{project.description}</p>
              
              <div className="mt-4 rounded-lg bg-zinc-50 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Problema UX</span>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                  {project.problem}
                </p>
              </div>
              
              <a
                href={project.figmaUrl}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
              >
                Ver caso de estudio
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
