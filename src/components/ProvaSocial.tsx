import { TestimonialsSection } from "@/components/TestimonialsSection";

const testimonials = [
  {
    author: { 
      name: "Marcos Almeida", 
      handle: "marcosalmeida", 
      title: "Assinante desde 2023", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-03.png" 
    },
    text: "A seleção chega e você percebe que alguém realmente pensou por você.",
    rating: 5,
  },
  {
    author: {
      name: "Patrícia Nogueira",
      handle: "patricianogueira",
      title: "Sommelier amadora",
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-02.png",
    },
    text: "Nunca mais errei vinho com carne.",
    rating: 5,
  },
  {
    author: { 
      name: "Rafael Santos", 
      handle: "rafaelsantos", 
      title: "Churrasqueiro de fim de semana", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-04.png" 
    },
    text: "Virou ritual aqui em casa.",
    rating: 5,
  },
  {
    author: { 
      name: "Bruna Carvalho", 
      handle: "brunacarvalho", 
      title: "Casal anfitrião", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-05.png" 
    },
    text: "Qualidade constante. A confiança não tem preço.",
    rating: 5,
  },
  {
    author: { 
      name: "Eduardo Lima", 
      handle: "eduardolima", 
      title: "Amante de dry aged", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-06.png" 
    },
    text: "Os cortes chegam perfeitos. Textura e sabor acima da média.",
    rating: 5,
  },
  {
    author: { 
      name: "Fernanda Rocha", 
      handle: "fernandarocha", 
      title: "Clube há 6 meses", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-01.png" 
    },
    text: "Economizei tempo e acertei mais. Zero ansiedade na escolha.",
    rating: 5,
  },
  {
    author: { 
      name: "Gustavo Barros", 
      handle: "gustavobarros", 
      title: "Pai de dois", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-07.png" 
    },
    text: "Transforma um jantar comum em momento especial.",
    rating: 5,
  },
  {
    author: { 
      name: "Bianca Silva", 
      handle: "biancasilva", 
      title: "Recebe amigos toda semana", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-08.png" 
    },
    text: "Curadoria impecável. Os convidados sempre perguntam onde comprei.",
    rating: 5,
  },
  {
    author: { 
      name: "João Pedro", 
      handle: "joaopedro", 
      title: "Aprendiz de parrilla", 
      avatarUrl: "/avatar-carnes-nobres-e-vinhos-09.png" 
    },
    text: "Combinações de vinho são certeiras. Aprendi muito com o clube.",
    rating: 5,
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
