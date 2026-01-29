import { motion } from "framer-motion";
import { Award, Shield, Heart } from "lucide-react";

const QualityProof = () => {
  const cards = [
    {
      icon: Award,
      iconBgClass: "bg-iconBg-pink",
      iconColorClass: "text-primary",
      title: "Qualidade Premium",
      description: "Tecidos selecionados, costuras reforçadas e materiais atóxicos aprovados para crianças."
    },
    {
      icon: Shield,
      iconBgClass: "bg-iconBg-blue",
      iconColorClass: "text-secondary",
      title: "Durabilidade Testada",
      description: "Jaquetas que resistem a brincadeiras, lavagens e o uso diário do seu pequeno."
    },
    {
      icon: Heart,
      iconBgClass: "bg-iconBg-yellow",
      iconColorClass: "text-yellow-accent",
      title: "Conforto Garantido",
      description: "Forros macios, sem irritações na pele e liberdade total de movimento."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container-main px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Por que mães escolhem <span className="text-primary">nossas jaquetas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-[1200px] mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-card rounded-xl md:rounded-2xl p-6 md:p-10 text-center transition-all duration-300 hover:-translate-y-1"
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
              <div className={`inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full ${card.iconBgClass} mb-4 md:mb-6`}>
                <card.icon className={`w-7 h-7 md:w-10 md:h-10 ${card.iconColorClass}`} />
              </div>
              <h3 className="text-lg md:text-[22px] font-semibold text-foreground mb-2 md:mb-4">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProof;
