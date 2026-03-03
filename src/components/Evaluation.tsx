import { motion } from "framer-motion";

const criteria = [
  { label: "Technical Implementation", pct: 25 },
  { label: "AI / Agent Integration", pct: 25 },
  { label: "Real-World Relevance", pct: 20 },
  { label: "Innovation", pct: 15 },
  { label: "Usability & Deployment", pct: 15 },
];

const Evaluation = () => {
  return (
    <section id="evaluation" className="relative py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            How we'll<br />
            <span className="text-gradient-gold">judge your work.</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {criteria.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-foreground/80 font-body">{c.label}</span>
                <span className="text-xs text-gold font-display font-semibold">{c.pct}%</span>
              </div>
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.pct * 4}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                  className="h-full bg-gradient-gold rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
