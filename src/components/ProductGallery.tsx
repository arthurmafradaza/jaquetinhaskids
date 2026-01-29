import { motion } from "framer-motion";
import jacketDinosaur from "@/assets/jacket-dinosaur.jpg";
import jacketUnicorn from "@/assets/jacket-unicorn.jpg";
import jacketSpace from "@/assets/jacket-space.jpg";
import jacketSafari from "@/assets/jacket-safari.jpg";
import jacketSuperhero from "@/assets/jacket-superhero.jpg";
import jacketPrincess from "@/assets/jacket-princess.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductGallery = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Jaqueta Dinossauro",
      description: "Perfeita para aventureiros!",
      image: jacketDinosaur
    },
    {
      id: 2,
      name: "Jaqueta Unicórnio",
      description: "Mágica e encantadora!",
      image: jacketUnicorn
    },
    {
      id: 3,
      name: "Jaqueta Espacial",
      description: "Para pequenos astronautas!",
      image: jacketSpace
    },
    {
      id: 4,
      name: "Jaqueta Safari",
      description: "Exploradores da natureza!",
      image: jacketSafari
    },
    {
      id: 5,
      name: "Jaqueta Super-Herói",
      description: "Poderes para o dia a dia!",
      image: jacketSuperhero
    },
    {
      id: 6,
      name: "Jaqueta Princesa",
      description: "Realeza e elegância!",
      image: jacketPrincess
    }
  ];

  return (
    <section id="personagens" className="py-12 md:py-20 lg:py-24 bg-muted/50">
      <div className="container-main px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-2 md:mb-4">
            Escolha o Personagem Favorito do <span className="text-primary">Seu Filho</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Modelos exclusivos que fazem a alegria dos pequenos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="card-product group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 md:mb-4">
                  {product.description}
                </p>
                <motion.button
                  className="btn-secondary w-full text-sm md:text-base py-2.5 md:py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Quero Este Modelo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;