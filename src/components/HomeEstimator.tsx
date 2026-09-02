import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CITIES } from "@/lib/tarifs";

export function HomeEstimator() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("Quimper");
  const [to, setTo] = useState("");
  return (
    <form
      className="rounded-[2rem] border border-line bg-surface p-7 shadow-sm sm:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        void navigate({ to: "/simulateur", search: { from, to } });
      }}
    >
      <p className="font-display text-2xl text-navy">Estimer en trente secondes</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Le montant s’affiche après vos coordonnées. Vous signez. Un e-mail part avec le devis.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-muted">
          Départ
          <input
            list="cities-home"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
            suppressHydrationWarning
          />
        </label>
        <label className="text-sm text-muted">
          Arrivée
          <input
            list="cities-home"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-navy"
            placeholder="Rennes, Paris, Bruxelles…"
            suppressHydrationWarning
          />
        </label>
      </div>
      <datalist id="cities-home">
        {CITIES.map((c) => (
          <option key={c.name} value={c.name} />
        ))}
      </datalist>
      <Button type="submit" className="mt-6 w-full" size="lg">
        Obtenir mon devis
      </Button>
    </form>
  );
}
