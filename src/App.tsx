import { motion, useScroll, useSpring } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 z-40 flex w-full items-center justify-between bg-zinc-50/80 px-6 py-6 backdrop-blur-md lg:px-20">
      <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-900">
        {/* Empty as requested */}
      </Link>
      <div className="hidden gap-10 text-sm font-medium text-zinc-600 md:flex">
        {isHome ? (
          <>
            <a href="#hero" className="transition-colors hover:text-zinc-900">Inicio</a>
            <a href="#projects" className="transition-colors hover:text-zinc-900">Proyectos</a>
            <a href="#about" className="transition-colors hover:text-zinc-900">Sobre mí</a>
          </>
        ) : (
          <Link to="/" className="transition-colors hover:text-zinc-900">Volver al Portfolio</Link>
        )}
      </div>
      <a
        href="mailto:hola@tuemail.com"
        className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
      >
        Contacto
      </a>
    </nav>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen font-sans">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-zinc-900"
          style={{ scaleX }}
        />

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
