import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { downloadQuotePdf } from "@/lib/quote-pdf";
import { mailtoFallback, sendDevisLead } from "@/lib/send-devis";
import { quoteRange, type QuoteInput, type QuoteResult } from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

const EXTRAS: Record<string, string> = {
  exterieur: "Lavage extérieur",
  complet: "Lavage complet",
};

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
    input.lavage !== "aucun" ? EXTRAS[input.lavage] : "",
    input.miseEnMain ? "Mise en main" : "",
    input.rechargeVe ? "Recharge VE" : "",
    input.gps ? "Traqueur GPS" : "",
    input.securite ? "Protocole sécurité" : "",
    input.vehicle === "prestige" ? "Prestige" : "",
    input.vehicle === "utilitaire" ? "Utilitaire" : "",
    input.when === "urgent" ? "Urgent" : "",
    input.when === "samedi" ? "Samedi" : "",
    input.when === "dimanche" ? "Dimanche / férié" : "",
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
        x: revealed ? 0 : 6 * p + 4,
        y: revealed ? 0 : -8 * p,
        z: revealed ? 1 : 0.94 + (1 - Math.abs(p)) * 0.06,
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
    <div className="mt-4 grid items-start gap-10 lg:grid-cols-2">
      <div ref={scene} className="perspective-scene px-1 pb-6 pt-8 lg:sticky lg:top-24">
        <div
          className="card-3d min-h-[340px] rounded-[2rem] bg-navy p-8 text-surface shadow-[0_40px_80px_-24px_rgba(0,0,0,0.45)]"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.z})`,
            transition: "transform 400ms cubic-bezier(0.2, 0, 0, 1)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-surface/50">
            {quote.fromName} → {quote.toName}
          </p>
          {revealed ? (
            <>
              <p className="mt-6 text-sm text-surface/70">Fourchette indicative</p>
              <p className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {formatEuro(range.low)} – {formatEuro(range.high)}
              </p>
              <p className="mt-3 text-sm text-surface/70">
                Autour de {formatEuro(range.mid)} · {quote.km} km · {quote.delay}
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-surface/75">
                Prix indicatif, à confirmer avec un professionnel avant toute mission. Un PDF vient
                d’être téléchargé. Un e-mail de confirmation part sur votre boîte.
              </p>
              <Button
                type="button"
                className="mt-6"
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
                <p className="mt-3 text-xs text-surface/60">
                  Si l’e-mail automatique n’arrive pas, votre messagerie s’est ouverte en secours.
                </p>
              ) : null}
            </>
          ) : (
            <>
              <p className="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Votre estimation
                <br />
                est prête.
              </p>
              <p className="mt-6 select-none font-display text-5xl font-semibold tracking-tight text-surface/25 blur-sm">
                ••• €
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-surface/70">
                Laissez vos coordonnées pour afficher la fourchette, recevoir le PDF et un e-mail de
                confirmation.
              </p>
            </>
          )}
        </div>
      </div>

      {revealed ? (
        <div className="rounded-[1.6rem] border border-line bg-surface p-6 sm:p-8">
          <p className="font-display text-2xl tracking-tight text-navy">C’est envoyé.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {firstName}, la fourchette {formatEuro(range.low)} – {formatEuro(range.high)} est
            indicative. Clément confirme le prix ferme sous 2 heures ouvrées.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-[1.6rem] border border-line bg-surface p-6 sm:p-8">
          <p className="font-display text-2xl tracking-tight text-navy">Pour voir le prix</p>
          <p className="mt-1 text-sm text-muted">Nom, téléphone et e-mail sont obligatoires.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Field label="Prénom" value={firstName} onChange={setFirstName} autoComplete="given-name" />
            <Field label="Nom" value={lastName} onChange={setLastName} autoComplete="family-name" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <KindButton active={kind === "part"} onClick={() => setKind("part")} label="Particulier" />
            <KindButton active={kind === "pro"} onClick={() => setKind("pro")} label="Professionnel" />
          </div>
          {kind === "pro" ? (
            <div className="mt-3">
              <Field label="Société" value={company} onChange={setCompany} autoComplete="organization" />
            </div>
          ) : null}
          <div className="mt-3">
            <Field label="Téléphone" value={phone} onChange={setPhone} type="tel" autoComplete="tel" />
          </div>
          <div className="mt-3">
            <Field
              label="E-mail"
              value={email}
              onChange={setEmail}
              type="email"
              autoComplete="email"
            />
          </div>
          <Button type="submit" className="mt-6 w-full" size="lg" disabled={busy}>
            {busy ? "Envoi…" : "Afficher ma fourchette"}
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Vos données servent uniquement à ce devis. Pas de revente. Un e-mail part vers vous et
            vers {SITE_EMAIL}.
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
        className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-3 text-base text-navy"
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
      className={`rounded-2xl border px-3 py-3 text-sm font-medium transition-colors ${
        active ? "border-navy bg-navy text-surface" : "border-line bg-bg text-navy"
      }`}
    >
      {label}
    </button>
  );
}
