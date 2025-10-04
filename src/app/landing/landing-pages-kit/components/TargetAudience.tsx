import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import { CtaButton } from './CtaButton';

const audience = [
  "Afiliados", "Produtores Digitais", "Lançadores",
  "Agências e Freelancers", "Donos de E-commerce", "Profissionais Liberais"
];

export function TargetAudience() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
              Para Quem é o LandingPro Kit?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Se você quer vender mais pela internet, de forma mais rápida e profissional, este kit é para você.
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in duration-500 delay-200">
          {audience.map((item, index) => (
            <Badge key={index} variant="outline" className="text-base md:text-lg py-2 px-6 rounded-full border-primary/50 text-primary font-medium bg-primary/5">
              {item}
            </Badge>
          ))}
        </div>
         <div className="text-center mt-16 animate-in fade-in duration-500 delay-400">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
