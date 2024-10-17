// todo - see https://pixel-transition.webflow.io

// import libraries
import { useEffect } from "react";
import { motion } from "framer-motion";

// import other
import { usePageAnimate } from "@hooks/usePageAnimate";
import { sequence } from "./Splash.animate";

// import styles
import styles from "./Splash.module.scss";

// randomly animate in...

export function Splash() {
  const { scope, play, stop } = usePageAnimate({ animate: sequence });

  useEffect(() => {
    // play();

    return () => stop();
  }, []);

  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const a = new Array(100).fill(0);
  shuffleArray(a);

  return (
    <div
      ref={scope}
      className={styles.container}
    >
      {Array.from({ length: 100 }, (_, i) => i + 1)
        .sort(() => Math.random() - 0.5)
        .map((val, idx) => (
          <motion.div
            key={idx}
            className={styles.block}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.009 * val, duration: 0 }}
          ></motion.div>
        ))}
    </div>
  );
}

// we could also shuffle array instead...
// maybe wait for exit animation instead... - wrap in AnimatePresence
// or maybe trigger animation manuelly inside compoennt

// todo: add button to play again...
// todo: update stuff based on session storage - when runs intially...
