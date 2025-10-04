import { Card } from '@/components/ui/card';
import { CtaButton } from './CtaButton';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export function FinalCta() {
    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <AnimateOnScroll animationClassName="animate-in fade-in zoom-in-95 duration-700">
                    <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-2xl bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground overflow-hidden">
                        <div className="relative z-10 text-center">
                            <h2 className="font-headline text-3xl md:text-5xl font-bold">
                                Garanta seu Acesso Imediato ao Kit Completo
                            </h2>
                            <p className="mt-4 text-2xl text-primary-foreground/80 line-through">
                                De <span className="font-bold">R$297</span> por apenas
                            </p>
                            <div className="my-6">
                                <p className="text-5xl md:text-7xl font-bold text-accent">12x de R$9,74</p>
                                <p className="mt-2 text-xl font-medium text-primary-foreground/90">ou R$97 à vista</p>
                            </div>
                            <CtaButton className="w-full md:w-auto" />
                            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                    <span>Compra 100% segura</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-green-400" />
                                    <span>7 Dias de Garantia Incondicional</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
