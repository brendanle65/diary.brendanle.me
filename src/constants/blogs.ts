// import other
import { metadata as vespa } from "@pages/Vespa/Vespa";

/** An array containing the metadata for all blog posts. */
export const BLOGS_METADATA = [vespa];

/**
 * Articles' metadata grouped by their published date and year,
 * and then sorted from newest to oldest (formatted as "MMM. YYYY").
 */
export const BLOGS_METADATA_GROUPED = {};

BLOGS_METADATA.forEach((datum) => {
  const year = datum.published.getFullYear();
  const monthName = datum.published.toLocaleString("default", { month: "long" });
  const abbrev = monthName.substring(0, 3) + ". " + year;

  if (!BLOGS_METADATA_GROUPED[abbrev]) {
    BLOGS_METADATA_GROUPED[abbrev] = [];
  }
  BLOGS_METADATA_GROUPED[abbrev].push(datum);
});
