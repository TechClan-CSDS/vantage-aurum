import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const tracks = [
  {
    num: "01",
    title: "Fintech",
    description: "Intelligent financial systems — risk analysis, fraud detection, automated trading, personalized banking. AI agents making real financial decisions.",
  },
  {
    num: "02",
    title: "AI/ML & Data Science",
    description: "Autonomous pipelines, self-improving ML workflows, intelligent data processing. Push the boundaries of what machines can figure out on their own.",
  },
  {
    num: "03",
    title: "Blockchain",
    description: "Decentralized intelligence — AI agents for smart contract automation, DeFi protocols, and on-chain analytics that actually work.",
  },
  {
    num: "04",
    title: "Open Innovation",
    description: "Healthcare, education, sustainability, anything else. Pick a real problem, solve it with AI agents. No domain restrictions.",
  },
];

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/8 border border-gold/15 rounded-full mb-5">
            <Cpu className="w-3 h-3 text-gold/70" />
            <span className="text-gold/70 text-[11px] tracking-[0.2em] uppercase font-body">AI agents required in every track</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Four tracks,<br />
            <span className="text-gradient-gold">one rule.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex gap-5 p-5 md:p-6 border border-border/60 rounded-xl hover:border-gold/25 hover:bg-card/50 transition-all duration-400"
            >
              <span className="text-gold/30 font-display font-bold text-sm mt-1 shrink-0">{track.num}</span>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1.5 group-hover:text-gold transition-colors">{track.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{track.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
