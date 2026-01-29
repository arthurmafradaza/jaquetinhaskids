import { Shield, Award, Truck, RefreshCw, Star } from "lucide-react";
import { motion } from "framer-motion";

const TrustBar = () => {
  const badges = [
    { icon: Shield, text: "Loja 100% Segura" },
    { icon: Award, text: "Tecidos Certificados" },
    { icon: Truck, text: "Entrega Rastreada" },
    { icon: RefreshCw, text: "Troca em 30 Dias" },
    { icon: Star, text: "+1000 Mães Satisfeitas" },
  ];

  return (
    <section className="sticky top-0 z-50 bg-card shadow-sm border-b border-border">
      <div className="container-main px-3 md:px-6">
        <div className="flex items-center justify-start lg:justify-center gap-1 md:gap-2 py-2 md:py-3 overflow-x-auto scrollbar-hide">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 flex-shrink-0 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
              <span className="text-foreground font-medium text-xs md:text-sm">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;