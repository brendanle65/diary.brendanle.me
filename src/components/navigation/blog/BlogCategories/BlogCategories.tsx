// import libraries
import clsx from "clsx";
import { useContext } from "react";

// import other
import { BlogMetadata } from "@typings/blog";
import { Link } from "@components/interactives";
import { Drag } from "@components/interactives";
import { appStateContext } from "@contexts/AppStateContext";

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
  const { setCategoryFilter } = useContext(appStateContext);

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
              <Link
                href="/"
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </Drag>
    </div>
  );
}
