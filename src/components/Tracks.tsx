import { motion } from "framer-motion";

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

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Hackathon <span className="text-gradient-gold">Tracks</span>
          </h2>

          <p className="text-sm text-gold/70 font-mono mt-4 max-w-xl mx-auto">
            Every project must include at least one AI agent or AI-driven system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 border border-gold/20">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            className={`group p-6 md:p-8 hover:bg-gold/5 transition-colors duration-300
            ${i !== tracks.length - 1 ? "border-b border-gold/20" : ""}
            ${i % 2 === 0 ? "md:border-r border-gold/20" : ""}`}
            >
              <span className="text-gold/40 font-mono text-xs">
                {track.num}
              </span>

              <h3 className="text-2xl font-display font-black text-foreground uppercase mt-1 mb-3 group-hover:text-gold transition-colors">
                {track.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tracks;