import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  tiltOptions?: {
    max?: number;
    perspective?: number;
    scale?: number;
  };
}

export function AnimatedCard({
  children,
  className = "",
  tiltOptions = { max: 20, perspective: 1000, scale: 1.05 }
}: AnimatedCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [ tiltOptions.max || 15, -(tiltOptions.max || 15) ]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [ -(tiltOptions.max || 15), tiltOptions.max || 15 ]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: tiltOptions.perspective || 1000
      }}
      whileHover={{ scale: tiltOptions.scale || 1.05, zIndex: 10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div 
        style={{ transform: "translateZ(30px)", width: "100%", height: "100%" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
