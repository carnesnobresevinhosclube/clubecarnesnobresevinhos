import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "249",
    description: "Para quem quer elevar o padrão do dia a dia.",
    features: [
      "Seleção mensal de carnes nobres",
      "1 rótulo harmonizado",
      "Conteúdos e sugestões de preparo",
      "Entrega refrigerada",
    ],
    highlighted: false,
  },
  {
    name: "Experiência Suprema",
    price: "749",
    description: "Para quem transforma encontros em memória.",
    features: [
      "Seleção ampliada com cortes exclusivos",
      "2–3 vinhos de alta curadoria",
      "Brindes e surpresas mensais",
      "Acesso limitado e atendimento dedicado",
    ],
    highlighted: true,
    badge: "Mais desejado",
  },
];

const Pricing = () => {
  const handleSubscribe = (planName: string) => {
    // TODO: Implement subscription logic
    console.log(`Subscribing to ${planName}`);
  };

  return (
    <section id="planos" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Planos de Assinatura
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha o seu nível de experiência.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Valores ancorados na experiência. Todos incluem logística refrigerada e liberdade para ajustar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 animate-fade-in ${
                plan.highlighted
                  ? "bg-gradient-to-b from-card to-card/50 border-2 border-accent/50 shadow-2xl scale-105"
                  : "bg-card/50 backdrop-blur border-border/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-6 py-2 bg-gradient-to-r from-accent to-yellow-500 text-accent-foreground font-bold text-sm rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">R$</span>
                  <span className="text-6xl font-bold text-gradient-gold">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "gold" : "premium"}
                size="lg"
                className="w-full"
                onClick={() => handleSubscribe(plan.name)}
              >
                Assinar {plan.name}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Dúvidas sobre qual plano escolher?{" "}
            <a 
              href="https://api.whatsapp.com/send?phone=5511980211873" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
