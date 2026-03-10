import { motion } from "framer-motion";

const schedule = [
  {
    day: "Day 1",
    date: "April 11",
    events: [
      ["Registration", "9:00 AM"],
      ["Opening Ceremony", "10:00 AM"],
      ["Hacking Begins", "11:00 AM"],
      ["Lunch", "2:30 PM"],
      ["Mentoring Round 1", "4:30 PM"],
      ["Evening Snacks", "6:00 PM"],
      ["Dinner", "9:00 PM"],
      ["Mentoring Round 2", "1:00 AM"],
    ],
  },
  {
    day: "Day 2",
    date: "April 12",
    events: [
      ["Breakfast", "8:00 AM"],
      ["Judging Begins", "9:00 AM"],
      ["Final Round Demos", "11:00 AM"],
      ["Lunch", "1:00 PM"],
      ["Prize Distribution", "2:00 PM"],
      ["Closing Ceremony", "3:30 PM"],
    ],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Event <span className="text-gradient-gold">Schedule</span>
          </h2>
        </div>

        {schedule.map((dayBlock) => (
          <div key={dayBlock.day} className="mb-20">

            {/* Day label */}
            <p className="text-center font-display font-black uppercase tracking-widest text-sm mb-10">
              {dayBlock.day} · <span className="text-gold">{dayBlock.date}</span>
            </p>

            {/* Timeline */}
            <div className="relative ml-4 border-l border-gold/20">

              {dayBlock.events.map(([event, time], i) => (
                <motion.div
                  key={event}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="relative pl-10 pb-8 last:pb-0"
                >

                  {/* Dot */}
                  <div className="absolute -left-[6px] top-2 w-3 h-3 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

                  {/* Event */}
                  <div className="flex justify-between items-center border border-gold/20 px-5 py-4 hover:bg-gold/5 transition-colors">
                    <span className="text-foreground">{event}</span>
                    <span className="text-gold font-mono">{time}</span>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Schedule;