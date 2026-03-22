import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import aurum_small from "@/assets/aurum-small.webp";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Tracks", id: "tracks" },
    { name: "Schedule", id: "schedule" },
    { name: "FAQ", id: "faq" },
    { name: "Connect", id: "connect" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative border-t border-gold/20 pt-0 pb-4 px-4 bg-[#0a0804] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 pt-6 text-center md:text-left">
          {/* Left: Logo */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <button onClick={scrollToTop} className="focus:outline-none">
              <img 
                src={aurum_small} 
                alt="Aurum" 
                width="200"
                height="60"
                loading="lazy"
                className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
              />
            </button>
          </div>

          {/* Right: Credits and Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full md:w-auto justify-center md:justify-end">
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-[10px] font-mono text-gold/70 font-bold uppercase tracking-[0.2em]">
                TechClan · Ace Society
              </span>
              <p className="text-[9px] font-mono text-foreground/30 uppercase tracking-[0.1em]">
                © {new Date().getFullYear()} Aurum. All rights reserved.
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-4 py-2 border border-gold/10 hover:border-gold/30 rounded-sm bg-gold/[0.02] transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold transition-colors" />
              <span className="text-[9px] font-mono text-gold/40 uppercase tracking-[0.2em] group-hover:text-gold/80 transition-colors">
                Top
              </span>
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
