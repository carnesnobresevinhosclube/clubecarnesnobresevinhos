import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
const heroImage = "/logo-carnes-nobres-e-vinhos-2024-boutique-bg.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Conteúdo */}
  <div className="container relative z-10 px-4 py-20">
    <div className="max-w-3xl animate-fade-in">
          <div className="mb-6">
            <img
              src="/logo-carnes-nobres-e-vinhos-clube.png"
              alt="Carnes Nobres & Vinhos — Clube"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            O <span className="font-extrabold text-accent">clube privado</span> de carnes nobres e vinhos para quem exige o melhor, <span className="font-extrabold text-accent">todos os meses</span>.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            Cortes premium e rótulos selecionados por especialistas, entregues na sua casa para transformar qualquer ocasião em um evento memorável.
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-10">
            Curadoria profissional • Quantidade limitada • Experiência gastronômica de alto padrão
          </p>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground font-medium">Curadoria extrema mensal</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground font-medium">Acesso limitado</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => scrollToSection("planos")}
              className="text-lg px-8 py-6 h-auto"
            >
              Quero fazer parte do clube
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("como-funciona")}
              className="text-lg px-8 py-6 h-auto border-accent/30 hover:bg-accent/10"
            >
              Como Funciona
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <button 
        onClick={() => scrollToSection("beneficios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </button>
    </section>
  );
};

export default Hero;
