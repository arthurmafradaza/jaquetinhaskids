import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroChild from "@/assets/hero-child.jpg";

const HeroSection = () => {
  const trustItems = [
    "Entrega Segura",
    "Troca Grátis",
    "Qualidade Certificada"
  ];

  return (
    <section className="gradient-hero min-h-[90vh] flex items-center">
      <div className="container-main w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center py-12 lg:py-0">
          {/* Content - 60% */}
          <motion.div 
            className="lg:col-span-3 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-hero-mobile md:text-hero text-foreground mb-6">
              Jaquetas de Qualidade que Seu Filho Vai{" "}
              <span className="text-primary">Amar Usar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Personagens incríveis, tecidos certificados e conforto garantido para os pequenos aventureiros.
            </p>

            <motion.a
              href="#personagens"
              className="btn-primary inline-block mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Todos os Personagens
            </motion.a>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-sm md:text-base text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image - 40% */}
          <motion.div 
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <img
                src={heroChild}
                alt="Criança feliz usando jaqueta estampada"
                className="relative w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;