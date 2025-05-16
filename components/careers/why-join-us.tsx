import { Card, CardContent } from '@/components/ui/card';
import { Heart, TrendingUp, Users, Award, Coffee, Globe } from 'lucide-react';

export function WhyJoinUs() {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Join AFK Byte?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer more than just a job. Join our team and be part of an innovative, supportive, and growth-oriented environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <BenefitCard 
            icon={<TrendingUp className="h-8 w-8 text-blue-500" />}
            title="Professional Growth"
            description="Continuous learning opportunities, skill development programs, and career advancement paths."
          />
          <BenefitCard 
            icon={<Heart className="h-8 w-8 text-red-500" />}
            title="Comprehensive Benefits"
            description="Competitive salary, health insurance, retirement plans, and generous paid time off."
          />
          <BenefitCard 
            icon={<Users className="h-8 w-8 text-green-500" />}
            title="Inclusive Culture"
            description="A diverse, collaborative, and supportive work environment where everyone's voice is heard."
          />
          <BenefitCard 
            icon={<Award className="h-8 w-8 text-purple-500" />}
            title="Challenging Projects"
            description="Work on innovative, impactful projects for clients across various industries."
          />
          <BenefitCard 
            icon={<Coffee className="h-8 w-8 text-orange-500" />}
            title="Work-Life Balance"
            description="Flexible working hours, remote options, and respect for personal time."
          />
          <BenefitCard 
            icon={<Globe className="h-8 w-8 text-cyan-500" />}
            title="Make an Impact"
            description="Contribute to projects that transform businesses and create positive change."
          />
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}