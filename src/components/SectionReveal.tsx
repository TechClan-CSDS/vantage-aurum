import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps a section with a clip-path curtain-wipe reveal.
 * Content starts hidden behind inset(100% 0 0 0) and wipes upward.
 */
export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      animate={
        isInView
          ? { clipPath: "inset(0% 0 0 0)", opacity: 1 }
          : { clipPath: "inset(100% 0 0 0)", opacity: 0 }
      }
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
