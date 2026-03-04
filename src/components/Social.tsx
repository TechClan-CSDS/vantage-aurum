import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

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

        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Have <span className="text-gradient-gold">Questions?</span>
        </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 px-6 py-3 border border-gold/30 text-foreground/80 hover:text-gold hover:border-gold transition-all"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-display uppercase tracking-wider">
                  {item.name}
                </span>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Socials;