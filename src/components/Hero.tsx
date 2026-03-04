import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Aurora glow effect — gold version of the reference */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top arc glow */}
        <div
          className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[400px]"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 100%, hsl(43 90% 55% / 0.25) 0%, transparent 70%),
              radial-gradient(ellipse 60% 40% at 30% 80%, hsl(35 80% 45% / 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 70% 80%, hsl(50 90% 60% / 0.15) 0%, transparent 60%)
            `,
            filter: "blur(40px)",
          }}
        />
        {/* Bottom reflection */}
        <div
          className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[100%] h-[300px]"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 50% 0%, hsl(43 80% 55% / 0.12) 0%, transparent 70%)
            `,
            filter: "blur(60px)",
          }}
        />
        {/* Central bright line */}
        <div
          className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[80%] h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(43 90% 70% / 0.4), hsl(43 80% 55% / 0.6), hsl(43 90% 70% / 0.4), transparent)",
            filter: "blur(1px)",
            boxShadow: "0 0 30px 10px hsl(43 80% 55% / 0.15)",
          }}
        />
      </div>

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-gold font-mono text-xs uppercase tracking-[0.3em] border border-gold/30">
            Coming Soon · 2025
          </span>
        </motion.div>

        {/* Big logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={aurumLogo}
            alt="Aurum — the gold standard hackathon"
            className="w-72 md:w-[28rem] lg:w-[34rem] mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-foreground/70 text-base md:text-lg font-body leading-relaxed max-w-xl mx-auto mb-10"
        >
          24 hours. 60 teams. Every project runs on AI agents.
          <br />
          <span className="text-gold font-semibold">Build real systems. Ship or go home.</span>
        </motion.p>

        {/* CTA — no shadows */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 md:gap-14 text-center"
        >
          {[
            { value: "24h", label: "Non-stop hacking" },
            { value: "₹50K+", label: "In prizes" },
            { value: "60", label: "Teams max" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-gold font-display font-black text-3xl md:text-4xl">{s.value}</div>
              <div className="text-muted-foreground text-xs font-mono uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-muted-foreground text-xs mt-14 tracking-wider uppercase font-mono"
        >
          By the CSE (Data Science) Department
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-gold/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
