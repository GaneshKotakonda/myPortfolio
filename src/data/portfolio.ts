import type { Achievement, Experience, NavLink, Project, SkillCategory, SocialLink } from '../types';

export const personalInfo = {
  name: 'K. Ganesh Reddy',
  role: 'React Native Developer | Mobile App Developer',
  location: 'Andhra Pradesh, India',
  email: 'k.ganeshreddy038@gmail.com',
  linkedin: 'https://www.linkedin.com/in/k-ganesh-reddy/',
  github: 'https://github.com/GaneshKotakonda',
  introduction:
    'Computer Science student passionate about React Native, mobile app development, and building scalable user-friendly applications.',
  about: `I'm a Computer Science Engineering student specializing in Artificial Intelligence at IIIT Kottayam, with a strong passion for mobile application development. I specialize in building cross-platform mobile apps using React Native, leveraging Firebase for backend services and Redux for state management.

My approach combines clean architecture with user-centric design, ensuring every application I build is scalable, performant, and intuitive. I thrive on solving complex problems and turning ideas into polished, production-ready mobile experiences.`,
  education: {
    degree: 'B.Tech in Computer Science Engineering (Artificial Intelligence)',
    institution: 'Indian Institute of Information Technology Kottayam',
    cgpa: '8.43',
  },
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['Java', 'C', 'C++', 'C#', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['React', 'React Native', 'Angular', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Database',
    icon: 'backend',
    skills: ['Firebase', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const featuredProject: Project = {
  title: 'Smart E-Commerce App',
  description:
    'A full-featured mobile e-commerce application built with React Native, offering seamless shopping experiences with real-time data synchronization via Firebase.',
  techStack: ['React Native', 'Firebase', 'Redux'],
  features: [
    'User Authentication',
    'Product Listing',
    'Search Functionality',
    'Category Filtering',
    'Cart Management',
    'Checkout Flow',
    'Order Management',
    'Responsive Mobile UI',
  ],
  image: '/assets/project-1.png',
  githubUrl: 'https://github.com/GaneshKotakonda',
  liveUrl: '#',
};

export const experience: Experience = {
  company: 'Beta Labs (IIIT Kottayam)',
  role: 'Core Team Member & App Developer',
  responsibilities: [
    'Mobile application development',
    'Feature implementation',
    'Project planning',
    'Testing and deployment',
  ],
};

export const achievements: Achievement[] = [
  {
    title: '150+ DSA Problems',
    description: 'Solved 150+ Data Structures & Algorithms problems across multiple platforms.',
    icon: 'code',
  },
  {
    title: 'Beta Labs Contributor',
    description: 'Active contributor at Beta Labs, IIIT Kottayam innovation hub.',
    icon: 'team',
  },
  {
    title: 'Oracle Java Certified',
    description: 'Oracle Java Foundations Certified professional.',
    icon: 'certificate',
  },
  {
    title: 'ATF 2025 Stage 2',
    description: 'Selected as ATF 2025 Stage 2 Candidate.',
    icon: 'trophy',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: personalInfo.github, icon: 'github' },
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: 'linkedin' },
  { name: 'Email', url: `mailto:${personalInfo.email}`, icon: 'email' },
];

export const typewriterTexts = [
  'React Native Developer',
  'Mobile App Developer',
  'Problem Solver',
  'Full-Stack Enthusiast',
];
