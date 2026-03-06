import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import devfoliologo from "@/assets/Devfolio.png";

const CTA = () => {
  return (
    <section className="relative py-20 md:py-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="border border-gold/40 bg-gold/[0.03] px-8 py-12 md:px-14 md:py-16 text-center">

          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-foreground mb-4">
            Build something
            <br />
            <span className="text-gradient-gold">worth shipping.</span>
          </h2>

          <p className="text-muted-foreground text-sm font-mono max-w-md mx-auto mb-10">
            Applications are open. Submit your idea and start building at Aurum.
          </p>

          <a
            href="https://aurum26.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3 bg-gold text-black font-display font-bold text-sm uppercase tracking-wider border border-gold hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_18px_rgba(212,175,55,0.35)]"
            style={{ height: 46, minWidth: 260 }}
          >
            Apply via
            <img
              src={devfoliologo}
              alt="Devfolio"
              className="h-5 w-auto"
            />
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default CTA;