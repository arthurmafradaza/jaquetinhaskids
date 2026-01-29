import { MessageCircle, Mail, Clock, Shield, Truck, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted py-10 md:py-16">
      <div className="container-main px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Sobre */}
          <div>
            <h4 className="text-card font-semibold mb-3 md:mb-4 text-sm md:text-base">Sobre</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-card transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card transition-colors">
                  Nossa História
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="text-card font-semibold mb-3 md:mb-4 text-sm md:text-base">Atendimento</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-card transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:contato@jaquetinhas.com.br"
                  className="hover:text-card transition-colors truncate"
                >
                  contato@jaquetinhas.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                <span>Seg-Sex 9h-18h</span>
              </li>
            </ul>
          </div>

          {/* Garantias */}
          <div>
            <h4 className="text-card font-semibold mb-3 md:mb-4 text-sm md:text-base">Garantias</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                <span>Compra Segura</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-3 h-3 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                <span>Entrega Garantida</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                <span>Certificações</span>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="text-card font-semibold mb-3 md:mb-4 text-sm md:text-base">Políticas</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-card transition-colors">
                  Política de Troca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-muted-foreground/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-xs md:text-sm">Formas de Pagamento:</span>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="px-2 py-1 md:px-3 md:py-1.5 bg-card/10 rounded text-xs font-medium">
                  PIX
                </div>
                <div className="px-2 py-1 md:px-3 md:py-1.5 bg-card/10 rounded text-xs font-medium">
                  Cartões
                </div>
                <div className="px-2 py-1 md:px-3 md:py-1.5 bg-card/10 rounded text-xs font-medium">
                  Boleto
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              © 2025 Jaquetinhas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;