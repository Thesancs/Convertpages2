import { Clock, TrendingUp, PenSquare, Paintbrush2 } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const benefits = [
  { icon: Clock, title: 'Economia de Tempo', description: 'Lance suas páginas em minutos, não em semanas.' },
  { icon: TrendingUp, title: 'Alta Conversão', description: 'Modelos otimizados para transformar visitantes em clientes.' },
  { icon: PenSquare, title: 'Fácil de Editar', description: 'Personalize tudo com poucos cliques, sem código.' },
  { icon: Paintbrush2, title: 'Designs Profissionais', description: 'Aparência premium que gera confiança e autoridade.' }
];

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll
              key={index}
              animationClassName="animate-in fade-in slide-in-from-bottom-5"
              delay={index * 150}
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
