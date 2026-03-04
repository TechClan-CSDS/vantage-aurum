import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Aurum?",
    a: "Aurum (Vantage) is the first official hackathon organized by the CSE (Data Science) Department at DSCE, Bangalore. It's a 24-hour offline hackathon focused on AI agent-based workflows.",
  },
  {
    q: "Who can participate?",
    a: "Aurum is open to all college students passionate about AI-driven systems, applied data science, and emerging technologies.",
  },
  {
    q: "How do I register?",
    a: "Registration is done through Devfolio. Click the 'Apply on Devfolio' button on our website to start your application.",
  },
  {
    q: "What is the maximum team size?",
    a: "Each team can have a maximum of 4 members. No solo participation — teamwork is essential.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. Participation in Aurum is completely free.",
  },
  {
    q: "What should I bring?",
    a: "Bring your laptop, charger, student ID, and any other devices you need. We recommend carrying a mobile hotspot as backup.",
  },
  {
    q: "Will food and accommodation be provided?",
    a: "Yes, all participants will be provided with meals and comfortable accommodation throughout the 24-hour event.",
  },
  {
    q: "Will Wi-Fi be provided?",
    a: "We will provide high-speed Wi-Fi, but we strongly recommend carrying a mobile hotspot as backup for uninterrupted participation.",
  },
  {
    q: "What does Open Innovation mean?",
    a: "Open Innovation allows projects that don't fit neatly into Fintech, AI/ML, or Blockchain tracks — but every project must still integrate AI agent-based workflows.",
  },
  {
    q: "What is the selection criteria?",
    a: "Teams are selected based on creativity, innovation, and feasibility of project ideas submitted during registration.",
  },
  {
    q: "Is the hackathon offline?",
    a: "Yes, Aurum is a fully offline hackathon held at DSCE, Kumaraswamy Layout, Bangalore.",
  },
  {
    q: "Is there a code of conduct?",
    a: "Yes. All participants must follow our code of conduct promoting a respectful and inclusive environment.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gold font-mono text-xs uppercase tracking-[0.3em]">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mt-2 text-foreground">FAQ</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`
                  border-2 border-gold/20 bg-card/50 transition-all duration-200
                  hover:border-gold/40
                  ${isOpen ? "border-gold/50 shadow-[4px_4px_0px_0px_hsl(43_70%_35%/0.4)]" : "shadow-[3px_3px_0px_0px_hsl(43_70%_35%/0.15)]"}
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 md:px-6 md:py-5 font-display font-bold text-sm md:text-base uppercase tracking-wide flex justify-between items-center text-foreground focus:outline-none"
                >
                  <span className="mr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-gold transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-foreground/70 text-sm leading-relaxed font-body border-t border-gold/10">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
