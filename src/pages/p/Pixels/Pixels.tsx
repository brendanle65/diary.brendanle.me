// import libraries
import { useState } from "react";

// import other
import { BlogMetadata } from "@typings/blog";
import { Category } from "@constants/categories";
import { BlogHelmet } from "@components/seo";
import { BlogLayout } from "@components/layouts";
import { Splash } from "./(Splash)/Splash";
import { PlayButton } from "@components/interactives";

export const metadata: BlogMetadata = {
  title: "Pixels",
  description: "A web experiment for a pixel page transition.",
  keywords: ["Brendan Le", "transition", "splash", "pixel"],
  author: "Brendan Le",
  published: new Date("October 14, 2024"),
  edited: new Date("October 14, 2024"),
  blurb: "A web experiment for a pixel page transition.",
  categories: [Category.WEB_EXPRIMENT],
  slug: "pixel",
};

/**
 * A web experiment for a pixel page transition.
 *
 * @returns {React.ReactElement} A blog post.
 * @page
 */
export function Pixels() {
  const [key, setKey] = useState(0);

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
        splash={Splash}
        animation={{}} // don't run any page animations
      >
        <article>
          <h1>{metadata.title}</h1>

          <p>
            Liked that animation? <br />
            Click this button to see it again: <br />
            <br />
            <PlayButton onClick={() => setKey(key + 1)} />
          </p>
        </article>
      </BlogLayout>

      <Splash
        key={key}
        onMountReady={() => {}}
      />
    </>
  );
}
