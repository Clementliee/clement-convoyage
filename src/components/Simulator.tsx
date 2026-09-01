import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { QuoteGate } from "@/components/QuoteGate";
import { Button } from "@/components/ui/button";
import {
  CITIES,
  computeQuote,
  type QuoteInput,
  type VehicleKind,
  type WhenKind,
  type ZoneKind,
} from "@/lib/tarifs";

const STEPS = [
  "Qui commande ?",
  "Type de véhicule",
  "Départ",
  "Arrivée",
  "Zone",
  "Quand",
  "Options",
];

export function Simulator({ initialFrom = "", initialTo = "" }: { initialFrom?: string; initialTo?: string }) {
  const [step, setStep] = useState(0);
  const [gate, setGate] = useState(false);
  const [client, setClient] = useState<"part" | "pro">("part");
  const [input, setInput] = useState<QuoteInput>({
    from: initialFrom || "Quimper",
    to: initialTo,
    zone: "france",
    vehicle: "vp",
    when: "standard",
    lavage: "aucun",
    miseEnMain: false,
    rechargeVe: false,
    gps: false,
    securite: false,
  });
  const [kmManual, setKmManual] = useState("");

  const quote = useMemo(
    () => computeQuote({ ...input, kmManual: kmManual ? Number(kmManual) : undefined }),
    [input, kmManual],
  );

  const canNext =
    step === 2 ? Boolean(input.from.trim() || kmManual) : step === 3 ? Boolean(input.to.trim() || kmManual) : true;

  const next = () => {
    if (!canNext) return;
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const prev = () => {
    if (gate) {
      setGate(false);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  };

  if (gate && quote.ok) {
    return (
      <div>
        <button type="button" onClick={prev} className="mb-4 text-sm text-muted hover:text-navy">
          ← Modifier le trajet
        </button>
        <QuoteGate quote={quote} client={client} input={input} />
      </div>
    );
  }

  return (
    <div className="rounded-[1.6rem] border border-line bg-surface p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">
          Étape {step + 1} / {STEPS.length}
        </p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-sand">
          <div className="h-full bg-coral transition-all" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
        <h2 className="mt-4 font-display text-2xl tracking-tight text-navy">{STEPS[step]}</h2>
      </div>

      {step === 0 && (
        <Choice
          options={[
            { v: "part", l: "Particulier", h: "Règlement avant départ" },
            { v: "pro", l: "Professionnel", h: "Paiement 15 jours" },
          ]}
          onPick={(v) => {
            setClient(v as "part" | "pro");
            next();
          }}
        />
      )}
      {step === 1 && (
        <Choice
          options={[
            { v: "vp", l: "Véhicule particulier", h: "Berline, SUV, citadine" },
            { v: "utilitaire", l: "Utilitaire / van", h: "Permis B, ≤ 3,5 t" },
            { v: "prestige", l: "Prestige", h: "Protocole renforcé" },
            { v: "ve", l: "Véhicule électrique", h: "Plan de recharge" },
          ]}
          onPick={(v) => {
            setInput((s) => ({ ...s, vehicle: v as VehicleKind, rechargeVe: v === "ve" }));
            next();
          }}
        />
      )}
      {step === 2 && (
        <CityField
          id="from-city"
          name="from"
          label="Ville de départ"
          value={input.from}
          onChange={(from) => setInput((s) => ({ ...s, from }))}
        />
      )}
      {step === 3 && (
        <CityField
          id="to-city"
          name="to"
          label="Ville d’arrivée"
          value={input.to}
          onChange={(to) => setInput((s) => ({ ...s, to }))}
        />
      )}
      {step === 4 && (
        <Choice
          options={[
            { v: "france", l: "Bretagne / France", h: "Métropole" },
            { v: "europe", l: "Europe", h: "Formalités frontière" },
          ]}
          onPick={(v) => {
            setInput((s) => ({ ...s, zone: v as ZoneKind }));
            next();
          }}
        />
      )}
      {step === 5 && (
        <Choice
          options={[
            { v: "standard", l: "Standard", h: "Créneau habituel" },
            { v: "urgent", l: "Urgent", h: "Sous 24 h, selon dispo" },
            { v: "samedi", l: "Samedi", h: "Week-end" },
            { v: "dimanche", l: "Dimanche / férié", h: "Astreinte" },
          ]}
          onPick={(v) => {
            setInput((s) => ({ ...s, when: v as WhenKind }));
            next();
          }}
        />
      )}
      {step === 6 && (
        <div className="space-y-3">
          <Toggle
            label="Lavage extérieur"
            on={input.lavage === "exterieur"}
            onClick={() => setInput((s) => ({ ...s, lavage: s.lavage === "exterieur" ? "aucun" : "exterieur" }))}
          />
          <Toggle
            label="Lavage intérieur + extérieur"
            on={input.lavage === "complet"}
            onClick={() => setInput((s) => ({ ...s, lavage: s.lavage === "complet" ? "aucun" : "complet" }))}
          />
          <Toggle
            label="Mise en main"
            on={input.miseEnMain}
            onClick={() => setInput((s) => ({ ...s, miseEnMain: !s.miseEnMain }))}
          />
          <Toggle
            label="Recharge VE"
            on={input.rechargeVe}
            onClick={() => setInput((s) => ({ ...s, rechargeVe: !s.rechargeVe }))}
          />
          <Toggle
            label="Traqueur GPS (pose le temps de la mission)"
            on={input.gps}
            onClick={() => setInput((s) => ({ ...s, gps: !s.gps }))}
          />
          <Toggle
            label="Protocole sécurité (scellé, EDL renforcée)"
            on={input.securite}
            onClick={() => setInput((s) => ({ ...s, securite: !s.securite }))}
          />
        </div>
      )}

      {(step === 2 || step === 3) && (
        <label className="mt-4 block text-sm text-muted">
          Kilomètres GPS si la ville n’est pas dans la liste
          <input
            name="km"
            type="number"
            min={1}
            value={kmManual}
            onChange={(e) => setKmManual(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-3 text-navy"
            placeholder="ex. 210"
          />
        </label>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button variant="ghost" type="button" onClick={prev} disabled={step === 0}>
          Retour
        </Button>
        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next} disabled={!canNext}>
            Continuer
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => quote.ok && setGate(true)}
            disabled={!quote.ok}
          >
            Préparer mon estimation
          </Button>
        )}
      </div>

      {step === STEPS.length - 1 && !quote.ok ? (
        <p className="mt-6 text-sm text-muted">{quote.message}</p>
      ) : null}

      <p className="mt-4 text-center text-xs text-muted">
        Le prix s’affiche après vos coordonnées. Fourchette indicative, à confirmer.{" "}
        <Link to="/contact" className="text-coral">
          Contact
        </Link>
      </p>
    </div>
  );
}

function Choice({
  options,
  onPick,
}: {
  options: { v: string; l: string; h: string }[];
  onPick: (v: string) => void;
}) {
  return (
    <div className="grid gap-3">
      {options.map((o) => (
        <button
          key={o.v}
          type="button"
          onClick={() => onPick(o.v)}
          className="flex items-center justify-between rounded-2xl border border-line bg-bg px-4 py-4 text-left transition-colors hover:border-navy"
        >
          <span className="font-medium text-navy">{o.l}</span>
          <span className="text-sm text-muted">{o.h}</span>
        </button>
      ))}
    </div>
  );
}

function CityField({
  id,
  name,
  label,
  value,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        id={id}
        name={name}
        list={`${id}-list`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-3 text-base text-navy"
        placeholder={label}
        autoComplete="off"
      />
      <datalist id={`${id}-list`}>
        {CITIES.map((c) => (
          <option key={c.name} value={c.name} />
        ))}
      </datalist>
    </label>
  );
}

function Toggle({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left ${on ? "border-navy bg-sand" : "border-line bg-bg"}`}
    >
      <span className="text-navy">{label}</span>
      <span className="text-sm font-semibold text-coral">{on ? "Oui" : "Non"}</span>
    </button>
  );
}
