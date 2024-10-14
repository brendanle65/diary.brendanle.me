// import libraries
import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState, useRef } from "react";

// import styles
import styles from "./Drag.module.scss";

interface DragProps {
  children?: ReactNode;
  className?: string;
  fadeWidth?: number; // Width in pixels of transition gradient
}

/**
 * Wrapper component to make something draggable once the content is wider than the container.
 *
 * @component
 */
export function Drag({ children, className, fadeWidth = 24 }: DragProps) {
  const width = fadeWidth + "px";
  const [dragOffset, setDragOffset] = useState(0); // How many pixels allowed to drag for
  const trackRef = useRef<HTMLDivElement>();
  const sliderRef = useRef<HTMLDivElement>();

  // Handle drag sizing
  useEffect(() => {
    function handleDrag() {
      if (trackRef.current && sliderRef.current) {
        const trackWidth = trackRef.current.getBoundingClientRect().width;
        const sliderWidth = sliderRef.current.getBoundingClientRect().width;
        const offset = trackWidth - sliderWidth;
        setDragOffset(offset < 0 ? offset : 0);
      }
    }

    handleDrag();

    window.addEventListener("resize", handleDrag);

    return () => window.removeEventListener("resize", handleDrag);
  }, []);

  return (
    <div
      ref={trackRef}
      className={clsx(styles.track, className)}
    >
      <div
        style={{ width: width }}
        className={clsx("public-dragLeft", styles.overlay, styles.left)}
      ></div>
      <div
        style={{ width: width }}
        className={clsx("public-dragRight", styles.overlay, styles.right)}
      ></div>
      <motion.div
        ref={sliderRef}
        style={{
          cursor: dragOffset < 0 ? "grab" : "auto",
          paddingLeft: width,
          paddingRight: width,
        }}
        className={styles.slider}
        drag="x"
        dragElastic={0.4}
        dragConstraints={{ left: dragOffset, right: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
