import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type PageTransitionProps = {
  children: ReactNode;
};

function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 14,
              filter: "blur(3px)",
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: -8,
              filter: "blur(2px)",
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.32,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-full"
    >
      {!shouldReduceMotion && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed left-0 right-0 top-[72px] z-40 h-[2px] origin-left bg-[#0170C1]"
        />
      )}

      {children}
    </motion.div>
  );
}

export default PageTransition;