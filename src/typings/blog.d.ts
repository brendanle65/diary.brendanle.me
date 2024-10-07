// import other
import { Category } from "@constants/categories";

/** The information about a blog post. */
export interface BlogMetadata {
  /** The title of the blog post. */
  title: string;

  /** A brief description of the blog post, often used for SEO purposes. */
  description: string;

  /** An array of keywords relevant to the blog post, used for SEO. */
  keywords: string[];

  /**
   * An array of categories that the blog post belongs to.
   * Each category is represented by a `Category` type.
   */
  categories: Category[];

  /** The name of the author who wrote the blog post. */
  author: string;

  /** The date when the blog post was originally published. */
  published: Date;

  /** The date when the blog post was last edited. */
  edited: Date;

  /** A short snippet or summary of the blog post, displayed when listing the post. */
  blurb: string;

  /** The url slug to this article. */
  slug: string;
}
