import { Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white px-6 py-12 lg:px-20">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="text-xs font-bold uppercase tracking-widest">Encuéntrame en</span>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-900"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://behance.net/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-900"
                aria-label="Behance"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#hero" className="transition-colors hover:text-zinc-900">Inicio</a>
          <a href="#projects" className="transition-colors hover:text-zinc-900">Proyectos</a>
          <a href="#about" className="transition-colors hover:text-zinc-900">Sobre mí</a>
        </div>
      </div>
    </footer>
  );
}
