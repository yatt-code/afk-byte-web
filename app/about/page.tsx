import { CompanyStory } from '@/components/about/company-story';
import { TeamSection } from '@/components/about/team-section';
import { VisionMission } from '@/components/about/vision-mission';
import { PageHeader } from '@/components/layout/page-header';

export const metadata = {
  title: 'About Us | AFK Byte',
  description: 'Learn about AFK Byte, our story, our team, and our mission',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Learn about our journey, our team, and our mission to help businesses succeed through technology."
      />
      <CompanyStory />
      <VisionMission />
      <TeamSection />
    </>
  );
}