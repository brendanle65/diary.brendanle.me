// import libraries
import NextLink from "next/link";

// import other
import { withHover } from "../withHover/withHover";

/**
 * Renders a link element wrapped with cursor hover effects.
 *
 * @component
 */
export const Link = withHover(NextLink);
