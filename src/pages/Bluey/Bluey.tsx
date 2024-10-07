// import other
import { BlogMetadata } from "@typings/blog";
import { Category } from "@constants/categories";
import { BlogHelmet } from "@components/seo";
import { BlogLayout } from "@components/layouts";
import { PolaroidImage } from "@components/displays";
import { Notetag } from "@components/displays";

// import notes
import { notes } from "./Bluey.notes";

// import styles
import styles from "./Bluey.module.scss";

export const metadata: BlogMetadata = {
  title: "Bluey",
  description: "A poem about loneliness and a stuffed animal.",
  keywords: ["Brendan Le", "poetry", "penguin", "stuffed animal", "loneliness"],
  author: "Brendan Le",
  published: new Date("October 7, 2024"),
  edited: new Date("October 7, 2024"),
  blurb: "A poem about loneliness and a stuffed animal.",
  categories: [Category.POETRY, Category.ALONE, Category.PROSE],
  slug: "bluey",
};

/**
 * A poem about a stuffed animal named Bluey.
 *
 * @returns {React.ReactElement} A blog post.
 * @page
 */
export function Bluey() {
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
        aside={() => (
          <PolaroidImage
            className={styles.polaroid}
            src="/p/bluey/bluey.jpeg"
            alt="cartoon image of a penguin stuffed animal (Bluey)"
          />
        )}
      >
        <article>
          <h1>{metadata.title}</h1>

          <p>
            his name is Bluey. <br />
            Bluey, the stuffed animal.
            <Notetag idx={1} />
          </p>

          <p>
            a baby blue penguin <br />
            with a pudgy white body, <br />
            and cute yellow feet and beak.
          </p>

          <p>
            he winks with both eyes <br />
            those eyes shut tight. <br />
            black slits saying <br />
            "happy to be here," <br />
            "happy to be with you."
          </p>

          <p>
            his flippers are flying high; <br />
            carefree. <br />
            you can imagine him running <br />
            and saying "Wee!"
          </p>

          <p>
            he is soft but firm. <br />
            one touch <br />
            and you can't help but cuddle <br />
            or talk.
          </p>

          <p>
            with Bluey, <br />
            we'd talk about all kinds of stuff, <br />
            stuff that only stuffed animals <br />
            could ever understand: <br />
            grown-up stuff, <br />
            love life stuff, <br />
            life ain't going so well stuff, <br />
            stuff upon stuff.
          </p>

          <p>
            I know he ain't real <br />
            but he feels real <br />
            and the moments with him <br />
            are real—
          </p>

          <p>
            a breadcrumb means nothing <br />
            when you are stuffed, <br />
            but <br />
            it's everything <br />
            when you are hungry.
          </p>

          <p>
            and when you've been <br />
            as hungry as I— <br />
            <span>every</span> <br />
            <span className={styles.breadcrumb}>breadcrumb</span> <br />
            <span className={styles.counts}>counts.</span> <br />
          </p>

          <p>
            so, for now, <br />
            Bluey it is. <br />
            Thank you Bluey. <br />
            I love you Bluey. <br />
          </p>
        </article>
      </BlogLayout>
    </>
  );
}
