export type View = 'dashboard' | 'projects' | 'experience' | 'contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  stats: {
    label: string;
    value: number;
    color: string;
  }[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}
