import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

const tracks = [
  {
    num: "01",
    title: "Fintech",
    description:
      "Build systems that improve how money moves and decisions are made. Think fraud detection, risk modeling, trading automation, or AI-powered financial assistants.",
  },
  {
    num: "02",
    title: "Data Science",
    description:
      "Create intelligent systems that learn from data. Projects can include machine learning models, automated pipelines, AI agents, or tools that generate insights from large datasets.",
  },
  {
    num: "03",
    title: "Blockchain",
    description:
      "Build decentralized systems that combine trust with automation. Projects may include smart contracts, DeFi tools, on-chain analytics, or blockchain systems powered by AI agents.",
  },
  {
    num: "04",
    title: "Open Innovation",
    description:
      "Solve real problems in any domain such as healthcare, education, sustainability, or productivity. Build practical systems with strong technical execution.",
  },
];

/* Corner L-bracket accent */
const CornerBrackets = () => (
  <>
    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 ease-out" />
    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 ease-out" />
    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 ease-out" />
    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 ease-out" />
  </>
);

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight flex items-center justify-center gap-4 flex-wrap">
            <GlitchText text="Hackathon" /> 
            <GlitchText text="Tracks" delay={0.3} className="text-gradient-gold" />
          </h2>
          <p className="text-sm text-gold/60 font-mono mt-5 max-w-xl mx-auto">
            Every project must include at least one{" "}
            <span className="text-gold">AI agent</span> or AI-driven system.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 border border-gold/20">
          {tracks.map((track, i) => {
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`group relative p-8 md:p-10 overflow-hidden
                  hover:bg-gold/[0.03] transition-colors duration-500
                  ${i < 2 ? "border-b border-gold/20" : ""}
                  ${i % 2 === 0 ? "md:border-r border-gold/20" : ""}`}
              >
                {/* Techy corner L-brackets */}
                <CornerBrackets />

                <div className="mb-6">
                  <span className="text-gold/30 font-mono text-xs tracking-[0.3em]">
                    {track.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground uppercase mb-4 group-hover:text-gold transition-colors duration-300">
                  {track.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {track.description}
                </p>

                {/* Hover shimmer overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Tracks;