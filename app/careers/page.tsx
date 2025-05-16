import { JobListings } from '@/components/careers/job-listings';
import { PageHeader } from '@/components/layout/page-header';
import { WhyJoinUs } from '@/components/careers/why-join-us';

export const metadata = {
  title: 'Careers | AFK Byte',
  description: 'Explore career opportunities at AFK Byte',
};

export default function CareersPage() {
  return (
    <>
      <PageHeader 
        title="Careers" 
        description="Join our team of passionate tech experts and grow your career in a supportive and innovative environment."
      />
      <WhyJoinUs />
      <JobListings />
    </>
  );
}