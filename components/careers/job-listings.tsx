'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Banknote } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  resume: z.string().min(1, { message: 'Please provide a link to your resume.' }),
  coverLetter: z.string().min(50, { message: 'Cover letter must be at least 50 characters.' }),
});

export function JobListings() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    form.reset();
    setIsDialogOpen(false);
  }

  const openJobDialog = (job: (typeof jobs)[0]) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our team of passionate tech experts and work on exciting projects that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={() => openJobDialog(job)} />
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
              <DialogDescription>
                Fill out the form below to apply for this position. We'll review your application and get back to you soon.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume Link</FormLabel>
                      <FormControl>
                        <Input placeholder="Link to your resume (Google Drive, Dropbox, etc.)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you're interested in this position and why you'd be a great fit" 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Submit Application</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

interface JobCardProps {
  job: {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    requirements: string[];
  };
  onApply: () => void;
}

function JobCard({ job, onApply }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-border hover:border-primary/50 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription>{job.department}</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              {job.type}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {job.location}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Banknote className="h-3 w-3" />
              {job.salary}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-muted-foreground">
            {isExpanded ? job.description : `${job.description.substring(0, 150)}...`}
          </p>
          
          {isExpanded && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
          
          <Button 
            variant="link" 
            className="px-0 h-auto text-sm text-primary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </Button>
        </div>
        
        <div className="flex justify-end">
          <Button onClick={onApply}>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}

const jobs = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    department: "Development",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We're looking for an experienced Full-Stack Developer to join our team and work on exciting client projects. As a Senior Developer, you'll be responsible for designing, developing, and maintaining web applications using modern technologies and best practices.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and collaboration skills"
    ]
  },
  {
    id: "2",
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco / Hybrid",
    type: "Full-time",
    salary: "$90k - $120k",
    description: "We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our clients' digital products. In this role, you'll work closely with our development and strategy teams to design user-centered experiences that meet business objectives and delight users.",
    requirements: [
      "3+ years of experience in UX/UI design for digital products",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating your design process and solutions",
      "Experience with user research and usability testing",
      "Excellent visual design skills and attention to detail"
    ]
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "We're looking for a DevOps Engineer to help us build and maintain scalable, reliable infrastructure for our client projects. In this role, you'll be responsible for implementing CI/CD pipelines, managing cloud resources, and ensuring the security and performance of our systems.",
    requirements: [
      "3+ years of experience in DevOps or Site Reliability Engineering",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with containerization (Docker) and orchestration (Kubernetes)",
      "Proficiency in infrastructure as code (Terraform, CloudFormation)",
      "Strong scripting skills (Bash, Python, or similar)"
    ]
  },
  {
    id: "4",
    title: "Project Manager",
    department: "Management",
    location: "San Francisco / Hybrid",
    type: "Full-time",
    salary: "$90k - $120k",
    description: "We're seeking an experienced Project Manager to oversee the successful delivery of our client projects. In this role, you'll be responsible for planning, executing, and closing projects on time and within budget, while maintaining high client satisfaction.",
    requirements: [
      "3+ years of experience in project management, preferably in IT or software development",
      "Familiarity with agile methodologies (Scrum, Kanban)",
      "Strong communication and leadership skills",
      "Experience with project management tools (Jira, Asana, or similar)",
      "PMP certification is a plus"
    ]
  }
];