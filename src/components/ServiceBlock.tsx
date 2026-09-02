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
            className="h-64 w-full object-cover lg:sticky lg:top-28 lg:h-[min(36rem,70vh)]"
          />
        </div>
        <div className="flex flex-col p-8 sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{item.kicker}</p>
          <h3 className="mt-3 font-display text-2xl text-navy sm:text-3xl">{item.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-navy">{item.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <QuoteCta search={item.search}>{item.cta}</QuoteCta>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-navy px-6 text-sm font-semibold text-navy"
            >
              {SITE.phone}
            </a>
          </div>
          <div className="mt-8 space-y-4">
            {item.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="text-sm leading-relaxed text-muted sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 rounded-[1.2rem] bg-sand p-5 sm:p-6">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">Pour qui</p>
            <p className="mt-2 text-sm leading-relaxed text-navy">{item.forWhom}</p>
          </div>
          <p className="mt-8 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Inclus dans la mission</p>
          <ul className="mt-4 space-y-2">
            {item.items.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-navy">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          {item.note ? <p className="mt-6 text-sm leading-relaxed text-muted">{item.note}</p> : null}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-8">
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
