import styles from "./About.module.scss";

export const notes = [
  {
    idx: 1,
    className: styles.joke,
    children: (
      <>
        <span>Where do pirates get their hooks? </span>
        <span className={styles.bold}>Second hand</span> stores.
      </>
    ),
  },
  {
    idx: 2,
    className: styles.ramen,
    children:
      "Not entirely true — during my college years, I've mastered the delicate art of making 🍜 cup of noodles. Gordon Ramsay who?",
  },
  {
    idx: 3,
    className: styles.hint,
    children: "Hint: it's the best one.",
  },
  {
    idx: 4,
    className: styles.drinks,
    children: "My kryptonite: caffiene free diet coke.",
  },
];
