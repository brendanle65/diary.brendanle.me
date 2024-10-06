// import libraries
import clsx from "clsx";
import { useContext } from "react";

// import other
import { Sidenotes } from "./(Sidenotes)/Sidenotes";
import { Footnotes } from "./(Footnotes)/Footnotes";
import { appStateContext } from "@contexts/AppStateContext";

// import styles
import styles from "./Notes.module.scss";

export interface Note {
  idx: number;
  children: any;
  className?: string;
}

interface NotesProps {
  content: Note[];
  className?: string;
}

export function Notes({ content, className }: NotesProps) {
  const { isNotesOn } = useContext(appStateContext);

  return (
    <>
      {isNotesOn && (
        <Sidenotes // Hidden by css when viewport is too small
          content={content}
          className={clsx(styles.sidenotes, className)}
        />
      )}

      <Footnotes // Hidden by css when viewport is too big
        content={content}
        className={clsx(styles.footnotes, className)}
      />
    </>
  );
}
