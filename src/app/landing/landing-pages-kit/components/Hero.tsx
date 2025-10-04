import { Rocket } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { BlurFade } from './BlurFade';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-primary via-indigo-900 to-black">
       <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-wave-pattern bg-repeat-x animate-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-wave-pattern bg-repeat-x animate-wave-delay opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
            <BlurFade delay={0.2} yOffset={10}>
                <Rocket className="h-12 w-12 text-accent mx-auto" />
            </BlurFade>
            <BlurFade delay={0.3} yOffset={20}>
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary-foreground leading-tight mt-4 max-w-4xl mx-auto">
                    +2.000 Landing Pages Prontas para Vender Todos os Dias
                </h1>
            </BlurFade>
            <BlurFade delay={0.4} yOffset={20}>
                <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                    Crie páginas de alta conversão em minutos, sem precisar de designers ou programadores. Acelere seus resultados e economize tempo e dinheiro.
                </p>
            </BlurFade>
            <BlurFade delay={0.5} yOffset={20}>
                <div className="mt-10">
                <CtaButton />
                </div>
            </BlurFade>
        </div>
      </div>
    </section>
  );
}
