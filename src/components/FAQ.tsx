import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    a: "Aurum features four tracks: Fintech, AI/ML & Data Science, Blockchain, and Open Innovation. Regardless of track, every project must incorporate meaningful AI-driven intelligence or agent-based workflows.",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
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
                className={`border-2 border-gold/20 bg-card/50 transition-all duration-200 hover:border-gold/40 ${
                  isOpen ? "border-gold/50" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 md:px-6 md:py-5 font-display font-bold text-sm md:text-base uppercase tracking-wide flex justify-between items-center text-foreground focus:outline-none"
                >
                  <span className="mr-4">{faq.q}</span>

                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-gold transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0"
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