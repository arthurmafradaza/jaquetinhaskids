import { motion } from "framer-motion";
import { Medal, Smile, Heart } from "lucide-react";

const WhyMomsLove = () => {
  const cards = [
    {
      icon: Medal,
      iconBgClass: "bg-iconBg-pink",
      iconColorClass: "text-primary",
      title: "Qualidade Premium",
      description: "Materiais selecionados rigorosamente para garantir durabilidade mesmo nas brincadeiras mais intensas."
    },
    {
      icon: Smile,
      iconBgClass: "bg-iconBg-yellow",
      iconColorClass: "text-yellow-accent",
      title: "Personagens Amados",
      description: "Designs exclusivos dos heróis e personagens que fazem os olhos das crianças brilharem de alegria."
    },
    {
      icon: Heart,
      iconBgClass: "bg-iconBg-blue",
      iconColorClass: "text-secondary",
      title: "Conforto Garantido",
      description: "Costuras especiais planas e tecido macio que não pinica, perfeito para peles sensíveis."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-mobile md:text-section text-foreground mb-4">
            Por que as mães amam?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pensamos em cada detalhe para que você tenha tranquilidade e seu filho tenha felicidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-card rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ 
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
              }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${card.iconBgClass} mb-6`}>
                <card.icon className={`w-10 h-10 ${card.iconColorClass}`} />
              </div>
              <h3 className="text-[22px] font-semibold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMomsLove;
