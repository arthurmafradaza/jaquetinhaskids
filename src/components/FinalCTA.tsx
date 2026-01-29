import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "Entrega Rápida",
    "Troca Garantida",
    "Atendimento Humanizado"
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 gradient-cta">
      <div className="container-main px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4 md:mb-6">
            Garanta a Jaqueta Perfeita Para Seu Filho Hoje!
          </h2>

          <motion.a
            href="#personagens"
            className="inline-block px-8 py-3.5 md:px-10 md:py-5 text-base md:text-lg font-semibold bg-card text-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6 md:mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Escolher Meu Modelo Favorito
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-1.5 md:gap-2 text-primary-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-base">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;