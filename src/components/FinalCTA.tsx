import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "Entrega Rápida",
    "Troca Garantida",
    "Atendimento Humanizado"
  ];

  return (
    <section className="section-padding gradient-cta">
      <div className="container-main">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-mobile md:text-section text-primary-foreground mb-6">
            Garanta a Jaqueta Perfeita Para Seu Filho Hoje!
          </h2>

          <motion.a
            href="#personagens"
            className="inline-block px-10 py-5 text-lg font-semibold bg-card text-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Escolher Meu Modelo Favorito
          </motion.a>

          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-2 text-primary-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;