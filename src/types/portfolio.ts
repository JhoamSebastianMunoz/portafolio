export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  period: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  title: string;
  period: string;
  location: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  month?: string;
  status?: 'completed' | 'in_progress';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
