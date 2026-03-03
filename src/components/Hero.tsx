import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-10">
      {/* Corner decorations */}
      <div className="absolute top-20 left-4 w-16 h-16 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute top-20 right-4 w-16 h-16 border-r-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-gold/20" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-gold/20" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <span className="px-5 py-2 bg-gold text-primary-foreground font-display font-black text-sm uppercase tracking-widest border-2 border-gold-dark inline-block transform -rotate-2">
            Coming Soon · 2025
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="border-2 border-gold/30 p-8 md:p-12 inline-block bg-card/50">
            <img src={aurumLogo} alt="Aurum — the gold standard" className="w-56 md:w-72 mx-auto" />
            <p className="text-foreground/40 text-xs tracking-[0.3em] uppercase mt-4 font-mono">Vantage Hackathon</p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="border-2 border-border/60 px-6 py-4 max-w-lg mx-auto mb-10 bg-card/30">
            <p className="text-sm text-foreground/80 leading-relaxed font-body">
              24 Hours of Building, Breaking, and Shipping.<br />
              <span className="text-gold font-semibold">60 teams. AI agents. Real systems.</span>
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground font-display font-black text-base uppercase tracking-wider border-2 border-gold-dark hover:bg-gold-light transition-all duration-200"
          >
            Apply on Devfolio
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#tracks"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold/30 text-gold font-display font-bold text-sm uppercase tracking-wider hover:border-gold/60 hover:bg-gold/5 transition-all duration-200"
          >
            Explore Tracks ↓
          </a>
        </motion.div>

        {/* Department credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground text-xs mt-12 tracking-wider uppercase font-mono"
        >
          By the CSE (Data Science) Department
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
