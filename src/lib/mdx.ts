import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified: string;
  tags: string[];
  image?: string;
  author: string;
  lang: string;
  readingTime: string;
  content: string;
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

function resolveSlug(filename: string): string {
  // Use slug from frontmatter if present, else derive from filename
  return filename.replace(/\.mdx$/, "");
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && f !== ".gitkeep");

  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    const slug =
      (data.slug as string | undefined) ?? resolveSlug(filename);

    const date = (data.date as string) ?? "";
    return {
      slug,
      title: (data.title as string) ?? "",
      description: (data.description as string) ?? "",
      date,
      dateModified: (data.dateModified as string | undefined) ?? date,
      tags: (data.tags as string[]) ?? [],
      image: (data.image as string | undefined) ?? undefined,
      author: (data.author as string | undefined) ?? "Laurent Duplat",
      lang: (data.lang as string | undefined) ?? "fr",
      readingTime: readingTime(content).text,
    } satisfies BlogPostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && f !== ".gitkeep");

  for (const filename of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    const fileSlug =
      (data.slug as string | undefined) ?? resolveSlug(filename);

    if (fileSlug === slug) {
      const date = (data.date as string) ?? "";
      return {
        slug: fileSlug,
        title: (data.title as string) ?? "",
        description: (data.description as string) ?? "",
        date,
        dateModified: (data.dateModified as string | undefined) ?? date,
        tags: (data.tags as string[]) ?? [],
        image: (data.image as string | undefined) ?? undefined,
        author: (data.author as string | undefined) ?? "Laurent Duplat",
        lang: (data.lang as string | undefined) ?? "fr",
        readingTime: readingTime(content).text,
        content,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
