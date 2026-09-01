import { Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { QuoteGate } from "@/components/QuoteGate";
import { Button } from "@/components/ui/button";
import {
  CITIES,
  computeQuote,
  type FormulaKind,
  type PackKind,
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
  "Composer les options",
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
    rechargeVe: false,
    gps: false,
    securite: false,
    plein: false,
    controleVisuel: false,
    coffret: "aucun",
    pack: "aucun",
    kitBienvenue: false,
    formula: "standard",
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
        <button type="button" onClick={prev} className="mb-6 text-sm text-muted hover:text-navy">
          Modifier le trajet
        </button>
        <QuoteGate quote={quote} client={client} input={input} />
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-sm sm:p-10">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">
          Étape {step + 1} sur {STEPS.length}
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-sand">
          <div className="h-full bg-coral transition-all" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
        <h2 className="mt-6 font-display text-3xl text-navy">{STEPS[step]}</h2>
        {step === 6 ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Chaque véhicule est unique : gabarit, motorisation thermique ou électrique, contraintes d’assurance, niveau de préparation. Ces questions évitent un tarif générique.
          </p>
        ) : null}
      </div>

      {step === 0 && (
        <Choice
          options={[
            { v: "part", l: "Particulier", h: "Règlement avant départ" },
            { v: "pro", l: "Professionnel", h: "Paiement à quinze jours" },
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
            { v: "utilitaire", l: "Utilitaire, van", h: "Permis B, jusqu’à 3,5 t" },
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
            { v: "france", l: "Bretagne, France", h: "Métropole" },
            { v: "europe", l: "Europe", h: "Formalités de frontière" },
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
            { v: "urgent", l: "Urgent", h: "Sous 24 h, selon disponibilité" },
            { v: "samedi", l: "Samedi", h: "Week-end" },
            { v: "dimanche", l: "Dimanche, férié", h: "Astreinte" },
          ]}
          onPick={(v) => {
            setInput((s) => ({ ...s, when: v as WhenKind }));
            next();
          }}
        />
      )}
      {step === 6 && (
        <div className="space-y-10">
          <p className="rounded-[1.4rem] bg-sand px-5 py-4 text-sm leading-relaxed text-navy">
            Déjà inclus dans chaque mission : conduite, carburant, péages, retour, état des lieux photo, clés, mise en main offerte. La formule ajoute le niveau de sécurité et de remise.
          </p>
          <OptionGroup title="Formule">
            <div className="grid gap-3 sm:grid-cols-2">
              <Toggle
                label="Formule Standard"
                text="Sécurité, traqueur GPS, EDL. Mise en main offerte."
                image="/images/08_securite.jpg"
                on={input.formula === "standard"}
                onClick={() =>
                  setInput((s) => ({
                    ...s,
                    formula: "standard" as FormulaKind,
                    gps: true,
                    securite: true,
                  }))
                }
              />
              <Toggle
                label="Formule Premium VIP"
                text="Standard, lavage complet, mise en main experte, coffret."
                image="/images/09_coffret_armor.jpg"
                on={input.formula === "premium"}
                onClick={() =>
                  setInput((s) => ({
                    ...s,
                    formula: "premium" as FormulaKind,
                    gps: true,
                    securite: true,
                    lavage: "complet",
                    coffret: s.coffret === "champagne" ? "champagne" : "armor",
                  }))
                }
              />
            </div>
          </OptionGroup>
          <OptionGroup title="Pack mise à la route">
            <div className="grid gap-3 sm:grid-cols-3">
              {(
                [
                  { v: "essentiel", l: "Essentiel", h: "Niveaux, pneus, contrôle visuel." },
                  { v: "confort", l: "Confort", h: "Essentiel et nettoyage complet." },
                  { v: "premium", l: "Premium", h: "Confort, kit, dossier photo." },
                ] as const
              ).map((p) => (
                <Toggle
                  key={p.v}
                  label={p.l}
                  text={p.h}
                  on={input.pack === p.v}
                  onClick={() =>
                    setInput((s) => ({
                      ...s,
                      pack: s.pack === p.v ? "aucun" : (p.v as PackKind),
                      controleVisuel: s.pack === p.v ? s.controleVisuel : true,
                    }))
                  }
                />
              ))}
            </div>
          </OptionGroup>
          <OptionGroup title="Options additionnelles">
            <div className="grid gap-3 sm:grid-cols-2">
              <Toggle
                label="Inspection, contrôle visuel"
                text="Vingt points, photos. Ce n’est pas une expertise."
                image="/images/06_etat_des_lieux.jpg"
                on={input.controleVisuel}
                onClick={() => setInput((s) => ({ ...s, controleVisuel: !s.controleVisuel }))}
              />
              <Toggle
                label="Restitution propre"
                text="Lavage intérieur et extérieur avant remise."
                image="/images/03_nettoyage.jpg"
                on={input.lavage === "complet" || input.formula === "premium"}
                onClick={() =>
                  setInput((s) => ({
                    ...s,
                    lavage: s.lavage === "complet" && s.formula !== "premium" ? "aucun" : "complet",
                  }))
                }
              />
              <Toggle
                label="Suivi GPS temps réel"
                text="Balise le temps de la mission. Inclus dans les formules."
                image="/images/07_gps.jpg"
                on={input.gps || input.formula !== "aucun"}
                onClick={() =>
                  setInput((s) =>
                    s.formula !== "aucun"
                      ? s
                      : { ...s, gps: !s.gps },
                  )
                }
              />
              <Toggle
                label="Plein à la remise"
                text="Réservoir fait. Carburant au réel."
                image="/images/11_plein.jpg"
                on={input.plein}
                onClick={() => setInput((s) => ({ ...s, plein: !s.plein }))}
              />
            </div>
          </OptionGroup>
          <OptionGroup title="Véhicule électrique">
            <Toggle
              label="Recharge VE"
              text="Niveau de batterie convenu à la remise."
              image="/images/11_plein.jpg"
              on={input.rechargeVe}
              onClick={() => setInput((s) => ({ ...s, rechargeVe: !s.rechargeVe }))}
            />
          </OptionGroup>
          <OptionGroup title="Cadeau à la remise. Un coffret.">
            <div className="grid gap-3 sm:grid-cols-2">
              <Toggle
                label="Coffret Armor"
                text="Galettes, caramels, cidre."
                image="/images/09_coffret_armor.jpg"
                on={input.coffret === "armor"}
                onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "armor" ? "aucun" : "armor" }))}
              />
              <Toggle
                label="Coffret Champagne"
                text="Brut et chocolats."
                image="/images/10_coffret_champagne.jpg"
                on={input.coffret === "champagne"}
                onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "champagne" ? "aucun" : "champagne" }))}
              />
              <Toggle
                label="Kit de bienvenue"
                text="Eau, lingettes, microfibre, désodorisant."
                on={input.kitBienvenue || input.pack === "premium"}
                onClick={() => setInput((s) => ({ ...s, kitBienvenue: !s.kitBienvenue }))}
              />
            </div>
          </OptionGroup>
          <OptionGroup title="Véhicule (facultatif)">
            <label className="block text-sm text-muted">
              Marque et modèle
              <input
                value={input.model ?? ""}
                onChange={(e) => setInput((s) => ({ ...s, model: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
                placeholder="exemple, Peugeot 308"
                suppressHydrationWarning
              />
            </label>
          </OptionGroup>
        </div>
      )}

      {(step === 2 || step === 3) && (
        <label className="mt-6 block text-sm text-muted">
          Kilomètres GPS si la ville n’est pas dans la liste
          <input
            name="km"
            type="number"
            min={1}
            value={kmManual}
            onChange={(e) => setKmManual(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
            placeholder="exemple, 210"
            suppressHydrationWarning
          />
        </label>
      )}

      <div className="mt-10 flex items-center justify-between gap-3">
        <Button variant="ghost" type="button" onClick={prev} disabled={step === 0}>
          Retour
        </Button>
        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next} disabled={!canNext}>
            Continuer
          </Button>
        ) : (
          <Button type="button" onClick={() => quote.ok && setGate(true)} disabled={!quote.ok}>
            Préparer mon estimation
          </Button>
        )}
      </div>

      {step === STEPS.length - 1 && !quote.ok ? (
        <p className="mt-6 text-sm text-muted">{quote.message}</p>
      ) : null}

      <p className="mt-6 text-center text-xs leading-relaxed text-muted">
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
          className="flex items-center justify-between rounded-2xl border border-line bg-bg px-5 py-5 text-left transition-colors hover:border-navy"
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
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-base text-navy"
        placeholder={label}
        autoComplete="off"
        suppressHydrationWarning
      />
      <datalist id={`${id}-list`}>
        {CITIES.map((c) => (
          <option key={c.name} value={c.name} />
        ))}
      </datalist>
    </label>
  );
}

function OptionGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{title}</p>
      {children}
    </div>
  );
}

function Toggle({
  label,
  text,
  image,
  on,
  onClick,
}: {
  label: string;
  text: string;
  image?: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`overflow-hidden rounded-[1.5rem] border text-left transition-colors ${
        on ? "border-navy bg-sand" : "border-line bg-bg"
      }`}
    >
      {image ? <img src={image} alt="" className="h-28 w-full object-cover" /> : null}
      <span className="block p-4">
        <span className="block font-display text-lg text-navy">{label}</span>
        <span className="mt-1 block text-sm text-muted">{text}</span>
        <span className="mt-3 block text-sm font-semibold text-coral">{on ? "Ajouté" : "Ajouter"}</span>
      </span>
    </button>
  );
}
