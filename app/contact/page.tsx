import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { PageHeader } from '@/components/layout/page-header';

export const metadata = {
  title: 'Contact Us | AFK Byte',
  description: 'Get in touch with AFK Byte for your IT consultancy needs',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Have a project in mind or need IT consultancy? Get in touch with our team."
      />
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}