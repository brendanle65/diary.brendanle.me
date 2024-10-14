// import libraries
import clsx from "clsx";
import { useRouter } from "next/router";
import { useContext } from "react";

// import other
import { Button } from "@components/interactives";
import { appStateContext } from "@contexts/AppStateContext";

// import styles
import styles from "./BlogHeader.module.scss";

interface BlogHeaderProps {
  className?: string;
  withNotes?: boolean; // Whether or not to display notes toggle button on uncollapsed layout
}

/**
 * The navigation bar above each blog post. It has two buttons: one for navigating back home and
 * another for toggling the author's notes.
 *
 * @component
 */
export function BlogHeader({ className, withNotes }: BlogHeaderProps) {
  const router = useRouter();
  const { isNotesOn, setIsNotesOn } = useContext(appStateContext);

  return (
    <header className={clsx("public-blogHeader", className)}>
      <nav className={styles.nav}>
        <Button
          className={clsx("public-back", styles.button)}
          onClick={() => router.push("/")}
        >
          <ion-icon
            name="arrow-back-outline"
            suppressHydrationWarning={true}
          />
          <span className={styles.label}>Go Home</span>
        </Button>

        {withNotes && (
          <Button
            className={clsx("public-toggle", styles.button, styles.note)}
            onClick={() => setIsNotesOn(!isNotesOn)}
          >
            <ion-icon
              name={isNotesOn ? "eye-outline" : "eye-off-outline"}
              suppressHydrationWarning={true}
            />
            <span className={styles.label}>{!isNotesOn ? "Enable" : "Disable"} Author’s Notes</span>
          </Button>
        )}
      </nav>
    </header>
  );
}
