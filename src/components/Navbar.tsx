import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import aurum_small from "@/assets/aurum-small.png";

const links = ["Tracks", "Venue", "Schedule", "Connect"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20 bg-background/80 backdrop-blur-lg"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-5 py-3">

        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img src={aurum_small} alt="Aurum" className="h-9 md:h-10 w-auto" />
          </a>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex justify-center items-center gap-6">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-display font-semibold text-foreground/70 hover:text-gold uppercase tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex justify-end items-center gap-3">

          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-gold text-black font-display font-bold text-sm uppercase tracking-wider border border-gold hover:bg-gold-light transition-colors"
          >
            Apply Now
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-gold/20 bg-background"
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-display font-semibold text-foreground/70 hover:text-gold uppercase tracking-wider border-b border-border/30"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;