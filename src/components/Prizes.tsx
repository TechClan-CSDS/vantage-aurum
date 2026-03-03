import { motion } from "framer-motion";

const prizes = [
  { place: "1st", label: "WINNER", amount: "TBA", featured: true },
  { place: "2nd", label: "RUNNER UP", amount: "TBA", featured: false },
  { place: "3rd", label: "SECOND RUNNER UP", amount: "TBA", featured: false },
];

const Prizes = () => {
  return (
    <section id="prizes" className="relative py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight">
            Cash prizes for<br />
            <span className="text-gradient-gold">the best builders.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm font-mono">Prize pool details dropping soon. Track-specific prizes included.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center p-8 md:p-10 border-2 ${
                prize.featured
                  ? 'border-gold bg-gold/5'
                  : 'border-border/60 hover:border-gold/40'
              } transition-colors duration-300`}
            >
              <span className="text-xs font-mono text-muted-foreground tracking-widest">{prize.label}</span>
              <div className={`text-5xl md:text-6xl font-display font-black mt-3 mb-2 ${
                prize.featured ? 'text-gold' : 'text-foreground/30'
              }`}>
                {prize.place}
              </div>
              <div className="text-2xl font-display font-bold text-gradient-gold">{prize.amount}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
