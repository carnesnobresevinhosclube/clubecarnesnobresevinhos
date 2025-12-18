import { Card } from "@/components/ui/card";
import { Wine, Truck, Gift, ChefHat, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: ChefHat,
    title: "Carnes nobres selecionadas",
    description:
      "Cortes especiais, marmoreio, procedência e padrão que você reconhece no primeiro corte.",
  },
  {
    icon: Wine,
    title: "Vinhos escolhidos por especialistas",
    description:
      "Rótulos que conversam com as carnes — não apostas aleatórias.",
  },
  {
    icon: Gift,
    title: "Experiência mensal exclusiva",
    description:
      "Brindes, conteúdos e seleções que não são vendidas separadamente.",
  },
  {
    icon: ShieldCheck,
    title: "Acesso limitado",
    description:
      "Não abrimos vagas o tempo todo. Clube fechado mantém padrão.",
  },
  {
    icon: Truck,
    title: "Autoridade na mesa",
    description:
      "Você serve, explica, harmoniza — e impressiona sem esforço.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Vantagens Exclusivas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefícios em nível premium
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pensados para transformar cada refeição em uma experiência memorável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border/50 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
