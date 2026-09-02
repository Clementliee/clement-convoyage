import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBar } from "@/components/CtaBar";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/lib/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Journal. Convoyage automobile | Convoyage BZH",
      description:
        "Prix d’un convoyage, achat à distance, véhicules électriques, concessions, garages, Bretagne. Guides rédigés depuis Quimper.",
      path: "/blog",
      image: "/images/blog-tarif.jpg",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Journal"
        title="Journal du convoyage automobile"
        text="Prix, déroulement, véhicules électriques, concessions et garages. Articles utiles, rédigés depuis Quimper."
        image="/images/blog-tarif.jpg"
        alt="Audi A4 Avant au péage, convoyage longue distance"
      />
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 60}>
              <Link
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-line bg-surface"
              >
                <img src={a.image} alt={a.alt} className="h-48 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">
                    {new Date(a.date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
                  </p>
                  <h2 className="mt-3 font-display text-xl text-navy group-hover:underline">{a.h1}</h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{a.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBar title="Une question précise ?" text="Le devis est établi après étude du trajet." />
    </main>
  );
}
