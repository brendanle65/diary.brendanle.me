// import libraries
import clsx from "clsx";

// import other
import { BlogMetadata } from "@typings/blog";
import { Link, Drag } from "@components/interactives";

// import styles
import styles from "./BlogCategories.module.scss";

type BlogCategoriesProps = Pick<BlogMetadata, "categories"> & {
  className?: string;
};

/**
 * A list of categories the blog post belongs to.
 *
 * @component
 */
export function BlogCategories({ categories, className }: BlogCategoriesProps) {
  return (
    <div className={clsx("public-categories", styles.container, className)}>
      <span className={styles.label}>categories:</span>
      <Drag className={styles.drag}>
        <ul className={styles.list}>
          {categories.map((category, idx) => (
            <li
              key={idx}
              className={styles.item}
            >
              <Link href="/">{category}</Link>
            </li>
          ))}
        </ul>
      </Drag>
    </div>
  );
}
