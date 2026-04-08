import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ecotrack",
    title: "Auditoria de accesibilidad Web",
    description: "Análisis de accesibilidad en la página web del Real Madrid",
    problem: "Muchos usuarios con discapacidades visuales o motoras enfrentan barreras críticas al navegar por interfaces complejas. La falta de contraste adecuado, la ausencia de etiquetas ARIA y una navegación por teclado deficiente no solo degradan la experiencia de usuario (UX), sino que también incumplen las pautas WCAG 2.1, limitando el acceso universal a la información y servicios digitales.",
    imageUrl: "/images/accesibilidad.png",
    figmaUrl: "#",
    caseStudy: {
      role: "Lead Product Designer",
      tools: ["Figma", "Miro", "Notion"],
      fullDescription: "Este proyecto consistió en una auditoría exhaustiva de la accesibilidad web, centrada en identificar y resolver barreras que impiden una experiencia inclusiva. Se evaluaron componentes clave bajo los estándares WCAG 2.1, proponiendo soluciones de diseño que mejoran tanto la legibilidad como la navegabilidad para todos los usuarios.",
      externalLinks: [
        { name: "Ver Prototipo en Figma", url: "https://figma.com" },
        { name: "Documentación UX", url: "https://notion.so" }
      ]
    }
  },
  {
    id: "logistic-app",
    title: "Logístic App",
    description: "Solución de problemas en almacenes",
    problem: "El proceso actual de entrada de mercancía obliga a los operarios a registrar las piezas una a una. Cuando un envío llega incompleto (ej. una pieza notificada por el proveedor que no llegó a cargar), el sistema no permite realizar una entrada masiva con excepciones. Esto genera errores en el cálculo real de dimensiones (metros) y una carga operativa excesiva al no poder 'seleccionar todo' y desmarcar el elemento faltante.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    figmaUrl: "#",
    caseStudy: {
      role: "UX/UI Product Designer",
      tools: ["Figma", "User Research", "Prototyping"],
      fullDescription: "Diseño de una funcionalidad de selección masiva inteligente para la recepción de pedidos. La propuesta permite a los operarios utilizar el buscador para filtrar y 'seleccionar todo' con un solo clic, permitiendo posteriormente la deselección manual de piezas específicas. Esta mejora optimiza el tiempo de entrada real en el almacén y garantiza la precisión en el cálculo de métricas críticas como el metraje total, eliminando la necesidad de registros manuales individuales.",
      externalLinks: [
        { name: "Flujo de Usuario", url: "#" },
        { name: "Prototipo", url: "#" }
      ]
    }
  },
  {
    id: "logistic-wearable",
    title: "Logístic Wearable",
    description: "Picking eCommerce",
    problem: "La gestión del picking en el almacén se realiza actualmente mediante listados en papel. Este método analógico ralentiza la operación, aumenta el riesgo de errores humanos en la selección de productos y obliga al operario a mantener las manos ocupadas con documentos, dificultando la manipulación física de la mercancía.",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800",
    figmaUrl: "#",
    caseStudy: {
      role: "Product Designer (Wearables)",
      tools: ["Figma", "User Research", "WatchOS/Android Wear"],
      fullDescription: "Digitalización integral del proceso de picking mediante una solución wearable. El diseño permite al operario recibir instrucciones en tiempo real directamente en su muñeca, liberando sus manos para una manipulación más ágil y segura de los pedidos. La interfaz se optimizó para contextos de alta movilidad, con elementos visuales de alto contraste y gestos simplificados que reducen los errores de selección y mejoran la productividad en la preparación de pedidos eCommerce.",
      externalLinks: [
        { name: "Flujo Wearable", url: "#" },
        { name: "Demo Prototipo", url: "#" }
      ]
    }
  },
  {
    id: "design-system-mobile",
    title: "Design System Mobile",
    description: "Creación y mantenimiento de Design System",
    problem: "La ausencia de un sistema centralizado generaba inconsistencias visuales entre plataformas, duplicidad de esfuerzos en diseño y desarrollo, y una falta de estándares claros para componentes móviles, lo que dificultaba el mantenimiento y la evolución ágil del producto.",
    imageUrl: "https://images.unsplash.com/photo-1581291518155-4570feef1e1c?auto=format&fit=crop&q=80&w=800",
    figmaUrl: "#",
    caseStudy: {
      role: "Product Designer & Design Ops",
      tools: ["Figma", "Design Tokens", "Variables", "Documentation"],
      fullDescription: "Liderazgo en la arquitectura y mantenimiento de una biblioteca de componentes escalable para aplicaciones móviles nativas. El trabajo incluyó la definición de Design Tokens para color, tipografía y espaciado, asegurando la consistencia entre iOS y Android. Se implementaron variables de Figma para facilitar el modo oscuro y la adaptabilidad, además de crear documentación detallada para mejorar el handoff con ingeniería y reducir el time-to-market de nuevas funcionalidades.",
      externalLinks: [
        { name: "Librería de Componentes", url: "#" },
        { name: "Guía de Estilo", url: "#" }
      ]
    }
  },
];
