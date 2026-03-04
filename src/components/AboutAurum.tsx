import { motion } from "framer-motion";

const AboutAurum = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            What is <span className="text-gradient-gold">Aurum</span>?
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto text-center text-foreground/80 text-base leading-relaxed mb-16">
          Aurum is a curated AI-native hackathon where builders ship real
          systems in 24 hours. Teams tackle ambitious problems across
          fintech, AI, blockchain, and open innovation — transforming ideas
          into working products with real impact.
        </p>

      </div>
    </section>
  );
};

export default AboutAurum;