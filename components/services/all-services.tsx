import { ServiceCard } from '@/components/services/service-card';
import { Globe, Code, Smartphone, Database, Cloud, LineChart, BarChart3, BrainCircuit } from 'lucide-react';

export function AllServices() {
  return (
    <section id="services" className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            id="web-development"
            icon={<Globe className="h-8 w-8 text-blue-500" />}
            title="Web Development"
            description="Custom websites, progressive web apps, and e-commerce solutions tailored to your business goals. We use modern technologies to create responsive, fast, and secure web experiences."
            href="/services#web-development"
          />
          <ServiceCard 
            id="software-development"
            icon={<Code className="h-8 w-8 text-purple-500" />}
            title="Software Development"
            description="Bespoke software solutions that automate processes and solve complex business challenges. From desktop applications to enterprise software, we create solutions that drive efficiency."
            href="/services#software-development"
          />
          <ServiceCard 
            id="app-development"
            icon={<Smartphone className="h-8 w-8 text-green-500" />}
            title="Mobile App Development"
            description="Native and cross-platform mobile applications for iOS and Android platforms. We create intuitive, feature-rich apps that engage users and deliver exceptional experiences."
            href="/services#app-development"
          />
          <ServiceCard 
            id="system-integration"
            icon={<Database className="h-8 w-8 text-orange-500" />}
            title="System Integration"
            description="Seamlessly connect multiple systems, applications, and data sources for improved efficiency. We eliminate silos and create unified ecosystems that streamline operations."
            href="/services#system-integration"
          />
          <ServiceCard 
            id="cloud-services"
            icon={<Cloud className="h-8 w-8 text-cyan-500" />}
            title="Cloud Services"
            description="Migration, deployment, and management of scalable cloud infrastructure solutions. We help you leverage the power of cloud computing to reduce costs and increase flexibility."
            href="/services#cloud-services"
          />
          <ServiceCard 
            id="it-strategy"
            icon={<LineChart className="h-8 w-8 text-pink-500" />}
            title="IT Strategy Consulting"
            description="Strategic guidance and roadmapping to align technology investments with business objectives. We help you make informed decisions about your IT infrastructure and digital transformation."
            href="/services#it-strategy"
          />
          <ServiceCard 
            id="data-analytics"
            icon={<BarChart3 className="h-8 w-8 text-yellow-500" />}
            title="Data Analytics"
            description="Transform your raw data into actionable insights with our comprehensive data analytics services. We help you make data-driven decisions with custom dashboards and reporting solutions."
            href="/services#data-analytics"
          />
          <ServiceCard 
            id="ai-data"
            icon={<BrainCircuit className="h-8 w-8 text-indigo-500" />}
            title="AI & Data Solutions"
            description="Leverage artificial intelligence and machine learning to gain competitive advantages. From predictive analytics to natural language processing, we build intelligent solutions."
            href="/services#ai-data"
          />
        </div>
      </div>
    </section>
  );
}