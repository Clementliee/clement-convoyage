import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MissionDossier } from "@/components/MissionDossier";
import { PageHero } from "@/components/PageHero";
import { listQuotes, type StoredQuote } from "@/lib/quotes-store";
import { pageHead } from "@/lib/seo";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/suivi")({
  head: () =>
    pageHead({
      title: "Suivi de devis | Convoyage BZH",
      description: "Retrouvez vos devis Convoyage BZH, signez, puis complétez le dossier de mission.",
      path: "/suivi",
    }),
  component: Page,
});

const STATUS: Record<StoredQuote["status"], string> = {
  envoye: "Devis envoyé",
  signe: "Signé, dossier à compléter",
  dossier: "Dossier reçu",
};

function Page() {
  const [tick, setTick] = useState(0);
  const rows = useMemo(() => listQuotes(), [tick]);
  const [open, setOpen] = useState<string | null>(rows[0]?.quoteNo ?? null);
  const current = rows.find((q) => q.quoteNo === open);

  return (
    <main>
      <PageHero
        kicker="Suivi"
        title="Vos devis"
        text="Les devis de cet appareil. Après signature, le dossier véhicule et assurance se complète ici, ou par e-mail."
      />
      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        {rows.length === 0 ? (
          <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
            <p className="font-display text-2xl text-navy">Aucun devis sur cet appareil</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Un devis se crée en une minute. Trajet, formule, téléphone et e-mail. Le PDF part tout de suite.
            </p>
            <Link
              to="/simulateur"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-coral px-6 text-sm font-semibold text-white"
            >
              Obtenir un devis
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-3">
              {rows.map((q) => (
                <button
                  key={q.quoteNo}
                  type="button"
                  onClick={() => setOpen(q.quoteNo)}
                  className={`w-full rounded-[1.4rem] border p-5 text-left ${
                    open === q.quoteNo ? "border-navy bg-sand" : "border-line bg-surface hover:border-navy"
                  }`}
                >
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{STATUS[q.status]}</p>
                  <p className="mt-2 font-display text-xl text-navy">
                    {q.fromName} → {q.toName}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {q.quoteNo} · {formatEuro(q.total)} · {q.pack}
                  </p>
                </button>
              ))}
            </div>
            {current ? (
              <QuotePanel
                quote={current}
                onRefresh={() => setTick((n) => n + 1)}
              />
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
}

function QuotePanel({ quote, onRefresh }: { quote: StoredQuote; onRefresh: () => void }) {
  const lead = {
    firstName: quote.firstName,
    lastName: quote.lastName,
    client: quote.client,
    company: quote.company,
    email: quote.email,
    phone: quote.phone,
    fromName: quote.fromName,
    toName: quote.toName,
    km: quote.km,
    delay: quote.delay,
    total: quote.total,
    quoteNo: quote.quoteNo,
    lines: quote.lines,
    extras: quote.extras,
    pickupDate: quote.pickupDate,
    accepted: quote.status !== "envoye",
  };

  return (
    <div className="space-y-6" onBlur={onRefresh}>
      <div className="rounded-[1.6rem] border border-line bg-surface p-6 sm:p-8">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{STATUS[quote.status]}</p>
        <p className="mt-3 font-display text-3xl text-navy">{formatEuro(quote.total)}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {quote.fromName} → {quote.toName}. {quote.km} km. {quote.pack}. {quote.quoteNo}.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-navy">
          {quote.lines.map((l) => (
            <li key={l.label} className="flex justify-between gap-4">
              <span>{l.label}</span>
              <span className="shrink-0">{formatEuro(l.amount)}</span>
            </li>
          ))}
        </ul>
      </div>
      {quote.status !== "envoye" ? <MissionDossier quote={quote} lead={lead} /> : (
        <p className="text-sm leading-relaxed text-muted">
          Signez le devis depuis le simulateur, ou depuis l’e-mail reçu. Le dossier véhicule s’ouvre ensuite.
        </p>
      )}
    </div>
  );
}
