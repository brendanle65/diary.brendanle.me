// import libraries
import clsx from "clsx";

// import other
import { Note } from "../Notes";

// import styles
import styles from "./Footnotes.module.scss";

interface FootnoteProps {
  content: Note[];
  className?: string;
}

export function Footnotes({ content, className }: FootnoteProps) {
  return (
    <ul className={clsx("public-footnotes", className)}>
      {content.map(({ children, idx, className }) => (
        <li
          id={"note-" + idx}
          key={idx}
          className={clsx("public-note", styles.container, className)}
        >
          <span className={styles.index}>{idx}.</span>
          <span>{children}</span>
        </li>
      ))}
    </ul>
  );
}
