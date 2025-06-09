
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          translateX: x,
          translateY: y,
        }}
      />
      <style>{`
        * {
          cursor: none;
        }

        .custom-cursor {
          width: 15px;
          height: 15px;
          background: black;
          opacity:0.5;
          border-radius: 50%;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}

export default CustomCursor;
