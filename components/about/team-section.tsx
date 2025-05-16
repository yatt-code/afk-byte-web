'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TeamSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of experts is passionate about technology and dedicated to helping our clients succeed.
          </p>
        </div>

        <Tabs defaultValue="leadership" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design & Strategy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="leadership">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadershipTeam.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="development">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {developmentTeam.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {designTeam.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface TeamMemberProps {
  avatar: string;
  name: string;
  role: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

function TeamMember({ avatar, name, role, bio, social }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Avatar className="h-48 w-full rounded-none">
          <AvatarImage src={avatar} alt={name} className="object-cover h-full w-full" />
          <AvatarFallback className="rounded-none h-full">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-white text-sm line-clamp-3">{bio}</p>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="mb-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
        
        {social && (
          <div className="flex space-x-2 mt-3">
            {social.linkedin && (
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {social.twitter && (
              <a 
                href={social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            )}
            {social.website && (
              <a 
                href={social.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const leadershipTeam = [
  {
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Alex founded AFK Byte with a vision to help businesses leverage technology for growth. With over 15 years of experience in IT and business leadership, he guides our strategic direction.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  },
  {
    avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Sarah Chen",
    role: "CTO",
    bio: "Sarah oversees our technical strategy and innovation initiatives. With a background in software architecture and cloud computing, she ensures we stay at the forefront of technology.",
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    avatar: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Michael Rodriguez",
    role: "COO",
    bio: "Michael leads our operations and ensures the seamless delivery of our services. His experience in project management and business operations keeps us efficient and client-focused.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  }
];

const developmentTeam = [
  {
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "David Smith",
    role: "Lead Developer",
    bio: "David specializes in full-stack development with expertise in React, Node.js, and cloud architecture. He leads our development team and ensures code quality across projects.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Emily Wong",
    role: "Mobile Development Lead",
    bio: "Emily is our mobile app expert, proficient in React Native, Swift, and Kotlin. She creates seamless cross-platform experiences with a focus on performance and usability.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  },
  {
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "James Wilson",
    role: "Cloud Solutions Architect",
    bio: "James designs and implements cloud infrastructure solutions. His expertise in AWS, Azure, and Google Cloud helps our clients scale securely and efficiently.",
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  }
];

const designTeam = [
  {
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Olivia Martinez",
    role: "UX/UI Design Lead",
    bio: "Olivia creates intuitive and beautiful user experiences. Her background in psychology and design helps her craft interfaces that users love to interact with.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  },
  {
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Liam Thompson",
    role: "Product Strategist",
    bio: "Liam transforms business requirements into product strategies. He works closely with clients to understand their needs and create roadmaps for successful products.",
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Sophia Kim",
    role: "Digital Marketing Specialist",
    bio: "Sophia leverages her expertise in digital marketing to help our clients maximize their online presence and reach their target audiences effectively.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  }
];