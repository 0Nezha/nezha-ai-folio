import { ExternalLink, Github, Smartphone, Monitor, Brain, Laptop } from 'lucide-react';


export type Project = {
  id: string;
  title: string;
  description: string;
  icon: any; // ou React.ComponentType si tu veux typé l’icône
  image: string;
  tech: string[];
  features: string[];
  type: string;
  gradient: string;
};
export const projects = [
    {
      id: '1',
      title: 'Medical Management App',
      description: 'PFE Project: A comprehensive web application designed to streamline daily operations in medical cabinets. Features patient management, appointment scheduling, and medical records organization.',
      icon: Laptop,
      image: '/images/medical.jpg',
      tech: ['PHP', 'Xampp','phpMyAdmin' ,'Database', 'React'],
      features: ["Real-time Data", "Interactive Charts", "Export Reports", "Custom Filters"],
      type: 'Médical Project',
      gradient: 'from-blue-100 to-blue-400'
    },
    {
      id: '2',  
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence, featuring real-time data visualization, trend analysis, and predictive modeling capabilities.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'R', 'Data Visualization', 'Statistics'],
      features: ["Product Management", "Order Processing", "User Authentication", "Admin Panel"],
      type: 'Analytics Project',
      gradient: 'from-blue-900 to-cyan-500'
    },
    {
      id: '3',  
      title: 'AI-Powered Solutions',
      description: 'Collection of AI experiments and implementations, including machine learning models, natural language processing, and innovative AI integrations.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      tech: ['Machine Learning', 'AI', 'Python', 'Innovation'],
      features: ["Product Management", "Order Processing", "User Authentication", "Admin Panel"],
      type: 'AI Experiments',
      gradient: 'from-blue-900 to-pink-500'
    },
     {
      id: '4',
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence, featuring real-time data visualization, trend analysis, and predictive modeling capabilities.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'R', 'Data Visualization', 'Statistics'],
      features: ["Product Management", "Order Processing", "User Authentication", "Admin Panel"],
      type: 'Analytics Project',
      gradient: 'from-blue-900 to-cyan-500'
    },
     {
      id: '5',
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence, featuring real-time data visualization, trend analysis, and predictive modeling capabilities.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'R', 'Data Visualization', 'Statistics'],
      features: ["Product Management", "Order Processing", "User Authentication", "Admin Panel"],
      type: 'Analytics Project',
      gradient: 'from-blue-900 to-cyan-500'
    },
];
