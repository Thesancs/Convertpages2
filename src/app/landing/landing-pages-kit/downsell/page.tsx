import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../components/Footer';

const downsellFeatures = [
    { text: "+90 Landing Pages Premium", price: "67" },
    { text: "Plug-ins Premium para você Montar o seu Site Profissional", price: "47" },
    { text: "Curso Páginas de Alta Conversão Completo", price: "67" },
    { text: "Venda todos os Dias pelo Whatsapp", price: "27" },
    { text: "Acesso por 6 Meses", price: null },
];

export default function DownsellPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center">
      <div className="w-full bg-gradient-to-r from-accent to-pink-500 text-white text-center py-2 font-bold uppercase tracking-wider [text-shadow:0_0_5px_rgba(255,255,255,0.7)]">
        Ops... As vagas para a <span className="">OFERTA BÁSICA</span> ACABARAM!
      </div>
      
      <div className="p-4 md:p-8 flex flex-col items-center w-full max-w-4xl flex-grow">
        
        <div className="text-center my-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500 uppercase">
            Você ganhou <span className="text-white [text-shadow:0_0_8px_rgba(255,255,255,0.7)]">um último desconto</span> para <br/> acessar a Oferta Premium mas com <span className="text-primary-foreground font-bold [text-shadow:0_0_8px_hsl(var(--accent)/0.7)]">menos bônus!</span>
          </h2>
        </div>

        <Card className="w-full max-w-3xl bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground border-border/50 shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-4">
              {downsellFeatures.map((feature, index) => (
                <li key={index} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature.text}</span>
                  </span>
                  {feature.price && (
                    <Badge variant="destructive" className="font-mono text-xs">
                        <span className="line-through">R${feature.price}</span>
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground rounded-xl p-6 md:p-8 max-w-2xl w-full border-border/50 shadow-lg">
          <p className="text-lg font-semibold text-primary-foreground">Oferta Premium com preço exclusivo somente nessa página</p>
          <p className="text-lg text-muted-foreground mt-4">de <span className="line-through">R$197</span> por apenas</p>
          <p className="text-6xl font-bold my-2 text-green-500 drop-shadow-lg [filter:drop-shadow(0_0_10px_rgba(34,197,94,0.6))]">
            5x de R$5,18
          </p>
          <p className="text-sm text-muted-foreground">(ou R$25,90 à vista!)</p>
          
          <Link href="https://pay.kiwify.com.br/5kshqc9">
            <Button size="lg" className="mt-8 w-full max-w-md font-bold text-lg bg-red-600 hover:bg-red-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              SIM! QUERO FAZER O UPGRADE!
            </Button>
          </Link>
          <Link href="/landing/landing-pages-kit/upsell" className="block mt-4 text-muted-foreground hover:text-primary-foreground transition-colors underline">
            Voltar para oferta anterior !
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
