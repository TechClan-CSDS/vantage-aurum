import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** "word" splits by spaces, "char" splits letter-by-letter */
  splitBy?: "word" | "char";
}

/**
 * Splits text into words (or chars) and reveals each with a staggered
 * slide-up + fade, triggered when the element scrolls into view.
 */
export function WordReveal({
  text,
  className = "",
  delay = 0,
  splitBy = "word",
}: WordRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const tokens = splitBy === "char" ? text.split("") : text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "char" ? 0.025 : 0.09,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
    >
      {tokens.map((token, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span className="inline-block" variants={child}>
            {token}
            {splitBy === "word" && i < tokens.length - 1 ? "" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
