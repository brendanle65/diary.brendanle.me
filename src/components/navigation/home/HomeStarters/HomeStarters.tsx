// import libraries
import clsx from "clsx";

// import other
import { Link } from "@components/interactives";

// import styles
import styles from "./HomeStarters.module.scss";

interface HomeStarterProps {
  className?: string;
}

/**
 * The section on the home page for pinned/favorited links.
 *
 * @component
 */
export function HomeStarters({ className }: HomeStarterProps) {
  return (
    <header className={clsx("public-starters", styles.header, className)}>
      <nav>
        <span className="public-text">New Here? If so, I suggest with </span>
        <Link
          className={styles.link}
          href="/p/about-the-writer"
        >
          <span className="public-text">About The Writer</span>
          <span className={clsx("public-border", styles.border)} />
        </Link>
        <span className="public-text">, </span>
        <Link
          className={styles.link}
          href="/p/vespa-125"
        >
          <span className="public-text">Vespa 125</span>
          <span className={clsx("public-border", styles.border)} />
        </Link>
        <span className="public-text">, and </span>
        <Link
          className={styles.link}
          href="/p/undeservia"
        >
          <span className="public-text">Undeservia</span>
          <span className={clsx("public-border", styles.border)} />
        </Link>
        <span className="public-text">.</span>
      </nav>
    </header>
  );
}
