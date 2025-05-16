'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'software' | 'cloud' | 'ai';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, image, categories, tags, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg line-clamp-1">{title}</h3>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-4">
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="rounded-full text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="mt-2">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}