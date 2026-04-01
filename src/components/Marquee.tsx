const items = [
  "AURUM",
  "VANTAGE HACKATHON",
  "24 HOURS",
  "60 TEAMS",
  "AI AGENTS",
  "BUILD · SHIP · WIN",
  "AI AGENTS",
];

const Marquee = () => {
  return (
    <div className="border-y-2 border-gold/30 bg-gold/5 py-3 overflow-hidden select-none">
      <div className="animate-marquee flex whitespace-nowrap w-fit">
        {/* Render the set twice for a seamless -50% translation loop */}
        {[...Array(2)].map((_, listIndex) => (
          <div key={listIndex} className="flex flex-nowrap shrink-0">
            {items.map((item, i) => (
              <span key={i} className="mx-6 text-sm font-display font-black text-gold/70 uppercase tracking-[0.2em]">
                {item} <span className="text-gold/30">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
