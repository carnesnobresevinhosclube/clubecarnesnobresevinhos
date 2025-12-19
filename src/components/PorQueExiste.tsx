const PorQueExiste = () => {
  return (
    <section id="porque-existe" className="pt-24 pb-0 bg-background">
      <div className="container px-4">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
          <div className="relative w-full max-w-lg mx-auto h-full min-h-[220px] md:min-h-[260px] lg:min-h-[300px] flex items-end">
            <img
              src="/logo-carnes-nobres-e-vinhos-2024-boutique-imagem-mulher.png"
              alt="Mulher apreciando carne e vinho em ambiente sofisticado"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          </div>

          <div className="max-w-xl md:ml-auto animate-fade-in md:pb-4 flex flex-col justify-center">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Por que esse clube existe?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Curadoria acima de tudo</h2>
            <div className="space-y-4 text-lg md:text-xl text-muted-foreground">
              <p>Porque carne boa não é sorte. Vinho bom não é achado. É curadoria.</p>
              <p>
                Criamos o Carnes Nobres & Vinhos para pessoas que não aceitam mais perder tempo, dinheiro e expectativa com escolhas medianas.
              </p>
              <p>Aqui, o padrão é alto — sempre.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/60 bg-card/40 px-5 py-4">
                <p className="font-semibold text-foreground mb-1">Seleção pensada prato a prato</p>
                <p>Da textura da carne ao corte do vinho, tudo conversa entre si.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 px-5 py-4">
                <p className="font-semibold text-foreground mb-1">Constância de restaurante top</p>
                <p>O nível da experiência não oscila. A surpresa está nos detalhes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueExiste;
