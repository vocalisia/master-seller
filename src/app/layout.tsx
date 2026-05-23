import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.master-seller.fr"),
  title: {
    default: "Master Seller — Formation Vente en Ligne & Agence IA",
    template: "%s | Master Seller",
  },
  description:
    "Devenez un revendeur performant avec les meilleures stratégies e-commerce et outils IA. Guides pratiques, formation et ressources pour vendre plus en ligne.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.master-seller.fr",
    siteName: "Master Seller",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Master Seller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@masterseller",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.master-seller.fr",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight">
            <span className="text-brand-500">Master</span>
            <span className="text-slate-100">Seller</span>
          </span>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            Accueil
          </a>
          <a
            href="/blog"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            Blog
          </a>
          <a
            href="/#formation"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            Formation
          </a>
          <a
            href="/#contact"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            Contact
          </a>
        </nav>
        <a href="/#formation" className="btn-primary text-sm">
          Démarrer maintenant
        </a>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="text-lg font-black">
              <span className="text-brand-500">Master</span>
              <span className="text-slate-100">Seller</span>
            </span>
            <p className="mt-3 text-sm text-slate-500">
              Stratégies e-commerce et outils IA pour revendeurs ambitieux.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="/" className="hover:text-brand-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-brand-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#formation" className="hover:text-brand-400">
                  Formation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Légal
            </h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="/mentions-legales" className="hover:text-brand-400">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="hover:text-brand-400">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          © {year} Master Seller. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
