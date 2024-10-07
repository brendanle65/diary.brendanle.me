// import libraries
import clsx from "clsx";

// import others
import { Link } from "@components/interactives";
import { BlogMetadata } from "@typings/blog";

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
      <ol>
        {articles.map(({ title, slug, blurb }, idx) => (
          <li
            key={idx}
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
          </li>
        ))}
      </ol>
    </section>
  );
}
