import { Link } from "@tanstack/react-router";
import { priceExamples } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

export function PriceExamples() {
  const rows = priceExamples();
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {rows.map((row) => (
          <Link
            key={`${row.from}-${row.to}`}
            to="/simulateur"
            search={{ from: row.from, to: row.to }}
            className="rounded-[1.6rem] border border-line bg-surface p-6 transition-colors hover:border-coral"
          >
            <p className="text-[11px] font-semibold tracking-[0.16em] text-coral uppercase">{row.tag}</p>
            <p className="mt-3 font-display text-xl text-navy">
              {row.from} → {row.to}
            </p>
            <p className="mt-4 font-display text-3xl text-navy">{formatEuro(row.total)}</p>
            <p className="mt-2 text-sm text-muted">
              Pack Route, aller simple
              {row.approche > 0 ? " · approche incluse" : ""}
            </p>
            <p className="mt-1 text-xs text-muted">{row.km} km</p>
          </Link>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
        Prix indicatifs, véhicule particulier, délai standard. Incluent le trajet, l’approche depuis Quimper si le départ
        n’est pas à Quimper, et le retour du chauffeur. Packs Sérénité, Sécurisé, Livraison client et Signature s’ajoutent.
        Devis ferme sous 2 heures ouvrées.
      </p>
    </div>
  );
}
