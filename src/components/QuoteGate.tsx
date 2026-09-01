import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { downloadQuotePdf } from "@/lib/quote-pdf";
import { mailtoFallback, sendDevisLead } from "@/lib/send-devis";
import { quoteRange, type QuoteInput, type QuoteResult } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

export function QuoteGate({
  quote,
  client,
  input,
}: {
  quote: QuoteResult;
  client: "part" | "pro";
  input: QuoteInput;
}) {
  const range = quoteRange(quote.total);
  const extras = [
    input.mission === "jockey" ? `Jockey ${input.jockeyPoint}` : "",
    input.mission === "jockey" && input.jockeyRef ? `Train ou vol ${input.jockeyRef}` : "",
    input.mission === "jockey" && input.jockeyAller ? `Aller ${input.jockeyAller.replace("T", " ")}` : "",
    input.mission === "jockey" && input.jockeyRetour ? `Retour ${input.jockeyRetour.replace("T", " ")}` : "",
    input.mission === "jockey" && input.jockeyCt ? "Passage révision ou contrôle technique" : "",
    input.lavage === "complet" || input.pack === "confort" || input.pack === "premium" ? "Préparation esthétique complète" : "",
    input.gps ? "Balise traqueur GPS 4G autonome, 12 mois inclus" : "",
    "Mise en main personnalisée, offerte",
    input.plein ? "Service plein carburant ou charge 90 % ou plus" : "",
    input.rechargeVe ? "Recharge VE" : "",
    input.controleVisuel || input.pack !== "aucun" ? "" : "",
    input.coffret === "champagne" ? "Coffret Prestige Champagne" : input.coffret === "armor" ? "Coffret Terroir Breton" : "",
    input.kitBienvenue || input.pack === "premium" ? "Kit de bienvenue" : "",
    input.pack === "essentiel" ? "Pack Standard" : "",
    input.pack === "confort" ? "Pack Confort" : "",
    input.pack === "premium" ? "Pack Signature" : "",
    input.model ? `Véhicule : ${input.model}` : "",
    input.vehicle === "prestige" ? "Prestige" : "",
    input.vehicle === "utilitaire" ? "Utilitaire" : "",
    input.when === "urgent" ? "Urgent, sous 72 h" : "Standard, 5 jours",
  ]
    .filter(Boolean)
    .join(", ");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [kind, setKind] = useState<"part" | "pro">(client);
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [mailOk, setMailOk] = useState(true);
  const [tilt, setTilt] = useState({ x: 8, y: -8, z: 0.96 });
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTilt({ x: 0, y: 0, z: 1 });
      return;
    }
    const onScroll = () => {
      const el = scene.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const view = window.innerHeight / 2;
      const p = Math.max(-1, Math.min(1, (mid - view) / view));
      setTilt({
        x: revealed ? 0 : 8 * p + 3,
        y: revealed ? 0 : -10 * p,
        z: revealed ? 1 : 0.93 + (1 - Math.abs(p)) * 0.07,
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealed]);

  const extrasLabel = extras || "Aucune option";

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !email.trim()) return;
    if (kind === "pro" && !company.trim()) return;
    setBusy(true);
    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      client: kind,
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      fromName: quote.fromName,
      toName: quote.toName,
      km: quote.km,
      delay: quote.delay,
      range,
      extras: extrasLabel,
    };
    try {
      const sent = await sendDevisLead(payload);
      setMailOk(sent.ok);
      await downloadQuotePdf(payload);
      setRevealed(true);
      if (!sent.ok) {
        window.location.href = mailtoFallback(payload);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mt-4 grid items-start gap-12 lg:grid-cols-2">
      <div ref={scene} className="perspective-scene px-1 pb-6 pt-8 lg:sticky lg:top-24">
        <div
          className="card-3d min-h-[360px] rounded-[2.2rem] bg-navy p-10 text-surface shadow-[0_40px_80px_-24px_rgba(0,0,0,0.45)]"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.z})`,
            transition: "transform 500ms cubic-bezier(0.2, 0, 0, 1)",
          }}
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-surface/50 uppercase">
            {quote.fromName} vers {quote.toName}
          </p>
          {revealed ? (
            <>
              <p className="mt-8 text-sm text-surface/70">Tarif final, indicatif</p>
              <p className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                de {formatEuro(range.low)} à {formatEuro(range.high)}
              </p>
              <p className="mt-4 text-sm text-surface/70">
                Autour de {formatEuro(range.mid)}. {quote.km} km. {quote.delay}.
              </p>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-surface/75">
                Prix indicatif, à confirmer avec un professionnel avant toute mission. Un PDF vient
                d’être téléchargé. Un e-mail de confirmation part sur votre boîte.
              </p>
              <Button
                type="button"
                className="mt-8"
                onClick={() =>
                  void downloadQuotePdf({
                    firstName,
                    lastName,
                    client: kind,
                    company,
                    email,
                    phone,
                    fromName: quote.fromName,
                    toName: quote.toName,
                    km: quote.km,
                    delay: quote.delay,
                    range,
                    extras: extrasLabel,
                  })
                }
              >
                Télécharger le PDF
              </Button>
              {!mailOk ? (
                <p className="mt-4 text-xs text-surface/60">
                  Si l’e-mail automatique n’arrive pas, votre messagerie s’est ouverte en secours.
                </p>
              ) : null}
            </>
          ) : (
            <>
              <p className="mt-10 font-display text-4xl tracking-tight sm:text-5xl">
                Votre estimation
                <br />
                est prête.
              </p>
              <p className="mt-8 select-none font-display text-5xl tracking-tight text-surface/20 blur-[6px]">
                Prix masqué
              </p>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-surface/70">
                Laissez vos coordonnées pour afficher la fourchette, recevoir le PDF et un e-mail de
                confirmation.
              </p>
            </>
          )}
        </div>
      </div>

      {revealed ? (
        <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">C’est envoyé.</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {firstName}, la fourchette de {formatEuro(range.low)} à {formatEuro(range.high)} est
            indicative. Clément confirme le prix ferme sous 2 heures ouvrées.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
          <p className="font-display text-3xl text-navy">Pour voir le prix</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">Nom, téléphone et e-mail sont obligatoires.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Field label="Prénom" value={firstName} onChange={setFirstName} autoComplete="given-name" />
            <Field label="Nom" value={lastName} onChange={setLastName} autoComplete="family-name" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <KindButton active={kind === "part"} onClick={() => setKind("part")} label="Particulier" />
            <KindButton active={kind === "pro"} onClick={() => setKind("pro")} label="Professionnel" />
          </div>
          {kind === "pro" ? (
            <div className="mt-4">
              <Field label="Société" value={company} onChange={setCompany} autoComplete="organization" />
            </div>
          ) : null}
          <div className="mt-4">
            <Field label="Téléphone" value={phone} onChange={setPhone} type="tel" autoComplete="tel" />
          </div>
          <div className="mt-4">
            <Field label="E-mail" value={email} onChange={setEmail} type="email" autoComplete="email" />
          </div>
          <Button type="submit" className="mt-8 w-full" size="lg" disabled={busy}>
            {busy ? "Envoi…" : "Générer mon devis officiel"}
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Afin d’ajuster l’itinéraire kilométrique et d’appliquer le barème, renseignez vos coordonnées. La synthèse s’affiche ensuite. Proposition tarifaire ferme sous 2 heures ouvrées. Un e-mail part vers vous et vers {SITE_EMAIL}.
          </p>
        </form>
      )}
    </div>
  );
}

const SITE_EMAIL = "leliege.clement@gmail.com";

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        required
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-base text-navy"
        suppressHydrationWarning
      />
    </label>
  );
}

function KindButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-3 py-3.5 text-sm font-medium transition-colors ${
        active ? "border-navy bg-navy text-surface" : "border-line bg-bg text-navy"
      }`}
    >
      {label}
    </button>
  );
}
