import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";
import devfolioLogo from "./../assets/Devfolio.png";
import { useMemo, useState, useEffect } from "react";

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
   Countdown
--------------------------- */

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
    <div className="text-gold font-mono font-bold text-lg md:text-xl tracking-widest">
      {pad(time.d)}D : {pad(time.h)}H : {pad(time.m)}M : {pad(time.s)}S
    </div>
  );
};

/* ---------------------------
   Hero
--------------------------- */

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">

      <StaticBinaryRain />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">

        {/* Date + Countdown */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-gold font-display font-black tracking-[0.28em] text-lg md:text-xl">
            APRIL 11–12 '26
          </p>

          <div className="mt-3 flex justify-center">
            <Countdown />
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10"
        >
          <img
            src={aurumLogo}
            alt="Aurum"
            className="w-64 md:w-[26rem] lg:w-[34rem] mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Build real systems in 24 hours.
          <br />
          <span className="text-gold font-semibold">
            AI-native projects. Curated builders.
          </span>
        </motion.p>

        {/* Primary CTAs — max 2 side by side */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          {/* Apply */}
          <a
            href="https://aurum26.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-7 py-3 bg-gold text-black font-display font-bold text-sm uppercase tracking-wider border border-gold hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_18px_rgba(212,175,55,0.35)]"
            style={{ height: 46, minWidth: 260 }}
          >
            Apply via
            <img src={devfolioLogo} alt="Devfolio" className="h-5 w-auto" />
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Brochure */}
          <a
            href={new URL("./AURUM_Participant_Brochure.pdf", import.meta.url).href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-7 py-3 border border-gold text-gold font-display font-bold text-sm uppercase tracking-wider hover:bg-gold/10 transition-all duration-200"
            style={{ height: 46, minWidth: 180 }}
          >
            Participant Brochure
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-10 md:gap-14 text-center"
        >
          {[
            { value: "24h", label: "Build Window" },
            { value: "₹50K+", label: "Prize Pool" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-gold font-display font-black text-3xl md:text-4xl">
                {s.value}
              </div>
              <div className="text-muted-foreground text-xs font-mono uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;