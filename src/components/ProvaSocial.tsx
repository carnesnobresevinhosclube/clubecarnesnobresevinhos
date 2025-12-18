import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const depoimentos = [
  "A seleção chega e você percebe que alguém realmente pensou por você.",
  "Nunca mais errei vinho com carne.",
  "Virou ritual aqui em casa.",
];

const ProvaSocial = () => {
  return (
    <section id="prova-social" className="py-24 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Prova Social
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quem faz parte, não compara. Reconhece.</h2>
          <p className="text-muted-foreground">Depoimentos reais, da experiência à mesa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {depoimentos.map((texto, i) => (
            <Card key={i} className="p-8 bg-card/50 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: `${i * 120}ms` }}>
              <Quote className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
              <p className="text-lg leading-relaxed">“{texto}”</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;

