import { AllServices } from '@/components/services/all-services';
import { PageHeader } from '@/components/layout/page-header';
import { ServiceProcess } from '@/components/services/service-process';

export const metadata = {
  title: 'Services | AFK Byte',
  description: 'IT consultancy services including web development, software development, and more',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Comprehensive IT solutions tailored to your business needs. From web development to cloud services, we've got you covered."
      />
      <AllServices />
      <ServiceProcess />
    </>
  );
}