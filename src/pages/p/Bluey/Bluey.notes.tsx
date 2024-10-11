import styles from "./Bluey.module.scss";
import { Link } from "@components/interactives";

export const notes = [
  {
    idx: 1,
    className: styles.reference,
    children: (
      <>
        Bluey was inspired by a stuffed animal I saw at my parents' house. You can{" "}
        <Link
          target="_blank"
          href="https://minisoshop.co.uk/doughnut-penguin-plush"
        >
          buy a similar version here
        </Link>{" "}
        (not affiliated).
      </>
    ),
  },
];
