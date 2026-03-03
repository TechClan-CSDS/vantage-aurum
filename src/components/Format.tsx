import { motion } from "framer-motion";
import { Clock, Users, Wifi, Monitor } from "lucide-react";

const stats = [
  { icon: Clock, value: "24 HRS", label: "Straight" },
  { icon: Users, value: "60", label: "Teams Max" },
  { icon: Wifi, value: "OFFLINE", label: "In-Person" },
  { icon: Monitor, value: "DEVFOLIO", label: "Platform" },
];

const submissions = [
  "Working prototype",
  "Public GitHub repo",
  "Live deployment link",
  "Technical docs",
  "Short demo video",
];

const Format = () => {
  return (
    <section id="format" className="relative py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight">
            Ship it or<br />
            <span className="text-gradient-gold">it doesn't count.</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 border-2 border-gold/20 mb-10"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 text-center ${i < 3 ? 'border-r-2 border-gold/20' : ''} ${
                i < 2 ? 'border-b-2 md:border-b-0 border-gold/20' : ''
              }`}
            >
              <s.icon className="w-5 h-5 text-gold mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-display font-black text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground font-mono mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Submissions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-border/60 p-6 md:p-8"
        >
          <p className="text-xs text-gold font-display font-bold uppercase tracking-[0.2em] mb-5">You must submit</p>
          <div className="grid md:grid-cols-2 gap-3">
            {submissions.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span className="text-gold font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-foreground/80 font-body">{s}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-5 font-mono border-t border-border/40 pt-4">
            → Working intelligence, not conceptual prototypes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Format;
