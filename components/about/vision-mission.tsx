import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Award, Heart } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-none shadow-md">
            <CardHeader>
              <div className="mb-2">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
              <CardDescription>Where we're headed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the most trusted technology partner for businesses seeking digital transformation, known for our innovative solutions, technical excellence, and unwavering commitment to client success.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader>
              <div className="mb-2">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription>What we do every day</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower businesses with tailored technology solutions that solve complex challenges, drive growth, and create lasting value, delivered by a team passionate about excellence and innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do and define who we are as a company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard 
            icon={<Award className="h-8 w-8 text-blue-500" />}
            title="Excellence" 
            description="We consistently deliver high-quality solutions that exceed expectations and drive real results." 
          />
          <ValueCard 
            icon={<Heart className="h-8 w-8 text-red-500" />}
            title="Client Focus" 
            description="We put our clients at the center of everything we do, building long-term relationships based on trust and mutual success." 
          />
          <ValueCard 
            icon={<Target className="h-8 w-8 text-green-500" />}
            title="Innovation" 
            description="We embrace creative thinking and cutting-edge technologies to solve complex challenges in unique ways." 
          />
          <ValueCard 
            icon={<CheckCircle className="h-8 w-8 text-purple-500" />}
            title="Integrity" 
            description="We operate with transparency, honesty, and accountability in all our interactions and decisions." 
          />
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}