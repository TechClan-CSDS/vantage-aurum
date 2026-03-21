import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { WordReveal } from "./WordReveal";

const faqs = [
  {
    q: "Where will Aurum take place?",
    a: "Aurum will be held at Dayananda Sagar College of Engineering (DSCE), located at Shavige Malleshwara Hills, 91st Main Rd, 1st Stage, Kumaraswamy Layout, Bengaluru, Karnataka 560111.",
  },
  {
    q: "What exactly is Aurum?",
    a: "Aurum is a 24-hour offline hackathon organized by the CSE (Data Science) Department at DSCE, Bangalore. The event focuses on building real, working systems that integrate AI agent-driven workflows.",
  },
  {
    q: "Who is eligible to participate?",
    a: "Aurum is open to undergraduate and postgraduate college students from any institution who are interested in building intelligent systems, working with data, and solving real-world problems.",
  },
  {
    q: "How do I apply?",
    a: "Applications are submitted through Devfolio. You can apply by clicking the 'Apply via Devfolio' button on the website and submitting your project idea during registration.",
  },
  {
    q: "How are teams selected?",
    a: "Teams are shortlisted based on the strength of their application, the originality of the idea they propose, and the feasibility of building a working prototype during the hackathon.",
  },
  {
    q: "What is the team size limit?",
    a: "Teams can have up to four members. Working in teams encourages collaboration and faster execution during the 24-hour build window.",
  },
  {
    q: "Is there any participation fee?",
    a: "No. Aurum is completely free to participate in for all selected teams.",
  },
  {
    q: "What tracks are available?",
    a: "Aurum features four tracks: Fintech, Data Science, Blockchain, and Open Innovation. Regardless of track, every project must incorporate meaningful AI-driven intelligence or agent-based workflows.",
  },
  {
    q: "What should participants bring?",
    a: "Participants should bring their laptop, charger, student ID, and any hardware they plan to use. Carrying a personal hotspot is recommended as a backup internet option.",
  },
  {
    q: "Will food and accommodation be provided?",
    a: "Yes. Meals, refreshments, and overnight accommodation will be provided for all participants throughout the 24-hour hackathon.",
  },
  {
    q: "Will internet access be available?",
    a: "High-speed Wi-Fi will be available at the venue. However, participants are advised to carry a mobile hotspot for backup connectivity.",
  },
  {
    q: "Is the event fully offline?",
    a: "Yes. Aurum is an in-person hackathon. All selected teams will build and present their projects on campus at DSCE during the event.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight flex flex-wrap justify-center gap-x-3 md:gap-x-4">
            <WordReveal text="Frequently Asked Questions" className="text-foreground [&>span:last-child]:text-gradient-gold" stagger={0} />
          </h2>
        </SectionReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`relative border border-gold/20 bg-card/50 transition-all duration-300 hover:border-gold/40 overflow-hidden ${
                  isOpen ? "border-gold/50 bg-gold/[0.02]" : ""
                }`}
              >
                {/* Active Left Border Accent */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 md:px-6 md:py-5 font-display font-bold text-sm md:text-base uppercase tracking-wide flex justify-between items-center text-foreground focus:outline-none"
                >
                  <span
                    className={`mr-4 transition-colors duration-300 ${
                      isOpen ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isOpen ? "text-gold" : "text-gold/50"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-foreground/70 text-sm leading-relaxed font-body border-t border-gold/10 ml-1">
                        <p className="pt-4">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;