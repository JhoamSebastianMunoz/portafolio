export interface TechnicalNotice {
  type: 'warning' | 'info';
  title: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  period: string;
  features: string[];
  impact: string[];
  githubUrl?: string;
  liveUrl?: string;
  technicalNotice?: TechnicalNotice;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
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
  category?: string;
  status?: 'completed' | 'in_progress';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
