// import other
import { BlogMetadata } from "@typings/blog";
import { Category } from "@constants/categories";
import { BlogHelmet } from "@components/seo";
import { BlogLayout } from "@components/layouts";
import { PolaroidImage, Notetag } from "@components/displays";
import { Peek, Link } from "@components/interactives";

// import notes
import { notes } from "./About.notes";

export const metadata: BlogMetadata = {
  title: "About The Writer",
  description: "Meet Brendan Le, a web developer, designer, and blogger who mainly writes poetry.",
  keywords: [
    "Brendan Le",
    "web developer",
    "designer",
    "blogger",
    "personal blog",
    "life advice",
    "self-reflection",
    "poet",
  ],
  author: "Brendan Le",
  published: new Date("October 7, 2024"),
  edited: new Date("October 7, 2024"),
  blurb: "Get to know the author a little bit.",
  categories: [Category.PROSE],
};

/**
 * A fun, witty biography of yours truly.
 *
 * @page
 */
export function About() {
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
            src="/headshot.png"
            alt="professional headshot of the author"
          />
        )}
      >
        <h1>{metadata.title}</h1>

        <p>
          {/* prettier-ignore */}
          <span>
              Brendan Le is a web developer and designer by day and blogger by
              night. When he's not doing either of those things, you can find
              him trying not to </span>

          <Peek
            src="/p/about-the-writer/bouldering-fail.gif"
            alt="gif of someone failing while bouldering"
          >
            embarrass himself while bouldering
          </Peek>

          {/* prettier-ignore */}
          <span> or laughing at his own jokes he says in his head.</span>
          <Notetag idx={1} />
          <span>
            He's also an amazing chef:{" "}
            <Peek
              src="/p/about-the-writer/cooking-meme.jpg"
              alt="but did you die from my cooking? meme"
              width={200}
              height={150}
            >
              he can make pasta, and that's about it.
            </Peek>
          </span>
          <Notetag idx={2} />
        </p>

        <p>
          He loves going for walks and performing magic tricks for strangers. His Vietnamese zodiac sign is a
          dragon, and his Greek zodiac, well, he does not like to talk about it.
          <Notetag idx={3} />
          {/* prettier-ignore */}
          <span> Brendan Le is strong both physically and emotionally, as he is currently battling an 
            addiction to sparkling water and diet soda.<Notetag idx={4} /></span>
        </p>

        <p>
          In all seriousness, this is my personal blogging website. I write for myself; I only share it in
          case anybody else might find value in it. I mainly write poetry, hence the name Diary of a Poet. I
          also create what I call "web experiments," where I build cool stuff on the web and share them here.
        </p>

        <p>
          If you're interested in my web development and design work, you can find it at{" "}
          <Link
            target="_blank"
            href="https://tech.brendanle.me"
          >
            tech.brendanle.me
          </Link>
          .
        </p>
      </BlogLayout>
    </>
  );
}
