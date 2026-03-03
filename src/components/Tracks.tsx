import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const tracks = [
  {
    num: "01",
    title: "Fintech",
    description: "Intelligent financial systems — risk analysis, fraud detection, automated trading, personalized banking.",
  },
  {
    num: "02",
    title: "AI/ML & Data Science",
    description: "Autonomous pipelines, self-improving ML workflows, intelligent data processing at scale.",
  },
  {
    num: "03",
    title: "Blockchain",
    description: "Decentralized intelligence — AI agents for smart contracts, DeFi protocols, on-chain analytics.",
  },
  {
    num: "04",
    title: "Open Innovation",
    description: "Healthcare, education, sustainability, anything. Pick a real problem, solve it with AI agents.",
  },
];

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gold/40 bg-gold/10 mb-6">
            <Cpu className="w-4 h-4 text-gold" />
            <span className="text-gold font-display font-bold text-xs tracking-[0.2em] uppercase">AI agents required in every track</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight">
            Four tracks,<br />
            <span className="text-gradient-gold">one rule.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 border-2 border-gold/20">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-6 md:p-8 hover:bg-gold/5 transition-colors duration-300 ${
                i < 2 ? 'border-b-2 border-gold/20' : ''
              } ${i % 2 === 0 ? 'md:border-r-2 md:border-gold/20' : ''}`}
            >
              <span className="text-gold/40 font-mono text-xs">{track.num}</span>
              <h3 className="text-2xl font-display font-black text-foreground uppercase mt-1 mb-3 group-hover:text-gold transition-colors">
                {track.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
