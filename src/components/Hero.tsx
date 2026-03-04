import { motion } from "framer-motion";
import aurumLogo from "@/assets/aurum-logo.png";
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
  const TARGET = new Date("2026-04-11T10:00:00");
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
    <div className="text-gold font-mono font-bold text-xl md:text-2xl tracking-widest">
      {pad(time.d)} : {pad(time.h)} : {pad(time.m)} : {pad(time.s)}
    </div>
  );
};

/* ---------------------------
   Hero
--------------------------- */

const Hero = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20"
    >
      <StaticBinaryRain />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-gold font-display font-black tracking-[0.28em] text-xl md:text-2xl">
            APRIL 11–12 2026
          </p>

          <div className="mt-3 flex justify-center">
            <Countdown />
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <img
            src={aurumLogo}
            alt="Aurum Hackathon"
            className="w-72 md:w-[30rem] lg:w-[36rem] mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-foreground/70 text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          Build real systems in 24 hours.  
          AI-native projects across fintech, data, blockchain, and open innovation.
        </motion.p>

        {/* Devfolio Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex justify-center mb-14"
        >
          <div
            className="apply-button"
            data-hackathon-slug="aurum2026"
            data-button-theme="dark-inverted"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-10 md:gap-14 text-center"
        >
          {[
            { value: "24h", label: "Build Window" },
            { value: "₹50K+", label: "Prize Pool" },
            { value: "4", label: "Tracks" },
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