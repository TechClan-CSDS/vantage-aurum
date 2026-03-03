import { motion } from "framer-motion";

const criteria = [
  { label: "TECHNICAL IMPLEMENTATION", pct: 25 },
  { label: "AI / AGENT INTEGRATION", pct: 25 },
  { label: "REAL-WORLD RELEVANCE", pct: 20 },
  { label: "INNOVATION", pct: 15 },
  { label: "USABILITY & DEPLOYMENT", pct: 15 },
];

const Evaluation = () => {
  return (
    <section id="evaluation" className="relative py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight">
            How we'll<br />
            <span className="text-gradient-gold">judge your work.</span>
          </h2>
        </motion.div>

        <div className="border-2 border-gold/20">
          {criteria.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-center justify-between p-5 md:p-6 ${
                i < criteria.length - 1 ? 'border-b-2 border-gold/20' : ''
              } hover:bg-gold/5 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <span className="text-gold/40 font-mono text-xs w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-display font-bold text-foreground/80 tracking-wider">{c.label}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:block w-32 h-1.5 bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.pct * 4}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                    className="h-full bg-gold"
                  />
                </div>
                <span className="text-gold font-mono font-bold text-sm">{c.pct}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
