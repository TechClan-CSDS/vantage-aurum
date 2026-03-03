import { motion } from "framer-motion";
import { Clock, Users, Wifi, Github, Globe, FileText, Video, Monitor } from "lucide-react";

const Stat = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-4 h-4 text-gold/60 shrink-0" />
    <div>
      <p className="text-foreground font-display font-semibold text-sm">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  </div>
);

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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Ship it or<br />
            <span className="text-gradient-gold">it doesn't count.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5">The basics</p>
            <div className="space-y-4">
              <Stat icon={Clock} label="Duration" value="24 hours straight" />
              <Stat icon={Users} label="Capacity" value="60 teams max" />
              <Stat icon={Wifi} label="Format" value="Offline, in-person" />
              <Stat icon={Monitor} label="Platform" value="Devfolio" />
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5">You must submit</p>
            <ul className="space-y-2.5">
              {submissions.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <span className="w-1 h-1 bg-gold/50 rounded-full shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Working intelligence, not conceptual prototypes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Format;
