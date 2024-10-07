// import libraries
import { Transition, motion } from "framer-motion";
import { useContext } from "react";

// import other
import { useCursorPosition } from "@hooks/useCursorPosition";
import { CursorExtras, CursorState, cursorStateContext } from "@contexts/CursorContext";
import { PolaroidImage, SmileyFace } from "@components/displays";

// import styles
import styles from "./Cursor.module.scss";

interface CursorAnimate {
  animate: {
    width: number;
    height: number;
    opacity: number;
    mixBlendMode: any; // Framer Motion types throws errors if `mixBlendMode` is typed as a string despite being valid.
    backgroundColor: string | string[];
    borderRadius: string;
  };
  transition?: Transition;
}

function getCursorAnimateMappings(
  cursorExtras: CursorExtras
): Record<keyof typeof CursorState, CursorAnimate> {
  return {
    IDLE: {
      animate: {
        width: 25,
        height: 25,
        opacity: 1,
        mixBlendMode: "difference",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
      },
      transition: {
        backgroundColor: {
          duration: 0,
        },
      },
    },
    HOVER: {
      animate: {
        width: 9,
        height: 9,
        opacity: 1,
        mixBlendMode: "normal",
        backgroundColor: "#000000",
        borderRadius: "50%",
      },
      transition: {
        backgroundColor: {
          duration: 0,
        },
      },
    },
    SMILEY: {
      animate: {
        width: 30,
        height: 30,
        opacity: 1,
        mixBlendMode: "normal",
        backgroundColor: ["#000000", "var(--yellow)"],
        borderRadius: "50%",
      },
      transition: {
        mixBlendMode: {
          duration: 0,
        },
        backgroundColor: {
          duration: 0.25,
        },
      },
    },
    POLAROID: {
      animate: {
        width: 50,
        height: 55,
        opacity: 1,
        mixBlendMode: "normal",
        backgroundColor: "#ffffff",
        borderRadius: "0",
      },
    },
    IMAGE: {
      animate: {
        width: cursorExtras?.image?.width || 144,
        height: cursorExtras?.image?.height || 144,
        opacity: 1,
        mixBlendMode: "normal",
        backgroundColor: "#ffffff",
        borderRadius: "0",
      },
    },
  };
}

/**
 * A custom cursor element that follows the mouse position.
 * It supplements the browser's default cursor functionality.
 *
 * @component
 */
export function Cursor() {
  const { cursorState, cursorExtras } = useContext(cursorStateContext);
  const { animate, transition } = getCursorAnimateMappings(cursorExtras)[cursorState];
  const { x, y } = useCursorPosition({
    width: animate.width,
    height: animate.height,
  });

  return (
    <motion.div
      style={{ translateX: x, translateY: y }}
      className={styles.cursor}
      animate={animate}
      transition={transition}
    >
      {cursorState === CursorState.SMILEY && (
        <motion.div
          className={styles.wrapper}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
        >
          <SmileyFace />
        </motion.div>
      )}
      {cursorState === CursorState.POLAROID && (
        <motion.div
          className={styles.wrapper}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <PolaroidImage
            width={animate.width}
            height={animate.height}
            src="/headshot.png"
            alt="professional headshot of the author"
          />
        </motion.div>
      )}
      {cursorState === CursorState.IMAGE && (
        <img
          className={styles.image}
          src={cursorExtras.image.src}
          alt={cursorExtras.image.alt}
        />
      )}
    </motion.div>
  );
}
