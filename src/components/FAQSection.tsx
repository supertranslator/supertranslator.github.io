import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "When will SuperTranslator be available to the public?",
    a: "We are currently in closed beta with select pet owners and veterinary clinics. Sign up for our waitlist to be among the first to try it.",
  },
  {
    q: "Do I need AI expertise to use SuperTranslator?",
    a: "Not at all. SuperTranslator has a simple, intuitive interface designed for pet owners of any technical background. Just point your camera and we do the rest.",
  },
  {
    q: "What pets does SuperTranslator work with?",
    a: "We currently support dogs and cats, with deep models trained on over 200 breeds. Hamsters and other small pets are on our roadmap.",
  },
  {
    q: "How does the AI understand my pet?",
    a: "Our Visual Language Models analyze body language, facial expressions, vocalizations, and environmental context simultaneously to produce accurate behavioral interpretations.",
  },
  {
    q: "Is my pet's data private?",
    a: "Absolutely. All analysis happens on-device using edge AI. We never store your pet's videos or images on our servers. Your data stays yours.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
