import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const premiumFeatures = [
    { text: "Acesso Completo as Páginas de Vendas", price: "97" },
    { text: "+3.500 Páginas de Vendas de Alta Conversão", price: "147" },
    { text: "+90 Landing Pages Premium", price: "67" },
    { text: "Páginas de Low Ticket, VSL, Perpétuo", price: "37" },
    { text: "Páginas de Captura, Obrigado e Advertorial", price: "37" },
    { text: "Páginas de Downsell, Upgrade e Pressel", price: "37" },
    { text: "+100 Páginas de Vendas Editáveis no Canva", price: "67" },
    { text: "Plug-ins Premium para você Montar o seu Site Profissional", price: "47" },
    { text: "Curso Páginas de Alta Conversão Completo", price: "67" },
    { text: "Venda todos os Dias pelo Whatsapp", price: "27" },
    { text: "Elementor Pro e Wp Rocket", price: "27" },
    { text: "Segredo das Vendas Online", price: "17" },
    { text: "Novas Páginas atualizações mensais", price: "37" },
    { text: "Páginas Exclusivas prontas e totalmente editáveis", price: "27" },
    { text: "37 Modelos de Sites Profissionais", price: "67" },
    { text: "Como Instalar Píxel nas suas Páginas de Vendas", price: "27" },
    { text: "Pack com 1.000 Artes Prontas e Editáveis no Canva", price: "37" },
    { text: "Scripts com Gatilhos Mentais", price: "17" },
    { text: "Curso: Como criar Páginas do Zero", price: "37" },
    { text: "Curso Criando Artes para Páginas de Vendas e criativos", price: "37" },
    { text: "Curso Como fazer vendas através do Tráfego Pago", price: "47" },
];

export default function UpsellPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-accent mb-2">Oferta Premium com desconto especial liberado!</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground tracking-tight">
          Espere! <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-accent">Desconto ESPECIAL</span> NA OFERTA PREMIUM!
        </h2>
      </div>

      <Card className="w-full max-w-4xl bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground border-border/50 shadow-lg mb-8">
        <CardContent className="p-6 md:p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {premiumFeatures.map((feature, index) => (
              <li key={index} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>{feature.text}</span>
                </span>
                <span className="line-through text-red-400/80 font-mono">R${feature.price}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="text-center bg-card/50 border border-border rounded-xl p-6 md:p-8 max-w-2xl w-full">
        <p className="text-lg font-semibold text-muted-foreground">Oferta Premium com preço exclusivo somente nessa página por apenas:</p>
        <p className="text-lg text-muted-foreground mt-4">de <span className="line-through">R$197</span> por apenas 3x de</p>
        <p className="text-7xl font-bold my-2 text-accent drop-shadow-lg [filter:drop-shadow(0_0_10px_hsl(var(--accent)/0.6))]">
          R$5,79!
        </p>
        <p className="text-xl font-medium text-primary-foreground">(ou R$15,90 à vista!)</p>
        
        <Button size="lg" className="mt-8 w-full max-w-md font-bold text-lg bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
          SIM! QUERO FAZER O UPGRADE!
        </Button>
        <Link href="#" className="block mt-4 text-muted-foreground hover:text-primary-foreground transition-colors">
          Não! Quero o Pacote Básico.
        </Link>
      </div>
    </div>
  );
}
