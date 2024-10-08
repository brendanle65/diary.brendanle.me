// import libraries
import { AnimationSequence, stagger } from "framer-motion";

// import other
import { StyleSetters } from "@utils/applyStyles";

const headerSelectors = [".public-appHeader", ".public-blogHeader"].join(", ");
const footerSelectors = [".public-appFooter", ".public-blogFooter"].join(", ");
const asideSelector = ".public-aside";
const otherSelectors = [".public-categories", "h1", "p", ".public-footnotes .public-note"].join(", ");

export const setters: StyleSetters = [
  [headerSelectors, { opacity: 0 }],
  [otherSelectors, { opacity: 0, transform: "translateY(4px)" }],
  [footerSelectors, { opacity: 0 }],
  [asideSelector, { opacity: 0, transform: "translateX(10px) translateY(10px) scale(0.9)" }],
];

/** Default animation sequence to play on blog posts */
export const sequence: AnimationSequence = [
  [headerSelectors, { opacity: 1 }],
  [
    otherSelectors,
    { opacity: 1, transform: "translateY(0)" },
    { duration: 1, delay: stagger(0.175), ease: "easeOut", at: "-0.2" },
  ],
  [footerSelectors, { opacity: 1 }, { duration: 1, delay: stagger(0.175), ease: "easeOut", at: "-0.7" }],
  [
    asideSelector,
    { opacity: 1, transform: "translateX(0) translateY(0) scale(1)" },
    { duration: 0.4, at: 1.5, ease: "easeOut" },
  ],
];
