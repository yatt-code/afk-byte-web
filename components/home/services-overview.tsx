import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ServiceCard } from '@/components/services/service-card';
import { Globe, Code, Smartphone, Database, Cloud, LineChart } from 'lucide-react';

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs. We provide end-to-end services to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Globe className="h-8 w-8 text-blue-500" />}
            title="Web Development"
            description="Custom websites, progressive web apps, and e-commerce solutions tailored to your business goals."
            href="/services#web-development"
          />
          <ServiceCard 
            icon={<Code className="h-8 w-8 text-purple-500" />}
            title="Software Development"
            description="Bespoke software solutions that automate processes and solve complex business challenges."
            href="/services#software-development"
          />
          <ServiceCard 
            icon={<Smartphone className="h-8 w-8 text-green-500" />}
            title="Mobile App Development"
            description="Native and cross-platform mobile applications for iOS and Android platforms."
            href="/services#app-development"
          />
          <ServiceCard 
            icon={<Database className="h-8 w-8 text-orange-500" />}
            title="System Integration"
            description="Seamlessly connect multiple systems, applications, and data sources for improved efficiency."
            href="/services#system-integration"
          />
          <ServiceCard 
            icon={<Cloud className="h-8 w-8 text-cyan-500" />}
            title="Cloud Services"
            description="Migration, deployment, and management of scalable cloud infrastructure solutions."
            href="/services#cloud-services"
          />
          <ServiceCard 
            icon={<LineChart className="h-8 w-8 text-pink-500" />}
            title="IT Strategy Consulting"
            description="Strategic guidance and roadmapping to align technology investments with business objectives."
            href="/services#it-strategy"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}