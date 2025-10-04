import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';
import { CtaButton } from './CtaButton';

const features = [
  "+2.000 Modelos de Landing Pages",
  "Acesso a Todos os Nichos de Mercado",
  "Atualizações Mensais com Novos Modelos",
  "Suporte Premium para Tirar Dúvidas",
  "Bônus Exclusivos para Alavancar Suas Vendas",
];

export function WhatYouGet() {
  const image = PlaceHolderImages.find(p => p.id === 'what-you-get');

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            O que você vai receber?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Um arsenal completo para você construir ofertas irresistíveis e vender todos os dias.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-5 duration-700">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-in fade-in slide-in-from-right-5 duration-700">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={800}
                height={600}
                className="rounded-xl shadow-lg ring-1 ring-border/10"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </div>
        <div className="text-center mt-16 animate-in fade-in duration-500 delay-300">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
