import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonusList = [
    { id: 'bonus-creatives', title: 'Pack de Criativos para Anúncios', description: 'Modelos de imagens e vídeos prontos para suas campanhas.'},
    { id: 'bonus-copywriting', title: 'Guia de Copywriting', description: 'Aprenda a escrever textos que vendem para suas páginas.'},
    { id: 'bonus-community', title: 'Acesso à Comunidade Exclusiva', description: 'Troque experiências e faça networking com outros empreendedores.'},
];

export function Bonuses() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            E ainda... Leve 3 Bônus Exclusivos!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprando hoje, você garante acesso gratuito a ferramentas que vão acelerar ainda mais seus resultados.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {bonusList.map((bonus, index) => {
            const image = PlaceHolderImages.find(p => p.id === bonus.id);
            return (
              <Card
                key={index}
                className="overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${150 + index * 150}ms`, animationFillMode: 'backwards' }}
              >
                {image && <Image src={image.imageUrl} alt={image.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={image.imageHint} />}
                <CardHeader>
                  <Badge className="bg-accent text-accent-foreground mb-2 w-fit">BÔNUS #{index + 1}</Badge>
                  <CardTitle className="font-headline text-xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
