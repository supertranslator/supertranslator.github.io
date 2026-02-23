import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="relative py-20 border-t border-border/30">
      <div className="absolute inset-0 section-glow opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to understand your pet?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join our waitlist and be the first to experience the future of
            pet-human communication.
          </p>
          <a
            href="#demo"
            className="inline-block px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow-border"
          >
            Get Early Access
          </a>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border/20">
          <span className="text-sm text-muted-foreground">
            © 2026 SuperTranslator Systems. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
