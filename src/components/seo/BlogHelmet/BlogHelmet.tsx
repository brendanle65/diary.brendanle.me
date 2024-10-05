// import libraries
import Head from "next/head";

// import other
import { BlogMetadata } from "@typings/blog";

type BlogHelmetProps = Pick<BlogMetadata, "title" | "description" | "keywords" | "author">;

/**
 * Sets the metadata for a blog page using the Next.js Head component.
 * This includes the page title and meta tags for description, keywords, and author.
 *
 * @component
 */
export function BlogHelmet({ title, ...meta }: BlogHelmetProps) {
  return (
    <Head>
      <title>{`${title} | Brendan Le`}</title>
      {Object.entries(meta).map(([key, value]) => (
        <meta
          key={key}
          name={key}
          content={value.toString()}
        ></meta>
      ))}
    </Head>
  );
}
