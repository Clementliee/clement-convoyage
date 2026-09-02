/** Offres commerciales. Trois packs particulier, trois packs professionnel. Pas d’à la carte sur le convoyage. */

import { OPTIONS } from "@/lib/tarifs";

export const PROTOCOL = {
  name: "Protocole Clément",
  promise: "Avant, pendant, après. Photos, faits, compte-rendu.",
} as const;

export const PRESTIGE_PROTOCOL = {
  name: "Protocole Prestige",
  kicker: "Prestige",
  price: OPTIONS.protocolePrestige,
  promise: "Pour sportives, prestige, collection et imports. Même convoyage conduit. Plus de cadre.",
  items: [
    {
      t: "Scellés",
      d: "Clés et documents du véhicule sous scellé numéroté. Mallette dédiée. Remise à la personne nommée.",
    },
    {
      t: "Suivi",
      d: "Balise GPS le temps de la mission, lien partagé au donneur d’ordre. Retirée à la remise.",
    },
    {
      t: "Conduite",
      d: "Mode Comfort. Montée en température. Autoroute privilégiée pour les bas de caisse. Pauses en stations éclairées. Aucune sous-traitance.",
    },
    {
      t: "Trace",
      d: "Photos départ et arrivée. Compte-rendu factuel le soir même.",
    },
  ],
  simulator:
    "Scellés numérotés des clés et documents du véhicule, mallette dédiée, suivi GPS le temps de la mission, conduite adaptée, pauses en zones éclairées, compte-rendu, zéro sous-traitance.",
  prestigeHint:
    "Majoration véhicule prestige déjà incluse dans le trajet (+20 %). Le protocole est le cadre de remise, inclus au Pack Signature réseau.",
  disclaimer:
    "Le protocole porte sur le véhicule et ses documents de circulation. Ce n’est pas une activité de sécurité privée, ni un transport de fonds ou de valeurs. L’acceptation dépend de la valeur déclarée et des plafonds d’assurance.",
  href: "/convoyage-prestige",
  cta: "Estimer une mission",
} as const;

export const PILLARS = [
  {
    k: "France",
    t: "Transfert routier et logistique véhicules",
    d: "Convoyage en conduite, chauffeur dédié. VL, berlines, électriques, utilitaires jusqu’à 3,5 t. État des lieux photo haute définition, assurance tous risques, traçabilité de mission.",
  },
  {
    k: "Préparation",
    t: "Préparation esthétique et mise à la route",
    d: "Remise conforme aux réseaux constructeurs. Nettoyage intérieur et extérieur, niveaux, carburant ou recharge, protocole de mise en main, offerte.",
  },
  {
    k: "Europe",
    t: "Liaisons européennes sécurisées",
    d: "Allemagne, Belgique, Suisse, Monaco, Royaume-Uni, Pologne, Italie, Espagne. Formalités transfrontalières cadrées avant départ.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    t: "Ordre de mission",
    d: "Impératifs de délai, créneau dédié, confirmation sous 2 heures ouvrées.",
  },
  {
    n: "02",
    t: "Prise en charge",
    d: "Contrôle visuel, état des lieux photo horodaté, documents, clés en main.",
  },
  {
    n: "03",
    t: "Acheminement",
    d: "Conduite soignée, assurance dédiée, information en cas d’imprévu.",
  },
  {
    n: "04",
    t: "Remise protocolaire",
    d: "État des lieux d’arrivée, mise en main offerte, compte-rendu de mission.",
  },
] as const;

export const PACKS_PART = [
  {
    id: "essentiel" as const,
    name: "Pack Route",
    from: 0,
    tag: "Le trajet",
    items: [
      "Chauffeur professionnel, base Quimper",
      "État des lieux photo, départ et arrivée",
      "Assurance tous risques, mise en main offerte",
    ],
  },
  {
    id: "confort" as const,
    name: "Pack Sérénité",
    from: OPTIONS.packPartSerenite,
    tag: "Le plus choisi",
    items: [
      "Tout le Pack Route",
      "Nettoyage intérieur et extérieur",
      "Plein carburant, ou recharge VE",
    ],
  },
  {
    id: "premium" as const,
    name: "Pack Sécurisé",
    from: OPTIONS.packPartSecurise,
    tag: "Suivi et sérénité",
    items: [
      "Tout le Pack Sérénité",
      "Traceur GPS 4G cédé, 12 mois inclus",
      "Suivi pendant la mission",
    ],
  },
] as const;

export const PACKS_PRO = [
  {
    id: "essentiel" as const,
    name: "Pack Atelier",
    from: 0,
    tag: "Réseau",
    items: [
      "Convoyage A → B, chauffeur dédié",
      "État des lieux photo HD, compte-rendu",
      "Facture à quinze jours",
    ],
  },
  {
    id: "confort" as const,
    name: "Pack Livraison client",
    from: OPTIONS.packProLivraison,
    tag: "Le plus choisi",
    items: [
      "Tout le Pack Atelier",
      "Nettoyage standard constructeur",
      "Coffret Terroir Breton, mise en main client",
    ],
  },
  {
    id: "premium" as const,
    name: "Pack Signature réseau",
    from: OPTIONS.packProSignature,
    tag: "Image de marque",
    items: [
      "Tout le Pack Livraison client",
      "Coffret Prestige Champagne",
      "GPS le temps de la mission, protocole de remise",
    ],
  },
] as const;

/** @deprecated Use PACKS_PART / PACKS_PRO. Kept for pages that still iterate a single list. */
export const PACKS = PACKS_PART;

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
  { t: "Prestige", d: "Protocole Prestige : scellés, GPS le temps de la mission, conduite adaptée, remise à la personne nommée. Inclus au Pack Signature réseau." },
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
    t: "Navettes ateliers et centres de contrôle",
    d: "Transferts programmés de vos véhicules clients. Vos techniciens restent au banc.",
  },
  {
    t: "Rotations de stocks inter-concessions",
    d: "Réactivité sous 24 à 48 h entre succursales. Quimper, Brest, Lorient, Rennes.",
  },
  {
    t: "Délégation de livraison client final",
    d: "Remise des clés à domicile, présentation des options, image de marque tenue.",
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
  { t: "Packs, pas d’à la carte", d: "Trois packs particulier, trois packs professionnel. La conciergerie se compose sur devis." },
  { t: "Professionnels", d: "Concessions, garages, flottes. Facture, quinze jours." },
] as const;

export const WHY_PRO_DRIVER = [
  {
    t: "Un chauffeur professionnel",
    d: "Permis, assurance tous risques, état des lieux. Pas un particulier qui prend le volant de votre achat pour 60 €.",
  },
  {
    t: "Photos, pas une promesse",
    d: "Compteur, carrosserie, habitacle. Départ et arrivée. Vous avez la trace.",
  },
  {
    t: "Mise en main offerte",
    d: "Vingt à trente minutes à la remise. Aides à la conduite, multimédia, recharge.",
  },
  {
    t: "Créneau tenu",
    d: "Tous les jours. Si ça ne tient pas, on le dit avant. Si ça coince en route, on prévient.",
  },
] as const;
