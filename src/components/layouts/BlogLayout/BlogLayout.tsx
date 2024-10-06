// import libraries
import clsx from "clsx";
import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";

// import other
import { BlogMetadata } from "@typings/blog";
import { AppHeader, AppFooter, BlogHeader, BlogFooter, BlogCategories } from "@components/navigation";
import { Note, Notes } from "@components/displays";
import { appStateContext } from "@contexts/AppStateContext";

// import style
import styles from "./BlogLayout.module.scss";

type BlogHelmetProps = Pick<BlogMetadata, "categories" | "published" | "edited"> & {
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
};

/**
 * Layout component that wraps every blog post page,
 * providing the header, footer, and more.
 *
 * @layout
 */
export function BlogLayout({
  className,
  children,
  categories,
  published,
  edited,
  notes,
  aside: Aside,
}: BlogHelmetProps) {
  const { isNotesOn } = useContext(appStateContext);

  return (
    <div className={clsx(styles.container, className)}>
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
