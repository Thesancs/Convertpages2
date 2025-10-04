import { Card } from '@/components/ui/card';
import { Target, Edit3, Smartphone } from 'lucide-react';
import { BlurFade } from './BlurFade';

const diffs = [
  { icon: Target, title: 'Foco em Conversão', description: 'Cada elemento é pensado para maximizar seus resultados financeiros.' },
  { icon: Edit3, title: '100% Editáveis', description: 'Altere cores, textos e imagens facilmente para alinhar com sua marca.' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Experiência perfeita em qualquer dispositivo, do celular ao desktop.' },
];

export function Differentiators() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.2} yOffset={20} className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Diferenciais que Colocam Você na Frente
          </h2>
        </BlurFade>
        <div className="grid md:grid-cols-3 gap-8">
          {diffs.map((d, i) => (
            <BlurFade
              key={i}
              delay={0.3 + i * 0.15}
              yOffset={20}
            >
              <Card
                className="p-8 h-full text-center shadow-md bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground"
              >
                  <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                          <d.icon className="h-8 w-8 text-accent" />
                      </div>
                  </div>
                  <h3 className="text-xl font-headline font-semibold text-primary-foreground">{d.title}</h3>
                  <p className="mt-2 text-primary-foreground/80">{d.description}</p>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
