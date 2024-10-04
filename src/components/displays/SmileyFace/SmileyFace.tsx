// import libraries
import { motion, AnimationProps } from "framer-motion";

// import styles
import variables from "@styles/variables.module.scss";
import styles from "./SmileyFace.module.scss";

const transition: AnimationProps["transition"] = {
  duration: 0.25,
  delay: 0.75,
};

/**
 * An animated smiley face that transitions from an indifferent expression to a smile.
 *
 * @component
 */
export function SmileyFace() {
  return (
    <div className={styles.smiley}>
      <div className={styles.eyes}>
        <motion.div
          className={styles.eye}
          animate={{ height: 7 }}
          transition={transition}
        />
        <motion.div
          className={styles.eye}
          animate={{ height: 7 }}
          transition={transition}
        />
      </div>
      <motion.div
        className={styles.smile}
        animate={{
          borderRadius: "50%",
          border: "2px solid transparent",
          borderBottom: `2px solid ${variables.brown}`,
          width: "17px",
        }}
        transition={transition}
      />
    </div>
  );
}
