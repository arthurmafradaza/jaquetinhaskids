import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  child: string;
  rating: number;
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Comprei para minha filha e ela não quer tirar! A qualidade é excelente, o tecido é macio e as costuras são muito bem feitas. Super recomendo!",
      author: "Camila Souza",
      child: "Mãe da Laura, 6 anos",
      rating: 5
    },
    {
      id: 2,
      text: "Já é a terceira jaqueta que compro aqui. Meu filho ama os dinossauros! Resistente demais, já lavei várias vezes e continua linda.",
      author: "Fernanda Lima",
      child: "Mãe do Pedro, 4 anos",
      rating: 5
    },
    {
      id: 3,
      text: "Atendimento impecável e produto de primeira. A jaqueta da unicórnio fez minha princesa muito feliz. Entrega rápida!",
      author: "Ana Paula Costa",
      child: "Mãe da Sofia, 5 anos",
      rating: 5
    },
    {
      id: 4,
      text: "Qualidade que vale cada centavo. Os acabamentos são perfeitos e o forro é super quentinho. Recomendo de olhos fechados!",
      author: "Juliana Martins",
      child: "Mãe do Lucas, 7 anos",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-pink-soft">
      <div className="container-main px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-2 md:mb-4">
            O que as <span className="text-primary">Mães Dizem</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center px-8 md:px-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 md:mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-6 md:mb-8 italic">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <User className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {testimonials[current].author}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonials[current].child}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-card shadow-md hover:shadow-lg transition-shadow"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-card shadow-md hover:shadow-lg transition-shadow"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;