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
    name: "React",
    issuer: "Platzi",
    year: "2025",
    status: "completed"
  },
  {
    id: "2",
    name: "Next.js",
    issuer: "Platzi",
    year: "2025",
    status: "in_progress"
  },
  {
    id: "3",
    name: "TailwindCSS",
    issuer: "Platzi",
    year: "2025",
    status: "completed"
  },
  {
    id: "4",
    name: "PostgreSQL",
    issuer: "Cisco",
    year: "2024",
    status: "completed"
  },
  {
    id: "5",
    name: "Scrum Fundamentals",
    issuer: "ScrumStudy",
    year: "2023",
    status: "completed"
  },
  {
    id: "6",
    name: "JavaScript",
    issuer: "Cisco",
    year: "2023",
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
