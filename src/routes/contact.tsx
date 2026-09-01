import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · CLÉMENT CONVOYAGE" },
      { name: "description", content: "Devis sous 2 h. Quimper, 7j/7. Appelez ou écrivez." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Devis sous"
        accent="2 heures."
        text={`${SITE.hours}. Base ${SITE.city}.`}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <form
          className="space-y-4 rounded-2xl border border-line bg-surface p-6"
          action={`mailto:${SITE.email}`}
          method="get"
        >
          {[
            ["nom", "Nom", "text"],
            ["tel", "Téléphone", "tel"],
            ["email", "E-mail", "email"],
            ["depart", "Départ", "text"],
            ["arrivee", "Arrivée", "text"],
          ].map(([name, label, type]) => (
            <label key={name} className="block text-sm text-muted">
              {label}
              <input
                name={name}
                type={type}
                required={name !== "email"}
                className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 text-navy"
              />
            </label>
          ))}
          <label className="block text-sm text-muted">
            Message
            <textarea name="body" rows={4} className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 text-navy" />
          </label>
          <Button type="submit" className="w-full" size="lg">
            Envoyer
          </Button>
          <p className="text-xs text-muted">Ouvre votre messagerie. Réponse sous 2 h ouvrées.</p>
        </form>
        <div className="space-y-4 text-muted">
          <p>
            <span className="block text-xs uppercase tracking-wider text-coral">Téléphone</span>
            <a href={SITE.phoneHref} className="font-display text-2xl text-navy">
              {SITE.phone}
            </a>
          </p>
          <p>
            <span className="block text-xs uppercase tracking-wider text-coral">E-mail</span>
            <a href={`mailto:${SITE.email}`} className="text-navy">
              {SITE.email}
            </a>
          </p>
          <p>
            {SITE.city} · {SITE.region}
            <br />
            {SITE.coords}
          </p>
          <p>SIRET : {SITE.siret}</p>
        </div>
      </section>
    </main>
  );
}
