// import libraries
import clsx from "clsx";

// import other
import { Button } from "../Button/Button";

// import styles
import styles from "./PlayButton.module.scss";

/**
 * A button for replaying animations.
 *
 * @component
 */
export function PlayButton({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className={clsx(styles.button, className)}
      {...rest}
    >
      <ion-icon
        name="sparkles"
        suppressHydrationWarning={true}
      />
      <span>Play</span>
    </Button>
  );
}
