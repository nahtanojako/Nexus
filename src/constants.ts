import { Project, Skill, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Quantum Analytics',
    description: 'A real-time data visualization platform for quantum computing metrics.',
    longDescription: 'Quantum Analytics is a cutting-edge platform designed to monitor and visualize quantum state decoherence in real-time. Built with React and D3.js, it provides researchers with intuitive heatmaps and trend analysis tools.',
    tags: ['React', 'D3.js', 'TypeScript', 'Quantum'],
    image: 'https://picsum.photos/seed/quantum/800/600',
    stats: [
      { label: 'Frontend', value: 70, color: '#3b82f6' },
      { label: 'Backend', value: 30, color: '#10b981' }
    ],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'EcoTrack Mobile',
    description: 'Personal carbon footprint tracker with social integration.',
    longDescription: 'EcoTrack helps users monitor their daily carbon emissions through automated receipt scanning and GPS tracking. It features a robust social system where communities can compete in sustainability challenges.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    image: 'https://picsum.photos/seed/eco/800/600',
    stats: [
      { label: 'Mobile', value: 60, color: '#f59e0b' },
      { label: 'API', value: 40, color: '#ef4444' }
    ],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Lumina Design System',
    description: 'A comprehensive, accessible component library for enterprise apps.',
    longDescription: 'Lumina is a design system focused on extreme accessibility and performance. It includes over 50+ components, a custom documentation engine, and automated accessibility testing suites.',
    tags: ['Design System', 'Storybook', 'Tailwind'],
    image: 'https://picsum.photos/seed/design/800/600',
    stats: [
      { label: 'UI/UX', value: 85, color: '#8b5cf6' },
      { label: 'Docs', value: 15, color: '#ec4899' }
    ],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Docker', level: 75, category: 'Tools' },
  { name: 'Figma', level: 88, category: 'Design' },
  { name: 'Motion', level: 85, category: 'Frontend' }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'TechNova Solutions',
    role: 'Senior Frontend Engineer',
    period: '2022 - Present',
    description: 'Leading the frontend architecture for a multi-tenant SaaS platform.',
    achievements: [
      'Reduced initial bundle size by 45% through code-splitting and tree-shaking.',
      'Implemented a custom micro-frontend architecture using Module Federation.',
      'Mentored a team of 5 junior developers.'
    ]
  },
  {
    company: 'Creative Pulse',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed interactive web experiences for high-profile clients.',
    achievements: [
      'Built a custom CMS that improved content update speed by 300%.',
      'Integrated multiple third-party APIs for real-time data sync.',
      'Won "Developer of the Year" in 2021.'
    ]
  }
];
