import { motion } from "framer-motion";
import { Bot, Landmark, Blocks, Lightbulb, Cpu } from "lucide-react";

const tracks = [
  {
    icon: Landmark,
    title: "Fintech",
    description: "Build intelligent financial systems with AI agents for risk analysis, fraud detection, automated trading, and personalized banking.",
  },
  {
    icon: Bot,
    title: "AI/ML & Data Science",
    description: "Create autonomous AI-driven pipelines, intelligent data processing systems, and self-improving ML workflows.",
  },
  {
    icon: Blocks,
    title: "Blockchain",
    description: "Develop decentralized intelligent systems with AI agents for smart contract automation, DeFi, and on-chain analytics.",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description: "Solve real-world problems across any domain with AI agent-based approaches. Healthcare, education, sustainability — your call.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Cpu className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-xs tracking-widest uppercase font-body">AI Agents Required</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4">Tracks</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every track demands meaningful AI agent integration. Autonomous or semi-autonomous decision-making is not optional — it's foundational.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 md:gap-6"
        >
          {tracks.map((track) => (
            <motion.div
              key={track.title}
              variants={item}
              className="group relative p-6 md:p-8 bg-card border border-border rounded-xl hover:border-gold/30 hover:glow-gold-sm transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <track.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{track.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{track.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks;
