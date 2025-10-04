import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CtaButton } from './CtaButton';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-mockup');

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob dark:opacity-30"></div>
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 dark:opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-tight animate-in fade-in slide-in-from-top-4 duration-1000">
          +2.000 Landing Pages Prontas <br className="hidden md:block" /> para Vender Todos os Dias
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-top-6 duration-1000 delay-200">
          Crie páginas de alta conversão em minutos, sem precisar de designers ou programadores. Acelere seus resultados e economize tempo e dinheiro.
        </p>
        <div className="mt-10 animate-in fade-in slide-in-from-top-8 duration-1000 delay-400">
          <CtaButton />
        </div>
        {heroImage && (
          <div className="mt-12 md:mt-16 animate-in fade-in zoom-in-95 duration-1000 delay-600">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1200}
              height={800}
              className="rounded-xl shadow-2xl mx-auto ring-1 ring-border/10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        )}
      </div>
    </section>
  );
}
