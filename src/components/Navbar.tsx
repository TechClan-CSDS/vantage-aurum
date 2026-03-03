import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 bg-card/80 backdrop-blur-xl border border-border rounded-full">
        <span className="text-gradient-gold font-display font-bold text-xl tracking-tight">AURUM</span>
        <div className="hidden md:flex items-center gap-8">
          {["Tracks", "Prizes", "Format", "Evaluation"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-gold transition-colors font-body"
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
