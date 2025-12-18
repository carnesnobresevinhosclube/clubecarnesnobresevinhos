import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const paraQuem = [
  "Valoriza qualidade real",
  "Recebe pessoas em casa",
  "Gosta de experiências gastronômicas",
  "Quer praticidade sem abrir mão do luxo",
];

const naoParaQuem = [
  "Compra só por preço",
  "Não liga para procedência",
  "Quer escolher tudo sozinho",
];

const ParaQuem = () => {
  return (
    <section id="para-quem" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Para quem é / não é
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Se é para você, você sabe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">É para quem:</h3>
            <ul className="space-y-4">
              {paraQuem.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: "120ms" }}>
            <h3 className="text-2xl font-bold mb-6">Não é para quem:</h3>
            <ul className="space-y-4">
              {naoParaQuem.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6">E está tudo bem.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;

