import { Project, Experience, Education, Certification, SocialLink, Language, Stat } from '@/types/portfolio';

export const personalInfo = {
  name: "JHOAM SEBASTIAN MUÑOZ BETANCOURT",
  title: "Full Stack Developer",
  subtitle: "React · Node.js · TypeScript · SQL · Azure",
  location: "Montenegro, Quindío",
  phone: "+57 311 695 7990",
  email: "jhoamsebastian68@gmail.com",
  github: "https://github.com/JhoamSebastianMunoz",
  linkedin: "https://www.linkedin.com/in/jhoam-sebastian-mu%C3%B1oz-betancourt",
  profile: "Desarrollador de Software con experiencia construyendo aplicaciones web full-stack con React, Node.js y TypeScript. Experiencia diseñando APIs RESTful, optimizando consultas SQL y desplegando en la nube (Azure, Vercel, Railway) con pipelines CI/CD en producción. Enfoque en código mantenible, separación de capas (Controllers, Services, Repositories) y uso de herramientas de IA para acelerar el ciclo de desarrollo."
};

export const stats: Stat[] = [
  { label: "Años de Experiencia", value: "3+" },
  { label: "Proyectos en Producción", value: "4" },
  { label: "Tecnologías Dominadas", value: "18+" },
  { label: "Certificaciones", value: "28+" },
];

export const techStack = [
  "React", "TypeScript", "JavaScript", "TailwindCSS", "Boostrap", "CSS",
  "Next.js", "Node.js", "Express", "PostgreSQL", "MySQL", "SQLite", 
  "Docker", "Azure", "Vercel", "Railway", "Power BI", "Git", "GitHub",
  "Supabase", "JWT","Vite", "i18next", "Chart.js", "lucide-react"
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Tremendo Territorio",
    description: "Plataforma web para visibilizar y comercializar productos agrícolas colombianos, con enfoque en escalabilidad y experiencia de usuario.",
    technologies: ["React", "TailwindCSS", "JavaScript", "Node.js", "Express", "MySQL", "Vite 7.0.0", "Vercel", "Railway", "Claudinary", "i18next", "Chart.js", "lucide-react"],
    period: "May 2025 – Ene 2026",
    features: [
      "Arquitectura de componentes reutilizables con React + Vite + TypeScript",
      "Diseño responsive con TailwindCSS optimizado para móviles",
      "Integración de APIs REST con manejo de estados global (Context API)",
      "Despliegue en Vercel con CI/CD automatizado",
      "Internacionalización multi-idioma (Español/Inglés) con i18next",
      "Autenticación de usuarios con AuthContext",
      "Dashboard de analytics con gráficos de oferta y demanda"
    ],
    impact: [
      "- Diseñé 30+ componentes reutilizables en React + Vite, reduciendo el tiempo de desarrollo de nuevas vistas mediante un sistema de diseño consistente.",
      "- Reduje llamadas API redundantes implementando gestión centralizada de estado con Context API. ",
      "- Desarrollé servicios RESTful y modelos de datos en TypeScript y PostgreSQL, aplicando arquitectura limpia y manejo centralizado de errores con middlewares.",
      "- Integré almacenamiento remoto de archivos con Cloudinary, agilizando la gestión de contenido multimedia.",
      "- Mantuve historial de commits organizado colaborando en equipo con GitFlow en GitHub"
    ],
    liveUrl: "https://tremendoterritoriofrontend.vercel.app/",
    githubUrl: "https://github.com/tremendoterritorio/tremendoterritorio-frontend.git",
    technicalNotice: {
      type: "warning",
      title: "Servicios Backend Temporalmente No Disponibles",
      message: "Ciertos servicios del backend están deshabilitados por falta de renovación de pago de servicios de despliegue. La interfaz frontal permanece funcional."
    }
  },
  {
    id: "2",
    title: "TATSOFT",
    description: "Sistema de gestión de preventas B2B para distribuidoras con arquitectura de microservicios y despliegue cloud.",
    technologies: ["React", "Vite", "CSS3", "Node.js", "Express", "Swagger", "MySQL", "Azure"],
    period: "Jul 2023 – Abr 2025",
    features: [
      "Desarrollo de frontend modular con React y Vite",
      "Arquitectura de APIs RESTful con Express y Node.js",
      "Diseño de esquema de base de datos relacional optimizado",
      "Integración con microservicios backend",
      "Despliegue cloud en Azure con alta disponibilidad"
    ],
    impact: [
      "- Reduje el tiempo de respuesta de transacciones críticas optimizando consultas SQL y procedimientos almacenados en MySQL.",
      "- Diseñé y mantuve APIs RESTful bajo arquitectura de microservicios con Node.js, Express y TypeScript, separando capas en Routes, Midleware, DTOs, Controllers, Services, Repositories y db.",
      "- Documenté APIs con Swagger/OpenAPI, facilitando la integración continua entre equipos de desarrollo.",
      "- Configuré pipelines CI/CD en Microsoft Azure (App Service, Azure Database for MySQL), logrando despliegues sin downtime.",
      "- Aceleré el desarrollo frontend en React usando Cursor AI, manteniendo estándares de código limpio."
    ],
    liveUrl: "frontend-tatsoft.vercel.app/",
    githubUrl: "https://github.com/JhoamSebastianMunoz/frontend_tatsoft.git",
    technicalNotice: {
      type: "warning",
      title: "Despliegue Temporalmente Offline",
      message: "La arquitectura de microservicios está completamente funcional. El despliegue está offline por expiración de créditos Azure. La v2 migrará a infraestructura de menor costo."
    }
  },
  {
    id: "3",
    title: "Portafolio Personal",
    description: "Portafolio profesional con Next.js 16, TypeScript y optimización avanzada de rendimiento y SEO.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "React"],
    period: "2026",
    features: [
      "Arquitectura App Router con Server Components",
      "Optimización de imágenes con Next.js Image",
      "SEO avanzado con structured data JSON-LD",
      "Animaciones 60fps con Framer Motion",
      "Configuración de performance y compresión"
    ],
    impact: [
      "Implementación full performance con compresión y optimización de assets",
      "SEO estructurado con datos semánticos y Open Graph",
      "Diseño responsivo con métricas Core Web Vitals optimizadas"
    ],
    liveUrl: "https://portafolio-gamma-beryl.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/portafolio"
  },
  {
    id: "4",
    title: "Microservice Backend - Productos",
    description: "Microservicio backend robusto para gestión de productos con autenticación JWT, almacenamiento cloud y documentación interactiva.",
    technologies: ["Express", "TypeScript", "MySQL", "JWT", "Supabase Storage"],
    period: "2026",
    features: [
      "Arquitectura MVC escalable con manejo global de errores",
      "Seguridad avanzada: JWT, bcryptjs y express-validator",
      "Documentación interactiva con Swagger UI",
      "Gestión de archivos multimedia con Supabase Cloud Storage"
    ],
    impact: [
      "API documentada con Swagger para integración con equipos frontend",
      "Arquitectura MVC que permite escalar funcionalidades sin reescribir",
      "Almacenamiento cloud para imágenes de producto con acceso seguro"
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
    period: "May 2025 – Ene 2026",
    description: "Plataforma web para visibilizar el trabajo de agricultores colombianos, conectando el campo con consumidores a través de tecnología moderna.",
    achievements: [
      "Construí 30+ componentes reutilizables en React + Vite + TailwindCSS, reduciendo el tiempo de desarrollo de nuevas vistas mediante un sistema de diseño consistente",
      "Implementé arquitectura limpia con manejo centralizado de estado global (Context API), optimizando el consumo de APIs REST y reduciendo llamadas redundantes",
      "Colaboré en equipo con GitFlow en GitHub, manteniendo un historial de commits organizado y entregas continuas",
      "Implementé internacionalización multi-idioma (Español/Inglés) con i18next y detección automática de idioma",
      "Desarrollé sistema de autenticación de usuarios con AuthContext y restricción de acceso a páginas protegidas",
      "Creé dashboard de analytics con gráficos de oferta y demanda y métricas de conexiones realizadas"
    ],
    technologies: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.js", "Express", "MySQL", "Vercel", "Railway", "i18next", "AuthContext"]
  },
  {
    id: "2",
    company: "TATSOFT",
    position: "Desarrollador Full Stack",
    period: "Jul 2023 – Abr 2025",
    description: "Aplicativo web de gestión de preventas para distribuidoras, optimizando procesos comerciales con arquitectura de microservicios.",
    achievements: [
      "Reduje el tiempo de ejecución de procesos clave de preventas optimizando consultas SQL en MySQL, mejorando la velocidad de respuesta del equipo comercial",
      "Desarrollé y mantuve APIs REST para operaciones CRUD, integradas con un backend basado en microservicios",
      "Configuré pipelines de CI/CD en Azure para frontend y backend, garantizando despliegues continuos sin downtime"
    ],
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
    title: "Tecnólogo en Sistemas de Gestión Integrada",
    period: "2015 – 2018",
    location: "Armenia"
  }
];

export const languages: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2 (en desarrollo activo)" }
];

export const certifications: Certification[] = [
  { id: "1", name: "Práctico Frontend Developer", issuer: "Platzi", year: "2026", month: "Febrero", category: "Frontend", status: "completed" },
  { id: "2", name: "Backend con Node.js - API Rest con Express.js", issuer: "Platzi", year: "2026", month: "Enero", category: "Backend", status: "completed" },
  { id: "3", name: "TypeScript", issuer: "Platzi", year: "2026", month: "Enero", category: "Frontend", status: "completed" },
  { id: "4", name: "Curso de PostgreSQL", issuer: "Platzi", year: "2026", month: "Enero", category: "Bases de Datos", status: "completed" },
  { id: "5", name: "Supabase", issuer: "Platzi", year: "2026", month: "Enero", category: "Backend", status: "completed" },
  { id: "6", name: "Windsurf AI", issuer: "Cascade", year: "2026", month: "Febrero", category: "Herramientas", status: "completed" },
  { id: "7", name: "Cursor AI Code Editor", issuer: "Platzi", year: "2025", month: "Octubre", category: "Herramientas", status: "completed" },
  { id: "8", name: "Next.js Avanzado", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "9", name: "React.js E-commerce Profesional", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "10", name: "React.js con TypeScript", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "11", name: "TailwindCSS", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "12", name: "React.js Avanzado", issuer: "Platzi", year: "2025", month: "Junio", category: "Frontend", status: "completed" },
  { id: "13", name: "Docker: Fundamentos", issuer: "Platzi", year: "2025", month: "Junio", category: "Herramientas", status: "completed" },
  { id: "14", name: "Pensamiento Lógico", issuer: "Platzi", year: "2025", month: "Junio", category: "Metodologías", status: "completed" },
  { id: "15", name: "N8N", issuer: "Platzi", year: "2025", month: "Junio", category: "Herramientas", status: "completed" },
  { id: "16", name: "React.js", issuer: "Platzi", year: "2025", month: "Mayo", category: "Frontend", status: "completed" },
  { id: "17", name: "Elements of Agile in Miro", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "18", name: "Technical Diagramming", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "19", name: "Miro Essentials", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "20", name: "Miro Users Support", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "21", name: "Innovation Essentials", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "22", name: "Curso Básico RPA", issuer: "PIX Robotics", year: "2024", month: "Noviembre", category: "Herramientas", status: "completed" },
  { id: "23", name: "Databases Fundamentals", issuer: "SoftServe", year: "2024", month: "Mayo", category: "Bases de Datos", status: "completed" },
  { id: "24", name: "JavaScript Essentials 2", issuer: "Cisco", year: "2024", month: "Abril", category: "Frontend", status: "completed" },
  { id: "25", name: "PostgreSQL", issuer: "Cisco", year: "2024", month: "Mayo", category: "Bases de Datos", status: "completed" },
  { id: "26", name: "JavaScript Essentials 1", issuer: "Cisco", year: "2023", month: "Diciembre", category: "Frontend", status: "completed" },
  { id: "27", name: "Scrum Fundamentals", issuer: "ScrumStudy", year: "2023", month: "Septiembre", category: "Metodologías", status: "completed" },
  { id: "28", name: "Next.js 14", issuer: "Platzi", year: "2025", category: "Frontend", status: "in_progress" },
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
  {
    name: "Email",
    url: "mailto:jhoamsebastian68@gmail.com",
    icon: "envelope"
  }
];
