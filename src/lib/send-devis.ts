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
  pickupDate?: string;
  accepted?: boolean;
};

function autoresponse(p: LeadPayload) {
  return [
    `Bonjour ${p.firstName},`,
    "",
    "Votre demande de convoyage est bien arrivée.",
    "",
    `Trajet : ${p.fromName} vers ${p.toName} (${p.km} km)`,
    `Délai estimé : ${p.delay}`,
    p.range.mid > 0 ? `Fourchette indicative : de ${p.range.low} € à ${p.range.high} €` : "",
    p.range.mid > 0 ? `Estimation centrale : ${p.range.mid} €` : "",
    p.extras ? `Options : ${p.extras}` : "",
    p.pickupDate ? `Date de prise en charge souhaitée : ${p.pickupDate}` : "",
    p.accepted ? "Devis accepté par le client. À confirmer par Convoyage BZH." : "",
    "",
    "Ce tarif est indicatif. Clément confirme le prix et le créneau sous 2 heures ouvrées.",
    "Le PDF de devis s’est téléchargé depuis le site au moment de votre demande. Conservez-le.",
    "",
    "Inclus à la confirmation : conduite, carburant, péages, retour, état des lieux photo, remise des clés, mise en main.",
    "Franchise TVA art. 293 B du CGI.",
    "",
    `${SITE.name}. ${SITE.city}`,
    SITE.email,
  ]
    .filter((l) => l !== "")
    .join("\n");
}

export async function sendDevisLead(p: LeadPayload): Promise<{ ok: boolean; detail?: string }> {
  const body = {
    _subject: `Devis convoyage ${p.fromName} vers ${p.toName}. ${p.firstName} ${p.lastName}`,
    _template: "table",
    _captcha: "false",
    _replyto: p.email,
    _autoresponse: autoresponse(p),
    email: p.email,
    Prenom: p.firstName,
    Nom: p.lastName,
    Profil: p.client === "pro" ? "Professionnel" : "Particulier",
    Societe: p.company || "",
    Telephone: p.phone,
    Trajet: `${p.fromName} vers ${p.toName}`,
    Kilometres: String(p.km),
    Delai: p.delay,
    Fourchette: `de ${p.range.low} € à ${p.range.high} €`,
    Estimation: `${p.range.mid} €`,
    Options: p.extras || "",
    DateSouhaitee: p.pickupDate || "",
    Acceptation: p.accepted ? "Oui" : "En attente",
    Message: p.message || "",
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
  const subject = encodeURIComponent(`Devis convoyage ${p.fromName} vers ${p.toName}`);
  const body = encodeURIComponent(
    [
      `${p.firstName} ${p.lastName}`,
      p.client === "pro" ? `Professionnel ${p.company ?? ""}` : "Particulier",
      p.email,
      p.phone,
      `${p.fromName} vers ${p.toName}, ${p.km} km`,
      p.pickupDate ? `Date souhaitée : ${p.pickupDate}` : "",
      p.accepted ? "Devis accepté. À confirmer." : "",
      `Fourchette ${p.range.low}, ${p.range.high} €`,
      p.message ?? "",
    ].join("\n"),
  );
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}
