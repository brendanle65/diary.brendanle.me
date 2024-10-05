// import libraries
import clsx from "clsx";
import { useRouter } from "next/router";

// import other
import { Button } from "@components/interactives";

// import styles
import styles from "./BlogHeader.module.scss";

interface BlogHeaderProps {
  className?: string;
}

/**
 * The navigation bar above each blog post. It has two buttons: one for navigating back home and
 * another for toggling the author's notes.
 *
 * @component
 */
export function BlogHeader({ className }: BlogHeaderProps) {
  const router = useRouter();

  return (
    <header className={clsx("public-blogHeader", className)}>
      <nav className={styles.nav}>
        <Button
          className={styles.button}
          onClick={() => router.push("/")}
        >
          <ion-icon
            name="arrow-back-outline"
            suppressHydrationWarning={true}
          />
          <span className={styles.label}>Go Home</span>
        </Button>

        <Button className={clsx(styles.button, styles.note)}>
          <ion-icon
            name={true ? "eye-outline" : "eye-off-outline"}
            suppressHydrationWarning={true}
          />
          <span className={styles.label}>{false ? "Enable" : "Disable"} Author’s Notes</span>
        </Button>
      </nav>
    </header>
  );
}
