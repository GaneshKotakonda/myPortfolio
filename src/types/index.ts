export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  responsibilities: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
