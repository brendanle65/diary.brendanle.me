// import libraries
import { useSpring } from "framer-motion";
import { useEffect } from "react";

// import other
import { useMousePosition } from "./useMousePosition";

interface CursorPositionProps {
  width?: number;
  height?: number;
}

/**
 * Tracks the mouse position and smooths the movement
 * using a spring animation, while offsetting it
 * based on the component's dimensions.
 *
 * @hook
 */
export function useCursorPosition({ width = 0, height = 0 }: CursorPositionProps) {
  const mousePosition = useMousePosition({ x: -width / 2, y: -height / 2 }); // start off-screen

  const springConfig = { damping: 100, stiffness: 700 };
  const cursorXSpring = useSpring(mousePosition.x, springConfig);
  const cursorYSpring = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    cursorXSpring.set(mousePosition.x - width / 2);
    cursorYSpring.set(mousePosition.y - height / 2);
  }, [mousePosition]);

  return { x: cursorXSpring, y: cursorYSpring };
}
