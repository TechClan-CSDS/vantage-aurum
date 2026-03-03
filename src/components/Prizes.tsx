import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

const prizes = [
  { icon: Trophy, place: "1st", amount: "TBA" },
  { icon: Award, place: "2nd", amount: "TBA" },
  { icon: Medal, place: "3rd", amount: "TBA" },
];

const Prizes = () => {
  return (
    <section id="prizes" className="relative py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Cash prizes for<br />
            <span className="text-gradient-gold">the best builders.</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Prize pool details coming soon. Track-specific prizes included.</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center p-6 md:p-8 border border-border/60 rounded-xl ${i === 0 ? 'border-gold/30 bg-gold/[0.03]' : ''}`}
            >
              <prize.icon className={`w-7 h-7 mx-auto mb-3 ${i === 0 ? 'text-gold' : 'text-foreground/30'}`} />
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{prize.place} Place</p>
              <p className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{prize.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
