import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ThrowCard({ children }) {
  const ref = React.useRef(null);

  // Scroll progress of this card itself
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 20%"], // adjust slide timing
  });

  // Slide UP motion mapping
  const y = useTransform(scrollYProgress, [0, 1], [120, -60]); 
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
