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
      className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6"
      onSubmit={(e) => {
        e.preventDefault();
        void navigate({ to: "/simulateur", search: { from, to } });
      }}
    >
      <p className="font-display text-lg font-semibold text-navy">Estimer en 30 secondes</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-muted">
          Départ
          <input
            list="cities-home"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 text-navy"
          />
        </label>
        <label className="text-sm text-muted">
          Arrivée
          <input
            list="cities-home"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 text-navy"
            placeholder="Rennes, Paris, Bruxelles…"
          />
        </label>
      </div>
      <datalist id="cities-home">
        {CITIES.map((c) => (
          <option key={c.name} value={c.name} />
        ))}
      </datalist>
      <Button type="submit" className="mt-4 w-full" size="lg">
        Voir le tarif
      </Button>
    </form>
  );
}
