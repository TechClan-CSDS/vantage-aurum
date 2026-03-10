import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import aurum_small from "@/assets/aurum-small.png";

const links = ["Home", "Tracks", "Schedule", "Venue", "Connect"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (item: string) => {
    setOpen(false);
    setActive(item);

    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(item.toLowerCase());

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sections = links
      .filter((l) => l !== "Home")
      .map((l) => document.getElementById(l.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => s && observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20 bg-background/80 backdrop-blur-lg"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-5 py-3">

        {/* Logo */}
        <div className="flex items-center">
          <button onClick={() => handleClick("Home")}>
            <img src={aurum_small} alt="Aurum" className="h-9 md:h-10 w-auto" />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center items-center gap-6">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`text-sm font-display font-semibold uppercase tracking-wider transition-colors
                ${
                  active === item
                    ? "text-gold"
                    : "text-foreground/70 hover:text-gold"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-gold/20 bg-background"
        >
          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`block w-full text-left px-6 py-3 text-sm font-display font-semibold uppercase tracking-wider border-b border-border/30
                ${
                  active === item
                    ? "text-gold"
                    : "text-foreground/70 hover:text-gold"
                }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;