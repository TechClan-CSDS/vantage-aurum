import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 md:py-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="border border-gold/20 rounded-2xl p-10 md:p-14 text-center bg-gold/[0.02]">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Build something <span className="text-gradient-gold">worth shipping.</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
            Applications are open on Devfolio. 60 spots, limited time.
          </p>
          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold font-display font-semibold text-primary-foreground rounded-lg hover:scale-[1.03] transition-transform duration-300"
          >
            Apply on Devfolio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
