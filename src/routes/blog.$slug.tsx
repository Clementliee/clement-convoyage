import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBar } from "@/components/CtaBar";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { articleBySlug } from "@/lib/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.title ?? "Journal",
      description: loaderData?.description ?? "",
      path: `/blog/${loaderData?.slug ?? ""}`,
      image: loaderData?.image,
    }),
  component: Page,
});

function Page() {
  const a = Route.useLoaderData();
  return (
    <main>
      <Breadcrumbs items={[{ name: "Journal", to: "/blog" }, { name: a.h1 }]} />
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Journal</p>
        <h1 className="mt-4 font-display text-4xl text-navy sm:text-5xl">{a.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{a.intro}</p>
        <img src={a.image} alt={a.alt} className="mt-10 aspect-[16/9] w-full rounded-[1.6rem] object-cover" />
        {a.body.map((b) => (
          <section key={b.h} className="mt-10">
            <h2 className="font-display text-2xl text-navy">{b.h}</h2>
            <p className="mt-3 leading-relaxed text-muted">{b.p}</p>
          </section>
        ))}
        <div className="mt-12">
          <h2 className="mb-6 font-display text-2xl text-navy">Questions</h2>
          <Faq items={a.faq} />
          <FaqJsonLd items={a.faq} />
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {a.related.map((r) => (
            <AppLink key={r.to} to={r.to} className="rounded-full border border-line px-5 py-2.5 text-sm">
              {r.label}
            </AppLink>
          ))}
        </div>
      </article>
      <CtaBar />
    </main>
  );
}
