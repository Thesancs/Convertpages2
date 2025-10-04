import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from './BlurFade';

const bonusList = [
    { 
      id: 'bonus-canva', 
      title: '+100 Páginas de Vendas no Canva', 
      description: 'Facilidade de edição e rapidez na publicação da sua página de vendas, sem a necessidade de uma hospedagem ou domínio.',
      value: 'R$97,00'
    },
    { 
      id: 'bonus-whatsapp', 
      title: 'Método Venda Todos os Dias pelo Whatsapp', 
      description: 'Um método validado de vendas através da maior ferramenta de comunicação do mundo.',
      value: 'R$147,00'
    },
    { 
      id: 'bonus-plugins', 
      title: 'Elementor Pro e Wp Rocket', 
      description: 'Plugins premium para você deixar o seu site muito mais bonito com widgets únicos, e deixar otimizado carregando abaixo de 1,5 segundos.',
      value: 'R$97,00'
    },
    { 
      id: 'bonus-scripts', 
      title: 'Segredo das Vendas Online', 
      description: 'Pack com 9 scripts para você copiar e colar na sua página e aumentar pelo menos em 3x as vendas.',
      value: 'R$77,00'
    },
    { 
      id: 'bonus-sites', 
      title: 'Modelos de Sites Profissionais', 
      description: 'Use nos sites profissionais para mostrar para potenciais clientes, são sites para várias profissões.',
      value: 'R$87,00'
    },
    { 
      id: 'bonus-artes', 
      title: 'Pack com 1.000 Artes Prontas e Editáveis no Canva', 
      description: 'Tenha acesso ao nosso pack de imagens editáveis no canva para anúncios, banners, ou posts no instagram.',
      value: 'R$47,00'
    },
    { 
      id: 'bonus-cursos', 
      title: 'Cursos Completos', 
      description: 'Aprenda a criar páginas de vendas do zero, criar artes para páginas de vendas, e domine o tráfego pago para aumentar suas vendas.',
      value: 'IMENSURÁVEL'
    },
];

export function Bonuses() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <BlurFade delay={0.2} yOffset={20} className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">
            E ainda... Leve Bônus Exclusivos!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprando hoje, você garante acesso gratuito a ferramentas que vão acelerar ainda mais seus resultados.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonusList.map((bonus, index) => (
              <BlurFade
                key={bonus.id}
                delay={0.3 + index * 0.1}
                yOffset={20}
                className="h-full"
              >
                <Card
                  className="overflow-hidden h-full flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground"
                >
                  <CardHeader>
                    <Badge className="bg-accent text-accent-foreground mb-2 w-fit">BÔNUS #{index + 2}</Badge>
                    <CardTitle className="font-headline text-xl text-primary-foreground">{bonus.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-primary-foreground/80">{bonus.description}</p>
                    <p className="mt-4 font-bold text-primary-foreground">
                      VALOR: <span className={bonus.value === 'IMENSURÁVEL' ? 'text-accent' : ''}>{bonus.value}</span>
                    </p>
                  </CardContent>
                   <CardFooter>
                    <Badge variant="outline" className="border-accent text-accent bg-accent/10 w-fit">
                      BÔNUS EXCLUSIVO DA OFERTA PREMIUM
                    </Badge>
                  </CardFooter>
                </Card>
              </BlurFade>
            ))}
        </div>
      </div>
    </section>
  );
}
