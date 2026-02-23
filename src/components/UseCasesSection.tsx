import { motion } from "framer-motion";
import dogImg from "@/assets/dog-ai.jpg";
import catImg from "@/assets/cat-ai.jpg";

const useCases = [
  {
    image: dogImg,
    label: "Dogs",
    title: "For Pet Owners",
    description:
      "Understand your dog's wants and needs in real-time. Improve the quality of your relationship with your best friend through AI-powered behavioral insights.",
    features: ["Emotion detection", "Health alerts", "Training assistance"],
  },
  {
    image: catImg,
    label: "Cats",
    title: "For Veterinarians",
    description:
      "Monitor pet behavior remotely. Catch early signs of medical issues. Track recovery progress and home care effectiveness with precision analytics.",
    features: ["Remote monitoring", "Early diagnostics", "Care tracking"],
  },
];

const UseCasesSection = () => {
  return (
    <section id="usecases" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Use Cases
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Who It's <span className="gradient-text">Built For</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {useCases.map((uc, idx) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <div className="relative rounded-2xl overflow-hidden glow-border">
                  <img
                    src={uc.image}
                    alt={uc.label}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full glass text-xs font-mono text-primary">
                    {uc.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  {uc.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {uc.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {uc.features.map((f) => (
                    <span
                      key={f}
                      className="px-4 py-2 rounded-lg glass text-sm text-primary font-mono"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
