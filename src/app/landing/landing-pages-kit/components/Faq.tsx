import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: "Como vou receber o acesso?", a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar e baixar as landing pages." },
  { q: "Preciso de alguma ferramenta específica?", a: "As páginas são compatíveis com os principais construtores de sites do mercado (Elementor, ClickFunnels, etc.). Você só precisa de uma plataforma que permita importar modelos." },
  { q: "Tenho garantia?", a: "Sim! Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso e devolveremos 100% do seu dinheiro." },
  { q: "Terei suporte se tiver dúvidas?", a: "Com certeza. Nossa equipe de suporte premium está à disposição para te ajudar com qualquer dúvida sobre o uso dos materiais." },
  { q: "As atualizações são pagas?", a: "Não. Ao adquirir o kit, você tem direito a todas as futuras atualizações de novos modelos sem nenhum custo adicional. O acesso é vitalício." },
];

export function Faq() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-gradient-to-br from-primary via-indigo-900 to-black text-primary-foreground rounded-lg mb-2 px-6">
              <AccordionTrigger className="text-lg font-semibold text-left text-primary-foreground hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-base text-primary-foreground/80">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
