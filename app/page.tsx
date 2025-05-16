import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { ClientLogos } from '@/components/home/client-logos';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CtaSection } from '@/components/home/cta-section';
import { StatsSection } from '@/components/home/stats-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <ClientLogos />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}