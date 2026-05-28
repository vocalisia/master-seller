import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const canonical = `https://master-seller.fr/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Laurent Duplat" }],
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: ["Laurent Duplat"],
      ...(post.image
        ? { images: [{ url: post.image, width: 1200, height: 630 }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

function BlogPostingSchema({
  post,
}: {
  post: NonNullable<ReturnType<typeof getPostBySlug>>;
}) {
  const canonical = `https://master-seller.fr/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: "Laurent Duplat",
      url: "https://master-seller.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Master Seller",
      url: "https://master-seller.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    inLanguage: post.lang ?? "fr",
    keywords: post.tags.join(", "),
    ...(post.image ? { image: post.image } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostingSchema post={post} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-100 md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 text-xs font-bold text-brand-400">
              LD
            </div>
            <span className="font-medium text-slate-300">Laurent Duplat</span>
          </div>
          <time dateTime={post.date} className="text-slate-500">
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Hero image */}
        {post.image && (
          <div className="mt-8 overflow-hidden rounded-xl bg-slate-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* MDX Content */}
        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-400 prose-a:no-underline hover:prose-a:text-brand-300 prose-strong:text-slate-200 prose-code:rounded prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-brand-300 prose-pre:border prose-pre:border-slate-700 prose-pre:bg-slate-900 prose-ol:text-slate-300 prose-ul:text-slate-300 prose-li:marker:text-brand-500 prose-hr:border-slate-700 prose-blockquote:border-brand-500 prose-blockquote:text-slate-400">
          <MDXRemote source={post.content} />
        </div>

        {/* Author card */}
        <div className="mt-16 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-lg font-black text-brand-400">
              LD
            </div>
            <div>
              <div className="font-bold text-slate-200">Laurent Duplat</div>
              <div className="mt-1 text-sm text-slate-400">
                Expert e-commerce et stratégies de vente en ligne. Fondateur de
                Master Seller, il accompagne les revendeurs ambitieux à scaler
                leur business grâce aux outils IA et aux meilleures pratiques
                marketplace.
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300"
          >
            ← Retour au blog
          </a>
        </div>
      </article>
    </>
  );
}
