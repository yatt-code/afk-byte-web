'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, Compass, Code, Rocket, Check, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ServiceProcess() {
  const [activeTab, setActiveTab] = useState('discovery');

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We follow a proven methodology to ensure the success of your project from concept to completion.
          </p>
        </div>

        <Tabs defaultValue="discovery" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto mb-8">
            <TabsTrigger value="discovery" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4">
              <div className="flex flex-col items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                <span className="text-xs">Discovery</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="planning" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4">
              <div className="flex flex-col items-center gap-2">
                <Compass className="h-5 w-5" />
                <span className="text-xs">Planning</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4">
              <div className="flex flex-col items-center gap-2">
                <Wrench className="h-5 w-5" />
                <span className="text-xs">Design</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4">
              <div className="flex flex-col items-center gap-2">
                <Code className="h-5 w-5" />
                <span className="text-xs">Development</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="testing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4">
              <div className="flex flex-col items-center gap-2">
                <Check className="h-5 w-5" />
                <span className="text-xs">Testing</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="launch" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4">
              <div className="flex flex-col items-center gap-2">
                <Rocket className="h-5 w-5" />
                <span className="text-xs">Launch</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <TabsContent value="discovery" className="mt-0">
              <ProcessStep
                title="Discovery & Consultation"
                description="We begin by understanding your business objectives, challenges, and vision. This phase involves stakeholder interviews, market research, and requirement gathering to ensure we have a comprehensive understanding of your needs."
                features={[
                  "Initial consultation and requirement gathering",
                  "Stakeholder interviews and user research",
                  "Market and competitive analysis",
                  "Definition of project scope and goals"
                ]}
                image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                isActive={activeTab === 'discovery'}
              />
            </TabsContent>
            
            <TabsContent value="planning" className="mt-0">
              <ProcessStep
                title="Strategic Planning"
                description="Based on the discovery phase, we develop a detailed project plan that outlines the timeline, milestones, deliverables, and resource allocation. This ensures alignment with your business objectives and provides a clear roadmap for the project."
                features={[
                  "Development of detailed project plan and timeline",
                  "Resource allocation and team assignment",
                  "Risk assessment and mitigation strategies",
                  "Definition of success metrics and KPIs"
                ]}
                image="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                isActive={activeTab === 'planning'}
              />
            </TabsContent>
            
            <TabsContent value="design" className="mt-0">
              <ProcessStep
                title="Design & Architecture"
                description="Our design phase focuses on creating intuitive, user-friendly interfaces and robust system architectures. We create wireframes, mockups, and prototypes to visualize the solution and gather feedback early in the process."
                features={[
                  "User experience (UX) and user interface (UI) design",
                  "System architecture and database design",
                  "Wireframing, prototyping, and mockups",
                  "Design review and stakeholder approval"
                ]}
                image="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                isActive={activeTab === 'design'}
              />
            </TabsContent>
            
            <TabsContent value="development" className="mt-0">
              <ProcessStep
                title="Development & Implementation"
                description="Our skilled development team brings the designs to life using the latest technologies and best practices. We follow agile methodologies to ensure flexibility, transparency, and regular deliveries throughout the development process."
                features={[
                  "Agile development with regular sprint cycles",
                  "Continuous integration and deployment",
                  "Code reviews and adherence to coding standards",
                  "Regular progress updates and demonstrations"
                ]}
                image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                isActive={activeTab === 'development'}
              />
            </TabsContent>
            
            <TabsContent value="testing" className="mt-0">
              <ProcessStep
                title="Quality Assurance & Testing"
                description="Rigorous testing is performed to ensure the solution meets all requirements and quality standards. We conduct various types of testing, including functional, performance, security, and user acceptance testing."
                features={[
                  "Comprehensive functional and regression testing",
                  "Performance, security, and compatibility testing",
                  "User acceptance testing (UAT)",
                  "Bug fixing and quality improvements"
                ]}
                image="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                isActive={activeTab === 'testing'}
              />
            </TabsContent>
            
            <TabsContent value="launch" className="mt-0">
              <ProcessStep
                title="Deployment & Support"
                description="Once the solution is thoroughly tested and approved, we handle the deployment process to ensure a smooth transition to production. Post-launch, we provide ongoing support, maintenance, and optimization services."
                features={[
                  "Smooth deployment and go-live process",
                  "User training and documentation",
                  "Post-launch monitoring and optimization",
                  "Ongoing support and maintenance"
                ]}
                image="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                isActive={activeTab === 'launch'}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  isActive: boolean;
}

function ProcessStep({ title, description, features, image, isActive }: ProcessStepProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={cn(
        "rounded-lg overflow-hidden transition-all duration-500 transform",
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}