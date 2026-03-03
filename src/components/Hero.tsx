import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";
import aurumIcon from "@/assets/aurum-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-20 pb-10">
      {/* Large icon watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-[-10%] top-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] pointer-events-none select-none"
      >
        <img src={aurumIcon} alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Horizontal rule accents */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <img src={aurumIcon} alt="Aurum" className="w-10 h-10 md:w-12 md:h-12" />
              <div className="h-px flex-1 bg-gold/20" />
              <span className="text-gold/50 text-xs font-mono tracking-widest uppercase">Est. 2025</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-foreground uppercase leading-[0.85] tracking-tighter mb-6"
            >
              Au<span className="text-gold">rum</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="inline-block w-8 h-0.5 bg-gold" />
              <p className="text-foreground/60 text-sm md:text-base font-body tracking-wide">
                Vantage Hackathon — 24hrs of building intelligent systems
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-sm font-mono max-w-md leading-relaxed mb-10"
            >
              60 teams. 4 tracks. Every project must embed AI agent workflows.
              Build real systems, not slide decks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground font-display font-black text-sm uppercase tracking-wider hover:bg-gold-light transition-all duration-200"
              >
                Apply on Devfolio
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold font-display font-semibold text-sm uppercase tracking-wider hover:border-gold/60 hover:bg-gold/5 transition-all duration-200"
              >
                View Tracks
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-muted-foreground text-[10px] mt-10 tracking-[0.3em] uppercase font-mono"
            >
              CSE (Data Science) Department · DSCE Bangalore
            </motion.p>
          </div>

          {/* Right — full logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden md:flex flex-col items-center"
          >
            <div className="border border-gold/15 p-8 bg-card/30">
              <img src={aurumLogo} alt="Aurum — The Gold Standard" className="w-44 lg:w-56" />
            </div>
            <span className="text-foreground/20 text-[10px] font-mono tracking-[0.4em] uppercase mt-4">The Gold Standard</span>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 pt-6 border-t border-gold/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { label: "Duration", value: "24h" },
            { label: "Teams", value: "60" },
            { label: "Tracks", value: "04" },
            { label: "Format", value: "Offline" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-gold font-display font-black text-2xl md:text-3xl">{stat.value}</p>
              <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
