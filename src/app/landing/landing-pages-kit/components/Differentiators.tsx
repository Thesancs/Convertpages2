import { Card } from '@/components/ui/card';
import { Target, Edit3, Smartphone } from 'lucide-react';

const diffs = [
  { icon: Target, title: 'Foco em Conversão', description: 'Cada elemento é pensado para maximizar seus resultados financeiros.' },
  { icon: Edit3, title: '100% Editáveis', description: 'Altere cores, textos e imagens facilmente para alinhar com sua marca.' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Experiência perfeita em qualquer dispositivo, do celular ao desktop.' },
];

export function Differentiators() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Diferenciais que Colocam Você na Frente
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {diffs.map((d, i) => (
            <Card
              key={i}
              className="p-8 text-center shadow-md animate-in fade-in zoom-in-95 bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground"
              style={{ animationDelay: `${150 + i * 150}ms`, animationFillMode: 'backwards' }}
            >
                <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <d.icon className="h-8 w-8 text-accent" />
                    </div>
                </div>
                <h3 className="text-xl font-headline font-semibold text-primary-foreground">{d.title}</h3>
                <p className="mt-2 text-primary-foreground/80">{d.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
