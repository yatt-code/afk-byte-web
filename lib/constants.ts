import { Globe, Code, Smartphone, Database, Cloud, LineChart, BarChart3, BrainCircuit } from 'lucide-react';

export const SITE_CONFIG = {
  name: 'AFK Byte',
  tagline: 'Creating Your Dream',
  description: 'IT consultancy services for businesses of all sizes',
  url: 'https://afkbyte.com',
  ogImage: 'https://afkbyte.com/og-image.jpg',
  links: {
    linkedin: 'https://linkedin.com/company/afkbyte',
    twitter: 'https://twitter.com/afkbyte',
    facebook: 'https://facebook.com/afkbyte',
    instagram: 'https://instagram.com/afkbyte',
    github: 'https://github.com/afkbyte',
  },
  contact: {
    email: 'info@afkbyte.com',
    phone: '+1 (234) 567-890',
    address: '123 Tech Street, San Francisco, CA 94107, United States',
  },
};

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites, progressive web apps, and e-commerce solutions tailored to your business goals.',
    icon: Globe,
    iconColor: 'text-blue-500',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Bespoke software solutions that automate processes and solve complex business challenges.',
    icon: Code,
    iconColor: 'text-purple-500',
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: Smartphone,
    iconColor: 'text-green-500',
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Seamlessly connect multiple systems, applications, and data sources for improved efficiency.',
    icon: Database,
    iconColor: 'text-orange-500',
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Migration, deployment, and management of scalable cloud infrastructure solutions.',
    icon: Cloud,
    iconColor: 'text-cyan-500',
  },
  {
    id: 'it-strategy',
    title: 'IT Strategy Consulting',
    description: 'Strategic guidance and roadmapping to align technology investments with business objectives.',
    icon: LineChart,
    iconColor: 'text-pink-500',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your raw data into actionable insights with our comprehensive data analytics services.',
    icon: BarChart3,
    iconColor: 'text-yellow-500',
  },
  {
    id: 'ai-data',
    title: 'AI & Data Solutions',
    description: 'Leverage artificial intelligence and machine learning to gain competitive advantages.',
    icon: BrainCircuit,
    iconColor: 'text-indigo-500',
  },
];