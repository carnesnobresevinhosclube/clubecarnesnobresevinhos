import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
              Carnes Nobres & Vinhos
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Clube exclusivo de carnes premium e vinhos selecionados. 
              Transformando cada refeição em uma experiência gastronômica única.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#beneficios" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a 
                  href="#como-funciona" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a 
                  href="#planos" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a 
                  href="https://carnesnobresevinhos.com.br" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Nossa Loja
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a 
                  href="https://api.whatsapp.com/send?phone=5511980211873" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  (11) 98021-1873
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:contato@carnesnobresevinhos.com.br"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  contato@carnesnobresevinhos.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  São Paulo, SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Carnes Nobres & Vinhos. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
