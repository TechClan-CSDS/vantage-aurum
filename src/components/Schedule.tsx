import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Code2, Mic2, Coffee, Trophy, Users } from "lucide-react";

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
    date: "April 11",
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
    date: "April 12",
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
  hack:     { icon: Code2,   color: "text-gold",           dot: "bg-gold" },
  meal:     { icon: Utensils, color: "text-amber-400/80",  dot: "bg-amber-400" },
  ceremony: { icon: Mic2,    color: "text-foreground/90",  dot: "bg-foreground/60" },
  mentor:   { icon: Users,   color: "text-sky-400/80",     dot: "bg-sky-400" },
  snack:    { icon: Coffee,  color: "text-amber-400/60",   dot: "bg-amber-400/60" },
};

/* ---- Timeline Event Row ---- */
const EventRow = ({ event, index }: { event: ScheduleEvent; index: number }) => {
  const cfg = typeConfig[event.type];
  const Icon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      className="relative pl-10 pb-6 last:pb-0 group"
    >
      {/* Pulsing dot */}
      <div className="absolute -left-[5px] top-[14px] flex items-center justify-center">
        <span className={`absolute w-4 h-4 rounded-full ${cfg.dot} opacity-20 group-hover:opacity-30 animate-ping`} />
        <span className={`relative w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
      </div>

      {/* Card */}
      <div className="flex items-center justify-between border border-gold/15 px-5 py-3.5 group-hover:border-gold/35 group-hover:bg-gold/[0.02] transition-all duration-300">
        <div className="flex items-center gap-3">
          <Icon className={`w-4 h-4 flex-shrink-0 ${cfg.color}`} />
          <span className={`text-sm font-body font-medium ${cfg.color}`}>{event.name}</span>
        </div>
        <span className="text-gold font-mono text-xs tracking-widest ml-4 flex-shrink-0">{event.time}</span>
      </div>
    </motion.div>
  );
};

/* ---- Main Component ---- */
const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Event <span className="text-gradient-gold">Schedule</span>
          </h2>
          <p className="text-sm text-gold/50 font-mono mt-4">24-hour build window · April 11–12 '26</p>
        </motion.div>

        {/* Day Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="relative flex gap-1 p-1 border border-gold/20 bg-gold/[0.02]">
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
                    className="absolute inset-0 bg-gold/10 border border-gold/30"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${activeDay === i ? "text-gold" : "text-foreground/40 hover:text-foreground/70"}`}>
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
            className="relative ml-4 border-l border-gold/20 pl-0"
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