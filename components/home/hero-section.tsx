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
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-muted/80 py-24 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-background" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-[2000px] mx-auto">
          <div className={cn(
            "lg:col-span-5 space-y-8 transition-all duration-1000 transform",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 dark:from-blue-300 dark:via-blue-200 dark:to-blue-100 bg-clip-text text-transparent">
                  Creating Your Dream
                </span>{" "}
                with Innovative IT Solutions
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 dark:text-foreground/90 max-w-lg leading-relaxed">
                We help businesses transform through technology with tailored IT consultancy and development services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors"
                asChild
              >
                <Link href="/contact">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          <div className={cn(
            "lg:col-span-7 relative transition-all duration-1000 delay-300",
            visible ? "opacity-100" : "opacity-0"
          )}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-400/5 to-blue-300/5 dark:from-blue-400/10 dark:via-blue-300/10 dark:to-blue-200/10 rounded-2xl blur-3xl" />
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
                <HeroCard
                  icon={<Code className="h-8 w-8 text-blue-600" />}
                  title="Web Development"
                  description="Responsive websites and web applications"
                />
                <HeroCard
                  icon={<Server className="h-8 w-8 text-blue-600" />}
                  title="System Integration"
                  description="Seamless integration of complex systems"
                />
                <HeroCard
                  icon={<Cloud className="h-8 w-8 text-blue-600" />}
                  title="Cloud Services"
                  description="Scalable and secure cloud solutions"
                />
                <HeroCard
                  icon={<Server className="h-8 w-8 text-blue-600" />}
                  title="IT Strategy"
                  description="Strategic guidance for digital transformation"
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
      "bg-card/60 backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50 rounded-xl p-6 shadow-lg",
      "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200/50 dark:hover:border-blue-700/50",
      "hover:bg-card/80 dark:hover:bg-card/80",
      className
    )}>
      <div className="mb-4 p-2 bg-blue-50/50 dark:bg-blue-950/30 rounded-lg w-fit">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-blue-900 dark:text-blue-100">{title}</h3>
      <p className="text-sm text-foreground/80 dark:text-foreground/90 leading-relaxed">{description}</p>
    </div>
  );
}