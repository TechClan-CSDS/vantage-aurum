import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";
import devfolioLogo from "./../assets/Devfolio.png";
import { useMemo, useState, useEffect, useRef } from "react";

/* ---------------------------
   Static Binary Background
--------------------------- */

const StaticBinaryRain = () => {
  const grid = useMemo(() => {
    const cellWidth = 14;
    const cellHeight = 18;

    const cols = Math.ceil(window.innerWidth / cellWidth);
    const rows = Math.ceil(window.innerHeight / cellHeight);

    return Array.from({ length: rows }, (_, r) => {
      const rowProgress = r / rows;
      const rowAlpha = Math.max(0, 0.16 - rowProgress * 0.16);

      return Array.from({ length: cols }, () => ({
        bit: Math.random() > 0.5 ? "1" : "0",
        alpha: rowAlpha * (0.85 + Math.random() * 0.15),
      }));
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          padding: "6px 10px",
          fontFamily: "monospace",
          fontSize: "12px",
          lineHeight: "1.4",
          letterSpacing: "0.06em",
          width: "100%",
          height: "100%",
        }}
      >
        {grid.map((row, r) => (
          <div key={r} style={{ display: "flex", gap: "6px" }}>
            {row.map((cell, c) => (
              <span
                key={c}
                style={{
                  color: `rgba(180,148,28,${cell.alpha})`,
                }}
              >
                {cell.bit}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 45%, rgba(10,8,4,0.75) 70%, #0a0804 90%)",
        }}
      />
    </div>
  );
};

/* ---------------------------
   Shimmer Divider
--------------------------- */

const ShimmerDivider = () => (
  <div className="relative flex items-center justify-center w-full max-w-xs mx-auto my-8">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_#d4af37]"
    />
  </div>
);

/* ---------------------------
   Flip Countdown Card
--------------------------- */

const FlipCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative w-16 md:w-20 h-16 md:h-20 flex items-center justify-center overflow-hidden rounded-md"
        style={{
          background: "#0a0804",
          border: "1px solid rgba(212,175,55,0.25)",
          perspective: "1000px",
        }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-px bg-black/50 z-10" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ opacity: 0, rotateX: -90, y: 15 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: 90, y: -15 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="font-mono font-bold text-3xl md:text-4xl text-gold"
            style={{ textShadow: "0 0 15px rgba(212,175,55,0.3)" }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/50">{label}</span>
    </div>
  );
};

const Countdown = () => {
  const TARGET = new Date("2026-04-11T09:00:00");
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-3">
      <FlipCard value={pad(time.d)} label="Days" />
      <span className="text-gold/30 font-mono text-2xl mb-6">:</span>
      <FlipCard value={pad(time.h)} label="Hours" />
      <span className="text-gold/30 font-mono text-2xl mb-6">:</span>
      <FlipCard value={pad(time.m)} label="Mins" />
      <span className="text-gold/30 font-mono text-2xl mb-6">:</span>
      <FlipCard value={pad(time.s)} label="Secs" />
    </div>
  );
};

/* ---------------------------
   Hero
--------------------------- */

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 bg-[#0a0804]">

      {/* Static Binary Pattern */}
      <StaticBinaryRain />

      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[600px] bg-gold/[0.03] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">

        {/* Date / Countdown */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-4 px-7 py-2.5 border border-gold/30 bg-background rounded-full mb-10 shadow-[0_0_20px_rgba(212,175,55,0.05)] relative z-20">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_8px_#d4af37]" />
            <span className="text-gold font-display font-black tracking-[0.4em] text-xs md:text-sm uppercase">
              April 11–12 '26
            </span>
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_8px_#d4af37]" />
          </div>

          <div className="flex justify-center">
            <Countdown />
          </div>
        </motion.div>

        <ShimmerDivider />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10"
        >
          <img
            src={aurumLogo}
            alt="Aurum"
            className="w-68 md:w-[30rem] lg:w-[38rem] mx-auto filter drop-shadow-[0_0_40px_rgba(212,175,55,0.1)]"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          Build real systems in <span className="text-gold font-bold">24 hours.</span>
          <br />
          <span className="text-foreground/90 font-medium tracking-wide">AI-native projects. Curated builders.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
        >
          <a
            href="https://aurum26.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-9 py-3 bg-gold text-black font-display font-bold text-sm uppercase tracking-wider transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
            style={{ height: 48, minWidth: 260 }}
          >
            Apply via
            <img src={devfolioLogo} alt="Devfolio" className="h-5 w-auto" />
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href={new URL("./AURUM_Participant_Brochure.pdf", import.meta.url).href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-9 py-3 border border-gold/40 text-gold font-display font-bold text-sm uppercase tracking-wider hover:bg-gold/10 transition-all"
            style={{ height: 48, minWidth: 200 }}
          >
            Brochure
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-14 md:gap-24"
        >
          <div className="text-center">
            <div className="text-gold font-display font-black text-4xl md:text-5xl">24h</div>
            <div className="text-muted-foreground text-[10px] font-mono uppercase tracking-[0.3em] mt-2">Build Window</div>
          </div>
          <div className="text-center">
            <div className="text-gold font-display font-black text-4xl md:text-5xl">₹50K+</div>
            <div className="text-muted-foreground text-[10px] font-mono uppercase tracking-[0.3em] mt-2">Prize Pool</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;