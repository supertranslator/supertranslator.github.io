import { motion } from "framer-motion";
import { Brain, Eye, Waves, Shield } from "lucide-react";

const techCards = [
  {
    icon: Brain,
    title: "Visual Language Models",
    description:
      "State-of-the-art VLLMs trained on millions of pet behavior samples to decode body language, vocalizations, and micro-expressions.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Real-time visual analysis captures subtle cues—ear position, tail movement, posture shifts—that humans often miss.",
  },
  {
    icon: Waves,
    title: "Audio Analysis",
    description:
      "Deep learning models process barks, meows, purrs, and whines to understand emotional states and intent.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "All processing happens on-device. Your pet's data never leaves your phone. Zero cloud storage of personal footage.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TechnologySection = () => {
  return (
    <section id="technology" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Technology
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Powered by <span className="gradient-text">Advanced AI</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Built on breakthroughs in deep learning, visual models, and
            multimodal AI from the world's leading research labs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techCards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className="group glass rounded-2xl p-8 hover:glow-border transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
