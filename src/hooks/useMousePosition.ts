// import libraries
import { useEffect, useState } from "react";

interface MousePositionProps {
  x?: number; // initial x position
  y?: number; // initial y position
}

/**
 * Tracks the mouse position.
 *
 * @hook
 */
export const useMousePosition = ({ x = 0, y = 0 }: MousePositionProps) => {
  const [mousePosition, setMousePosition] = useState({ x, y });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
