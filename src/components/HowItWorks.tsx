import { UserPlus, ShieldCheck, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Você entra para o clube",
    description:
      "Escolhe o plano que combina com seu estilo de consumo e recebe acesso ao clube privado.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Curadoria extrema",
    description:
      "Selecionamos carnes nobres de procedência controlada e vinhos que não estão na prateleira comum.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Entrega impecável",
    description:
      "Todos os meses, no endereço que você escolher, com logística refrigerada e cuidado absoluto.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Experiência completa",
    description:
      "Conteúdos, sugestões de preparo, harmonização e surpresas exclusivas.",
    icon: Sparkles,
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background relative overflow-hidden">
      {/* Gradiente decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/30 pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Processo Rigoroso, Experiência Simples
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como funciona o{" "}
            <span className="text-gradient-gold">Clube Carnes Nobres</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simples para você. Rigoroso para nós.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Linha conectora */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -z-10" />
              )}

              <div className="relative">
                {/* Número do passo */}
                <div className="text-7xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>

                {/* Ícone */}
                <div className="mb-6 relative">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur border border-border/50 flex items-center justify-center p-6 hover-lift">
                    <step.icon className="w-16 h-16 text-accent" aria-hidden="true" />
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
