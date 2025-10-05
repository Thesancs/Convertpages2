import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { BlurFade } from './BlurFade';

const testimonials = [
  {
    name: 'João Silva',
    role: 'Afiliado Profissional',
    avatar: '/avatars/joao.png',
    rating: 5,
    comment: 'As páginas são incrivelmente rápidas e a conversão aumentou em 30% desde que comecei a usar. É um divisor de águas!'
  },
  {
    name: 'Maria Oliveira',
    role: 'Produtora Digital',
    avatar: '/avatars/maria.png',
    rating: 5,
    comment: 'Economizei semanas de trabalho com esses modelos. O design é super profissional e fácil de customizar. Recomendo demais!'
  },
  {
    name: 'Carlos Martins',
    role: 'Dono de E-commerce',
    avatar: '/avatars/carlos.png',
    rating: 5,
    comment: 'Finalmente consegui ter uma página de vendas que parece ter custado uma fortuna, mas por uma fração do preço. Resultados imediatos!'
  }
];

export function Testimonials() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.2} yOffset={20} className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">
            O que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Veja como o Convert Pages 2k está transformando negócios.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <BlurFade
              key={index}
              delay={0.3 + index * 0.15}
              yOffset={20}
              className="h-full"
            >
              <Card
                className="h-full flex flex-col justify-between p-6 bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/80 italic">"{testimonial.comment}"</p>
                </CardContent>
                <div className="flex items-center mt-6">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
