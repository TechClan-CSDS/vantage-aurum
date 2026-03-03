import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import aurum from "@/assets/aurum-logo.png";

const links = ["Tracks", "Prizes", "Format", "Evaluation", "Venue"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-gold/30 bg-background/90 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center">
          <img src={aurum} alt="Aurum" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-display font-semibold text-foreground/70 hover:text-gold uppercase tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://devfolio.co"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gold text-primary-foreground font-display font-bold text-sm uppercase tracking-wider border-2 border-gold-dark hover:bg-gold-light transition-colors"
          >
            Apply Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t-2 border-gold/20 bg-background"
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-display font-semibold text-foreground/70 hover:text-gold hover:bg-card uppercase tracking-wider border-b border-border/30 transition-colors"
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
