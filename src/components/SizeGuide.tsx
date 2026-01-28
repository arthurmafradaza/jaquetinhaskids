import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const SizeGuide = () => {
  const sizes = [
    { size: "P", age: "2-3 anos", height: "90-100 cm", chest: "50-54 cm" },
    { size: "M", age: "4-5 anos", height: "100-110 cm", chest: "54-58 cm" },
    { size: "G", age: "6-7 anos", height: "110-120 cm", chest: "58-62 cm" },
    { size: "GG", age: "8-9 anos", height: "120-130 cm", chest: "62-66 cm" },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-mobile md:text-section text-foreground mb-4">
            Guia de <span className="text-primary">Tamanhos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Encontre o tamanho perfeito para o seu pequeno
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card-elevated overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Tamanho</th>
                    <th className="px-6 py-4 text-left font-semibold">Idade</th>
                    <th className="px-6 py-4 text-left font-semibold">Altura</th>
                    <th className="px-6 py-4 text-left font-semibold">Peito</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((row, index) => (
                    <tr
                      key={row.size}
                      className={`${
                        index % 2 === 0 ? "bg-card" : "bg-muted/30"
                      } border-b border-border last:border-b-0`}
                    >
                      <td className="px-6 py-4 font-semibold text-primary">
                        {row.size}
                      </td>
                      <td className="px-6 py-4 text-foreground">{row.age}</td>
                      <td className="px-6 py-4 text-foreground">{row.height}</td>
                      <td className="px-6 py-4 text-foreground">{row.chest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda para escolher o tamanho da jaqueta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Precisa de ajuda? Chama no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SizeGuide;