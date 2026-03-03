const items = [
  "AURUM",
  "VANTAGE HACKATHON",
  "24 HOURS",
  "60 TEAMS",
  "AI AGENTS",
  "BUILD · SHIP · WIN",
  "AURUM",
  "VANTAGE HACKATHON",
  "24 HOURS",
  "60 TEAMS",
  "AI AGENTS",
  "BUILD · SHIP · WIN",
];

const Marquee = () => {
  return (
    <div className="border-y-2 border-gold/30 bg-gold/5 py-3 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-6 text-sm font-display font-black text-gold/70 uppercase tracking-[0.2em]">
            {item} <span className="text-gold/30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
