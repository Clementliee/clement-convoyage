import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({ meta: [{ title: "Mentions légales · CLÉMENT CONVOYAGE" }] }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl text-navy">Mentions légales</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          Éditeur : {SITE.name}, micro-entreprise, {SITE.city} ({SITE.region}). SIRET : {SITE.siret}.
        </p>
        <p>
          Contact : {SITE.email} · {SITE.phone}.
        </p>
        <p>
          Hébergeur : la plateforme de déploiement de l’application (Vercel / Grok). Les contenus sont
          fournis à titre informatif ; les tarifs du simulateur sont indicatifs.
        </p>
        <p>Directeur de la publication : Clément, {SITE.city}.</p>
      </div>
    </main>
  );
}
