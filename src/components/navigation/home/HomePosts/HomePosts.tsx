// import libraries
import { useContext } from "react";

// import other
import { PostsByDate } from "./(PostsByDate)/PostsByDate";
import { BLOGS_METADATA_GROUPED } from "@constants/blogs";
import { appStateContext } from "@contexts/AppStateContext";

// import styles
import styles from "./HomePosts.module.scss";

interface HomePostsProps {
  className?: string;
}

/**
 * The section on the home page that renders all the posts.
 *
 * @component
 */
export function HomePosts({ className }: HomePostsProps) {
  const { categoryFilter } = useContext(appStateContext);

  return (
    <ol className={className}>
      {Object.keys(BLOGS_METADATA_GROUPED).map((date) => {
        const articles = BLOGS_METADATA_GROUPED[date];
        let filtered = articles;

        if (categoryFilter) {
          filtered = articles.filter((post) => post.categories.includes(categoryFilter));
        }

        return (
          <li
            key={date}
            className={styles.section}
          >
            <PostsByDate
              date={date}
              articles={filtered}
            />
          </li>
        );
      })}
    </ol>
  );
}
