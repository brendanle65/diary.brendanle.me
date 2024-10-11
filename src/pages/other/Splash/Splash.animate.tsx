// import libraries
import { AnimationSequence, stagger } from "framer-motion";

export const sequence: AnimationSequence = [
  // Move Images
  [
    ".public-football",
    { transform: "translate(-45vw, -5vh) rotate(-1deg)" },
    { duration: 1, delay: 0.5, ease: "easeInOut" },
  ],
  [
    ".public-camera",
    { transform: "translate(-25vw, -5vh) rotate(1deg)" },
    { duration: 1, delay: 0.5, ease: "easeInOut", at: "<" },
  ],
  [
    ".public-library",
    { transform: "translate(-30vw, -45vh)" },
    { duration: 1, delay: 0.5, ease: "easeInOut", at: "<" },
  ],
  [
    ".public-shower",
    { transform: "translate(-10vw, -10vh) rotate(-1deg)" },
    { duration: 1, delay: 0.5, ease: "easeInOut", at: "<" },
  ],
  [
    ".public-family",
    { transform: "translate(-12vw, -20vh) rotate(2deg)" },
    { duration: 1, delay: 0.5, ease: "easeInOut", at: "<" },
  ],
  [
    ".public-dinosaur",
    { transform: "translate(17vw, -20vh) rotate(1deg)" },
    { duration: 1, delay: 0.5, ease: "easeInOut", at: "<" },
  ],
  [
    ".public-japan",
    { transform: "translate(8vw, -20vh) rotate(1deg)" },
    { duration: 1, delay: 0.5, ease: "easeInOut", at: "<" },
  ],

  // Fade out images
  [
    ".public-image",
    { opacity: 0 },
    { duration: 0.75, delay: stagger(0.1, { startDelay: 0.75 }), ease: "easeOut" },
  ],
];
