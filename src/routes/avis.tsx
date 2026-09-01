import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/avis")({
  head: () =>
    pageHead({
      title: "Avis clients. Convoyage BZH, Quimper.",
      description:
        "Les notes clients sont le tableau de bord de Convoyage BZH. Les avis Google seront publiés dès les premières missions. Pas de notes inventées.",
      path: "/avis",
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Avis"
        title="Les notes, pas les"
        accent="promesses."
        text="Nous ne publions pas d’avis inventés. Cette page accueillera les avis Google dès les premières livraisons."
      />
      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-line bg-sand p-8">
          <p className="font-display text-xl text-navy">Après votre livraison</p>
          <p className="mt-3 text-muted">
            Un compte-rendu vous est envoyé. Vous pourrez laisser un avis Google. Chaque note est lue.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Avis après livraison`}
            className="mt-6 inline-flex h-12 items-center rounded-full bg-coral px-6 font-medium text-surface"
          >
            Écrire après une mission
          </a>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
