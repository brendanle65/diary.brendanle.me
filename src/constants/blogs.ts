// import other
import { metadata as vespa } from "@pages/p/Vespa/Vespa";
import { metadata as bluey } from "@pages/p/Bluey/Bluey";
import { metadata as about } from "@pages/p/About/About";
import { metadata as undeservia } from "@pages/p/Undeservia/Undeservia";
import { metadata as puedo } from "@pages/p/Puedo/Puedo";

/** An array containing the metadata for all blog posts. */
export const BLOGS_METADATA = [vespa, bluey, about, undeservia, puedo];

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
