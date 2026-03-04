import { motion } from "framer-motion";

const features = [
  {
    title: "24 Hours",
    desc: "Non-stop building. From idea to working system.",
  },
  {
    title: "₹50K+ Prizes",
    desc: "Rewards for the most impactful builds.",
  },
  {
    title: "Food & Swag",
    desc: "Fuel, merch, and everything you need to ship.",
  },
];

const AboutAurum = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            What is <span className="text-gradient-gold">Aurum</span>?
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto text-center text-foreground/80 text-base leading-relaxed mb-16">
          Aurum is a curated AI-native hackathon where builders ship real
          systems in 24 hours. Teams tackle ambitious problems across
          fintech, AI, blockchain, and open innovation — transforming ideas
          into working products with real impact.
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -4 }}
              className="border border-gold/20 p-6 text-center hover:bg-gold/5 transition"
            >
              <p className="font-display font-black text-xl text-gold mb-2">
                {f.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutAurum;