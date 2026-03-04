import { motion } from "framer-motion";

const day1 = [
  ["Registration", "9:00 AM"],
  ["Opening Ceremony", "10:00 AM"],
  ["Hacking Begins", "11:00 AM"],
  ["Lunch", "2:30 PM"],
  ["Mentoring Round 1", "5:00 PM"],
  ["Evening Snacks", "6:00 PM"],
  ["Initial Evaluation", "7:00 PM"],
  ["Dinner", "9:00 PM"],
  ["Midnight Activity", "12:00 AM"],
];

const day2 = [
  ["Breakfast", "7:00 AM"],
  ["Mentoring Round 2", "8:00 AM"],
  ["Hacking Ends", "11:00 AM"],
  ["Project Submission", "11:30 AM"],
  ["Final Evaluation", "12:00 PM"],
  ["Lunch", "1:00 PM"],
  ["Judging & Demos", "2:00 PM"],
  ["Prize Distribution", "3:00 PM"],
  ["Closing Ceremony", "3:30 PM"],
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Event <span className="text-gradient-gold">Schedule</span>
          </h2>
        </div>


        <div className="grid md:grid-cols-2 gap-10">

          {/* DAY 1 */}
          <div className="border border-gold/20">
            <div className="px-6 py-4 border-b border-gold/20 bg-gold/5">
              <p className="font-display font-black uppercase text-sm tracking-wide">
                Day 1 · <span className="text-gold">April 11</span>
              </p>
            </div>

            {day1.map(([event, time], i) => (
              <div
                key={event}
                className={`flex justify-between px-6 py-5 ${
                  i !== day1.length - 1 ? "border-b border-gold/20" : ""
                }`}
              >
                <span className="text-foreground">{event}</span>
                <span className="text-gold font-mono">{time}</span>
              </div>
            ))}
          </div>

          {/* DAY 2 */}
          <div className="border border-gold/20">
            <div className="px-6 py-4 border-b border-gold/20 bg-gold/5">
              <p className="font-display font-black uppercase text-sm tracking-wide">
                Day 2 · <span className="text-gold">April 12</span>
              </p>
            </div>

            {day2.map(([event, time], i) => (
              <div
                key={event}
                className={`flex justify-between px-6 py-5 ${
                  i !== day2.length - 1 ? "border-b border-gold/20" : ""
                }`}
              >
                <span className="text-foreground">{event}</span>
                <span className="text-gold font-mono">{time}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Schedule;