// import libraries
import clsx from "clsx";
import { AnimatePresence, motion, Transition } from "framer-motion";
import { useEffect, useState } from "react";

// import others
import { Link } from "@components/interactives";
import { BlogMetadata } from "@typings/blog";
import { usePrevious } from "@hooks/usePrevious";

// import styles
import styles from "./PostsByDate.module.scss";

interface PostsByDateProps {
  date: string;
  articles: Pick<BlogMetadata, "title" | "slug" | "blurb">[];
}

/**
 * A block of posts listed, sectioned by date.
 *
 * @component
 */
export function PostsByDate({ date, articles }: PostsByDateProps) {
  const [transitions, setTransitions] = useState<{ animate: Transition; exit: Transition }>();
  const oldArticles = usePrevious<PostsByDateProps["articles"]>(articles); // before applying new filter
  const [displayArticles, setDisplayArticles] = useState(articles); // articles on display

  // only update displayed articles after transition is set
  useEffect(() => {
    setDisplayArticles(articles);
  }, [transitions]);

  useEffect(() => {
    const newArticles = articles;

    // only run after initial render (when there is a previous value)
    if (oldArticles) {
      const isSubset = newArticles.every((element) => oldArticles.includes(element));
      const isNotAddingNew = newArticles.length <= oldArticles.length;
      const isRemovingOnly = isSubset && isNotAddingNew;

      const isSuperset = oldArticles.every((element) => newArticles.includes(element));
      const isNotRemovingOld = newArticles.length >= oldArticles.length;
      const isAddingOnly = isSuperset && isNotRemovingOld;

      // Change transition depending on type of DOM update
      if (isRemovingOnly || isAddingOnly) {
        setTransitions({
          animate: {
            marginTop: { duration: 0.4, ease: "easeOut" },
            height: { duration: 0.4, ease: "easeOut" },
            opacity: { duration: 0.4, delay: 0.4 },
          },
          exit: {
            margin: { duration: 0.4, delay: 0.4, ease: "easeOut" },
            height: { duration: 0.4, delay: 0.4, ease: "easeOut" },
            opacity: { duration: 0.4 },
          },
        });
      } else {
        setTransitions({
          animate: {
            marginTop: { duration: 0.4, ease: "easeOut", delay: 1 },
            height: { duration: 0.4, ease: "easeOut", delay: 1 },
            opacity: { duration: 0.6, delay: 1.4 },
          },
          exit: {
            margin: { duration: 0.4, delay: 1, ease: "easeOut" },
            height: { duration: 0.4, delay: 1, ease: "easeOut" },
            opacity: { duration: 0.4, delay: 0.6 },
          },
        });
      }
    }
  }, [articles]);

  return (
    <section className={styles.container}>
      <div className="public-label">
        <div className={styles.date}>
          <span className="public-date">{date}</span>
        </div>
        <div className={styles.lines}>
          <div className={styles.linesWrapper}>
            <div className={clsx("public-vertical", styles.vertical)}></div>
            <div className={clsx("public-horizontal", styles.horizontal)}></div>
          </div>
        </div>
      </div>
      <ol className={styles.list}>
        <AnimatePresence initial={false}>
          {displayArticles.map(({ title, slug, blurb }) => (
            <motion.li
              layoutId={slug}
              key={slug}
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                marginTop: 24,
                transition: transitions?.animate,
              }}
              exit={{
                opacity: 0,
                height: 0,
                margin: 0,
                transition: transitions?.exit,
              }}
              className={clsx("public-article", styles.article)}
            >
              <Link
                href={"/p/" + slug}
                className={styles.link}
              >
                <h2 className={styles.title}>
                  <span className="public-text">{title}</span>
                  <span className={clsx("public-border", styles.border)}></span>
                </h2>
                <p className={clsx("public-text", styles.blurb)}>{blurb}</p>
              </Link>
            </motion.li>
          ))}
          {/** Hack to prevent odd bug where when there is exactly one article, it offsets. */}
          <div className={styles.hack} />
        </AnimatePresence>
      </ol>
    </section>
  );
}
