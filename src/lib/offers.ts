/** Offres commerciales. Prix packs = indicatifs, à confirmer. Convoyage : fourchette après coordonnées. */

export const PROTOCOL = {
  name: "Protocole Clément",
  promise: "Avant, pendant, après. Photos, faits, compte-rendu.",
} as const;

export const PILLARS = [
  {
    k: "Acheminement",
    t: "Convoyage routier, de bout en bout.",
    d: "Prise en charge, conduite, péages, logistique retour. Véhicules particuliers et utilitaires jusqu’à 3,5 t, en état de marche.",
  },
  {
    k: "Traçabilité",
    t: "Rapport d’état des lieux haute définition.",
    d: "Kilométrage, carrosserie, habitacle, niveau de carburant ou d’autonomie. Une preuve, pas une expertise.",
  },
  {
    k: "Préparation",
    t: "Le véhicule est restitué prêt à prendre la route.",
    d: "Préparation esthétique, fluides, pneumatiques, plein ou recharge. Vous composez. La mise en main personnalisée est offerte.",
  },
  {
    k: "Restitution",
    t: "Le standard d’une remise en concession.",
    d: "Clés en main, documents, compte-rendu de mission. Coffret privilège en option.",
  },
] as const;

export const PROCESS = [
  { n: "01", t: "Demande", d: "Simulateur ou appel. Itinéraire, segment du véhicule, options de prestation." },
  { n: "02", t: "Analyse", d: "Distance, créneau, documents, faisabilité. Un devis formel sous 2 heures ouvrées." },
  { n: "03", t: "Confirmation", d: "Estimation détaillée après vos coordonnées. Prix indicatif, à confirmer." },
  { n: "04", t: "Prise en charge", d: "Identification, rapport d’état des lieux numérique, compteur, carburant, documents." },
  { n: "05", t: "Acheminement", d: "Convoyage routier sécurisé, assurance tous risques, signalement en cas d’imprévu." },
  { n: "06", t: "Restitution", d: "État des lieux d’arrivée, clés, mise en main personnalisée offerte." },
  { n: "07", t: "Compte-rendu", d: "Photos, kilométrage, faits. Facture pour les professionnels." },
] as const;

export const PACKS = [
  {
    id: "essentiel" as const,
    name: "Pack Essentiel",
    from: 89,
    tag: "Mise à la route",
    items: [
      "Contrôle visuel 30 points",
      "Pression des pneumatiques",
      "Niveaux des fluides",
      "Rapport photo",
    ],
  },
  {
    id: "confort" as const,
    name: "Pack Confort",
    from: 149,
    tag: "Le plus demandé",
    items: [
      "Tout le pack Essentiel",
      "Préparation esthétique complète, intérieur et extérieur",
      "Finition vitres et plastiques",
      "Préparation des documents",
    ],
  },
  {
    id: "premium" as const,
    name: "Pack Signature VIP",
    from: 229,
    tag: "Remise privilège",
    items: [
      "Tout le pack Confort",
      "Coffret d’accueil haut de gamme",
      "Priorisation du créneau",
      "Mise en main personnalisée offerte",
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
    name: "Convoyage Signature",
    tag: "Inclus",
    items: [
      "Convoyage routier sécurisé, assurance tous risques",
      "Rapport d’état des lieux numérique, départ et arrivée",
      "Frais de route intégrés, carburant, péages, logistique retour",
      "Restitution des clés en main",
      "Mise en main personnalisée, offerte",
    ],
  },
  {
    id: "premium" as const,
    name: "Convoyage Prestige",
    tag: "À la carte",
    items: [
      "L’ensemble du convoyage Signature",
      "Préparation esthétique complète, 45 €",
      "Balise traqueur GPS 4G autonome, 199 €",
      "Coffret privilège, plein ou pack mise à la route",
      "Mise en main personnalisée, offerte",
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
