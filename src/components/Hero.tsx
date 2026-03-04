import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.png";
import { useMemo, useState, useEffect } from "react";
import devfoliologo from "./../assets/Devfolio.png"

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
    <div className="text-gold font-mono font-bold text-xl md:text-2xl tracking-widest drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]">
      {pad(time.d)} : {pad(time.h)} : {pad(time.m)} : {pad(time.s)}
    </div>
  );
};

/* ---------------------------
   Hero
--------------------------- */

const Hero = () => {
  const [devfolioLoaded, setDevfolioLoaded] = useState(false);
  const [devfolioError, setDevfolioError] = useState(false);

  // Load Devfolio SDK with better error handling
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
      setDevfolioLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setDevfolioLoaded(true);
      setDevfolioError(false);
    };
    
    script.onerror = () => {
      console.error('Failed to load Devfolio SDK');
      setDevfolioError(true);
      setDevfolioLoaded(false);
    };

    document.body.appendChild(script);
    
    return () => {
      // Check if script exists before removing
      const existingScript = document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Fallback button in case Devfolio SDK fails to load
  const handleFallbackApply = () => {
    window.open('https://devfolio.co', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">

      <StaticBinaryRain />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">

        {/* Date + Countdown */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-gold font-display font-black tracking-[0.28em] text-xl md:text-2xl">
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
            className="w-72 md:w-[28rem] lg:w-[36rem] mx-auto"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Devfolio Apply Button */}
          {!devfolioError ? (
            <div
              className="apply-button"
              data-hackathon-slug="YOUR-HACKATHON-SLUG" // Replace with your actual hackathon slug
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            />
          ) : (
            /* Fallback button if Devfolio SDK fails */
            <button
              onClick={handleFallbackApply}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-display font-black text-base tracking-wider border-2 border-gold-dark hover:bg-gold-light transition-all duration-200"
              style={{ height: "44px", width: "312px" }}
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 123.46" fill="currentColor">
                <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
                <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
              </svg>
              <span>Apply with Devfolio</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}

          <a
            href="#tracks"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold/30 text-gold font-display font-bold text-sm tracking-wider hover:border-gold/60 hover:bg-gold/5 transition-all duration-200"
          >
            View Tracks ↓
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-10 md:gap-14 text-center mb-16"
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

        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-8 border-t border-gold/10"
        >
          <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-6">
            Powered By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Devfolio Logo */}
            <a
              href="https://devfolio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={devfoliologo}
                alt="Devfolio"
                className="h-8 md:h-10 w-auto"
              />
            </a>
            
            {/* Placeholder for other sponsors - add more as needed */}
            {/* <img src="/path/to/sponsor-logo.png" alt="Sponsor" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" /> */}
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;