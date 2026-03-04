import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const tracks = [
  {
    num: "01",
    title: "Fintech",
    description: "Build intelligent financial systems that improve how money moves and decisions are made. Projects may include fraud detection tools, risk analysis models, automated trading strategies, or personalized financial assistants that help users manage investments, spending, and financial planning.",
  },
  {
    num: "02",
    title: "AI/ML & Data Science",
    description: "Build intelligent systems that learn from data and improve over time. Projects may include machine learning models, automated data pipelines, predictive analytics tools, or AI agents that process large datasets and generate useful insights for real world problems.",
  },
  {
    num: "03",
    title: "Blockchain",
    description: "Build decentralized applications and on-chain systems that bring transparency and trust to digital platforms. Projects can include smart contract based applications, DeFi tools, on-chain analytics, decentralized identity solutions, or systems that integrate blockchain with AI driven automation.",
  },
  {
    num: "04",
    title: "Open Innovation",
    description: "Solve real world problems across any domain using technology and intelligent systems. Projects can focus on areas such as healthcare, education, sustainability, productivity, or social impact. The goal is to build practical solutions that address meaningful challenges and demonstrate strong technical execution.",
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
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
          Hackathon <span className="text-gradient-gold">Tracks</span>
        </h2>
      </div>
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
                i !== tracks.length - 1 ? 'border-b border-gold/20' : ''
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
