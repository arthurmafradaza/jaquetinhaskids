import { MessageCircle, Mail, Clock, Shield, Truck, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted py-16">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <h4 className="text-card font-semibold mb-4">Sobre</h4>
            <ul className="space-y-3">
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
            <h4 className="text-card font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-secondary" />
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
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:contato@jaquetinhas.com.br"
                  className="hover:text-card transition-colors"
                >
                  contato@jaquetinhas.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Seg-Sex 9h-18h</span>
              </li>
            </ul>
          </div>

          {/* Garantias */}
          <div>
            <h4 className="text-card font-semibold mb-4">Garantias</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Compra Segura</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-secondary" />
                <span>Entrega Garantida</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span>Certificações</span>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="text-card font-semibold mb-4">Políticas</h4>
            <ul className="space-y-3">
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
        <div className="border-t border-muted-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm">Formas de Pagamento:</span>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-card/10 rounded text-xs font-medium">
                  PIX
                </div>
                <div className="px-3 py-1.5 bg-card/10 rounded text-xs font-medium">
                  Cartões
                </div>
                <div className="px-3 py-1.5 bg-card/10 rounded text-xs font-medium">
                  Boleto
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Jaquetinhas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;