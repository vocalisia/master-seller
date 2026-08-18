import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Master Seller : formation vente en ligne et IA",
  description:
    "Master Seller propose des formations, guides et ressources pour développer une activité de vente en ligne avec des outils IA.",
  alternates: { canonical: "https://master-seller.fr" },
};

const FEATURES = [
  {
    icon: "🎯",
    title: "Stratégie e-commerce",
    desc: "Méthodes éprouvées pour vendre sur Amazon, Shopify, Etsy et les marketplaces françaises.",
  },
  {
    icon: "🤖",
    title: "Outils IA intégrés",
    desc: "Automatisez votre prospection, vos analyses et votre service client avec l'intelligence artificielle.",
  },
  {
    icon: "📊",
    title: "Dashboard vendeur",
    desc: "Pilotez vos KPIs en temps réel : CA, conversions, stocks, retours et marges.",
  },
  {
    icon: "🚀",
    title: "Croissance rapide",
    desc: "Des résultats concrets dès les 90 premiers jours grâce à des méthodes éprouvées.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sophie M.",
    role: "Revendeuse Amazon FBA",
    quote:
      "En 3 mois j'ai triplé mes ventes grâce aux méthodes Master Seller. Le support est exceptionnel.",
  },
  {
    name: "Thomas R.",
    role: "Entrepreneur e-commerce",
    quote:
      "La formation m'a donné les outils concrets pour scaler mon business sans me noyer dans les données.",
  },
  {
    name: "Amina K.",
    role: "Dropshippeuse",
    quote:
      "Enfin une formation qui parle d'IA réellement utile pour les vendeurs, pas juste de la théorie.",
  },
];

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-black text-brand-500">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}

export default async function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.12)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <span className="tag mb-6 inline-flex">
            🔥 Formation e-commerce #1 en France
          </span>
          <h1 className="text-4xl font-black tracking-tight text-slate-100 md:text-6xl lg:text-7xl">
            Devenez un{" "}
            <span className="text-brand-500">revendeur</span> de haut niveau
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            Stratégies e-commerce, outils IA et accompagnement personnalisé
            pour multiplier vos ventes sur toutes les plateformes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#formation" className="btn-primary px-8 py-4 text-base">
              Accéder à la formation
            </a>
            <a href="/blog" className="btn-outline px-8 py-4 text-base">
              Lire le blog
            </a>
          </div>
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatBadge value="2 400+" label="Vendeurs formés" />
            <StatBadge value="90j" label="Plan d'action" />
            <StatBadge value="12" label="Modules pratiques" />
            <StatBadge value="4.9/5" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="section-title">
              Tout ce qu'il faut pour performer
            </h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Une approche complète qui combine formation, outils et
              accompagnement pour des résultats mesurables.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="card">
                <div className="mb-4 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-slate-100">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION CTA */}
      <section
        id="formation"
        className="border-y border-slate-800 bg-slate-900 py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="tag mb-4 inline-flex">Accès immédiat</span>
          <h2 className="section-title">
            La formation qui change tout
          </h2>
          <p className="section-subtitle mx-auto max-w-xl">
            12 modules vidéo, exercices pratiques, templates prêts à l'emploi
            et accès à vie. Commencez dès aujourd'hui.
          </p>
          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm text-slate-300">
            {[
              "Trouver des produits gagnants sur toutes les marketplaces",
              "Maîtriser le SEO Amazon et Etsy",
              "Utiliser l'IA pour automatiser vos tâches répétitives",
              "Créer un système de vente scalable",
              "Gérer vos finances et votre comptabilité e-commerce",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-500">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a href="#contact" className="btn-primary px-10 py-4 text-base">
              Demander un audit gratuit 30 min
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Places limitées — Réponse sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* LATEST BLOG POSTS */}
      {posts.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="section-title">Derniers articles</h2>
                <p className="section-subtitle">
                  Conseils pratiques pour vendre mieux en ligne.
                </p>
              </div>
              <a
                href="/blog"
                className="hidden text-sm font-medium text-brand-400 hover:text-brand-300 md:block"
              >
                Tous les articles →
              </a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card group flex flex-col hover:shadow-lg hover:shadow-brand-500/5"
                >
                  {post.image && (
                    <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-slate-800">
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
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 flex-1 font-bold text-slate-100 group-hover:text-brand-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <a href="/blog" className="btn-outline text-sm">
                Tous les articles
              </a>
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      <section className="border-t border-slate-800 bg-slate-900 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="section-title">Ils ont transformé leur business</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card">
                <p className="italic text-slate-400">"{t.quote}"</p>
                <div className="mt-4">
                  <div className="font-semibold text-slate-200">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="section-title">Prêt à passer à l'action ?</h2>
          <p className="section-subtitle">
            Réservez votre audit gratuit de 30 minutes et découvrez comment
            doubler vos ventes en ligne.
          </p>
          <a
            href="mailto:contact@master-seller.fr"
            className="btn-primary mt-8 inline-flex px-10 py-4 text-base"
          >
            Réserver mon audit gratuit
          </a>
        </div>
      </section>
    </>
  );
}
