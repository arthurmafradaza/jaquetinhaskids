import { motion } from "framer-motion";
import { Award, Shield, Heart } from "lucide-react";

const QualityProof = () => {
  const cards = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Tecidos selecionados, costuras reforçadas e materiais atóxicos aprovados para crianças."
    },
    {
      icon: Shield,
      title: "Durabilidade Testada",
      description: "Jaquetas que resistem a brincadeiras, lavagens e o uso diário do seu pequeno."
    },
    {
      icon: Heart,
      title: "Conforto Garantido",
      description: "Forros macios, sem irritações na pele e liberdade total de movimento."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-mobile md:text-section text-foreground mb-4">
            Por que mães escolhem <span className="text-primary">nossas jaquetas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="card-elevated p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/30 mb-6">
                <card.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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