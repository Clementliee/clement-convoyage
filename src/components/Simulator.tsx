import { Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { QuoteGate } from "@/components/QuoteGate";
import { Button } from "@/components/ui/button";
import {
  CITIES,
  computeQuote,
  JOCKEY_POINTS,
  JOCKEY_SENS,
  OPTIONS,
  WHEN_OFFERS,
  type MissionKind,
  type PackKind,
  type QuoteInput,
  type VehicleKind,
  type WhenKind,
  type ZoneKind,
} from "@/lib/tarifs";
import { formatEuro } from "@/lib/utils";

const STEPS = [
  "Qui commande ?",
  "Type de véhicule",
  "Départ",
  "Arrivée",
  "Zone",
  "Quand",
  "Configuration des prestations associées",
];

function applyPack(s: QuoteInput, pack: PackKind): QuoteInput {
  if (pack === "aucun") {
    return {
      ...s,
      pack,
      lavage: "aucun",
      gps: false,
      coffret: "aucun",
      controleVisuel: false,
      plein: false,
      kitBienvenue: false,
    };
  }
  if (pack === "essentiel") {
    return { ...s, pack, lavage: "complet", gps: false, coffret: "aucun", controleVisuel: true };
  }
  if (pack === "confort") {
    const coffret = s.vehicle === "prestige" ? "champagne" : s.coffret === "champagne" ? "champagne" : "armor";
    return { ...s, pack, lavage: "complet", gps: false, coffret, controleVisuel: true };
  }
  return { ...s, pack, lavage: "complet", gps: true, coffret: "champagne", controleVisuel: true };
}

export function Simulator({
  initialFrom = "",
  initialTo = "",
  initialMission = "",
}: {
  initialFrom?: string;
  initialTo?: string;
  initialMission?: "" | MissionKind;
}) {
  const [flow, setFlow] = useState<"" | MissionKind>(initialMission || "");
  const [step, setStep] = useState(0);
  const [gate, setGate] = useState(false);
  const [carteOpen, setCarteOpen] = useState(false);
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
    formula: "aucun",
    mission: initialMission === "jockey" ? "jockey" : "convoyage",
    jockeySens: "rapatriement",
    jockeyPoint: "",
    jockeyRef: "",
    jockeyAller: "",
    jockeyRetour: "",
    jockeyCt: false,
    jockeyWash: "aucun",
  });
  const [kmManual, setKmManual] = useState("");

  const quote = useMemo(
    () => computeQuote({ ...input, kmManual: kmManual ? Number(kmManual) : undefined }),
    [input, kmManual],
  );
  const standardBase = useMemo(
    () =>
      computeQuote({
        ...input,
        when: "standard",
        kmManual: kmManual ? Number(kmManual) : undefined,
      }).base,
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
    if (step === 0) {
      setFlow("");
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  };

  if (!flow) {
    return (
      <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">Étape 1</p>
        <h2 className="mt-4 font-display text-3xl text-navy">Quelle mission ?</h2>
        <div className="mt-8">
          <Choice
            options={[
              {
                v: "convoyage",
                l: "Convoyage, livraison France et Europe",
                h: "A vers B",
              },
              {
                v: "jockey",
                l: "Jockey gare ou aéroport",
                h: "Parvis, navette locale",
              },
            ]}
            onPick={(v) => {
              const mission = v as MissionKind;
              setFlow(mission);
              setInput((s) => ({ ...s, mission }));
              setStep(0);
            }}
          />
        </div>
      </div>
    );
  }

  if (flow === "jockey") {
    return (
      <JockeyFlow
        input={input}
        setInput={setInput}
        client={client}
        setClient={setClient}
        gate={gate}
        setGate={setGate}
        quote={quote}
        onBack={() => {
          setFlow("");
          setGate(false);
          setStep(0);
        }}
      />
    );
  }

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
        {step === 5 ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Délai à partir de la confirmation du devis, sous réserve de disponibilité des équipes. Week-end et jours fériés inclus.
          </p>
        ) : null}
        {step === 6 ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Trois menus de livraison, plus avantageux qu’à la carte. Ou aucune option, protocole de mise en main offert.
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
            { v: "prestige", l: "Prestige", h: "Berline, sportive" },
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
        <WhenPicker
          base={quote.ok ? standardBase : 0}
          showEuro={quote.ok && standardBase > 0}
          onPick={(v) => {
            setInput((s) => ({ ...s, when: v }));
            next();
          }}
        />
      )}
      {step === 6 && (
        <div className="space-y-10">
          <div className="rounded-[1.4rem] bg-sand px-5 py-5">
            <p className="text-sm text-muted">Mise en main personnalisée</p>
            <p className="font-display text-3xl text-coral">Offerte</p>
            <p className="mt-2 text-sm text-muted">
              Protocole de mise en main. Configuration des aides à la conduite, multimédia, recharge.
            </p>
          </div>

          <OptionGroup title="Menus de livraison">
            <p className="mb-4 text-sm text-muted">Moins cher qu’à la carte. Un seul menu.</p>
            <div className="grid gap-3">
              <Toggle
                label="Pack Standard"
                text="Nettoyage intérieur et extérieur. Contrôle visuel. Mise en main offerte."
                price={formatEuro(OPTIONS.packEssentiel)}
                on={input.pack === "essentiel"}
                onClick={() => {
                  setCarteOpen(false);
                  setInput((s) => applyPack(s, "essentiel"));
                }}
              />
              <Toggle
                label="Pack Confort"
                text={
                  input.vehicle === "prestige"
                    ? "Tout le Standard. Coffret Prestige Champagne. Mise en main offerte."
                    : "Tout le Standard. Coffret Terroir Breton, ou Prestige Champagne. Mise en main offerte."
                }
                price={formatEuro(
                  input.vehicle === "prestige" || input.coffret === "champagne"
                    ? OPTIONS.packConfortChampagne
                    : OPTIONS.packConfort,
                )}
                on={input.pack === "confort"}
                onClick={() => {
                  setCarteOpen(false);
                  setInput((s) => applyPack(s, "confort"));
                }}
              />
              <Toggle
                label="Pack Signature"
                text="Nettoyage offert. Contrôle visuel. Coffret Prestige. Balise GPS 4G. Mise en main offerte."
                price={formatEuro(OPTIONS.packPremium)}
                on={input.pack === "premium"}
                onClick={() => {
                  setCarteOpen(false);
                  setInput((s) => applyPack(s, "premium"));
                }}
              />
              <Toggle
                label="Je ne souhaite pas de pack"
                text="Mise en main offerte. 0 €. Vous pourrez composer à la carte, ou rien."
                price="0 €"
                on={carteOpen}
                onClick={() => {
                  setCarteOpen(true);
                  setInput((s) => applyPack(s, "aucun"));
                }}
              />
            </div>
          </OptionGroup>

          {input.pack === "confort" ? (
            <OptionGroup title="Coffret du Pack Confort">
              {input.vehicle === "prestige" ? (
                <p className="text-sm leading-relaxed text-muted">
                  Véhicule haut de gamme : Coffret Prestige Champagne inclus. Cidre, galettes, caramel pour le Terroir. Champagne brut et chocolats pour le Prestige.
                </p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  <Toggle
                    label="Coffret Terroir Breton"
                    text="Cidre d’exception, galettes fines, caramel au beurre salé."
                    price="Inclus"
                    image="/images/coffret-terroir-breton.jpg"
                    on={input.coffret !== "champagne"}
                    onClick={() => setInput((s) => ({ ...s, coffret: "armor" }))}
                  />
                  <Toggle
                    label="Coffret Prestige Champagne"
                    text="Champagne brut et chocolats fins."
                    price={`+ ${formatEuro(OPTIONS.packConfortChampagne - OPTIONS.packConfort)}`}
                    image="/images/coffret-prestige-champagne.jpg"
                    on={input.coffret === "champagne"}
                    onClick={() => setInput((s) => ({ ...s, coffret: "champagne" }))}
                  />
                </div>
              )}
            </OptionGroup>
          ) : null}

          {carteOpen && input.pack === "aucun" ? (
            <OptionGroup title="À la carte">
              <p className="mb-4 text-sm text-muted">Si vous ne prenez pas de menu. Ou aucune prestation supplémentaire.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Toggle
                  label="Aucune prestation supplémentaire"
                  text="Mise en main offerte uniquement."
                  price="0 €"
                  on={
                    !input.gps &&
                    input.lavage === "aucun" &&
                    !input.plein &&
                    input.coffret === "aucun" &&
                    !input.controleVisuel
                  }
                  onClick={() =>
                    setInput((s) => ({
                      ...s,
                      lavage: "aucun",
                      gps: false,
                      plein: false,
                      coffret: "aucun",
                      controleVisuel: false,
                    }))
                  }
                />
                <Toggle
                  label="Nettoyage intérieur et extérieur"
                  text="Finition vitres et plastiques."
                  price={formatEuro(OPTIONS.lavageComplet)}
                  image="/images/preparation-esthetique-vehicule.jpg"
                  on={input.lavage === "complet"}
                  onClick={() => setInput((s) => ({ ...s, lavage: s.lavage === "complet" ? "aucun" : "complet" }))}
                />
                <Toggle
                  label="Contrôle visuel"
                  text="Pression, fluides, points de contrôle. Ce n’est pas une expertise."
                  price={formatEuro(OPTIONS.controleVisuel)}
                  on={input.controleVisuel}
                  onClick={() => setInput((s) => ({ ...s, controleVisuel: !s.controleVisuel }))}
                />
                <Toggle
                  label="Plein ou charge 90 %"
                  text="Énergie au réel, sur justificatif."
                  price={formatEuro(OPTIONS.plein)}
                  image="/images/plein-carburant-vehicule.jpg"
                  on={input.plein}
                  onClick={() => setInput((s) => ({ ...s, plein: !s.plein }))}
                />
                <Toggle
                  label="Balise GPS 4G"
                  text="Cédée à l’acquéreur. 12 mois inclus."
                  price={formatEuro(OPTIONS.gps)}
                  image="/images/balise-gps-4g-vehicule.jpg"
                  on={input.gps}
                  onClick={() => setInput((s) => ({ ...s, gps: !s.gps }))}
                />
                <Toggle
                  label="Coffret Terroir Breton"
                  text="Cidre, galettes, caramel au beurre salé."
                  price={formatEuro(OPTIONS.coffretArmor)}
                  image="/images/coffret-terroir-breton.jpg"
                  on={input.coffret === "armor"}
                  onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "armor" ? "aucun" : "armor" }))}
                />
                <Toggle
                  label="Coffret Prestige Champagne"
                  text="Champagne brut et chocolats fins."
                  price={formatEuro(OPTIONS.coffretChampagne)}
                  image="/images/coffret-prestige-champagne.jpg"
                  on={input.coffret === "champagne"}
                  onClick={() => setInput((s) => ({ ...s, coffret: s.coffret === "champagne" ? "aucun" : "champagne" }))}
                />
              </div>
            </OptionGroup>
          ) : null}

          <div className="rounded-[1.4rem] border border-line px-5 py-5">
            <p className="text-sm text-muted">Options sélectionnées</p>
            <p className="font-display text-2xl text-navy">{formatEuro(quote.options)}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Le convoyage se calcule ensuite, après vos coordonnées. Devis formel sous 2 heures ouvrées.
            </p>
          </div>
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
        <Button variant="ghost" type="button" onClick={prev}>
          Retour
        </Button>
        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next} disabled={!canNext}>
            Continuer
          </Button>
        ) : (
          <Button type="button" onClick={() => quote.ok && setGate(true)} disabled={!quote.ok}>
            Générer mon devis officiel
          </Button>
        )}
      </div>

      {step === STEPS.length - 1 && !quote.ok ? (
        <p className="mt-6 text-sm text-muted">{quote.message}</p>
      ) : null}

      <p className="mt-6 text-center text-xs leading-relaxed text-muted">
        Le coût du convoyage s’ajuste selon la distance exacte. Devis formel sous 2 heures ouvrées.{" "}
        <Link to="/contact" className="text-coral">
          Contact
        </Link>
      </p>
    </div>
  );
}

function WhenPicker({
  base,
  showEuro,
  onPick,
}: {
  base: number;
  showEuro: boolean;
  onPick: (v: WhenKind) => void;
}) {
  return (
    <div className="grid gap-3">
      {WHEN_OFFERS.map((w) => {
        const extra = Math.round(base * w.extraPct);
        return (
          <button
            key={w.id}
            type="button"
            onClick={() => onPick(w.id)}
            className="flex flex-col gap-2 rounded-2xl border border-line bg-bg px-5 py-5 text-left transition-colors hover:border-navy sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="block font-medium text-navy">{w.name}</span>
              <span className="mt-1 block text-sm text-muted">
                {w.delay}. {w.hint}
              </span>
            </span>
            <span className="shrink-0 text-sm font-semibold text-coral">
              {w.extraPct === 0
                ? w.extraLabel
                : showEuro && extra > 0
                  ? `${w.extraLabel} · ${formatEuro(extra)}`
                  : w.extraLabel}
            </span>
          </button>
        );
      })}
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
  price,
  on,
  onClick,
}: {
  label: string;
  text: string;
  image?: string;
  price?: string;
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
        <span className="flex items-start justify-between gap-3">
          <span className="font-display text-lg text-navy">{label}</span>
          {price ? <span className="shrink-0 text-sm font-semibold text-coral">{price}</span> : null}
        </span>
        <span className="mt-1 block text-sm text-muted">{text}</span>
        <span className="mt-3 block text-sm font-semibold text-navy">{on ? "Ajouté" : "Ajouter"}</span>
      </span>
    </button>
  );
}

function JockeyFlow({
  input,
  setInput,
  client,
  setClient,
  gate,
  setGate,
  quote,
  onBack,
}: {
  input: QuoteInput;
  setInput: (fn: (s: QuoteInput) => QuoteInput) => void;
  client: "part" | "pro";
  setClient: (v: "part" | "pro") => void;
  gate: boolean;
  setGate: (v: boolean) => void;
  quote: ReturnType<typeof computeQuote>;
  onBack: () => void;
}) {
  const [step, setStep] = useState(0);
  const steps = ["Le trajet", "Le domicile", "Gare ou aéroport", "Horaires", "Options"];

  if (gate && quote.ok) {
    return (
      <div>
        <button type="button" onClick={() => setGate(false)} className="mb-6 text-sm text-muted hover:text-navy">
          Modifier le créneau
        </button>
        <QuoteGate quote={quote} client={client} input={input} />
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-sm sm:p-10">
      <button type="button" onClick={onBack} className="mb-6 text-sm text-muted hover:text-navy">
        Changer de mission
      </button>
      <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">
        Jockey, étape {step + 1} sur {steps.length}
      </p>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-sand">
        <div className="h-full bg-coral transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <h2 className="mt-6 font-display text-3xl text-navy">{steps[step]}</h2>

      {step === 0 && (
        <div className="mt-8">
          <Choice
            options={JOCKEY_SENS.map((s) => ({ v: s.id, l: s.name, h: s.hint }))}
            onPick={(v) => {
              setInput((s) => ({ ...s, jockeySens: v as QuoteInput["jockeySens"] }));
              setStep(1);
            }}
          />
        </div>
      )}

      {step === 1 && (
        <div className="mt-8">
          <CityField
            id="jockey-home"
            name="jockey-home"
            label="Ville du domicile"
            value={input.from}
            onChange={(from) => setInput((s) => ({ ...s, from }))}
          />
          <p className="mt-3 text-sm text-muted">Le tarif se calcule entre le domicile et la gare ou l’aéroport.</p>
        </div>
      )}

      {step === 2 && (
        <div className="mt-8">
          <Choice
            options={JOCKEY_POINTS.map((p) => ({
              v: p.name,
              l: p.name,
              h: `À partir de ${formatEuro(p.forfait)} · aller et retour ${formatEuro(p.allerRetour)}`,
            }))}
            onPick={(v) => {
              setInput((s) => ({ ...s, jockeyPoint: v, to: v }));
              setStep(3);
            }}
          />
        </div>
      )}

      {step === 3 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-muted sm:col-span-2">
            Numéro de train ou de vol
            <input
              value={input.jockeyRef}
              onChange={(e) => setInput((s) => ({ ...s, jockeyRef: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              placeholder="TGV 8690, AF7521"
            />
          </label>
          {input.jockeySens !== "rapatriement" ? (
            <label className="block text-sm text-muted">
              Date et heure de dépose
              <input
                type="datetime-local"
                value={input.jockeyAller}
                onChange={(e) => setInput((s) => ({ ...s, jockeyAller: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              />
            </label>
          ) : null}
          {input.jockeySens !== "depose" ? (
            <label className="block text-sm text-muted">
              Date et heure de rapatriement
              <input
                type="datetime-local"
                value={input.jockeyRetour}
                onChange={(e) => setInput((s) => ({ ...s, jockeyRetour: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
              />
            </label>
          ) : null}
        </div>
      )}

      {step === 4 && (
        <div className="mt-8 space-y-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <Toggle
              label="Nettoyage intérieur et extérieur"
              text="Uniquement avec le jockey. 90 €."
              price={formatEuro(OPTIONS.jockeyLavage)}
              image="/images/preparation-esthetique-vehicule.jpg"
              on={input.jockeyWash === "standard"}
              onClick={() =>
                setInput((s) => ({ ...s, jockeyWash: s.jockeyWash === "standard" ? "aucun" : "standard" }))
              }
            />
            <Toggle
              label="Nettoyage prestige"
              text="Véhicule haut de gamme. 125 €."
              price={formatEuro(OPTIONS.jockeyLavagePrestige)}
              on={input.jockeyWash === "prestige"}
              onClick={() =>
                setInput((s) => ({ ...s, jockeyWash: s.jockeyWash === "prestige" ? "aucun" : "prestige" }))
              }
            />
            <Toggle
              label="Contrôle technique"
              text="Nous emmenons le véhicule au CT. 55 €, hors facture du centre."
              price={formatEuro(OPTIONS.jockeyCt)}
              on={input.jockeyCt}
              onClick={() => setInput((s) => ({ ...s, jockeyCt: !s.jockeyCt }))}
            />
            <Toggle
              label="Plein ou charge 90 %"
              text="Essence plein, électrique à 90 % ou plus. Énergie au réel."
              price={formatEuro(OPTIONS.plein)}
              image="/images/plein-carburant-vehicule.jpg"
              on={input.plein}
              onClick={() => setInput((s) => ({ ...s, plein: !s.plein }))}
            />
          </div>
          <p className="text-sm text-muted">
            Cochez nettoyage et CT si besoin. Ils s’ajoutent au devis. Pas de gardiennage. Pas de transport de passagers.
          </p>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between gap-3">
        <Button variant="ghost" type="button" onClick={() => (step === 0 ? onBack() : setStep((s) => s - 1))}>
          Retour
        </Button>
        {step < steps.length - 1 ? (
          <Button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={(step === 1 && !input.from.trim()) || (step === 2 && !input.jockeyPoint)}
          >
            Continuer
          </Button>
        ) : (
          <Button type="button" onClick={() => quote.ok && setGate(true)} disabled={!quote.ok}>
            Générer mon devis officiel
          </Button>
        )}
      </div>
    </div>
  );
}
