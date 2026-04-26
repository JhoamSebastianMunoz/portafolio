import { Project, Experience, Education, Certification, Skill, SocialLink } from '@/types/portfolio';

export const personalInfo = {
  name: "JHOAM SEBASTIAN MUÑOZ BETANCOURT",
  title: "Full Stack Developer",
  location: "Montenegro, Quindío",
  phone: "+57 311 695 7990",
  email: "jhoamsebastian68@gmail.com",
  github: "https://github.com/JhoamSebastianMunoz",
  linkedin: "https://www.linkedin.com/in/jhoam-sebastian-muñoz-betancourt",
  profile: "Full Stack Developer con experiencia comprobada en el desarrollo de aplicaciones web modernas y escalables utilizando React, Next.js, TypeScript, Node.js y arquitecturas cloud. He liderado el desarrollo de proyectos en producción con enfoque en Clean Code, performance y mantenibilidad. Especializado en construir interfaces reutilizables, integrar APIs REST complejas y colaborar en equipos ágiles con metodologías Scrum. Cuento con sólida experiencia en backend con Node.js, Express y bases de datos relacionales, permitiendo abordar el ciclo completo de desarrollo con criterio técnico integral. Mi enfoque prioritario es la calidad del código, la optimización de rendimiento y la entrega de soluciones robustas que generan valor real."
};

export const skills: Skill[] = [
  { name: "React", level: 86, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "TailwindCSS", level: 90, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 86, category: "frontend" },
  { name: "HTML5", level: 86, category: "frontend" },
  { name: "CSS3", level: 86, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "Supabase", level: 75, category: "database" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Git", level: 87, category: "tools" },
  { name: "GitHub", level: 80, category: "tools" },
  { name: "Azure", level: 50, category: "tools" },
  { name: "Vercel", level: 90, category: "tools" },
  { name: "Railway", level: 75, category: "tools" },
  { name: "Clean Code", level: 85, category: "tools" },
  { name: "Scrum/Agile", level: 80, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Tremendo Territorio",
    description: "Plataforma web escalable orientada a la visibilización y comercialización de productos agrícolas colombianos, integrando frontend moderno con backend robusto",
    technologies: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.js", "Express", "MySQL"],
    period: "Mayo 2025 – Enero 2026",
    features: [
      "Arquitectura de componentes reutilizables con React + Vite, + TypeScript",
      "Diseño responsive con TailwindCSS optimizado para móviles",
      "Integración de APIs REST con manejo de estados complejos",
      "Implementación de patrones de diseño para escalabilidad",
      "Despliegue en Vercel con CI/CD automatizado"
    ],
    liveUrl: "https://frontend-tremendo-territorio.vercel.app/",
    githubUrl: "https://github.com/JhoamSebastianMunoz/frontend-tremendo-territorio.git",
    technicalNotice: {
      type: "warning",
      title: "Servicios Backend Temporalmente No Disponibles",
      message: "Ciertos servicios del backend están deshabilitados por falta de renovación de pago de servicios de despliegue. Por esta razón, algunas secciones del frontend podrían no visualizar datos debido a fallos en el fetch, aunque la interfaz permanece funcional."
    }
  },
  {
    id: "2",
    title: "TATSOFT",
    description: "Sistema de gestión de preventas B2B para distribuidoras con arquitectura de microservicios y optimización de procesos de negocio",
    technologies: ["React", "Vite", "CSS3", "Node.js", "Express", "MySQL", "Azure"],
    period: "2024",
    features: [
      "Desarrollo de frontend modular con React y Vite",
      "Arquitectura de APIs RESTful con Express y Node.js",
      "Diseño de esquema de base de datos relacional optimizado",
      "Integración con microservicios backend",
      "Despliegue cloud en Azure con alta disponibilidad"
    ],
    liveUrl: "frontend-tatsoft.vercel.app/",
    githubUrl: "https://github.com/JhoamSebastianMunoz/frontend_tatsoft.git",
    technicalNotice: {
      type: "warning",
      title: "Aviso Técnico - Despliegue Temporalmente Offline",
      message: "La arquitectura de microservicios está completamente funcional e integrada con Azure Services. Sin embargo, el despliegue está temporalmente offline debido a la expiración de créditos de suscripción en Azure. La versión 2 incluirá migración de infraestructura para optimizar costos y disponibilidad, manteniendo la lógica de microservicios pero cambiando de proveedor de hosting."
    }
  },
  {
    id: "3",
    title: "Portafolio Personal",
    description: "Portafolio profesional con Next.js 16, TypeScript y optimización avanzada de rendimiento y SEO",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "React"],
    period: "2026",
    features: [
      "Arquitectura App Router con Server Components",
      "Optimización de imágenes con Next.js Image",
      "SEO avanzado con structured data JSON-LD",
      "Animaciones 60fps con Framer Motion",
      "Configuración de performance y compresión"
    ],
    liveUrl: "https://portafolio-gamma-beryl.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/portafolio"
  },
  {
    id: "4",
    title: "Microservice Backend - Productos 🛍️",
    description: "Microservicio backend robusto para gestión de productos con arquitectura escalable, autenticación JWT y almacenamiento en la nube",
    technologies: ["Express", "TypeScript", "MySQL", "JWT", "Supabase Storage"],
    period: "2026",
    features: [
      "Arquitectura MVC escalable con manejo global de errores",
      "Seguridad avanzada: Autenticación JWT, encriptación con bcryptjs y validación de datos con express-validator",
      "Documentación interactiva con Swagger UI",
      "Gestión de archivos multimedia integrada con Supabase Cloud Storage"
    ],
    liveUrl: "https://microservice-backend-products-v2.vercel.app/",
    githubUrl: "https://github.com/JhoamSebastianMunoz/microservice_backend_products_v2.git"
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tremendo Territorio",
    position: "Desarrollador Frontend",
    period: "Mayo 2025 – Enero 2026",
    description: "Liderazgo técnico en el desarrollo de plataforma web para visibilización de productos agrícolas colombianos. Implementación de arquitectura de componentes escalables con React + TypeScript, optimizando performance y UX. Integración exitosa con APIs REST y despliegue en Vercel con CI/CD automatizado.",
    technologies: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.js", "Express", "MySQL", "Vercel", "Railway"]
  },
  {
    id: "2",
    company: "TATSOFT",
    position: "Desarrollador Full Stack",
    period: "2024",
    description: "Desarrollo integral de sistema B2B para gestión de preventas en distribuidoras. Diseño de arquitectura de microservicios, construcción de APIs RESTful con Express, y optimización de base de datos relacional. Despliegue cloud en Azure con alta disponibilidad y participación en metodología Scrum.",
    technologies: ["React", "Vite", "CSS3", "Node.js", "Express", "MySQL", "Azure"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "SENA – Centro de Comercio y Turismo (Galán)",
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    period: "2023 – 2025",
    location: "Armenia"
  },
  {
    id: "2",
    institution: "SENA Agroindustrial",
    title: "Tecnólogo en Sistemas de Gestión Integrada (Calidad, Medio Ambiente, SST)",
    period: "2015 – 2018",
    location: "Armenia"
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Práctico Frontend Developer",
    issuer: "Platzi",
    year: "2026",
    month: "Febrero",
    status: "completed"
  },
  {
    id: "2",
    name: "Backend con Node.js API Rest con Express.js",
    issuer: "Platzi",
    year: "2026",
    month: "Enero",
    status: "completed"
  },
  {
    id: "3",
    name: "TypeScript",
    issuer: "Platzi",
    year: "2026",
    month: "Enero",
    status: "completed"
  },
  {
    id: "4",
    name: "Curso de PostgreSQL",
    issuer: "Platzi",
    year: "2026",
    month: "Enero",
    status: "completed"
  },
  {
    id: "5",
    name: "Supabase",
    issuer: "Platzi",
    year: "2026",
    month: "Enero",
    status: "completed"
  },
  {
    id: "6",
    name: "Cursor AI Code Editor",
    issuer: "Platzi",
    year: "2025",
    month: "Octubre",
    status: "completed"
  },
  {
    id: "7",
    name: "Next.js Avanzado",
    issuer: "Platzi",
    year: "2025",
    month: "Julio",
    status: "completed"
  },
  {
    id: "8",
    name: "React.js E-commerce Profesional",
    issuer: "Platzi",
    year: "2025",
    month: "Julio",
    status: "completed"
  },
  {
    id: "9",
    name: "React.js con TypeScript",
    issuer: "Platzi",
    year: "2025",
    month: "Julio",
    status: "completed"
  },
  {
    id: "10",
    name: "TailwindCSS",
    issuer: "Platzi",
    year: "2025",
    month: "Julio",
    status: "completed"
  },
  {
    id: "11",
    name: "Reactjs Avanzado",
    issuer: "Platzi",
    year: "2025",
    month: "Junio",
    status: "completed"
  },
  {
    id: "12",
    name: "Docker: Fundamentos",
    issuer: "Platzi",
    year: "2025",
    month: "Junio",
    status: "completed"
  },
  {
    id: "13",
    name: "Pensamiento Lógico",
    issuer: "Platzi",
    year: "2025",
    month: "Junio",
    status: "completed"
  },
  {
    id: "14",
    name: "N8N",
    issuer: "Platzi",
    year: "2025",
    month: "Junio",
    status: "completed"
  },
  {
    id: "15",
    name: "React.js",
    issuer: "Platzi",
    year: "2025",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "16",
    name: "Elements of Agile in Miro",
    issuer: "Miro",
    year: "2025",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "17",
    name: "Technical Diagramming",
    issuer: "Miro",
    year: "2025",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "18",
    name: "Miro Essentials",
    issuer: "Miro",
    year: "2025",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "19",
    name: "Miro Users Support",
    issuer: "Miro",
    year: "2025",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "20",
    name: "Innovation Essentials",
    issuer: "Miro",
    year: "2025",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "21",
    name: "Curso Básico RPA",
    issuer: "PIX Robotics",
    year: "2024",
    month: "Noviembre",
    status: "completed"
  },
  {
    id: "22",
    name: "Databases Fundamentals",
    issuer: "SoftServe",
    year: "2024",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "23",
    name: "JavaScript Essentials 2",
    issuer: "Cisco",
    year: "2024",
    month: "Abril",
    status: "completed"
  },
  {
    id: "24",
    name: "PostgreSQL",
    issuer: "Cisco",
    year: "2024",
    month: "Mayo",
    status: "completed"
  },
  {
    id: "25",
    name: "JavaScript Essentials 1",
    issuer: "Cisco",
    year: "2023",
    month: "Diciembre",
    status: "completed"
  },
  {
    id: "26",
    name: "Scrum Fundamentals",
    issuer: "ScrumStudy",
    year: "2023",
    month: "Septiembre",
    status: "completed"
  },
  {
    id: "27",
    name: "Next.js 14",
    issuer: "Platzi",
    year: "2025",
    status: "in_progress"
  },
  {
    id: "28",
    name: "Windsurf AI",
    issuer: "Cascade",
    year: "2026",
    month: "Febrero",
    status: "completed"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/JhoamSebastianMunoz",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jhoam-sebastian-muñoz-betancourt",
    icon: "linkedin"
  },
  // {
  //   name: "Email",
  //   url: "mailto:jhoamsebastian68@gmail.com",
  //   icon: "envelope"
  // }
];
