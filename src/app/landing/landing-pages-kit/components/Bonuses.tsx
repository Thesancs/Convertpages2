import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateOnScroll } from './AnimateOnScroll';

const bonusList = [
    { id: 'bonus-creatives', title: 'Pack de Criativos para Anúncios', description: 'Modelos de imagens e vídeos prontos para suas campanhas.'},
    { id: 'bonus-copywriting', title: 'Guia de Copywriting', description: 'Aprenda a escrever textos que vendem para suas páginas.'},
    { id: 'bonus-community', title: 'Acesso à Comunidade Exclusiva', description: 'Troque experiências e faça networking com outros empreendedores.'},
];

export function Bonuses() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animationClassName="animate-in fade-in slide-in-from-bottom-5 duration-500" className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            E ainda... Leve 3 Bônus Exclusivos!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprando hoje, você garante acesso gratuito a ferramentas que vão acelerar ainda mais seus resultados.
          </p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {bonusList.map((bonus, index) => {
            const image = PlaceHolderImages.find(p => p.id === bonus.id);
            return (
              <AnimateOnScroll
                key={index}
                animationClassName="animate-in fade-in zoom-in-95"
                delay={150 + index * 150}
              >
                <Card
                  className="overflow-hidden h-full shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground"
                >
                  {image && <Image src={image.imageUrl} alt={image.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={image.imageHint} />}
                  <CardHeader>
                    <Badge className="bg-accent text-accent-foreground mb-2 w-fit">BÔNUS #{index + 1}</Badge>
                    <CardTitle className="font-headline text-xl text-primary-foreground">{bonus.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-foreground/80">{bonus.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
