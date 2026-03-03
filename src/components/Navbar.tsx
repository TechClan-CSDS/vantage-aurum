import { motion } from "framer-motion";
import aurum from "@/assets/aurum-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2 bg-card/70 backdrop-blur-xl border border-border/50 rounded-full">
        <a href="#" className="flex items-center">
          <img src={aurum} alt="Aurum" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Tracks", "Prizes", "Format", "Evaluation", "Venue"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-foreground/60 hover:text-gold transition-colors font-body"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://devfolio.co"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gradient-gold text-primary-foreground font-display font-semibold text-sm rounded-full hover:scale-105 transition-transform"
        >
          Apply
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
