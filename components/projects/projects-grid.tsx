'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'software' | 'cloud' | 'ai';

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <CategoryButton 
            category="all" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </CategoryButton>
          <CategoryButton 
            category="web" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('web')}
          >
            Web Development
          </CategoryButton>
          <CategoryButton 
            category="mobile" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile Apps
          </CategoryButton>
          <CategoryButton 
            category="software" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('software')}
          >
            Software
          </CategoryButton>
          <CategoryButton 
            category="cloud" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('cloud')}
          >
            Cloud Solutions
          </CategoryButton>
          <CategoryButton 
            category="ai" 
            activeCategory={activeCategory} 
            onClick={() => setActiveCategory('ai')}
          >
            AI & Data
          </CategoryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryButtonProps {
  category: ProjectCategory;
  activeCategory: ProjectCategory;
  onClick: () => void;
  children: React.ReactNode;
}

function CategoryButton({ category, activeCategory, onClick, children }: CategoryButtonProps) {
  return (
    <Button 
      variant={activeCategory === category ? "default" : "outline"}
      onClick={onClick}
      className="rounded-full"
    >
      {children}
    </Button>
  );
}

const projects = [
  {
    title: "HealthTrack Patient Portal",
    description: "A comprehensive patient portal for a healthcare provider, allowing patients to book appointments, access medical records, and communicate with doctors.",
    image: "https://images.pexels.com/photos/7439148/pexels-photo-7439148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['web', 'software'] as ProjectCategory[],
    tags: ["Healthcare", "Web App", "React", "Node.js"],
    link: "#"
  },
  {
    title: "RetailPro Mobile App",
    description: "A mobile application for a retail chain that allows customers to browse products, make purchases, and track orders, with integrated loyalty program features.",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['mobile'] as ProjectCategory[],
    tags: ["Retail", "E-commerce", "React Native", "iOS/Android"],
    link: "#"
  },
  {
    title: "FinSecure Banking Platform",
    description: "A secure online banking platform with advanced security features, real-time transaction processing, and personalized financial insights.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['web', 'software', 'cloud'] as ProjectCategory[],
    tags: ["Finance", "Security", "Angular", "AWS"],
    link: "#"
  },
  {
    title: "LogisticsPro Tracking System",
    description: "A logistics management and tracking system that provides real-time visibility into shipment status, route optimization, and delivery management.",
    image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['web', 'software', 'cloud'] as ProjectCategory[],
    tags: ["Logistics", "IoT", "Tracking", "Azure"],
    link: "#"
  },
  {
    title: "EduLearn LMS",
    description: "A learning management system for educational institutions that offers course creation, student enrollment, progress tracking, and interactive assessments.",
    image: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['web', 'software'] as ProjectCategory[],
    tags: ["Education", "LMS", "Vue.js", "PHP"],
    link: "#"
  },
  {
    title: "SmartHome IoT Platform",
    description: "An IoT platform for home automation that connects smart devices, provides a centralized control interface, and offers intelligent automation features.",
    image: "https://images.pexels.com/photos/7054678/pexels-photo-7054678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['mobile', 'cloud', 'ai'] as ProjectCategory[],
    tags: ["IoT", "Smart Home", "Flutter", "Google Cloud"],
    link: "#"
  },
  {
    title: "DataInsight Analytics Dashboard",
    description: "A data analytics platform that transforms complex data into actionable insights through interactive visualizations and automated reporting.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['web', 'ai'] as ProjectCategory[],
    tags: ["Analytics", "Business Intelligence", "React", "Python"],
    link: "#"
  },
  {
    title: "TravelBuddy Trip Planner",
    description: "A trip planning application that helps users discover destinations, create itineraries, book accommodations, and share travel experiences.",
    image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['web', 'mobile'] as ProjectCategory[],
    tags: ["Travel", "Mobile App", "React Native", "Node.js"],
    link: "#"
  },
  {
    title: "CloudMigrate Enterprise Solution",
    description: "A cloud migration solution that helped a large enterprise move their legacy infrastructure to the cloud, resulting in improved scalability and cost savings.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['cloud'] as ProjectCategory[],
    tags: ["Cloud Migration", "Enterprise", "AWS", "DevOps"],
    link: "#"
  }
];