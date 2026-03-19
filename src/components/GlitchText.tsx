import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*0123456789><_+";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[]; // Array of words to keep their original styling
}

const GlitchText = ({ text, className = "", delay = 0, highlightWords = [] }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    let intervalId: NodeJS.Timeout;

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "\n") return char;
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setIsDone(true);
        }

        iteration += 1 / 3; // Slower iteration for better effect
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(intervalId);
    };
  }, [isInView, text, delay]);


  return (
    <span ref={ref} className={`relative inline-block whitespace-pre-wrap ${className}`}>
      
      <span className={isDone ? "" : "opacity-0 pointer-events-none select-none"}>
        {text}
      </span>
      
      {!isDone && (
        <span 
          className="absolute top-0 left-0 h-full w-full whitespace-pre-wrap font-mono tracking-wider pointer-events-none"
          style={{ WebkitTextFillColor: "initial", color: "rgba(212,175,55,0.9)" }}
        >
          {isInView ? displayText : ""}
        </span>
      )}
    </span>
  );
};

export default GlitchText;
