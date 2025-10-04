import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { CtaButton } from './CtaButton';

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


export function Pricing() {
    return (
        <section className="py-16 md:py-24 bg-secondary/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Plano Básico */}
                    <Card className="bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground p-6 rounded-2xl h-full flex flex-col justify-between w-full">
                        <div>
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">Plano Básico</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-400" /> Páginas de Vendas de Alta Conversão
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-400" /> Acesso por 6 Meses
                                    </li>
                                </ul>
                                <div className="text-center my-6">
                                    <p className="line-through text-muted-foreground">de R$97</p>
                                    <p className="text-4xl font-bold text-accent">por apenas R$5,90</p>
                                </div>
                            </CardContent>
                        </div>
                        <div className="px-6 pb-6">
                            <CtaButton className="w-full">QUERO O PLANO BÁSICO!</CtaButton>
                            <p className="text-center mt-4 text-sm text-muted-foreground">
                                Mas antes de comprar… temos uma oferta MAIS vantajosa para você! Veja abaixo...
                            </p>
                        </div>
                    </Card>

                    {/* Oferta Premium */}
                    <div className="relative w-full">
                        <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-white text-black font-bold border-2 border-accent shadow-lg px-4 py-1 text-sm">
                            MAIS VENDIDO
                        </Badge>
                        <Card className="bg-gradient-to-br from-accent/80 via-purple-700 to-indigo-900 text-primary-foreground p-6 rounded-2xl border-2 border-accent shadow-accent/20 shadow-2xl h-full flex flex-col justify-between">
                            <div>
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Oferta Premium</CardTitle>
                                    <div className="flex items-center gap-1 mt-2">
                                        {Array(5).fill(0).map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ul className="space-y-2 text-sm">
                                        {premiumFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-center justify-between gap-2">
                                                <span className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 text-green-300" /> {feature.text}
                                                </span>
                                                <span className="line-through text-red-400/90">R${feature.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-center my-6">
                                        <p className="line-through text-muted-foreground">de R$1007,00</p>
                                        <p className="text-lg">por apenas 5x de</p>
                                        <p className="text-5xl font-bold text-white">R$5,82</p>
                                        <p className="text-lg font-medium">(ou R$25,90 à vista!)</p>
                                    </div>
                                </CardContent>
                            </div>
                            <div className="px-6 pb-6">
                                 <CtaButton className="w-full text-lg">QUERO A OFERTA PREMIUM!</CtaButton>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
