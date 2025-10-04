import { Clock, TrendingUp, PenSquare, Paintbrush2 } from 'lucide-react';

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
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
