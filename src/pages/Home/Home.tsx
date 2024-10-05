// import libraries
import clsx from "clsx";

// import other
import { AppHeader, AppFooter } from "@components/navigation";

// import styles
import styles from "./Home.module.scss";

/**
 * The home page.
 *
 * @page
 */
export function Home() {
  return (
    <div className={styles.container}>
      <AppHeader className={styles.appHeader} />

      <main>Hello World!</main>

      <AppFooter className={styles.appFooter} />
    </div>
  );
}
