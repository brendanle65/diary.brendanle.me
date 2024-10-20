// import libraries
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// import styles
import styles from "./Splash.module.scss";

const GRID_LENGTH = 144;
const grid = Array.from({ length: GRID_LENGTH }, (_, i) => i + 1).sort(() => Math.random() - 0.5); // randomly shuffle array

function getColor(idx) {
  if (idx % 4 === 1) {
    return "rgb(58, 8, 32)";
  } else if (idx % 4 === 2) {
    return "rgb(236, 91, 41)";
  } else if (idx % 4 === 3) {
    return "rgb(184, 102, 250)";
  } else {
    return "rgb(199, 228, 16)";
  }
}

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

/**
 * A pixelated splash page heavily inspired by https://techspeed.com.
 *
 * @returns {React.ReactElement} A splash page.
 * @splash
 */
export function Splash({ onMountReady }) {
  const [animate, setAnimate] = useState("visible");
  const timerRef = useRef<NodeJS.Timeout>(null);

  // Clear the interval when the component unmounts
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className={styles.container}>
      {grid.map((val, idx) => (
        <motion.div
          key={idx}
          style={{ background: getColor(val) }}
          className={styles.block}
          variants={variants}
          initial="hidden"
          animate={animate}
          onAnimationComplete={() => {
            if (idx >= GRID_LENGTH - 1) {
              timerRef.current = setTimeout(() => {
                setAnimate("hidden");
                onMountReady();
              }, 0.7 * 1000);
            }
          }}
          transition={{ delay: 0.0045 * val, duration: 0 }}
        ></motion.div>
      ))}
    </div>
  );
}
