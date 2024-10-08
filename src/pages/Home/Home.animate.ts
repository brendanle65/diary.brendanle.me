// import libraries
import { AnimationSequence, stagger } from "framer-motion";

// import other
import { StyleSetters } from "@utils/applyStyles";

// Select borders
const borderSelectors = [
  ".public-appHeader .public-divider",
  ".public-starters .public-border",
  ".public-categories .public-border",
  ".public-article .public-border",
  ".public-label .public-horizontal",
].join(", ");
const verticalSelector = ".public-label .public-vertical";
const horizontalSelector = ".public-label .public-horizontal";

// Select text
const headerSelectors = [
  ".public-appHeader .public-blueprint",
  ".public-appHeader .public-logo",
  ".public-appHeader .public-about",
].join(", ");
const startersSelector = ".public-starters .public-text";
const categoriesSelector = ".public-categories .public-text";
const latestSelector = ".public-latest";
const postsSelector = ".public-article .public-text, .public-label .public-date";
const footerSelector = ".public-appFooter";

export const setters: StyleSetters = [
  // set initial border styles
  [borderSelectors, { width: 0 }],
  [verticalSelector, { height: 0 }],
  [horizontalSelector, { width: 0 }],

  // set initial text styles
  [headerSelectors, { opacity: 0 }],
  [startersSelector, { opacity: 0 }],
  [categoriesSelector, { opacity: 0 }],
  [latestSelector, { opacity: 0 }],
  [postsSelector, { opacity: 0 }],
  [footerSelector, { opacity: 0 }],
];

export const sequence: AnimationSequence = [
  // Handle Borders
  [borderSelectors, { width: "100%" }, { duration: 1, delay: 0.5, ease: "easeOut" }],
  [verticalSelector, { height: "100%" }, { duration: 0.5, delay: 0.5, ease: "easeOut", at: "<" }],
  [horizontalSelector, { height: "100%" }, { duration: 0.5, delay: 1, ease: "easeOut", at: "<" }],

  // Handle Text
  [headerSelectors, { opacity: 1 }, { duration: 0.75, delay: 0.5, ease: "easeIn" }],
  [startersSelector, { opacity: 1 }, { duration: 0.75, delay: 0.5 + 0.1, ease: "easeIn", at: "<" }],
  [
    categoriesSelector,
    { opacity: 1 },
    { duration: 0.75, delay: 0.5 + 0.2, ease: "easeIn", at: "<" },
  ],
  [latestSelector, { opacity: 1 }, { duration: 0.75, delay: 0.5 + 0.3, ease: "easeIn", at: "<" }],
  [
    postsSelector,
    { opacity: 1 },
    { duration: 0.75, delay: stagger(0.1), ease: "easeIn", at: "-0.5" },
  ],
  [footerSelector, { opacity: 1 }, { ease: "easeIn", duration: 0.75, at: "-0.4" }],
];
