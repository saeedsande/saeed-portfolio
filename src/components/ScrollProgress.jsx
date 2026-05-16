import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } =
    useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-[9999] origin-left"

      style={{
        scaleX: scrollYProgress,

        background:
          "linear-gradient(to right, #00ffff, #8b5cf6)",

        boxShadow:
          "0 0 20px rgba(0,255,255,0.7)",
      }}
    />
  );
}