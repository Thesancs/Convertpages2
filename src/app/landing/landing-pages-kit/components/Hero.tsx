import { Rocket } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { AnimateOnScroll } from './AnimateOnScroll';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-mockup');

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-primary via-indigo-900 to-black">
       <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-wave-pattern bg-repeat-x animate-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-wave-pattern bg-repeat-x animate-wave-delay opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
            <AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-top-4 duration-1000">
                <Rocket className="h-12 w-12 text-accent mx-auto md:mx-0" />
            </AnimateOnScroll>
            <AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-top-5 duration-1000" delay={150}>
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary-foreground leading-tight mt-4">
                    +2.000 Landing Pages Prontas para Vender Todos os Dias
                </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-top-6 duration-1000" delay={300}>
                <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-primary-foreground/80">
                    Crie páginas de alta conversão em minutos, sem precisar de designers ou programadores. Acelere seus resultados e economize tempo e dinheiro.
                </p>
            </AnimateOnScroll>
            <AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-top-8 duration-1000" delay={450}>
                <div className="mt-10">
                <CtaButton />
                </div>
            </AnimateOnScroll>
        </div>
        <AnimateOnScroll animationClassName="animate-in fade-in zoom-in-95 duration-1000" delay={600} className="hidden md:block">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                width={800}
                height={600}
                className="rounded-xl shadow-2xl ring-1 ring-border/10 transform-gpu"
                data-ai-hint={heroImage.imageHint}
              />
            )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
