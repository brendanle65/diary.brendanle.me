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
          key={idx}
          id={`footnote-${idx}`}
          className={clsx("public-note", styles.container, className)}
        >
          <a
            href={`#notetag-${idx}`}
            className={styles.index}
          >
            {idx}.
          </a>
          <span>{children}</span>
        </li>
      ))}
    </ul>
  );
}
