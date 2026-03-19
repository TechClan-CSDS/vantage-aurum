import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import aurum_small from "@/assets/aurum-small.png";

const links = ["Home", "Tracks", "Schedule", "Venue", "Connect"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  /* ---- Scroll progress + scrolled state ---- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Active section tracker via scroll spy ---- */
  const handleClick = (item: string) => {
    setOpen(false);
    setActive(item);
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sectionIds = links.filter((l) => l !== "Home").map((l) => l.toLowerCase());

    // rootMargin creates a horizontal "band" in the middle of the viewport.
    // A section becomes active the moment it enters this band — works for any section height.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px", // detect when section crosses the upper 45% of viewport
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Reset to Home when scrolled back near the top
    const handleScrollTop = () => {
      if (window.scrollY < 80) setActive("Home");
    };
    window.addEventListener("scroll", handleScrollTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        /* Glassmorphism with saturate for richer frosted feel */
        background: scrolled
          ? "rgba(10, 8, 4, 0.75)"
          : "rgba(10, 8, 4, 0.55)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
        /* Gold glow under the navbar border */
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(212,175,55,0.12), 0 6px 24px rgba(212,175,55,0.06)"
          : "0 2px 20px rgba(0,0,0,0.25)",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* ── Scroll progress bar ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-50">
        <motion.div
          className="h-full origin-left"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #b4941c, #d4af37, #f0d060)",
            boxShadow: "0 0 8px rgba(212,175,55,0.7)",
          }}
          transition={{ ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-5 py-3">

        {/* Logo */}
        <div className="flex items-center">
          <button onClick={() => handleClick("Home")}>
            <img src={aurum_small} alt="Aurum" className="h-9 md:h-10 w-auto" />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex justify-center items-center gap-6">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="relative text-sm font-display font-semibold uppercase tracking-wider transition-colors"
            >
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  active === item ? "text-gold" : "text-foreground/60 hover:text-foreground/90"
                }`}
              >
                {item}
              </span>

              {/* Animated underline pill — uses layoutId for smooth slide */}
              {active === item && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                    boxShadow: "0 0 6px rgba(212,175,55,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground/80 hover:text-gold transition-colors"
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
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gold/10"
          style={{
            background: "rgba(10, 8, 4, 0.95)",
            backdropFilter: "blur(18px) saturate(160%)",
          }}
        >
          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`block w-full text-left px-6 py-4 text-sm font-display font-semibold uppercase tracking-wider border-b border-gold/10 transition-colors
                ${active === item ? "text-gold bg-gold/5" : "text-foreground/60 hover:text-gold hover:bg-gold/5"}`}
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