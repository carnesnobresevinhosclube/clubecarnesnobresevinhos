import { Button } from "@/components/ui/button";

const CTAFinal = () => {
  const scrollToPlanos = () => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="cta-final" className="py-24 bg-gradient-to-b from-card/30 via-transparent to-card/30">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <p className="text-xl text-muted-foreground mb-4">O clube não cresce abrindo para todos. Cresce mantendo padrão.</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Se você entende isso, seu lugar é aqui.</h2>
          <Button variant="gold" size="lg" className="px-8 py-6 h-auto" onClick={scrollToPlanos}>
            Quero entrar para o Carnes Nobres & Vinhos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;

