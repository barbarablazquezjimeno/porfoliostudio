import { motion } from "motion/react";
import { Experience } from "../types";
import { Linkedin, Github, Mail, Globe, Dribbble, Instagram } from "lucide-react";

const experiences: Experience[] = [
  {
    id: "1",
    company: "TechFlow",
    role: "Senior Product Designer",
    period: "2022 - Present",
    achievements: [
      "Lideré el rediseño de la plataforma principal, aumentando la retención de usuarios en un 25%.",
      "Implementé un sistema de diseño escalable que redujo el tiempo de desarrollo en un 30%.",
      "Mentoricé a 3 diseñadores junior, ayudándoles a mejorar sus habilidades de UX y UI."
    ]
  },
  {
    id: "2",
    company: "CreativePulse",
    role: "UX Designer",
    period: "2020 - 2022",
    achievements: [
      "Diseñé flujos de usuario críticos para aplicaciones móviles con más de 1M de descargas.",
      "Realicé más de 50 pruebas de usabilidad para validar conceptos de diseño antes de la implementación.",
      "Colaboré estrechamente con ingenieros para asegurar la fidelidad del diseño final."
    ]
  },
  {
    id: "3",
    company: "StartUp Inc",
    role: "Junior Designer",
    period: "2018 - 2020",
    achievements: [
      "Apoyé en la creación de interfaces para el MVP de la compañía.",
      "Desarrollé activos visuales para campañas de marketing digital.",
      "Aprendí y apliqué principios básicos de diseño centrado en el usuario."
    ]
  }
];

const socialLinks = [
  { name: "LinkedIn", url: "#", icon: Linkedin },
  { name: "Behance", url: "#", icon: Globe },
  { name: "Dribbble", url: "#", icon: Dribbble },
  { name: "Instagram", url: "#", icon: Instagram },
];

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 px-6 py-24 lg:px-20">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Experience Timeline */}
        <div>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl">
            Experiencia
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Mi trayectoria profesional construyendo productos digitales.
          </p>
          
          <div className="mt-12 space-y-12 border-l border-zinc-200 pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-zinc-900 bg-zinc-50" />
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-bold text-zinc-900">{exp.role}</h3>
                  <span className="text-sm font-medium text-zinc-400 md:text-right">{exp.period}</span>
                </div>
                <p className="mt-1 text-lg font-medium text-zinc-600">{exp.company}</p>
                
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-zinc-900 md:text-5xl">
              Conectemos
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              ¿Tienes un proyecto en mente o simplemente quieres saludar?
            </p>
            
            <div className="mt-12">
              <a
                href="mailto:hola@tuemail.com"
                className="group flex items-center gap-4 text-2xl font-medium text-zinc-900 transition-colors hover:text-zinc-600 md:text-4xl"
              >
                hola@tuemail.com
                <Mail className="h-6 w-6 transition-transform group-hover:translate-x-1 md:h-10 md:w-10" />
              </a>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Encuéntrame en</h3>
            <div className="mt-6 flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
