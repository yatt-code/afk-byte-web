import { cn } from '@/lib/utils';

export function ClientLogos() {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <p className="text-center text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className={cn(
                "text-muted-foreground/70 hover:text-blue-600 transition-colors",
                "h-8 flex items-center"
              )}
            >
              <span className="text-xl font-bold">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const clients = [
  "TechCorp",
  "GlobalSystems",
  "InnovateX",
  "DataFlow",
  "NexusAI",
  "QuantumTech",
];