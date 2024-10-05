// import libraries
import clsx from "clsx";

// import other
import { BlogMetadata } from "@typings/blog";
import { toDateString } from "@utils/toDateString";

// import styles
import styles from "./BlogFooter.module.scss";

type BlogFooterProps = Pick<BlogMetadata, "published" | "edited"> & {
  className?: string;
};

/**
 * The footer below every blog post, detailing the date the article was published and last edited.
 *
 * @component
 */
export function BlogFooter(props: BlogFooterProps) {
  return (
    <footer className={clsx("public-blogFooter", props.className, styles.footer)}>
      <div>Published: {toDateString(props.published)}</div>
      <div>Last Edited: {toDateString(props.edited)}</div>
    </footer>
  );
}
