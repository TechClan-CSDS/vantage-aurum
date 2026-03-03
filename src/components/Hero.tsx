import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Subtle single glow — not overdone */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-gold-radial pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img src={aurumLogo} alt="Aurum — the gold standard" className="w-64 md:w-80 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className="sr-only">Aurum — Vantage Hackathon</h1>
          <p className="text-lg md:text-xl font-display text-foreground/60 mb-1 tracking-wide">
            Vantage Hackathon
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed mb-10">
            A 24-hour offline hackathon by the CSE (Data Science) Department.
            60 teams. AI-agent workflows. Real systems, not slide decks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-gold font-display font-semibold text-primary-foreground rounded-lg hover:scale-[1.03] transition-transform duration-300"
          >
            Apply on Devfolio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#tracks"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/20 text-gold/80 font-display text-sm rounded-lg hover:border-gold/40 hover:text-gold transition-all duration-300"
          >
            See what you'll build ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
