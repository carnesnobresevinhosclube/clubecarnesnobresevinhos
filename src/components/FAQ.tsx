import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">FAQ</h2>
          <p className="text-muted-foreground mt-2">Respostas curtas, seguras e elegantes.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Posso pausar ou cancelar?</AccordionTrigger>
              <AccordionContent>
                Sim. Você pode pausar ou cancelar a qualquer momento diretamente pelo atendimento. Sem multas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Como funciona a entrega refrigerada?</AccordionTrigger>
              <AccordionContent>
                Logística com controle de temperatura do início ao fim, embalagem térmica e rastreamento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Posso trocar algum item?</AccordionTrigger>
              <AccordionContent>
                Em casos específicos, oferecemos alternativas. Fale com o time e vamos ajustar para você.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>As seleções se repetem?</AccordionTrigger>
              <AccordionContent>
                Não. A curadoria busca variedade e evolução da experiência mês a mês.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Onde vocês entregam?</AccordionTrigger>
              <AccordionContent>
                Atendemos regiões com estrutura refrigerada homologada. Consulte disponibilidade no atendimento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

