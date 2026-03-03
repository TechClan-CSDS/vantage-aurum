import { motion } from "framer-motion";

const criteria = [
  { label: "Technical Implementation", weight: "25%" },
  { label: "AI / Agent Integration Depth", weight: "25%" },
  { label: "Real-World Relevance", weight: "20%" },
  { label: "Innovation", weight: "15%" },
  { label: "Usability & Deployment", weight: "15%" },
];

const Evaluation = () => {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4">Evaluation</h2>
          <p className="text-muted-foreground">How your project will be judged</p>
        </motion.div>

        <div className="space-y-4">
          {criteria.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-4 bg-card border border-border rounded-lg group hover:border-gold/30 transition-all"
            >
              <span className="text-foreground font-body">{c.label}</span>
              <span className="text-gold font-display font-bold text-lg">{c.weight}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
