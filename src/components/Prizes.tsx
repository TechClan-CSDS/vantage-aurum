import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

const prizes = [
  { icon: Trophy, place: "1st Place", amount: "TBA", color: "text-gold-light" },
  { icon: Award, place: "2nd Place", amount: "TBA", color: "text-gold" },
  { icon: Medal, place: "3rd Place", amount: "TBA", color: "text-gold-dark" },
];

const Prizes = () => {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-gold-radial pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4">Cash Prizes</h2>
          <p className="text-muted-foreground">Rewarding excellence in execution and innovation</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 text-center border border-border rounded-xl bg-card hover:border-gold/40 transition-all duration-500 ${i === 0 ? 'md:-mt-4 glow-gold' : ''}`}
            >
              <prize.icon className={`w-10 h-10 mx-auto mb-4 ${prize.color}`} />
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2 font-body">{prize.place}</p>
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{prize.amount}</p>
              <p className="text-xs text-muted-foreground mt-2">+ Track-specific prizes</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
