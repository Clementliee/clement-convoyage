import { AppLink } from "@/components/AppLink";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { absUrl } from "@/lib/seo";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; to?: string }[];
}) {
  const json = [
    { name: "Accueil", href: absUrl("/") },
    ...items.map((it) => ({ name: it.name, href: absUrl(it.to || "/") })),
  ];
  return (
    <>
      <BreadcrumbJsonLd items={json} />
      <nav aria-label="Fil d’Ariane" className="mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          <li>
            <AppLink to="/" className="hover:text-navy">
              Accueil
            </AppLink>
          </li>
          {items.map((it) => (
            <li key={it.name} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-line">
                ›
              </span>
              {it.to ? (
                <AppLink to={it.to} className="hover:text-navy">
                  {it.name}
                </AppLink>
              ) : (
                <span className="text-navy">{it.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
