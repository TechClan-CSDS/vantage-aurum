import { motion } from "framer-motion";
import { ArrowUpRight, Cpu } from "lucide-react";
import devfolioIcon from "@/assets/Devfolio_Logo.png";

const CTA = () => {
  return (
    <section className="relative py-20 md:py-28 px-4">
      
      {/* Background Deep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/[0.04] blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto z-10 relative"
      >
        <div className="border border-gold/40 bg-[#0a0804]/90 backdrop-blur-xl px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden flex flex-col items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.05)]">

          {/* Corner Hacker Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />

          {/* Icon */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mb-8"
          >
            <div className="w-16 h-16 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center relative shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <Cpu className="w-6 h-6 text-gold" />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-foreground mb-4 leading-tight">
            Build something
            <br />
            <span className="text-gradient-gold">worth shipping.</span>
          </h2>

          <p className="text-muted-foreground text-sm font-mono max-w-md mx-auto mb-10 tracking-wide">
            Applications are open. Submit your idea and start building at Aurum.
          </p>

          {/* The Laser Scan Button */}
          <a
            href="https://aurum26.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden w-full sm:w-auto h-12 sm:min-w-[260px] max-w-sm mx-auto"
          >
            {/* Spinning Laser Background */}
            <motion.div
              style={{ x: "-50%", y: "-50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px]"
            >
              <div 
                className="w-full h-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 70%, rgba(212, 175, 55, 0.4) 90%, rgba(212, 175, 55, 1) 100%)",
                }}
              />
            </motion.div>

            {/* Inner Button Content */}
            <div className="relative w-full h-full flex items-center justify-center gap-3 px-7 bg-[#0a0804] text-gold font-display font-bold text-sm uppercase tracking-wider transition-colors duration-200 group-hover:bg-[#1a1408]">
              Apply via
              <img
                src={devfolioIcon}
                alt=""
                className="h-5 w-auto"
              />
              Devfolio
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default CTA;