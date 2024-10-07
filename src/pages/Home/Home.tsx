// import libraries
import clsx from "clsx";

// import other
import { AppHeader, AppFooter } from "@components/navigation";
import { HomeCategories, HomeStarters, HomePosts } from "@components/navigation";

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

      <main>
        <HomeStarters className={styles.homeStarter} />
        <HomeCategories />

        <h1 className={clsx("public-latest", styles.latest)}>Latest:</h1>
        <HomePosts className={styles.posts} />
      </main>

      <AppFooter className={styles.appFooter} />
    </div>
  );
}
