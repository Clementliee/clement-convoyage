/** Offres commerciales. Prix packs = indicatifs, à confirmer. Convoyage : fourchette après coordonnées. */

export const PROTOCOL = {
  name: "Protocole Clément",
  promise: "Avant, pendant, après. Photos, faits, compte-rendu.",
} as const;

export const PILLARS = [
  {
    k: "Convoyage",
    t: "Le véhicule va de A à B.",
    d: "Prise en charge, conduite, péages, retour du convoyeur. Particuliers et utilitaires jusqu’à 3,5 t, en état de marche.",
  },
  {
    k: "Contrôle",
    t: "Rien ne part sans preuve.",
    d: "État des lieux photo, kilométrage, carburant ou autonomie. Ce n’est pas une expertise. C’est une trace.",
  },
  {
    k: "Préparation",
    t: "Le véhicule arrive prêt.",
    d: "Lavage, niveaux, pression, plein ou recharge. Vous composez. La mise en main est offerte.",
  },
  {
    k: "Remise",
    t: "Comme en concession.",
    d: "Clés en main propre, documents, compte-rendu. Option coffret ou kit. Pas un parking.",
  },
] as const;

export const PROCESS = [
  { n: "01", t: "Demande", d: "Simulateur ou appel. Départ, arrivée, véhicule, options." },
  { n: "02", t: "Analyse", d: "Distance, créneau, documents, faisabilité. Si ça ne tient pas, on le dit." },
  { n: "03", t: "Devis", d: "Fourchette après vos coordonnées. Confirmation sous 2 heures ouvrées." },
  { n: "04", t: "Prise en charge", d: "Identification, photos, compteur, carburant, documents." },
  { n: "05", t: "Convoyage", d: "Conduite, suivi, signalement si incident. Protocole Clément." },
  { n: "06", t: "Remise", d: "Photos d’arrivée, clés, mise en main offerte." },
  { n: "07", t: "Compte-rendu", d: "Faits, photos, kilométrage. Facture pour les professionnels." },
] as const;

export const PACKS = [
  {
    id: "essentiel" as const,
    name: "Pack Essentiel",
    from: 89,
    tag: "Mise à la route",
    items: [
      "Pression des pneus",
      "Contrôle des niveaux",
      "Lave-glace",
      "Contrôle visuel 20 points",
      "Photos",
      "Carburant ou recharge selon besoin, au réel",
    ],
  },
  {
    id: "confort" as const,
    name: "Pack Confort",
    from: 149,
    tag: "Le plus demandé",
    items: [
      "Tout le pack Essentiel",
      "Nettoyage intérieur et extérieur",
      "Vitres, aspiration, plastiques",
      "Désodorisation légère",
      "Préparation des documents",
    ],
  },
  {
    id: "premium" as const,
    name: "Pack Premium",
    from: 229,
    tag: "Remise concession",
    items: [
      "Tout le pack Confort",
      "Préparation esthétique renforcée",
      "Dossier photo complet",
      "Kit de bienvenue",
      "Mise en main (déjà offerte)",
      "Suivi de mission renforcé",
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
  { t: "Prestige", d: "Protocole Clément, option GPS le temps de la mission." },
] as const;

export const B2B_CASES = [
  { t: "Concessions", d: "Livraison client, transferts inter-sites, VO, courtoisie." },
  { t: "Garages", d: "CT, carrosserie, retours atelier. Vous gardez vos techniciens au banc." },
  { t: "Mandataires", d: "De la plate-forme jusqu’au client. Remise, pas un parking." },
  { t: "Marchands VO", d: "Rééquilibrage, livraisons, photos. Volume après trois missions test." },
  { t: "Loueurs", d: "One-way, saisonnalité, flotte. EDL type loueur." },
  { t: "Flottes", d: "Entreprises, leasing. Un interlocuteur, facturation mensuelle possible." },
] as const;

export const FORMULAS = [
  {
    id: "standard" as const,
    name: "Livraison",
    tag: "Toujours",
    items: [
      "Le véhicule va de A à B",
      "Photos au départ et à l’arrivée",
      "Carburant, péages, retour du convoyeur",
      "Clés en main propre",
      "Mise en main offerte",
    ],
  },
  {
    id: "premium" as const,
    name: "Livraison préparée",
    tag: "Vous ajoutez",
    items: [
      "Tout de la livraison",
      "Nettoyage intérieur et extérieur, 45 €",
      "Traqueur GPS pour l’acheteur, 5 €, en option",
      "Coffret, plein, pack, si vous voulez",
      "Mise en main offerte",
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
  { t: "Expérience automobile", d: "DS Automobiles, Renault, Mercedes-Benz. Le niveau d’une remise en concession." },
  { t: "Procédure", d: "Protocole Clément. Avant, pendant, après. Photos, faits, pas d’improvisation." },
  { t: "Rigueur", d: "Horaires tenus. Si le créneau ne tient pas, on le dit avant." },
  { t: "Un interlocuteur", d: "Clément, Quimper. Pas une plateforme. Astreinte 24 h pour les professionnels." },
  { t: "Traçabilité", d: "EDL photo, compte-rendu. Option GPS temporaire, le temps de la mission." },
  { t: "Panier complet", d: "Convoyage, préparation, packs, coffrets. Vous composez. Vous ne payez pas une grille fantôme." },
] as const;
