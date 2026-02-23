import { motion } from "framer-motion";
import demoVideo from "@/assets/demo-video.mp4";

const DemoSection = () => {
  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Demo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            See <span className="gradient-text">SuperTranslator</span> in Action
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Watch how our AI analyzes and interprets pet behavior in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden glow-border">
            <video
              src={demoVideo}
              controls
              playsInline
              className="w-full aspect-video bg-card"
              poster=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
