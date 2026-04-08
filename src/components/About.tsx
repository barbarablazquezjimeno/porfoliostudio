import { motion } from "motion/react";
import { Clock, Download } from "lucide-react";

const experiences = [
  {
    id: "softtek",
    company: "Softtek",
    period: "3 años 2 meses",
    details: "Jornada completa · Madrid, Comunidad de Madrid, España · En remoto",
    subRoles: [
      {
        title: "Real Madrid - Product designer",
        period: "mar. 2024 - actualidad · 2 años 2 meses",
        skills: ["Auditorías WCAG 2.1", "Diseño Inclusivo", "Design Systems", "Design Tokens", "IA Tools"],
        achievements: [
          "Análisis y auditorías exhaustivas de accesibilidad (WCAG 2.1) tanto en plataformas web como en aplicaciones móviles nativas.",
          "Creación y mantenimiento del Design System para mobile, implementando Design Tokens y variables para asegurar la escalabilidad y consistencia visual.",
          "Liderazgo en fases de Concept, Research y Diseño, utilizando metodologías de diseño centrado en el usuario para validar nuevas funcionalidades.",
          "Facilitación de sesiones de Brainstorming y co-creación con stakeholders para idear soluciones innovadoras a problemas complejos.",
          "Aplicación de herramientas IA: Perplexity, Google AI studio, Stitch, Copilot, Cursor, Figma Make."
        ]
      },
      {
        title: "Inditex - Product designer",
        period: "mar. 2023 - mar. 2024 · 1 año 1 mes",
        skills: ["UX/UI Design", "Mobile & Wearables", "User Research", "Entrevistas Reales"],
        achievements: [
          "Diseño de interfaces UX/UI para plataformas internas y de cara al cliente, asegurando una experiencia de usuario fluida y coherente.",
          "Ejecución de procesos de investigación con usuarios (User Research) para identificar necesidades y puntos de dolor.",
          "Planificación y realización de entrevistas reales con usuarios finales para obtener insights cualitativos directos.",
          "Diseño y optimización de experiencias específicas para dispositivos mobile y wearables, adaptando la interacción a contextos de uso dinámicos."
        ]
      }
    ]
  },
  {
    id: "rovi",
    company: "ROVI Pharmaceutical Company",
    role: "UX/UI Product designer",
    period: "may. 2021 - mar. 2023 · 1 año 11 meses",
    details: "Jornada completa · Madrid, Comunidad de Madrid, España",
    skills: ["Prototipado", "Arquitectura de Información", "Usability Testing", "Análisis de KPIs"],
    achievements: [
      "As Is de procesos: Análisis la información cualitativa y cuantitativa disponible, Identificación las necesidades de los usuarios, Diagramación del As Is, Detección de ineficiencias, Identificación de pain-points.",
      "Diseño del Digital Journey: Definición los requisitos funcionales a desarrollar, Conceptualización, flujos de navegación, arquitectura de la información, Maximización del valor aportado a los usuarios, Diseño UI de las distintas pantallas del viaje digital, Copywritting (formularios, notificaciones), Definición de la identidad visual de los procesos.",
      "Seguimiento y acompañamiento del equipo de consultoría que realiza la programación sobre la plataforma.",
      "Reportar sobre avances y gestionar las expectativas de los stakeholders.",
      "Testeo en fase beta.",
      "Mentorización y acompañamiento al usuario.",
      "Mantenimiento del árbol de reporting actualizado. Creación de fichas de empleados y validación con el software HCM (Human Capital Management) corporativo.",
      "Resolución de consultas de usuario.",
      "Iteración y mejora continua. Mantener la consistencia de la experiencia del digital journey.",
      "Elaboración de KPIs."
    ]
  },
  {
    id: "viaja",
    company: "Viaja, Disfruta y Ayuda",
    role: "UX/UI Designer",
    period: "nov. 2020 - jun. 2021 · 8 meses",
    details: "Jornada parcial · Madrid, Comunidad de Madrid, España",
    skills: ["User Research", "Branding", "Card Sorting", "User Personas"],
    achievements: [
      "Diseño de contenido (UX) y de interface (Web).",
      "User research, card sorting, user persona, user flow...",
      "Conceptualización, prototipado, ideación y diseño de materiales para acciones en campañas publicitarias, redes sociales, contenido de páginas web y e-commerce (Wordpress, woocommerce).",
      "Identidad corporativa, packaging, branding y acciones de marketing y comunicación.",
      "Apoyo en la creación de infografías, iconografía.",
      "Edición de fotografías y presentaciones."
    ]
  },
  {
    id: "buscoextra",
    company: "BuscoExtra - ETT Hostelería Digital",
    role: "Técnico Generalista RRHH (Startup)",
    period: "ene. 2019 - mar. 2020 · 1 año 3 meses",
    details: "Madrid y alrededores, España",
    skills: ["Brainstorming", "User Interviews", "Testing"],
    achievements: [
      "UX Research: Participación en proyectos internos y apoyo a los diferentes departamentos: Brainstorming, entrevistas y testing para mejora del uso de la app."
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl">
            Sobre mí
          </h2>
          <a 
            href="/cv.pdf" 
            download
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-zinc-900"
          >
            Descargar CV
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative grid gap-8 border-b border-zinc-200 pb-16 lg:grid-cols-3"
            >
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white">
                    <span className="text-xs font-bold">{exp.company.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">{exp.company}</h3>
                    <p className="text-sm font-medium text-zinc-400">{exp.period}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {exp.details}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                {exp.subRoles ? (
                  <div className="space-y-8">
                    {exp.subRoles.map((sub, i) => (
                      <div key={i} className="relative pl-6 border-l-2 border-zinc-200">
                        <h4 className="text-xl font-bold text-zinc-900">{sub.title}</h4>
                        <p className="text-sm font-medium text-zinc-400">{sub.period}</p>
                        
                        {sub.skills && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {sub.skills.map((skill, j) => (
                              <span key={j} className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-zinc-200">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        {sub.achievements && (
                          <ul className="mt-4 space-y-2">
                            {sub.achievements.map((achievement, j) => (
                              <li key={j} className="flex items-start gap-3 text-zinc-600">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900">{exp.role}</h4>
                    
                    {exp.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill, j) => (
                          <span key={j} className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-zinc-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="mt-6 space-y-4">
                      {exp.achievements?.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
