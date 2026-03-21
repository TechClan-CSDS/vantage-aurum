import { SectionReveal } from "./SectionReveal";
import { WordReveal } from "./WordReveal";
import { motion } from "framer-motion";

const AboutAurum = () => {
  return (
    <section id="about" className="pt-12 pb-8 md:py-24 px-4 overflow-hidden relative">
      <SectionReveal>
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight flex-wrap justify-center gap-4 hidden sm:flex">
              <WordReveal text="What is Aurum" className="text-foreground [&>span:last-child]:text-gold [&>span:last-child]:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
            </h2>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight flex sm:hidden justify-center items-center gap-2">
              What is <span className="text-gradient-gold">Aurum</span>?
            </h2>
          </div>

          {/* DESCRIPTION */}
          <motion.div
            className="relative group mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -inset-1 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 rounded-xl"></div>
            <p className="relative text-center text-foreground/80 text-lg md:text-xl leading-relaxed mb-16 p-6 md:p-8 border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl hover:border-gold/40 hover:bg-gold/[0.03] shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-500">
              Aurum is a curated AI-native hackathon where builders ship real
              systems in 24 hours. Teams tackle ambitious problems across
              fintech, AI, blockchain, and open innovation — transforming ideas
              into working products with real impact.
            </p>
          </motion.div>

        </div>
      </SectionReveal>
    </section>
  );
};

export default AboutAurum;