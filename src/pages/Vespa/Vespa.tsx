// import other
import { BlogMetadata } from "@typings/blog";
import { Category } from "@constants/categories";
import { BlogHelmet } from "@components/seo";
import { BlogLayout } from "@components/layouts";

export const metadata: BlogMetadata = {
  title: "Vespa 125",
  description: "A poem about getting over a relationship by driving a Vespa.",
  keywords: ["Brendan Le", "poetry", "independence", "love", "vespa", "happiness"],
  author: "Brendan Le",
  published: new Date("September 15, 2024"),
  edited: new Date("September 15, 2024"),
  blurb: "A poem about getting over a relationship.",
  categories: [Category.POETRY, Category.LOVE],
};

/**
 * A poem about driving a Vespa 125.
 *
 * @page
 */
export function Vespa() {
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
      >
        <article>
          <h1>{metadata.title}</h1>

          <p>
            Vespa 125 <br />
            Vintage 1974 <br />
            Driving Cedar Road <br />
          </p>

          <p>
            Faded sea-green with beige seats. <br />
            Engine humming a comforting tune. <br />
            Only two wheels, who needs four? <br />
            Only one headlight, who needs two? <br />
            Nobody but me, who needs more?
          </p>

          <p>
            I no longer hear his voice in the traffic <br />
            Or see his face in the passing cars <br />
            Or feel his touch at the red lights <br />
            Or smell his cologne at the crosswalks <br />
            And I’m more than okay with that.
          </p>

          <p>
            Now, I have a picnic all to myself: <br />
            Flowers, chocolates, and cheeses. <br />
            All in a wicker basket, in the back. <br />
            The appetizer? The cool, breezy air <br />
            with the dewy tang of early Spring.
          </p>

          <p>
            I can’t wait. Doing 45 in a 25. <br />
            Passing by trees with new leaves, <br />
            School children playing volleyball, <br />
            And happy dogs being fed ice cream. <br />
            I smile. Couldn’t stop even if I tried. <br />
          </p>

          <p>Nobody but me, who needs more?</p>
        </article>
      </BlogLayout>
    </>
  );
}
