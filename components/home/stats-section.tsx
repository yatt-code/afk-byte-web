import { Card, CardContent } from '@/components/ui/card';
import { Users, Server, Globe, Code } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Users className="h-8 w-8 text-blue-500" />}
            value="50+"
            label="Happy Clients"
            description="Trusted by businesses worldwide"
          />
          <StatCard
            icon={<Server className="h-8 w-8 text-purple-500" />}
            value="100+"
            label="Projects Completed"
            description="Delivering excellence since 2015"
          />
          <StatCard
            icon={<Globe className="h-8 w-8 text-green-500" />}
            value="12+"
            label="Countries Served"
            description="Working with global businesses"
          />
          <StatCard
            icon={<Code className="h-8 w-8 text-orange-500" />}
            value="20+"
            label="Tech Experts"
            description="Passionate about technology"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

function StatCard({ icon, value, label, description }: StatCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="pt-6 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-1">{value}</h3>
        <p className="font-medium mb-2">{label}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}