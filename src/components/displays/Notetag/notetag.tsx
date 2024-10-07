// import libraries
import clsx from "clsx";

// import styles
import styles from "./Notetag.module.scss";

interface NotetagProps {
  className?: string;
  idx: number; // The index of the annotation (starts at 1)
}

/**
 * Renders a sequential superscript annotation tag.
 *
 * @component
 */
export function Notetag({ className, idx }: NotetagProps) {
  return (
    <sup
      data-notetag-idx={idx}
      className={clsx("public-notetag", styles.tag, className)}
    >
      <a
        id={`notetag-${idx}`}
        href={`#footnote-${idx}`}
        className={styles.anchor}
      >
        {idx}
      </a>
    </sup>
  );
}
