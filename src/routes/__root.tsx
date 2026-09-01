import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} · ${SITE.baseline}` },
      {
        name: "description",
        content:
          "Convoyage de véhicules depuis Quimper. France et Europe, GPS, protocole sécurité, EDL photo. Devis après coordonnées.",
      },
      { name: "theme-color", content: "#f5f5f7" },
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
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
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
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthProvider>
        <LocalBusinessJsonLd />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-coral">404</p>
      <h1 className="mt-2 font-display text-4xl text-navy">Page introuvable</h1>
      <p className="mt-3 text-muted">Le trajet n’existe pas. Estimez une livraison depuis l’accueil.</p>
      <a href="/" className="mt-6 inline-flex h-12 items-center rounded-full bg-coral px-6 font-medium text-surface">
        Retour à l’accueil
      </a>
    </main>
  );
}
