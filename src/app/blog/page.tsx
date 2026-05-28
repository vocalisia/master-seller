import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog — Stratégies e-commerce & Outils IA",
  description:
    "Conseils, guides et études de cas pour vendre plus sur Amazon, Etsy, Shopee et les marketplaces françaises. Par Laurent Duplat.",
  alternates: { canonical: "https://master-seller.fr/blog" },
  openGraph: {
    title: "Blog Master Seller — Stratégies e-commerce & Outils IA",
    description:
      "Conseils pratiques pour booster vos ventes en ligne avec l'IA.",
    url: "https://master-seller.fr/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="tag mb-4 inline-flex">Blog & Ressources</span>
        <h1 className="text-4xl font-black tracking-tight text-slate-100 md:text-5xl">
          Stratégies e-commerce & Outils IA
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Guides pratiques, analyses et méthodes éprouvées pour vendre plus
          efficacement sur toutes les plateformes.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Par{" "}
          <span className="font-medium text-slate-400">Laurent Duplat</span>
          {" · "}
          {posts.length} article{posts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Posts grid */}
      {posts.length === 0 ? (
        <div className="py-24 text-center text-slate-500">
          Aucun article pour le moment. Revenez bientôt !
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group flex flex-col hover:shadow-lg hover:shadow-brand-500/5"
            >
              {post.image && (
                <div className="mb-5 aspect-video overflow-hidden rounded-lg bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="mt-3 flex-1 text-lg font-bold leading-snug text-slate-100 group-hover:text-brand-400">
                {post.title}
              </h2>

              {/* Description */}
              <p className="mt-2 line-clamp-3 text-sm text-slate-400">
                {post.description}
              </p>

              {/* Meta */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-400">
                    Laurent Duplat
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
