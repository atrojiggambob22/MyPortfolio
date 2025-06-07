// components/animations/SlideIn.js
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// SlideIn component with scroll-triggered animation using Intersection Observer
const SlideIn = ({ children, from = "left", duration = 0.8 }) => {
  // Define different direction variants
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  // Controls for animation and in-view detection
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true }); // Only trigger once

  // When element is in view, start animation
  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref} // Attach ref to detect scroll position
      initial={variants[from]} // Start from specified direction
      animate={controls} // Controlled animation trigger
      transition={{ duration, ease: "easeOut" }} // Animation duration and easing
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;