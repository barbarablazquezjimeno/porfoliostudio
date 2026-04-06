export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white px-6 py-12 lg:px-20">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm font-medium text-zinc-400">
          © {new Date().getFullYear()} Product Designer Portfolio. Hecho con pasión.
        </p>
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#hero" className="transition-colors hover:text-zinc-900">Inicio</a>
          <a href="#projects" className="transition-colors hover:text-zinc-900">Proyectos</a>
          <a href="#about" className="transition-colors hover:text-zinc-900">Sobre mí</a>
        </div>
      </div>
    </footer>
  );
}
