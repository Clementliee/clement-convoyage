import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { seoBySlug } from "@/lib/seo-pages";

const KICKER = {
  ville: "Local",
  region: "Territoire",
  france: "France",
  europe: "Europe",
  metier: "Métier",
} as const;

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = seoBySlug(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.title ?? "CLÉMENT CONVOYAGE" },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: loaderData?.title ?? "" },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  component: SeoPage,
});

function SeoPage() {
  const page = Route.useLoaderData();
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "https://clement-convoyage.vercel.app/" },
          { name: page.h1, href: `https://clement-convoyage.vercel.app/${page.slug}` },
        ]}
      />
      <PageHero kicker={KICKER[page.kind]} title={page.h1} text={page.intro} image={page.image} alt={page.h1} />
      <article className="mx-auto max-w-3xl space-y-4 px-4 pb-10 sm:px-6">
        {page.body.map((p) => (
          <p key={p} className="text-muted leading-relaxed">
            {p}
          </p>
        ))}
        <div className="flex flex-wrap gap-2 pt-4">
          {page.nearby.map((n) => (
            <AppLink
              key={n.to}
              to={n.to}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-navy hover:border-coral"
            >
              {n.label}
            </AppLink>
          ))}
        </div>
        <div className="pt-8">
          <h2 className="mb-4 font-display text-2xl text-navy">Questions</h2>
          <Faq items={page.faq} />
          <FaqJsonLd items={page.faq} />
        </div>
      </article>
      <CtaBar title="Obtenir une fourchette" text="Pas de grille publique. Coordonnées, puis estimation indicative." />
    </main>
  );
}
