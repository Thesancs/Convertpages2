import { Users } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { BlurFade } from './BlurFade';
import { GlowingBadge } from './GlowingBadge';
import { GlowingIcon } from './GlowingIcon';

const audience = [
  "Afiliados", "Produtores Digitais", "Lançadores",
  "Agências e Freelancers", "Donos de E-commerce", "Profissionais Liberais"
];

export function TargetAudience() {
  return (
    <section className="py-8 md:py-12 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.2} yOffset={20} className="text-center mb-12">
            <GlowingIcon>
              <Users className="h-8 w-8" />
            </GlowingIcon>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">
              Para quem é o Convert Pages Kig 2k?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Se você quer vender mais pela internet, de forma mais rápida e profissional, este kit é para você.
            </p>
        </BlurFade>
        <div className="flex flex-wrap justify-center gap-4">
          {audience.map((item, index) => (
             <BlurFade
                key={index}
                delay={0.3 + index * 0.1}
                yOffset={10}
              >
                <GlowingBadge>{item}</GlowingBadge>
            </BlurFade>
          ))}
        </div>
         <BlurFade delay={0.5} yOffset={0} className="text-center mt-16">
          <CtaButton />
        </BlurFade>
      </div>
    </section>
  );
}
