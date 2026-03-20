import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface TerminalRevealProps {
  lines: string[];
  className?: string;
  delay?: number;
}

const TerminalReveal = ({ lines, className = "", delay = 0 }: TerminalRevealProps) => {
  const [displayText, setDisplayText] = useState<string[]>(lines.map(() => ""));
  const [isTyping, setIsTyping] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Sync state if lines change
    setDisplayText(lines.map(() => ""));
    setCurrentLineIndex(0);
    setIsTyping(false);

    if (isInView) {
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay, lines]);

  useEffect(() => {
    if (!isTyping || lines.length === 0) return;

    let currentLine = 0;
    let currentChar = 0;
    let timeoutId: NodeJS.Timeout;
    
    const typeNextChar = () => {
      if (currentLine >= lines.length) {
        setIsTyping(false);
        return;
      }

      // Final safety check
      const lineText = lines[currentLine];
      if (!lineText) {
        currentLine++;
        currentChar = 0;
        timeoutId = setTimeout(typeNextChar, 10);
        return;
      }

      setCurrentLineIndex(currentLine);
      setDisplayText(prev => {
        // Ensure we don't try to update a state index that no longer exists in current lines array
        const next = [...prev];
        if (currentLine < next.length) {
          next[currentLine] = lineText.substring(0, currentChar + 1);
        }
        return next;
      });

      currentChar++;

      if (currentChar >= lineText.length) {
        currentLine++;
        currentChar = 0;
        timeoutId = setTimeout(typeNextChar, isMobile ? 350 : 250); // Much slower line break
      } else {
        timeoutId = setTimeout(typeNextChar, isMobile ? 35 + Math.random() * 30 : 20 + Math.random() * 20); // Much slower typing speed
      }
    };

    typeNextChar();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isTyping, lines, isMobile]);

  return (
    <div 
      ref={containerRef}
      className={`font-mono text-sm border border-gold/20 bg-[#0a0804] rounded shadow-2xl overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border-b border-gold/10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <div className="ml-2 text-[10px] text-muted-foreground uppercase tracking-widest">aurum-system-v2.exe</div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-1 min-h-[160px]">
        {displayText.map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-gold/40 select-none">{"$>"}</span>
            <span className={i === currentLineIndex && isTyping ? "text-gold" : i < currentLineIndex ? "text-foreground/80" : "text-foreground/40"}>
              {line}
              {isTyping && i === currentLineIndex && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-gold ml-1 align-middle"
                />
              )}
            </span>
          </div>
        ))}
        {!isTyping && (
          <div className="flex gap-3">
            <span className="text-gold/40 select-none">{"$>"}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-gold ml-1 align-middle"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalReveal;
