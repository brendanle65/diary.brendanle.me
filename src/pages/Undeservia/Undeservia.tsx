// import other
import { BlogMetadata } from "@typings/blog";
import { Category } from "@constants/categories";
import { BlogHelmet } from "@components/seo";
import { BlogLayout } from "@components/layouts";
import { Notetag } from "@components/displays";

// import notes
import { notes } from "./Undeservia.notes";

export const metadata: BlogMetadata = {
  title: "Undeservia",
  description: "A poem about you not deserving love ",
  keywords: ["Brendan Le", "poetry", "love", "undeserving"],
  author: "Brendan Le",
  published: new Date("October 7, 2024"),
  edited: new Date("October 7, 2024"),
  blurb: "A poem about you not deserving love.",
  categories: [Category.POETRY, Category.LOVE],
};

/**
 * A poem about how none of us deserves love.
 *
 * @page
 */
export function Undeservia() {
  return (
    <>
      <BlogHelmet
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        author={metadata.author}
      />

      <BlogLayout
        categories={metadata.categories}
        published={metadata.published}
        edited={metadata.edited}
        notes={notes}
      >
        <article>
          <h1>{metadata.title}</h1>

          <p>
            You don't deserve love.
            <Notetag idx={1} /> <br />
            You simply don't deserve it. <br />
            You never did.
          </p>

          <p>
            No matter how hard you work, <br />
            you will never save up the wages, <br />
            to pay a fair price for it.
          </p>

          <p>
            This is why love terrifies you. <br />
            Why you are up all night, dreading <br />
            the day that the fire cools, <br />
            and your lover walks out the door, <br />
            saying in their head <br />
            what you've always said in yours: <br />
            "I don't deserve this."
          </p>

          <p>
            But that is what love is for. <br />
            It is for the undeserving—
          </p>

          <p>which is everybody.</p>

          <p>
            Nobody pays a fair price for it. <br />
            It is the greatest cheat of life.
          </p>

          <p>
            The world is full of undeserving people <br />
            loving other undeserving people. <br />
            That is why we love. <br />
            That is why we love love.
          </p>
        </article>
      </BlogLayout>
    </>
  );
}
