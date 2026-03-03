import { motion } from "framer-motion";

const MorphBlob = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, delay }}
    className={`absolute bg-gradient-gold opacity-[0.07] blur-3xl animate-morph ${className}`}
  />
);

export default MorphBlob;
