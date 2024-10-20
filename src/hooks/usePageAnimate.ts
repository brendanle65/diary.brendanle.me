import { useAnimate, AnimationSequence } from "framer-motion";
import { applyStyles, StyleSetters } from "@utils/applyStyles";
import { useLayoutEffect } from "react";

export interface PageAnimateProps {
  initial?: StyleSetters; // styles to set before running animation sequence
  animate?: AnimationSequence;
}

/**
 * Manage page animations.
 *
 * Apply initial styles to elements before running an
 * animation sequence, and provides controls
 * to play or stop the animation.
 *
 *
 * @hook
 */
export function usePageAnimate({ initial, animate }: PageAnimateProps) {
  const [scope, play] = useAnimate();
  let controls;

  useLayoutEffect(() => {
    if (initial) {
      applyStyles(initial);
    }
  }, []);

  const run = async () => {
    if (animate) {
      controls = play(animate);
      await controls;
    }
  };

  const stop = () => {
    controls?.stop();
  };

  return { scope: scope, stop, play: run };
}
