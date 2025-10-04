import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { BlurFade } from './BlurFade';

const audience = [
  "Afiliados", "Produtores Digitais", "Lançadores",
  "Agências e Freelancers", "Donos de E-commerce", "Profissionais Liberais"
];

export function TargetAudience() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.1} className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
              Para Quem é o LandingPro Kit?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Se você quer vender mais pela internet, de forma mais rápida e profissional, este kit é para você.
            </p>
        </BlurFade>
        <BlurFade delay={0.2} className="flex flex-wrap justify-center gap-4">
          {audience.map((item, index) => (
            <Badge key={index} variant="outline" className="text-base md:text-lg py-2 px-6 rounded-full border-primary/50 text-primary font-medium bg-primary/5">
              {item}
            </Badge>
          ))}
        </BlurFade>
         <BlurFade delay={0.4} className="text-center mt-16">
          <CtaButton />
        </BlurFade>
      </div>
    </section>
  );
}
