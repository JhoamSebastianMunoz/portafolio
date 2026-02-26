import { Project, Experience, Education, Certification, Skill, SocialLink } from '@/types/portfolio';

export const personalInfo = {
  name: "JHOAM SEBASTIAN MUÑOZ BETANCOURT",
  title: "Desarrollador Full Stack",
  location: "Montenegro, Quindío",
  phone: "+57 311 695 7990",
  email: "jhoamsebastian68@gmail.com",
  github: "https://github.com/JhoamSebastianMunoz",
  linkedin: "https://www.linkedin.com/in/jhoam-sebastian-muñoz-betancourt",
  profile: "Desarrollador Frontend Junior con experiencia práctica en la construcción de aplicaciones web modernas utilizando React, Vite, TypeScript y TailwindCSS. He participado en proyectos reales de alcance productivo, desarrollando interfaces reutilizables, consumiendo APIs REST y colaborando en equipos bajo metodologías ágiles. Cuento además con bases sólidas en backend con Node.js y Express, lo que me permite comprender el ciclo completo de una aplicación web y aportar con criterio técnico desde el frontend. Me caracterizo por el aprendizaje rápido, el uso disciplinado de Git y GitHub, y la orientación a código limpio, mantenible y accesible."
};

export const skills: Skill[] = [
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "TailwindCSS", level: 85, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Tremendo Territorio",
    description: "Proyecto web orientado a la visibilización del trabajo de agricultores colombianos",
    technologies: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.js", "Express", "MySQL"],
    period: "Mayo 2025 – Enero 2026",
    features: [
      "Desarrollo del frontend con React + Vite y TailwindCSS",
      "Implementación de componentes reutilizables y diseño responsive",
      "Consumo de APIs REST y manejo de estados de la aplicación",
      "Trabajo colaborativo mediante GitHub"
    ],
    liveUrl: "https://tremendo-territorio.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/tremendo-territorio"
  },
  {
    id: "2",
    title: "TATSOFT",
    description: "Aplicativo web para la gestión de preventas en distribuidoras tienda a tienda",
    technologies: ["React", "Vite", "CSS3", "Node.js", "Express", "MySQL"],
    period: "2024",
    features: [
      "Construcción del frontend con React y Vite",
      "Desarrollo y consumo de APIs REST para operaciones CRUD",
      "Integración con backend basado en microservicios",
      "Participación en el diseño de la base de datos",
      "Despliegue de la solución completa en Azure"
    ],
    liveUrl: "https://tatsoft.azurewebsites.net",
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft"
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tremendo Territorio",
    position: "Desarrollador Frontend",
    period: "Mayo 2025 – Enero 2026",
    description: "Desarrollo de aplicación web para visibilización del trabajo de agricultores colombianos",
    technologies: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.js", "Express", "MySQL", "Vercel", "Railway"]
  },
  {
    id: "2",
    company: "TATSOFT",
    position: "Desarrollador Full Stack Junior",
    period: "2024",
    description: "Desarrollo de aplicativo web para gestión de preventas en distribuidoras",
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
    status: "in_progress"
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
