import { SITE } from "@/lib/site";
import type { QuoteRange } from "@/lib/tarifs";

export type LeadPayload = {
  firstName: string;
  lastName: string;
  client: "part" | "pro";
  company?: string;
  email: string;
  phone: string;
  fromName: string;
  toName: string;
  km: number;
  delay: string;
  range: QuoteRange;
  extras: string;
  message?: string;
};

function autoresponse(p: LeadPayload) {
  return [
    `Bonjour ${p.firstName},`,
    "",
    "Votre demande de convoyage est bien arrivée.",
    "",
    `Trajet : ${p.fromName} → ${p.toName} (${p.km} km)`,
    `Délai estimé : ${p.delay}`,
    p.range.mid > 0 ? `Fourchette indicative : ${p.range.low} € – ${p.range.high} €` : "",
    p.range.mid > 0 ? `Estimation centrale : ${p.range.mid} €` : "",
    p.extras ? `Options : ${p.extras}` : "",
    "",
    "Ce tarif est indicatif. Il doit être confirmé avec un professionnel avant toute mission.",
    "Le PDF de devis s’est téléchargé depuis le site au moment de votre demande — conservez-le.",
    "",
    "Inclus à la confirmation : conduite, carburant, péages, retour, EDL photo, remise des clés.",
    "Franchise TVA art. 293 B du CGI.",
    "",
    `${SITE.name} — ${SITE.city}`,
    SITE.email,
  ]
    .filter((l) => l !== "")
    .join("\n");
}

export async function sendDevisLead(p: LeadPayload): Promise<{ ok: boolean; detail?: string }> {
  const body = {
    _subject: `Devis convoyage ${p.fromName} → ${p.toName} — ${p.firstName} ${p.lastName}`,
    _template: "table",
    _captcha: "false",
    _replyto: p.email,
    _autoresponse: autoresponse(p),
    email: p.email,
    Prenom: p.firstName,
    Nom: p.lastName,
    Profil: p.client === "pro" ? "Professionnel" : "Particulier",
    Societe: p.company || "—",
    Telephone: p.phone,
    Trajet: `${p.fromName} → ${p.toName}`,
    Kilometres: String(p.km),
    Delai: p.delay,
    Fourchette: `${p.range.low} € – ${p.range.high} €`,
    Estimation: `${p.range.mid} €`,
    Options: p.extras || "—",
    Message: p.message || "—",
  };

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
    if (!res.ok) return { ok: false, detail: json.message };
    return { ok: true };
  } catch {
    return { ok: false, detail: "network" };
  }
}

export function mailtoFallback(p: LeadPayload) {
  const subject = encodeURIComponent(`Devis convoyage ${p.fromName} → ${p.toName}`);
  const body = encodeURIComponent(
    [
      `${p.firstName} ${p.lastName}`,
      p.client === "pro" ? `Professionnel ${p.company ?? ""}` : "Particulier",
      p.email,
      p.phone,
      `${p.fromName} → ${p.toName} · ${p.km} km`,
      `Fourchette ${p.range.low} – ${p.range.high} €`,
      p.message ?? "",
    ].join("\n"),
  );
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}
