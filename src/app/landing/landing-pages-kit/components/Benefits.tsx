import { Clock, TrendingUp, PenSquare, Paintbrush2 } from 'lucide-react';
import { BlurFade } from './BlurFade';

const benefits = [
  { icon: Clock, title: 'Economia de Tempo', description: 'Lance suas páginas em minutos, não em semanas.' },
  { icon: TrendingUp, title: 'Alta Conversão', description: 'Modelos otimizados para transformar visitantes em clientes.' },
  { icon: PenSquare, title: 'Fácil de Editar', description: 'Personalize tudo com poucos cliques, sem código.' },
  { icon: Paintbrush2, title: 'Designs Profissionais', description: 'Aparência premium que gera confiança e autoridade.' }
];

export function Benefits() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.2} yOffset={20} className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                Benefícios Imediatos
            </h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BlurFade
              key={index}
              delay={0.2 + index * 0.15}
              yOffset={20}
            >
              <div
                className="text-center h-full p-6 bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-semibold text-primary-foreground">{benefit.title}</h3>
                <p className="mt-2 text-primary-foreground/80">{benefit.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
