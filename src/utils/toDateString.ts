/**
 * Converts a Date object to a string with a
 * formatted date, including ordinal suffix.
 *
 * @example
 *   // Returns 'June 28th, 2024'
 *   toDateString(new Date(2024, 5, 28));
 *
 * @utility
 */
export function toDateString(date: Date) {
  const day = date.getDate();
  const month = date.toLocaleDateString("en-us", { month: "long" });
  const year = date.getFullYear();

  let ordinalSuffix;
  if (day > 3 && day < 21) ordinalSuffix = "th";
  switch (day % 10) {
    case 1:
      ordinalSuffix = "st";
    case 2:
      ordinalSuffix = "nd";
    case 3:
      ordinalSuffix = "rd";
    default:
      ordinalSuffix = "th";
  }

  return `${month} ${day}${ordinalSuffix}, ${year}`;
}
