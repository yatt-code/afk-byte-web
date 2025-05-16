import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, href, className }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className={cn(
        "h-full overflow-hidden transition-all duration-300 hover:shadow-lg",
        "border-border hover:border-primary/50",
        className
      )}>
        <CardHeader className="pb-2">
          <div className="mb-2">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">{description}</CardDescription>
          <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
            Learn more
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}