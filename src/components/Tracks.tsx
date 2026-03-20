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
    <section id="tracks" className="relative pt-2 pb-4 md:py-0 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight flex items-center justify-center gap-4 flex-wrap">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              Hackathon
            </motion.span>
            <GlitchText text="Tracks" delay={0.4} className="text-gradient-gold" />
          </h2>
          <motion.p
            className="text-sm text-gold/60 font-mono mt-5 max-w-xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
          >
            Every project must include at least one{" "}
            <span className="text-gold">AI agent</span> or AI-driven system.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 border border-gold/20 relative z-10">
          {tracks.map((track, i) => {
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative p-8 md:p-10 overflow-hidden bg-transparent
                  hover:bg-gold/[0.02] transition-colors duration-500
                  ${i < 2 ? "border-b border-gold/20" : ""}
                  ${i % 2 === 0 ? "md:border-r border-gold/20" : ""}`}
              >
                {/* Techy corner L-brackets */}
                <CornerBrackets />

                {/* Left hover indicator line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />

                <div className="relative z-10 h-full flex flex-col transition-transform duration-500 group-hover:translate-x-2">
                  <div className="mb-6">
                    <span className="text-gold/30 font-mono text-xs tracking-[0.3em]">
                      {track.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-display font-black text-foreground uppercase mb-4 transition-colors duration-300">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Soft gradient sweep on hover */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-gold/[0.05] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Tracks;