import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { WordReveal } from "./WordReveal";

const socials = [
  {
    name: "Email",
    icon: Mail,
    link: "mailto:theacesociety2023@gmail.com",
  },
  {
    name: "CSDS Department",
    icon: Linkedin,
    link: "https://www.linkedin.com/company/csds-dsce/",
  },
  {
    name: "ACE Society",
    icon: Instagram,
    link: "https://instagram.com/the.ace.society_",
  },
  {
    name: "CSDS Department",
    icon: Instagram,
    link: "https://instagram.com/csds_dsce",
  },
];

const Socials = () => {
  return (
    <section id="connect" className="py-20 px-4 border-t border-gold/20">
      <div className="max-w-5xl mx-auto text-center">

        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
              <WordReveal text="Have" className="text-foreground" />{" "}
              <WordReveal text="Questions?" className="text-gradient-gold" delay={0.1} />
          </h2>
        </SectionReveal>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={`${item.name}-${i}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center justify-center gap-4 w-full sm:w-40 h-28 sm:h-32 border border-gold/20 bg-gold/[0.02] text-foreground/70 hover:text-gold hover:border-gold/50 hover:bg-gold/[0.05] transition-all duration-300 rounded-sm relative overflow-hidden"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-3 rounded-full bg-gold/5 border border-gold/10 group-hover:border-gold/30 group-hover:bg-gold/10 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="relative z-10 text-[11px] font-display font-bold uppercase tracking-[0.15em] text-center px-2">
                  {item.name}
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Socials;