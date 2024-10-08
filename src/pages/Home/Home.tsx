// import libraries
import clsx from "clsx";
import { usePageAnimate } from "@hooks/usePageAnimate";
import { useEffect } from "react";

// import other
import { AppHeader, AppFooter, HomeStarters, HomeCategories, HomePosts } from "@components/navigation";
import { sequence, setters } from "./Home.animate";

// import styles
import styles from "./Home.module.scss";

/**
 * The home page.
 *
 * @returns {React.ReactElement} A index page.
 * @page
 */
export function Home() {
  const { scope, play, stop } = usePageAnimate({ initial: setters, animate: sequence });

  useEffect(() => {
    play();

    return () => stop();
  }, []);

  return (
    <div
      ref={scope}
      className={styles.container}
    >
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
