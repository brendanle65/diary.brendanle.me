// import libraries
import clsx from "clsx";
import { ReactNode, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { usePageAnimate, PageAnimateProps } from "@hooks/usePageAnimate";

// import other
import { BlogMetadata } from "@typings/blog";
import { AppHeader, AppFooter, BlogHeader, BlogFooter, BlogCategories } from "@components/navigation";
import { Note, Notes } from "@components/displays";
import { appStateContext } from "@contexts/AppStateContext";
import { sequence, setters } from "./Layout.animate";

// import style
import styles from "./Layout.module.scss";

export type LayoutProps = Pick<BlogMetadata, "categories" | "published" | "edited"> & {
  /**
   * Optional custom class name for styling the blog layout.
   */
  className?: string;

  /** The main content of the blog layout. */
  children: ReactNode;

  /** Optional notes to render. */
  notes?: Note[];

  /** Optional additional sticky element to be displayed alongside the main content. */
  aside?: () => JSX.Element;

  /**
   * Optional animation settings to control page rendering animations. If not provided, a default
   * page animation will run.
   */
  animation?: PageAnimateProps;
};

/**
 * Layout component that wraps every blog post page,
 * providing the header, footer, and more.
 *
 * @layout
 */
export function Layout({
  className,
  children,
  categories,
  published,
  edited,
  notes,
  aside: Aside,
  animation = {
    initial: setters,
    animate: sequence,
  },
}: LayoutProps) {
  const { scope, play, stop } = usePageAnimate(animation);
  const { isNotesOn } = useContext(appStateContext);

  useEffect(() => {
    play();

    return () => stop();
  }, []);

  return (
    <div
      ref={scope}
      className={clsx(styles.container, className)}
    >
      <AppHeader className={styles.appHeader} />
      <main>
        <BlogHeader withNotes={!!notes} />

        <div className={styles.content}>
          <BlogCategories categories={categories} />

          <div className={styles.articleContainer}>
            <article className={styles.article}>
              <>{children}</>
              {notes && (
                <Notes
                  content={notes}
                  className={styles.notes}
                />
              )}
            </article>

            {Aside && !isNotesOn && (
              <div className={styles.asideContainer}>
                <motion.div
                  initial={{ opacity: 0, x: 10, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, at: 1.5, ease: "easeOut" }}
                  className={clsx("public-aside", styles.aside)}
                >
                  <Aside />
                </motion.div>
              </div>
            )}
          </div>
        </div>

        <BlogFooter
          published={published}
          edited={edited}
        />
      </main>

      <AppFooter className={styles.appFooter} />
    </div>
  );
}
