// import libraries
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// import other
import { Note } from "../Notes";

// import styles
import styles from "./Sidenotes.module.scss";

const containerVariants: Variants = {
  grow: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  fade: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const strokeVariants: Variants = {
  initial: { width: 0 },
  grow: {
    width: "100%",
    transition: {
      duration: 0.25,
    },
  },
};

const noteVariants: Variants = {
  initial: { opacity: 0, x: 2 },
  fade: {
    opacity: "100%",
    x: 0,
    transition: {
      duration: 0.45,
    },
  },
};

interface SidenoteProps {
  content: Note[];
  className?: string;
}

export function Sidenotes({ content, className }: SidenoteProps) {
  const [noteStyles, setNoteStyles] = useState(() => {
    return Array(content.length).fill({ opacity: 0 }); // Hide until computed
  });

  // Calculate positions
  useEffect(() => {
    function handleNotes() {
      const notetags = document.querySelectorAll("[data-notetag-idx]");
      const newStyles = Array.from(notetags).map((tag) => {
        const { left, top } = tag.getBoundingClientRect();
        return { left: `${left}px`, top: `${top + window.scrollY}px` };
      });
      setNoteStyles(newStyles);
    }

    handleNotes();

    window.addEventListener("resize", handleNotes);

    return () => window.removeEventListener("resize", handleNotes);
  }, []);

  return (
    <motion.ul
      className={clsx("public-sidenotes", className)}
      variants={containerVariants}
      initial="initial"
      animate={["grow", "fade"]}
    >
      {content.map(({ children, className }, idx) => (
        <li
          key={idx}
          style={noteStyles[idx]}
          className={clsx(styles.container, className)}
        >
          <span className={clsx("public-line", styles.line)}>
            <motion.div
              className={styles.stroke}
              variants={strokeVariants}
            />
          </span>
          <motion.span
            className="public-note"
            variants={noteVariants}
          >
            {children}
          </motion.span>
        </li>
      ))}
    </motion.ul>
  );
}
