import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { HomeEstimator } from "@/components/HomeEstimator";
import { FaqJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { absUrl, pageHead } from "@/lib/seo";
import { seoBySlug, type SeoPage } from "@/lib/seo-pages";
import { SITE } from "@/lib/site";

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
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? SITE.name,
      description: loaderData?.description ?? SITE.baseline,
      path: `/${loaderData?.slug ?? ""}`,
      image: loaderData?.image,
    }),
  component: SeoPageView,
});

function SeoPageView() {
  const page = Route.useLoaderData();
  const url = absUrl(`/${page.slug}`);
  const rich = Boolean(page.zones || page.trajets || page.services || page.highlights);

  return (
    <main>
      <ServiceJsonLd
        name={page.h1}
        description={page.description}
        url={url}
        area={page.locality}
        country={page.country}
      />
      <Breadcrumbs items={[{ name: page.locality || page.h1 }]} />
      <PageHero
        kicker={page.kicker || KICKER[page.kind]}
        title={page.h1}
        text={page.intro}
        image={page.image}
        alt={page.h1}
      />
      {rich ? <RichCity page={page} /> : <SimpleCity page={page} />}
      <CtaBar
        title={page.locality ? `Estimer un convoyage ${page.locality}` : "Obtenir un devis"}
        text="Pas de grille publique. Coordonnées, puis estimation indicative."
      />
    </main>
  );
}

function SimpleCity({ page }: { page: SeoPage }) {
  return (
    <article className="mx-auto max-w-3xl space-y-6 px-5 pb-16 sm:px-8">
      {page.body.map((p) => (
        <p key={p} className="text-lg leading-relaxed text-muted">
          {p}
        </p>
      ))}
      {page.disclaimer ? <p className="text-sm leading-relaxed text-muted">{page.disclaimer}</p> : null}
      <SimLine />
      <Nearby page={page} />
      <FaqBlock page={page} />
    </article>
  );
}

function RichCity({ page }: { page: SeoPage }) {
  return (
    <>
      <article className="mx-auto max-w-3xl space-y-6 px-5 sm:px-8">
        {page.body.map((p) => (
          <p key={p} className="text-lg leading-relaxed text-muted">
            {p}
          </p>
        ))}
        {page.disclaimer ? <p className="text-sm leading-relaxed text-muted">{page.disclaimer}</p> : null}
      </article>

      {page.highlights ? (
        <section className="mx-auto mt-16 grid max-w-6xl gap-5 px-5 sm:grid-cols-2 sm:px-8">
          {page.highlights.map((h) => (
            <div key={h.t} className="rounded-[1.6rem] border border-line bg-surface p-7">
              <h2 className="font-display text-2xl text-navy">{h.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.d}</p>
            </div>
          ))}
        </section>
      ) : null}

      {page.zones ? (
        <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">Zone couverte</h2>
          <p className="mt-3 max-w-2xl text-muted">
            On récupère le véhicule où il se trouve. Remise chez le client, en ${page.locality} ou ailleurs. Base Quimper, missions partout en France et en Europe.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.zones.map((z) => (
              <div key={z.t} className="rounded-[1.5rem] bg-sand px-6 py-7">
                <h3 className="font-display text-xl text-navy">{z.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{z.d}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {page.trajets ? (
        <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">Trajets types</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {page.trajets.map((t) => (
              <AppLink
                key={t.label}
                to={t.to}
                className="rounded-[1.5rem] border border-line bg-surface px-6 py-6 hover:border-coral"
              >
                <h3 className="font-display text-xl text-navy">{t.label}</h3>
                <p className="mt-2 text-sm text-muted">{t.d}</p>
              </AppLink>
            ))}
          </div>
        </section>
      ) : null}

      {page.services ? (
        <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">Prestations depuis {page.locality}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.services.map((s) => (
              <AppLink
                key={s.t}
                to={s.to}
                className="rounded-[1.5rem] border border-line bg-surface p-6 hover:border-coral"
              >
                <h3 className="font-display text-xl text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </AppLink>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto mt-20 grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-navy">Comment ça se passe</h2>
          <ol className="mt-8 space-y-6">
            {[
              ["01", "Vous estimez", "Départ, arrivée, véhicule, options."],
              ["02", "Vous laissez vos coordonnées", "Le devis s’affiche. Devis immédiat."],
              ["03", "Nous prenons le véhicule", "Photos, compteur, documents, à Quimper ou ailleurs."],
              ["04", "Nous remettons", "Clés, mise en main offerte, compte-rendu."],
            ].map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-display text-2xl text-coral">{n}</span>
                <div>
                  <p className="font-display text-xl text-navy">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <HomeEstimator />
      </section>

      <article className="mx-auto mt-16 max-w-3xl px-5 pb-16 sm:px-8">
        <SimLine />
        <Nearby page={page} />
        <FaqBlock page={page} />
      </article>
    </>
  );
}

function SimLine() {
  return (
    <p className="text-lg leading-relaxed text-muted">
      Pour un devis, utilisez le{" "}
      <AppLink to="/simulateur" className="font-semibold text-coral">
        simulateur
      </AppLink>
      . Devis immédiat, à signer en ligne. {SITE.phone}.
    </p>
  );
}

function Nearby({ page }: { page: SeoPage }) {
  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {page.nearby
        .filter((n) => n.to !== "/simulateur")
        .map((n) => (
          <AppLink
            key={n.to}
            to={n.to}
            className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-navy hover:border-coral"
          >
            {n.label}
          </AppLink>
        ))}
      <AppLink
        to="/simulateur"
        className="rounded-full border border-navy bg-navy px-5 py-2.5 text-sm text-surface"
      >
        Estimer
      </AppLink>
    </div>
  );
}

function FaqBlock({ page }: { page: SeoPage }) {
  return (
    <div className="pt-12">
      <h2 className="mb-6 font-display text-3xl text-navy">
        {page.kind === "ville" && page.locality ? `Questions, ${page.locality}` : "Questions"}
      </h2>
      <Faq items={page.faq} />
      <FaqJsonLd items={page.faq} />
    </div>
  );
}
