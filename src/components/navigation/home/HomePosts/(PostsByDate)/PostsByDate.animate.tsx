// todo: update delays in main component depending on case
// old article array transitioning into new article transition...
// todo: do this with general date section as well...

// for simple removal (no elements added) or simple addition (no elements removed)
const a = {
  collapsed: {
    opacity: 0,
    height: 0,
    margin: 0,
    transition: {
      margin: { duration: 0.4, delay: 0.4, ease: "easeOut" }, // 0.4
      height: { duration: 0.4, delay: 0.4, ease: "easeOut" }, // 0.4
      opacity: { duration: 0.4 },
    },
  },
  expand: {
    opacity: 1,
    height: "auto",
    marginTop: 24,
    transition: {
      marginTop: { duration: 0.4, ease: "easeOut", delay: 0.4 }, // start once collapsed animation is finished
      height: { duration: 0.4, ease: "easeOut", delay: 0.4 }, // 0.4 (same above)
      opacity: { duration: 0.4, delay: 0.8 }, // 0.8
    },
  },
};

// for sequential combination (add & removal)
const c = {
  collapsed: {
    opacity: 0,
    height: 0,
    margin: 0,
    transition: {
      margin: { duration: 0.4, delay: 0.4, ease: "easeOut" },
      height: { duration: 0.4, delay: 0.4, ease: "easeOut" },
      opacity: { duration: 0.4 },
    },
  },
  expand: {
    opacity: 1,
    height: "auto",
    marginTop: 24,
    transition: {
      marginTop: { duration: 0.4, ease: "easeOut", delay: 0.4 }, // start once collapsed animation is finished
      height: { duration: 0.4, ease: "easeOut", delay: 0.4 },
      opacity: { duration: 0.4, delay: 0.8 },
    },
  },
};

// for unsequential combination (reorder before add + removal)
const d = {
  collapsed: {
    opacity: 0,
    height: 0,
    margin: 0,
    transition: {
      margin: { duration: 0.4, delay: 1, ease: "easeOut" }, // 0.4
      height: { duration: 0.4, delay: 1, ease: "easeOut" }, // 0.4
      opacity: { duration: 0.4, delay: 0.6 },
    },
  },
  expand: {
    opacity: 1,
    height: "auto",
    marginTop: 24,
    transition: {
      marginTop: { duration: 0.4, ease: "easeOut", delay: 1 }, // start once collapsed animation is finished
      height: { duration: 0.4, ease: "easeOut", delay: 1 }, // 0.4 (same above)
      opacity: { duration: 0.6, delay: 1.4 }, // 0.8
    },
  },
};
