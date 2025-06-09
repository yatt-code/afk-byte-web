'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-oxanium font-[600]">
            &lt;afkbyte/&gt;
          </span>
        </Link>
        
        <div className="hidden md:flex">
          <DesktopNav />
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="block md:hidden">
            <MobileNav />
          </div>
          <Button className="hidden md:flex" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <li key={service.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={service.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{service.title}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {service.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/careers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Careers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-lg font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/projects" className="text-lg font-medium transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/careers" className="text-lg font-medium transition-colors hover:text-primary">
            Careers
          </Link>
          <Link href="/blog" className="text-lg font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-lg font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const services = [
  {
    title: "Web Development",
    href: "/services#web-development",
    description: "Custom websites, applications, and e-commerce solutions.",
  },
  {
    title: "Software & Mobile App Development",
    href: "/services#app-development",
    description: "Native and cross-platform applications for iOS and Android.",
  },
  {
    title: "System Integration",
    href: "/services#system-integration",
    description: "Seamless integration of multiple systems and applications.",
  },
  {
    title: "Cloud Services",
    href: "/services#cloud-services",
    description: "Migration, deployment, and management of cloud infrastructure.",
  },
  {
    title: "IT Strategy Consulting",
    href: "/services#it-strategy",
    description: "Strategic guidance for digital transformation initiatives.",
  },
  {
    title: "AI & Data Solutions",
    href: "/services#ai-data",
    description: "Leveraging artificial intelligence and data analytics.",
  },
];