import { TestimonialsSection } from "@/components/TestimonialsSection";

const testimonials = [
  {
    author: { name: "Marcos Almeida", title: "Assinante desde 2023" },
    text: "A seleção chega e você percebe que alguém realmente pensou por você.",
  },
  {
    author: { name: "Patrícia Nogueira", title: "Sommelier amadora" },
    text: "Nunca mais errei vinho com carne.",
  },
  {
    author: { name: "Rafael Santos", title: "Churrasqueiro de fim de semana" },
    text: "Virou ritual aqui em casa.",
  },
  {
    author: { name: "Bruna Carvalho", title: "Casal anfitrião" },
    text: "Qualidade constante. A confiança não tem preço.",
  },
  {
    author: { name: "Eduardo Lima", title: "Amante de dry aged" },
    text: "Os cortes chegam perfeitos. Textura e sabor acima da média.",
  },
  {
    author: { name: "Fernanda Rocha", title: "Clube há 6 meses" },
    text: "Economizei tempo e acertei mais. Zero ansiedade na escolha.",
  },
  {
    author: { name: "Gustavo Barros", title: "Pai de dois" },
    text: "Transforma um jantar comum em momento especial.",
  },
  {
    author: { name: "Bianca Silva", title: "Recebe amigos toda semana" },
    text: "Curadoria impecável. Os convidados sempre perguntam onde comprei.",
  },
  {
    author: { name: "João Pedro", title: "Aprendiz de parrilla" },
    text: "Combinações de vinho são certeiras. Aprendi muito com o clube.",
  },
];

const ProvaSocial = () => {
  return (
    <section id="prova-social" className="py-24 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-10 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            O que diz os mestres do churrasco
          </span>
        </div>
        <TestimonialsSection
          className="bg-transparent py-0"
          title="Quem faz parte, não compara. Reconhece."
          description="Depoimentos reais, da experiência à mesa."
          testimonials={testimonials}
        />
      </div>
    </section>
  );
};

export default ProvaSocial;
