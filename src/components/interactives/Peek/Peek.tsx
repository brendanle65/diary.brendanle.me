// import libraries
import { ReactNode } from "react";
import clsx from "clsx";

// import other
import { CursorExtras, CursorState } from "@contexts/CursorContext";
import { withHover } from "../withHover/withHover";

// import styles
import styles from "./Peek.module.scss";

function _Span(props) {
  return <span {...props} />;
}

const Span = withHover(_Span);

type PeekProps = CursorExtras["image"] & {
  children: ReactNode;
  className?: string;
};

/**
 * A text element that when hovered over changes the cursor to an image.
 *
 * @component
 */
export function Peek({ children, className, src, alt, width, height }: PeekProps) {
  return (
    <Span
      className={clsx(className, styles.peek)}
      cursorState={CursorState.IMAGE}
      cursorExtras={{ image: { src, alt, width, height } }}
    >
      {children}
    </Span>
  );
}
