type Styles = {
  [key: string]: string | number;
};

export type StyleSetters = [string, Styles][];

/**
 * Applies a set of CSS styles to elements based on their selectors.
 *
 * This utility function takes an array of style setters where each entry
 * consists of a selector and a set of styles, and applies the specified
 * styles to all matching elements in the document.
 *
 *
 * @example
 *   applyStylesToElements([
 *     [".my-element", { backgroundColor: "blue", color: "white" }],
 *     ["#another-element", { fontSize: "18px", padding: "10px" }],
 *     [".third-element", { margin: "20px", border: "2px solid red" }],
 *   ]);
 *
 * @utility
 */
export function applyStyles(setters: StyleSetters) {
  setters.forEach(([selector, styles]) => {
    const elements = document.querySelectorAll(selector);

    if (elements.length > 0) {
      elements.forEach((element) => {
        Object.keys(styles).forEach((styleKey) => {
          (element as HTMLElement).style[styleKey as any] = styles[styleKey].toString();
        });
      });
    } else {
      console.warn(`Elements with selector "${selector}" not found.`);
    }
  });
}
