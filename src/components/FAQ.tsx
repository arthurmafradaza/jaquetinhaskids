import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como escolher o tamanho certo?",
      answer: "Utilize nossa tabela de medidas e, na dúvida, opte pelo tamanho maior. Se ainda precisar de ajuda, entre em contato pelo WhatsApp que ajudamos você!"
    },
    {
      question: "Os tecidos são seguros para crianças?",
      answer: "Sim! Todos os nossos tecidos são certificados e livres de substâncias tóxicas. Utilizamos materiais hipoalergênicos testados e aprovados para uso infantil."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo varia de acordo com a sua região. Geralmente entregamos em 3 a 10 dias úteis. Você receberá o código de rastreio assim que o pedido for despachado."
    },
    {
      question: "Posso trocar se não servir?",
      answer: "Claro! Você tem até 30 dias para solicitar a troca. O produto deve estar sem uso e com as etiquetas originais. A primeira troca é gratuita!"
    },
    {
      question: "Como lavar a jaqueta?",
      answer: "Recomendamos lavar à máquina em ciclo delicado com água fria. Não usar alvejante. Pode secar na sombra ou em secadora no modo baixo. As estampas são resistentes!"
    },
    {
      question: "Quais formas de pagamento?",
      answer: "Aceitamos cartões de crédito (até 12x sem juros), PIX com desconto de 5%, boleto bancário e carteiras digitais como PicPay e Mercado Pago."
    },
    {
      question: "Vocês entregam em todo Brasil?",
      answer: "Sim! Entregamos para todo o território nacional. Capitais e regiões metropolitanas geralmente recebem mais rápido. Consulte o frete no carrinho."
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
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;