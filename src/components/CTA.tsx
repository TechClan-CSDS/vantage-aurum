import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import devfolioIcon from "@/assets/Devfolio_Logo.png";
import { SectionReveal } from "./SectionReveal";
import { WordReveal } from "./WordReveal";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.5 + i * 0.03,
  }));

  return (
      <div className="absolute inset-0 pointer-events-none">
          <svg
              className="w-full h-full text-gold"
              viewBox="0 0 696 316"
              fill="none"
          >
              <title>Background Paths</title>
              {paths.map((path) => (
                  <motion.path
                      key={path.id}
                      d={path.d}
                      stroke="currentColor"
                      strokeWidth={path.width}
                      strokeOpacity={0.05 + path.id * 0.015} // Adjusted for gold glow integration
                      initial={{ pathLength: 0.3, opacity: 0.6 }}
                      animate={{
                          pathLength: 1,
                          opacity: [0.3, 0.6, 0.3],
                          pathOffset: [0, 1, 0],
                      }}
                      transition={{
                          duration: 20 + Math.random() * 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                      }}
                  />
              ))}
          </svg>
      </div>
  );
}

const CTA = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      
      {/* Background Deep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/[0.04] blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto z-10 relative"
      >
        <div className="border border-gold/40 bg-[#0a0804]/90 backdrop-blur-xl px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden flex flex-col items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.05)] relative z-10">
          
          {/* Animated Paths Background */}
          <div className="absolute inset-0 z-0">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>

          <div className="relative z-10 flex flex-col items-center">

          {/* Corner Hacker Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />



          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-foreground mb-4 leading-tight">
              <WordReveal text="Build something" />
              <br />
              <WordReveal text="worth shipping." className="text-gradient-gold" delay={0.1} />
            </h2>
          </SectionReveal>

          <motion.p
            className="text-muted-foreground text-sm font-mono max-w-md mx-auto mb-10 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          >
            Applications are open. Submit your idea and start building at Aurum.
          </motion.p>

          {/* The Laser Scan Button */}
          <a
            href="https://aurum26.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden w-full sm:w-auto h-12 sm:min-w-[260px] max-w-sm mx-auto p-[2px]"
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
            <div className="relative w-full h-full flex items-center justify-center gap-3 px-7 bg-[#1a1408] text-gold font-display font-bold text-sm uppercase tracking-wider transition-colors duration-200 group-hover:bg-[#251b0a]">
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

          </div> {/* Closing inner z-10 wrapper */}
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;