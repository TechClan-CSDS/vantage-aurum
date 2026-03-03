import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-gold-radial pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4">
          Ready to Build?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          60 teams. 24 hours. Ship intelligent systems that solve real problems.
        </p>
        <a
          href="https://devfolio.co"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-gold font-display font-bold text-lg text-primary-foreground rounded-xl glow-gold hover:scale-105 transition-transform duration-300"
        >
          Apply on Devfolio
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
