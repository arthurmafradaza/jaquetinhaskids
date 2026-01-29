import { motion } from "framer-motion";
import { Lock, Package, RefreshCw, CheckCircle } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    {
      icon: Lock,
      title: "Compra Segura",
      description: "Pagamento protegido\nSite certificado"
    },
    {
      icon: Package,
      title: "Frete Rastreado",
      description: "Acompanhe seu pedido\nEntrega garantida"
    },
    {
      icon: RefreshCw,
      title: "Troca Fácil",
      description: "30 dias para trocar\nSem complicação"
    },
    {
      icon: CheckCircle,
      title: "Qualidade Testada",
      description: "Materiais certificados\nAprovado para crianças"
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container-main px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Sua compra <span className="text-primary">100% garantida</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              className="card-elevated p-4 md:p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 mb-3 md:mb-4">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;