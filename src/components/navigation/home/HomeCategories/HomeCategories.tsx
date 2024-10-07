// import libraries
import clsx from "clsx";
import { useContext } from "react";
import { motion } from "framer-motion";

// import other
import { Category } from "@constants/categories";
import { Button, Drag } from "@components/interactives";
import { appStateContext } from "@contexts/AppStateContext";

// import styles
import styles from "./HomeCategories.module.scss";

interface HomeCategoriesProps {
  className?: string;
}

/**
 * The section on the home page where users can filter posts by category.
 *
 * @component
 */
export function HomeCategories({ className }: HomeCategoriesProps) {
  const { setCategoryFilter, categoryFilter } = useContext(appStateContext);

  return (
    <div className={clsx("public-categories", styles.container, className)}>
      <span className={clsx("public-text", styles.text, styles.select)}>Select Filter:</span>
      <Drag className={styles.drag}>
        <ul className={styles.list}>
          {["Everything", ...Object.values(Category)].map((category) => {
            const selectedCategory: any = category === "Everything" ? null : category;
            const isSelected = categoryFilter === selectedCategory;
            return (
              <li key={category}>
                <Button
                  className={clsx(styles.button, isSelected && styles.selected)}
                  onClick={() => setCategoryFilter(selectedCategory)}
                >
                  <span className={clsx("public-text", styles.text)}>{category}</span>
                  {isSelected && (
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      className={clsx("public-border", styles.border)}
                    ></motion.span>
                  )}
                </Button>
              </li>
            );
          })}
        </ul>
      </Drag>
    </div>
  );
}
