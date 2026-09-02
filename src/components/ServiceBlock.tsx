import { AppLink } from "@/components/AppLink";
import { QuoteCta, type SimulatorSearch } from "@/components/QuoteCta";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export type ServiceItem = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  paragraphs: readonly string[];
  forWhom: string;
  items: readonly string[];
  note?: string;
  image: string;
  alt: string;
  cta: string;
  search?: SimulatorSearch;
  cities?: readonly { to: string; label: string }[];
};

export function ServiceBlock({ item, reverse = false, delay = 0 }: { item: ServiceItem; reverse?: boolean; delay?: number }) {
  return (
    <Reveal delay={delay} className="overflow-x-clip">
      <article
        id={item.id}
        className="scroll-mt-28 overflow-hidden rounded-[1.8rem] border border-line bg-surface lg:grid lg:grid-cols-2 lg:items-start"
      >
        <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <img
            src={item.image}
            alt={item.alt}
            className="h-40 w-full object-cover sm:h-64 lg:sticky lg:top-28 lg:h-[min(36rem,70vh)]"
          />
        </div>
        <div className="flex flex-col p-5 sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{item.kicker}</p>
          <h3 className="mt-2 font-display text-[1.65rem] text-navy sm:mt-3 sm:text-3xl">{item.title}</h3>
          <p className="mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-navy sm:mt-4 sm:line-clamp-none sm:text-base">
            {item.lead}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
            <QuoteCta search={item.search}>{item.cta}</QuoteCta>
            <a
              href={SITE.phoneHref}
              className="hidden h-12 items-center justify-center rounded-full border border-navy px-6 text-sm font-semibold text-navy sm:inline-flex"
            >
              {SITE.phone}
            </a>
          </div>
          {item.cities && item.cities.length > 0 ? (
            <div className="mt-5 hidden flex-wrap gap-2 sm:mt-6 lg:flex">
              {item.cities.map((c) => (
                <AppLink
                  key={c.to}
                  to={c.to}
                  className="inline-flex h-9 items-center rounded-full border border-line bg-sand px-3 text-xs font-medium text-navy hover:border-navy"
                >
                  {c.label}
                </AppLink>
              ))}
            </div>
          ) : null}

          <details className="mt-5 lg:hidden">
            <summary className="cursor-pointer list-none text-sm font-semibold text-coral">Lire le détail</summary>
            <div className="mt-5 space-y-4">
              {item.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-sm leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-[1.2rem] bg-sand p-5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Pour qui</p>
              <p className="mt-2 text-sm leading-relaxed text-navy">{item.forWhom}</p>
            </div>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Inclus</p>
            <ul className="mt-3 space-y-2">
              {item.items.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-navy">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            {item.note ? <p className="mt-5 text-sm leading-relaxed text-muted">{item.note}</p> : null}
          </details>

          <div className="mt-8 hidden space-y-4 lg:block">
            {item.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="text-sm leading-relaxed text-muted sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 hidden rounded-[1.2rem] bg-sand p-5 sm:p-6 lg:block">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Pour qui</p>
            <p className="mt-2 text-sm leading-relaxed text-navy">{item.forWhom}</p>
          </div>
          <p className="mt-8 hidden text-[11px] font-semibold tracking-[0.16em] text-muted uppercase lg:block">
            Inclus dans la mission
          </p>
          <ul className="mt-4 hidden space-y-2 lg:block">
            {item.items.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-navy">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          {item.note ? <p className="mt-6 hidden text-sm leading-relaxed text-muted lg:block">{item.note}</p> : null}
          <div className="mt-8 hidden flex-wrap gap-3 border-t border-line pt-8 lg:flex">
            <QuoteCta search={item.search}>{item.cta}</QuoteCta>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
