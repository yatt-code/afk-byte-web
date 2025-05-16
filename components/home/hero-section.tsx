'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Code, Server, Cloud } from 'lucide-react';

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "space-y-6 transition-all duration-1000 transform",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Creating Your Dream
              </span>{" "}
              with Innovative IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              We help businesses transform through technology with tailored IT consultancy and development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            visible ? "opacity-100" : "opacity-0"
          )}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-lg blur-3xl" /> {/* Glow effect */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Adjusted grid for responsiveness */}
                <HeroCard
                  icon={<Code className="h-8 w-8 text-blue-500" />}
                  title="Web Development"
                  description="Responsive websites and web applications" // translate-y removed
                />
                <HeroCard
                  icon={<Server className="h-8 w-8 text-purple-500" />}
                  title="System Integration"
                  description="Seamless integration of complex systems" // -translate-y removed
                />
                <HeroCard
                  icon={<Cloud className="h-8 w-8 text-green-500" />}
                  title="Cloud Services"
                  description="Scalable and secure cloud solutions" // -translate-y removed
                />
                <HeroCard
                  icon={<Server className="h-8 w-8 text-orange-500" />}
                  title="IT Strategy"
                  description="Strategic guidance for digital transformation" // translate-y removed
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function HeroCard({ icon, title, description, className }: HeroCardProps) {
  return (
    <div className={cn(
      "bg-card/70 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1", 
      className
    )}>
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}