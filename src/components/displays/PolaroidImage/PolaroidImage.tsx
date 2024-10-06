// import libraries
import clsx from "clsx";

// import styles
import styles from "./Polaroid.module.scss";

interface PolaroidImageProps {
  /** Optional additional class name(s) for custom styling. */
  className?: string;

  /** Optional width of the image, which can be a string (e.g., "100%") or a number (e.g., 300). */
  width?: string | number;

  /** Optional height of the image, which can be a string (e.g., "100%") or a number (e.g., 300). */
  height?: string | number;

  /** The source URL of the image to be displayed. */
  src: string;

  /** The alt text for the image, providing a description for accessibility and SEO. */
  alt: string;
}

/**
 * An image put in a polaroid frame.
 *
 * @component
 */
export function PolaroidImage({
  className,
  src,
  alt,
  width = "220px",
  height = "220px",
}: PolaroidImageProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <img
        src={src}
        alt={alt}
        style={{ width, height }}
        className={styles.image}
      />
    </div>
  );
}
