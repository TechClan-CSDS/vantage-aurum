import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aurumLogo from "@/assets/aurum-logo.webp";
import devfolioLogo from "./../assets/Devfolio_Logo.png";
import { useState, useEffect, useRef } from "react";
import { Vortex } from "./Vortex";

/* ---------------------------
   Static Binary Background
--------------------------- */

const StaticBinaryRain = () => {
  const [svgUrl, setSvgUrl] = useState("");

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Restore original size as requested (12px)
    const cellWidth = 14;
    const cellHeight = 18;
    const fontSize = "12px";

    const cols = Math.ceil(width / cellWidth);
    const rows = Math.ceil(height / cellHeight);

    let svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`;
    svgStr += `<style>text { font-family: monospace; font-size: ${fontSize}; }</style>`;
    
    for (let r = 0; r < rows; r++) {
      const rowProgress = r / rows;
      const rowAlpha = Math.max(0, 0.16 - rowProgress * 0.16);

      for (let c = 0; c < cols; c++) {
        const bit = Math.random() > 0.5 ? "1" : "0";
        const alpha = rowAlpha * (0.85 + Math.random() * 0.15);
        if (alpha > 0.01) {
          svgStr += `<text x="${c * cellWidth + cellWidth / 2}" y="${r * cellHeight + cellHeight / 2}" fill="rgba(180, 148, 28, ${alpha.toFixed(3)})" text-anchor="middle" dominant-baseline="central">${bit}</text>`;
        }
      }
    }
    svgStr += `</svg>`;
    
    // Safely encode for data URI
    const encoded = btoa(svgStr);
    setSvgUrl(`data:image/svg+xml;base64,${encoded}`);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {svgUrl && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${svgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 45%, rgba(10,8,4,0.75) 70%, #0a0804 90%)",
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
   Postponement Notice Banner
--------------------------- */

const PostponementNotice = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative flex flex-col items-center gap-3 px-6 py-5 mx-auto max-w-lg border border-amber-500/40 bg-amber-950/30 backdrop-blur-sm rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.08)]"
  >
    {/* Pulsing warning dot */}
    <div className="flex items-center gap-2.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
      </span>
      <span className="text-amber-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
        Event Postponed
      </span>
    </div>
    <p className="text-foreground/70 font-mono text-xs sm:text-sm text-center leading-relaxed">
      Due to <span className="text-amber-400 font-semibold">LPG shortage</span>, Aurum has been postponed.
      <br />
      A new date will be announced shortly. Stay tuned!
    </p>
  </motion.div>
);

/* ---------------------------
   Hero
--------------------------- */

const NumberTicker = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setDisplayValue(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={nodeRef}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (statsRef.current) observer.observe(statsRef.current);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden px-4 pt-20 md:pt-20 pb-16">
      {/* Static Binary Pattern */}
      <StaticBinaryRain />

      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[600px] bg-gold/[0.03] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">

        {/* Date + Postponement Notice */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-4 px-7 py-2.5 border border-amber-500/40 bg-amber-950/20 rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.05)] relative z-20">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span className="text-amber-400 font-display font-black tracking-[0.4em] text-xs md:text-sm uppercase">
              Date: TBA
            </span>
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          </div>

          <div className="flex justify-center">
            <PostponementNotice />
          </div>
        </motion.div>

        <ShimmerDivider />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative -mt-10 -mb-2 w-full flex items-center justify-center max-w-5xl mx-auto min-h-[15rem] md:min-h-[20rem]"
        >
          {/* Vortex Background Map */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center -m-20"
            style={{
              maskImage: "radial-gradient(ellipse at center, black 18%, transparent 55%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 18%, transparent 55%)",
              opacity: isMobile ? 0.68 : 1,
            }}
          >
            <Vortex
              backgroundColor="transparent"
              baseHue={30} // Gold/Yellow hue range
              rangeHue={20} // Restrict variance to stay in gold/yellow
              particleCount={isMobile ? 50 : 400}
              baseSpeed={0.0}
              rangeSpeed={1}
              baseRadius={isMobile ? 0.45 : 1}
              rangeRadius={isMobile ? 0.9 : 2}
              saturation={isMobile ? 95 : 100}
              lightness={isMobile ? 55 : 60}
              alphaMultiplier={isMobile ? 0.36 : 0.45}
            />
          </div>

          <img
            src={aurumLogo}
            alt="Aurum"
            width="608"
            height="200"
            loading="eager"
            className="relative z-10 w-[85%] sm:w-[24rem] md:w-[30rem] lg:w-[38rem] mx-auto filter drop-shadow-[0_0_40px_rgba(212,175,55,0.1)]"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-6"
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
           className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-16 w-full max-w-sm sm:max-w-none mx-auto"
         >
           <a
             href="https://aurum26.devfolio.co/"
             target="_blank"
             rel="noopener noreferrer"
             className="group relative flex items-center justify-center gap-3 px-6 sm:px-9 py-3 bg-gold text-black font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] w-full sm:w-auto h-12 sm:min-w-[260px]"
           >
             Apply via
             <img src={devfolioLogo} alt="" width="100" height="40" loading="lazy" className="h-4 sm:h-5 w-auto" />
             Devfolio
             <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
           </a>

           <a
             href={new URL("./AURUM_Participant_Brochure.pdf", import.meta.url).href}
             target="_blank"
             rel="noopener noreferrer"
             className="group flex items-center justify-center gap-2 px-6 sm:px-9 py-3 border border-gold/40 text-gold font-display font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-gold/10 transition-all w-full sm:w-auto h-12 sm:min-w-[200px]"
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
          className="flex flex-row flex-nowrap justify-center items-start gap-6 sm:gap-14 md:gap-24 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <div className="text-center flex-1 min-w-0">
            <div className="text-gold font-display font-black text-3xl sm:text-4xl md:text-5xl">
              <NumberTicker value={24} suffix="h" />
            </div>
            <div className="text-muted-foreground text-[10px] font-mono uppercase tracking-[0.3em] mt-2">Build Window</div>
          </div>
          <div className="text-center flex-1 min-w-0">
            <div className="text-gold font-display font-black text-3xl sm:text-4xl md:text-5xl">
              <NumberTicker value={50} prefix="₹" suffix="K+" />
            </div>
            <div className="text-muted-foreground text-[10px] font-mono uppercase tracking-[0.3em] mt-2">Prize Pool</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;