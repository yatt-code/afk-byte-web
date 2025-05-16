import { ProjectsGrid } from '@/components/projects/projects-grid';
import { PageHeader } from '@/components/layout/page-header';

export const metadata = {
  title: 'Projects | AFK Byte',
  description: 'View our portfolio of successful IT projects and case studies',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader 
        title="Our Projects" 
        description="Explore our portfolio of successful projects and see how we've helped businesses achieve their goals."
      />
      <ProjectsGrid />
    </>
  );
}