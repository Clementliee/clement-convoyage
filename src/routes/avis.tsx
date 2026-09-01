import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBar } from "@/components/CtaBar";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Avis clients · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Les notes clients sont suivies. Les avis Google seront publiés dès les premières missions." },
    ],
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
