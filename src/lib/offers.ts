/** Offres commerciales. Prix packs = indicatifs, à confirmer. Convoyage : fourchette après coordonnées. */

export const PROTOCOL = {
  name: "Protocole Clément",
  promise: "Avant, pendant, après. Photos, faits, compte-rendu.",
} as const;

export const PILLARS = [
  { k: "01", t: "Prendre.", d: "Où le véhicule se trouve." },
  { k: "02", t: "Conduire.", d: "France et Europe." },
  { k: "03", t: "Remettre.", d: "Chez le client, comme en concession." },
] as const;

export const PROCESS = [
  { n: "01", t: "Demande", d: "Simulateur ou appel." },
  { n: "02", t: "Devis", d: "Sous 2 heures ouvrées." },
  { n: "03", t: "Acheminement", d: "On récupère, on conduit, on remet." },
  { n: "04", t: "Remise", d: "Clés, photos, mise en main offerte." },
] as const;

export const PACKS = [
  {
    id: "essentiel" as const,
    name: "Pack Standard",
    from: 89,
    tag: "Livraison soignée",
    items: [
      "Nettoyage intérieur et extérieur",
      "Contrôle visuel du véhicule",
      "Mise en main offerte",
    ],
  },
  {
    id: "confort" as const,
    name: "Pack Confort",
    from: 129,
    tag: "Le plus choisi",
    items: [
      "Tout le Pack Standard",
      "Coffret Terroir Breton, ou Prestige Champagne",
      "Mise en main offerte",
    ],
  },
  {
    id: "premium" as const,
    name: "Pack Signature",
    from: 329,
    tag: "Remise complète",
    items: [
      "Nettoyage offert",
      "Contrôle visuel",
      "Coffret Prestige Champagne",
      "Balise GPS 4G, cédée à l’acquéreur",
      "Mise en main offerte",
    ],
  },
] as const;

export const KIT = {
  name: "Kit de bienvenue",
  from: 19,
  cost: 6,
  items: [
    "Bouteille d’eau",
    "Lingettes",
    "Chiffon microfibre",
    "Désodorisant d’habitacle",
    "Carte Convoyage BZH",
  ],
  note: "Accessoires réellement fournis. Pas de câble de recharge inventé.",
} as const;

export const B2C_CASES = [
  { t: "Achat à distance", d: "Leboncoin, mandataire, concession hors département. Nous amenons le véhicule chez vous." },
  { t: "Vente", d: "Le véhicule part chez l’acheteur. État des lieux photo pour les deux parties." },
  { t: "Import", d: "Belgique, Allemagne, Pologne, Espagne. Documents vérifiés avant départ." },
  { t: "Déménagement", d: "Le véhicule suit, ou précède. Un interlocuteur, un créneau." },
  { t: "Électrique", d: "Plan de recharge, niveau de batterie convenu à la remise." },
  { t: "Prestige", d: "Photos, clés en main, mise en main offerte. Option GPS 4G pour l’acheteur." },
] as const;

export const B2B_CASES = [
  { t: "Concessions", d: "Livraison client, transferts inter-sites, VO, courtoisie." },
  { t: "Garages", d: "CT, carrosserie, retours atelier. Vous gardez vos techniciens au banc." },
  { t: "Mandataires", d: "De la plate-forme jusqu’au client. Remise, pas un parking." },
  { t: "Marchands VO", d: "Rééquilibrage, livraisons, photos. Volume après trois missions test." },
  { t: "Loueurs", d: "One-way, saisonnalité, flotte. Photos au départ et à l’arrivée." },
  { t: "Flottes", d: "Entreprises, leasing. Un interlocuteur, facturation mensuelle possible." },
] as const;

export const FORMULAS = [
  {
    id: "standard" as const,
    name: "Convoyage",
    tag: "Inclus",
    items: [
      "Prise en charge et acheminement",
      "État des lieux photo, départ et arrivée",
      "Mise en main, offerte",
    ],
  },
] as const;

export const B2B_OFFERS = [
  {
    t: "Navettes atelier et contrôle technique",
    d: "Vos techniciens restent au banc. Nous prenons le véhicule, le CT, la carrosserie, le retour.",
  },
  {
    t: "Transferts inter-sites",
    d: "Rotation de stock sous 24 à 48 h. VO, courtoisie, sites distants.",
  },
  {
    t: "Livraison clé en main client final",
    d: "Remise au standard constructeur. Photos, documents, mise en main. Vous ne sortez pas un commercial.",
  },
] as const;

export const SECURITY = [
  {
    t: "Photos",
    d: "On photographie le véhicule au départ et à l’arrivée. Compteur, carrosserie, intérieur. C’est tout. Pas un jargon.",
  },
  {
    t: "Les clés",
    d: "Elles ne traînent pas. Remise en main propre, à la personne prévue.",
  },
  {
    t: "Si ça coince",
    d: "Panne, pluie, client absent. On prévient, on dit ce qui se passe, on ne disparaît pas.",
  },
  {
    t: "À l’arrivée",
    d: "Le véhicule, les documents, la mise en main offerte. Une livraison propre.",
  },
] as const;

export const WHY = [
  { t: "Un interlocuteur", d: "Clément, à Quimper. Vous avez un numéro, un mail, une réponse." },
  { t: "Photos", d: "Au départ et à l’arrivée. Compteur, carrosserie, intérieur." },
  { t: "Mise en main offerte", d: "À chaque livraison. On prend le temps d’expliquer le véhicule." },
  { t: "Horaires tenus", d: "Si le créneau ne tient pas, on le dit avant." },
  { t: "Vous composez", d: "Livraison, puis nettoyage, GPS, plein, coffret. Prix des options affichés." },
  { t: "Professionnels", d: "Concessions, garages, flottes. Facture, quinze jours." },
] as const;
