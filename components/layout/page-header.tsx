import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-muted py-12 md:py-20", className)}>
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground max-w-3xl text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
}