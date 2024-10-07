// import libraries
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

// import others
import { Link } from "@components/interactives";
import { BlogMetadata } from "@typings/blog";

// import styles
import styles from "./PostsByDate.module.scss";

interface PostsByDateProps {
  date: string;
  articles: Pick<BlogMetadata, "title" | "slug" | "blurb">[];
}

const articleVariants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  collapsed: {
    opacity: 0,
    height: 0,
    margin: 0,
    transition: {
      margin: { duration: 0.4, delay: 1, ease: "easeOut" },
      height: { duration: 0.4, delay: 1, ease: "easeOut" },
      opacity: { duration: 0.4, delay: 0.6 },
    },
  },
  expand: {
    opacity: 1,
    height: "auto",
    marginTop: 24,
    transition: {
      marginTop: { duration: 0.4, ease: "easeOut", delay: 1 },
      height: { duration: 0.4, ease: "easeOut", delay: 1 },
      opacity: { duration: 0.6, delay: 1.4 },
    },
  },
};

/**
 * A block of posts listed, sectioned by date.
 *
 * @component
 */
export function PostsByDate({ date, articles }: PostsByDateProps) {
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
          {articles.map(({ title, slug, blurb }) => (
            <motion.li
              layoutId={slug}
              key={slug}
              initial="initial"
              animate="expand"
              exit="collapsed"
              variants={articleVariants}
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
