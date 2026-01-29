import { motion } from "framer-motion";
import { Star } from "lucide-react";
import heroChild from "@/assets/hero-child.jpg";

const HeroSection = () => {
  return (
    <section className="gradient-hero py-10 md:py-24">
      <div className="container-main px-5">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-ctaOrange/10 text-ctaOrange px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🔥 Nova Coleção de Inverno
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Aqueça seu filho com os{" "}
            <span className="text-heroBlue">heróis favoritos</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A jaqueta perfeita para proteger seu filho do frio com muito estilo e diversão. 
            Material térmico de alta qualidade, capuz forrado e estampas que eles amam.
          </motion.p>

          {/* Image */}
          <motion.div 
            className="relative mb-6 md:mb-10 w-full max-w-xs md:max-w-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute -inset-3 md:-inset-4 bg-ctaOrange/10 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl" />
            <img
              src={heroChild}
              alt="Criança feliz usando jaqueta estampada"
              className="relative w-full rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl object-cover"
              loading="eager"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#personagens"
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold text-white rounded-xl transition-all duration-300 mb-6 md:mb-8"
            style={{ 
              background: 'linear-gradient(135deg, hsl(25 100% 60%) 0%, hsl(25 100% 50%) 100%)',
              boxShadow: '0 4px 16px hsla(25, 100%, 60%, 0.4)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px hsla(25, 100%, 60%, 0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            Garantir Agora
          </motion.a>

          {/* Social Proof */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Avatars */}
            <div className="flex -space-x-2 md:-space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs md:text-sm">👤</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              {/* Stars */}
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-accent text-yellow-accent" />
                ))}
              </div>
              <span className="text-xs md:text-sm text-muted-foreground font-medium">
                500+ pais felizes
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
