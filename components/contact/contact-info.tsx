import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          Have a question or need assistance? Reach out to us using any of the methods below, and our team will get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard 
          icon={<MapPin className="h-5 w-5 text-primary" />}
          title="Our Location"
          details={[
            "Kenwingston Business Square",
            "Persiaran Bestari,",
            "63300 Cyberjaya,",
            "Malaysia"
          ]}
        />
        
        <InfoCard 
          icon={<Phone className="h-5 w-5 text-primary" />}
          title="Phone Number"
          details={[
            "+601113027040"
          ]}
        />
        
        <InfoCard 
          icon={<Mail className="h-5 w-5 text-primary" />}
          title="Email Address"
          details={[
            "info@afkbyte.com",
            "support@afkbyte.com"
          ]}
        />
        
        <InfoCard 
          icon={<Clock className="h-5 w-5 text-primary" />}
          title="Working Hours"
          details={[
            "Monday - Friday: 9am - 6pm",
            "Saturday: 10am - 4pm",
            "Sunday: Closed"
          ]}
        />
      </div>
      
      <div className="mt-8 rounded-lg overflow-hidden h-64 border border-border shadow-sm">
        {/* Replace with an actual Google Map iframe */}
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Google Map Placeholder</span>
        </div>
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

function InfoCard({ icon, title, details }: InfoCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="space-y-1 text-muted-foreground">
              {details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}