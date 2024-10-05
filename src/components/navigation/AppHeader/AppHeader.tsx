// import libraries
import clsx from "clsx";

// import other
import { Link } from "@components/interactives";
import { CursorState } from "@contexts/CursorContext";

// import style
import styles from "./AppHeader.module.scss";

interface AppHeaderProps {
  className?: string;
}

/**
 * The main header attached to the top of each page, displaying the logo and important links.
 *
 * @component
 */
export function AppHeader({ className }: AppHeaderProps) {
  return (
    <header className={clsx("public-appHeader", className)}>
      <nav className={styles.nav}>
        <Link
          href="/p/the-happiness-blueprint"
          className={clsx("public-blueprint", styles.link, styles.blueprint)}
          cursorState={CursorState.SMILEY}
        >
          the happiness blueprint
        </Link>
        <Link
          href="/"
          className={clsx("public-logo", styles.logo)}
        >
          diary of a poet
        </Link>
        <Link
          href="/p/about-the-writer"
          className={clsx("public-about", styles.link, styles.about)}
          cursorState={CursorState.POLAROID}
        >
          about the writer
        </Link>
      </nav>
      <hr className={clsx("public-divider", styles.divider)} />
    </header>
  );
}
