import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 md:py-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="border-2 border-gold p-10 md:p-16 text-center bg-gold/[0.03]">
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground uppercase tracking-tight mb-4">
            Build something<br />
            <span className="text-gradient-gold">worth shipping.</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto font-mono">
            Applications open on Devfolio. Limited spots. Don't wait.
          </p>
          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-primary-foreground font-display font-black text-base uppercase tracking-wider border-2 border-gold-dark hover:bg-gold-light transition-all duration-200"
          >
            Apply on Devfolio
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
