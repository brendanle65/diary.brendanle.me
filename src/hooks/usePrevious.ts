import { useEffect, useRef } from "react";

/**
 * Stores the previous value of a state or prop.
 *
 * @hook
 */
export function usePrevious<T>(value) {
  const prevValueRef = useRef<T>();

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return prevValueRef.current;
}
