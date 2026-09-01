import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { ARTICLES } from "@/lib/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageHead({
      title: "Journal du convoyage automobile. Convoyage BZH",
      description:
        "Guides : prix d’un convoyage, achat à distance, VE, concessions, garages, Bretagne, Quimper. Conseils concrets, sans superlatifs.",
      path: "/blog",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero kicker="Journal" title="Des réponses. Pas du contenu vide." text="Prix, process, professionnels, Bretagne. Pour décider." />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              to="/blog/$slug"
              params={{ slug: a.slug }}
              className="overflow-hidden rounded-[1.6rem] border border-line bg-surface"
            >
              <img src={a.image} alt="" className="h-40 w-full object-cover" />
              <div className="p-6">
                <h2 className="font-display text-xl text-navy">{a.h1}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{a.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
