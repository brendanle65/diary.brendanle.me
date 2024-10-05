// import libraries
import clsx from "clsx";

// import styles
import styles from "./AppFooter.module.scss";

interface AppFooterProps {
  className?: string;
}

/**
 * The main footer attached to the bottom of each page,
 * detailing legal rights and attributions.
 *
 * @component
 */
export function AppFooter({ className }: AppFooterProps) {
  return (
    <footer className={clsx("public-appFooter", styles.footer, className)}>
      <div className="public-copyright">&copy; {new Date().getFullYear()} Diary of a Poet</div>
      <div className="public-attribution">Designed in Figma and coded in VS Code, and by yours truly.</div>
    </footer>
  );
}
