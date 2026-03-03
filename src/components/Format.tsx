import { motion } from "framer-motion";
import { Clock, Users, MonitorSmartphone, Github, Globe, FileText, Video } from "lucide-react";

const details = [
  { icon: Clock, label: "Duration", value: "24 Hours" },
  { icon: Users, label: "Max Teams", value: "60" },
  { icon: MonitorSmartphone, label: "Format", value: "Offline" },
];

const submissions = [
  { icon: MonitorSmartphone, text: "Functional working prototype" },
  { icon: Github, text: "Public GitHub repository" },
  { icon: Globe, text: "Deployment link" },
  { icon: FileText, text: "Technical documentation" },
  { icon: Video, text: "Short demo video" },
];

const Format = () => {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4">Format</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Execution-focused. Ship working intelligence, not slide decks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-6">Event Details</h3>
            {details.map((d) => (
              <div key={d.label} className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <d.icon className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{d.label}</p>
                  <p className="text-foreground font-display font-semibold">{d.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Submission requirements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-6">Submission Requirements</h3>
            <div className="space-y-3">
              {submissions.map((s) => (
                <div key={s.text} className="flex items-center gap-3 p-3 border border-border/50 rounded-lg hover:border-gold/20 transition-colors">
                  <s.icon className="w-4 h-4 text-gold/70 shrink-0" />
                  <span className="text-sm text-foreground/80">{s.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Format;
