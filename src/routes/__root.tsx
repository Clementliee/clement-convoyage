import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyCall } from "@/components/StickyCall";
import { CacheClear } from "@/components/CacheClear";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `Convoyage automobile à Quimper | France et Europe | ${SITE.name}` },
      {
        name: "description",
        content:
          "Convoyage automobile, base Quimper. France et Europe. Conciergerie en Bretagne. Devis en une minute, à signer en ligne.",
      },
      { name: "theme-color", content: "#f4f1ea" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "author", content: SITE.name },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap",
      },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return (
    <html lang="fr" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg pb-20 font-sans text-fg md:pb-0">
        <PreviewHostBridge />
        <CacheClear />
        <AuthProvider>
          <Header />
          <Outlet />
          <Footer />
          <StickyCall />
        </AuthProvider>
        <LocalBusinessJsonLd />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-28 text-center">
      <p className="text-sm font-semibold tracking-widest text-coral uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl text-navy">Page introuvable</h1>
      <p className="mt-4 text-muted">Le trajet n’existe pas. Estimez une livraison depuis l’accueil.</p>
      <a href="/" className="mt-8 inline-flex h-12 items-center rounded-full bg-coral px-6 font-medium text-surface">
        Retour à l’accueil
      </a>
    </main>
  );
}
