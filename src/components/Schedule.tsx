import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Code2, Mic2, Coffee, Users } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { WordReveal } from "./WordReveal";

/* ---- Data ---- */
type EventType = "hack" | "meal" | "ceremony" | "mentor" | "snack";

interface ScheduleEvent {
  name: string;
  time: string;
  type: EventType;
}

interface DaySchedule {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

const schedule: DaySchedule[] = [
  {
    day: "Day 1",
    date: "TBA",
    events: [
      { name: "Registration", time: "9:00 AM", type: "ceremony" },
      { name: "Opening Ceremony", time: "10:00 AM", type: "ceremony" },
      { name: "Hacking Begins", time: "11:00 AM", type: "hack" },
      { name: "Lunch", time: "2:30 PM", type: "meal" },
      { name: "Mentoring Round 1", time: "4:30 PM", type: "mentor" },
      { name: "Evening Snacks", time: "6:00 PM", type: "snack" },
      { name: "Dinner", time: "9:00 PM", type: "meal" },
      { name: "Mentoring Round 2", time: "1:00 AM", type: "mentor" },
    ],
  },
  {
    day: "Day 2",
    date: "TBA",
    events: [
      { name: "Breakfast", time: "8:00 AM", type: "meal" },
      { name: "Judging Begins", time: "9:00 AM", type: "hack" },
      { name: "Final Round Demos", time: "11:00 AM", type: "hack" },
      { name: "Lunch", time: "1:00 PM", type: "meal" },
      { name: "Prize Distribution", time: "2:00 PM", type: "ceremony" },
      { name: "Closing Ceremony", time: "3:30 PM", type: "ceremony" },
    ],
  },
];

/* ---- Event type config ---- */
const typeConfig: Record<EventType, { icon: React.ElementType; color: string; dot: string }> = {
  hack:     { icon: Code2,    color: "text-gold-light",     dot: "bg-gradient-to-br from-gold-light to-gold" },
  meal:     { icon: Utensils, color: "text-foreground/80",  dot: "bg-gradient-to-br from-gold-light to-gold" },
  ceremony: { icon: Mic2,     color: "text-foreground/90",  dot: "bg-gradient-to-br from-gold-light to-gold" },
  mentor:   { icon: Users,    color: "text-gold/80",        dot: "bg-gradient-to-br from-gold-light to-gold" },
  snack:    { icon: Coffee,   color: "text-foreground/70",  dot: "bg-gradient-to-br from-gold-light to-gold" },
};

/* ---- Timeline Event Row ---- */
const EventRow = ({ event, index }: { event: ScheduleEvent; index: number }) => {
  const cfg = typeConfig[event.type];
  const Icon = cfg.icon;
  const shouldGlowDot = event.type === "hack";

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      className="relative pl-8 sm:pl-10 pb-6 last:pb-0 group"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[3px] sm:-left-[5px] top-[14px] flex items-center justify-center">
        <span
          className={`absolute w-4 h-4 rounded-full ${cfg.dot} opacity-20 group-hover:opacity-30 ${
            shouldGlowDot ? "timeline-dot-soft-glow" : ""
          }`}
        />
        <span className={`relative w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
      </div>

      {/* Card */}
      <div
        className="flex items-center justify-between border-l-2 border-transparent px-4 sm:px-5 py-3 transition-all duration-300 group-hover:border-gold"
      >
        <div className="flex items-center justify-between gap-3 w-full border border-border border-l-0 px-4 sm:px-5 py-3 group-hover:bg-white/5 hover-glow-gold">
          <div className="flex items-center gap-3">
            <Icon className={`w-4 h-4 flex-shrink-0 ${cfg.color}`} />
            <span className={`text-sm font-body font-medium ${cfg.color}`}>{event.name}</span>
          </div>
          <span className="text-gold font-mono text-xs tracking-widest ml-4 flex-shrink-0">{event.time}</span>
        </div>
      </div>
    </motion.div>
  );
};

/* ---- Main Component ---- */
const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="schedule-premium py-12 md:py-24 px-4 bg-background text-foreground">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <SectionReveal className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            <WordReveal text="Event" className="text-foreground" />{" "}
            <WordReveal text="Schedule" className="text-gradient-gold" />
          </h2>
          <motion.p
            className="text-sm text-muted-foreground font-mono mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >24-hour build window · Date TBA</motion.p>
        </SectionReveal>

        {/* Day Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="relative flex gap-1 p-1 border border-border bg-card">
            {schedule.map((day, i) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(i)}
                className="relative px-8 py-2 text-xs font-display font-bold uppercase tracking-[0.2em] transition-colors duration-200 z-10"
              >
                {/* Sliding active background */}
                {activeDay === i && (
                  <motion.span
                    layoutId="day-tab"
                    className="absolute inset-0 bg-white/5 border border-gold/30"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${activeDay === i ? "text-gold-light" : "text-muted-foreground hover:text-foreground"}`}>
                  {day.day} · {day.date}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {(Object.entries(typeConfig) as [EventType, typeof typeConfig[EventType]][]).map(([type, cfg]) => {
            const Icon = cfg.icon;
            return (
              <span key={type} className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <Icon className={`w-3 h-3 ${cfg.color}`} />
                {type}
              </span>
            );
          })}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="relative ml-2 sm:ml-4 border-l border-border/70 sm:border-border pl-0"
          >
            {schedule[activeDay].events.map((event, i) => (
              <EventRow key={event.name} event={event} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Schedule;