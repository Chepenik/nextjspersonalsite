import { motion, useReducedMotion } from "framer-motion";
import React from "react";

// easeInOutQuint-ish — gives the panels a silk-glide feel.
const EASE = [0.76, 0, 0.24, 1];
const DURATION = 0.85;

// viewBox is 0 0 100 100 with preserveAspectRatio="none" so the path stretches
// to any viewport. `depth` is the % of viewport width the right edge curves inward.
// Both paths share the same M-L-Q-L-Z command structure so framer-motion can
// smoothly interpolate the control point.
const curved = (depth) =>
  `M 0 0 L 100 0 Q ${100 - depth} 50 100 100 L 0 100 Z`;
const flat = "M 0 0 L 100 0 Q 100 50 100 100 L 0 100 Z";

const SilkPanel = ({ colorClass, zIndex, delay, depth, withExit = false }) => (
  <motion.div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0"
    style={{ zIndex }}
    initial={{ x: "0%" }}
    animate={{ x: "-101%" }}
    {...(withExit && { exit: { x: "0%" } })}
    transition={{ delay, duration: DURATION, ease: EASE }}
  >
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      className="h-full w-full"
    >
      <motion.path
        className={`fill-current ${colorClass}`}
        initial={{ d: curved(depth) }}
        animate={{ d: flat }}
        {...(withExit && { exit: { d: curved(depth) } })}
        transition={{ delay, duration: DURATION, ease: EASE }}
      />
    </svg>
  </motion.div>
);

const TransitionEffect = () => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 bg-primary dark:bg-primaryDark"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    );
  }

  return (
    <>
      <SilkPanel
        colorClass="text-primary dark:text-primaryDark"
        zIndex={30}
        delay={0}
        depth={18}
        withExit
      />
      <SilkPanel
        colorClass="text-light dark:text-dark"
        zIndex={20}
        delay={0.12}
        depth={12}
      />
      <SilkPanel
        colorClass="text-dark dark:text-light"
        zIndex={10}
        delay={0.24}
        depth={6}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 bottom-0 left-0 z-40 w-[6vw] mix-blend-overlay
                   bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: "100vw" }}
        animate={{ x: "-6vw" }}
        transition={{ duration: DURATION, ease: EASE }}
      />
    </>
  );
};

export default TransitionEffect;
