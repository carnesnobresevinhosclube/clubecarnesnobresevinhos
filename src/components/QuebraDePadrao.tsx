import { Card } from "@/components/ui/card";

const QuebraDePadrao = () => {
  return (
    <section id="quebra-de-padrao" className="py-24 bg-gradient-to-b from-card/30 via-transparent to-card/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="container px-4 relative z-10">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem à esquerda, sem caixa */}
            <div className="order-1 lg:order-none">
              <img
                src="/logo-carnes-nobres-e-vinhos-2024-boutique-imagem.png"
                alt="Seleção premium de carnes e vinhos — imagem de referência"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover animate-float"
              />
            </div>

            {/* Texto à direita */}
            <Card className="p-10 bg-card/50 backdrop-blur border-border/50 rounded-3xl shadow-2xl">
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-muted-foreground">
                <p>
                  Você pode continuar comprando carne no mercado.
                </p>
                <p>
                  Pode continuar escolhendo vinho pela etiqueta bonita.
                </p>
                <p>
                  Ou pode viver a tranquilidade de saber que todo mês vai chegar algo impecável na sua porta — sem erro, sem dúvida, sem arrependimento.
                </p>
                <p className="text-foreground font-bold">Isso não é praticidade. É privilégio.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuebraDePadrao;
