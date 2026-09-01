export type SeoPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  kind: "ville" | "region" | "france" | "europe" | "metier";
  image: string;
  intro: string;
  body: string[];
  nearby: { to: string; label: string }[];
  faq: { q: string; a: string }[];
};

const IMG = "/images/01_hero_bretagne.jpg";

function ville(
  slug: string,
  name: string,
  identity: string,
  tarif: string,
  nearby: SeoPage["nearby"],
): SeoPage {
  return {
    slug,
    title: `Convoyage de voiture à ${name} · CLÉMENT CONVOYAGE`,
    h1: `Convoyage de voiture à ${name}`,
    description: `Convoyage et livraison de véhicules à ${name}. Base Quimper, EDL photo, devis sous 2 h. ${tarif}.`,
    kind: "ville",
    image: IMG,
    intro: identity,
    body: [
      `CLÉMENT CONVOYAGE est basé à Quimper. Pour ${name}, vous avez un interlocuteur local, joignable 7 j/7, qui connaît les délais, les axes et les remises en concession.`,
      `Chaque mission comprend la conduite A → B, le carburant du véhicule convoyé, les péages, le retour du convoyeur, un état des lieux photo au départ et à l’arrivée, et la remise des clés.`,
      `Tarif depuis ou vers Quimper : ${tarif}. Estimation ferme via le simulateur, devis écrit sous 2 heures ouvrées.`,
      `Véhicules acceptés : particuliers, utilitaires et vans ≤ 3,5 t, en état de marche. Hors champ : plateau, poids lourd, non-roulant.`,
    ],
    nearby,
    faq: [
      {
        q: `Pourquoi un convoyeur basé à Quimper pour ${name} ?`,
        a: "La proximité change les délais et les retours. Un interlocuteur unique, pas une plateforme anonyme.",
      },
      {
        q: "Le véhicule est-il assuré pendant le trajet ?",
        a: "La responsabilité civile professionnelle est souscrite. Les conditions d’assurance du véhicule sont rappelées au devis.",
      },
    ],
  };
}

export const SEO_PAGES: SeoPage[] = [
  ville(
    "convoyage-quimper",
    "Quimper",
    "Capitale de la Cornouaille, Quimper conjugue le centre historique, Pluguffan, Ergué-Gabéric et un tissu de concessions, garages et mandataires. C’est notre base.",
    "55 € en local",
    [
      { to: "/convoyage-concarneau", label: "Concarneau" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-lorient", label: "Lorient" },
      { to: "/livraison-voiture-finistere", label: "Finistère" },
    ],
  ),
  ville(
    "convoyage-concarneau",
    "Concarneau",
    "Ville close, port et zone commerciale : Concarneau génère des livraisons VO, CT et retours atelier au quotidien vers Quimper.",
    "70 €",
    [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-lorient", label: "Lorient" },
      { to: "/livraison-voiture-finistere", label: "Finistère" },
    ],
  ),
  ville(
    "convoyage-brest",
    "Brest",
    "Métropole du Finistère nord, Brest et Guipavas concentrent concessions, loueurs et flux vers le sud Cornouaille.",
    "105 €",
    [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/livraison-voiture-finistere", label: "Finistère" },
    ],
  ),
  ville(
    "convoyage-lorient",
    "Lorient",
    "Lorient, Lanester et Guidel : axe N165, volume de VO et d’utilitaires entre le Morbihan et le Finistère sud.",
    "100 €",
    [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-vannes", label: "Vannes" },
      { to: "/convoyage-bretagne", label: "Bretagne" },
    ],
  ),
  ville(
    "convoyage-vannes",
    "Vannes",
    "Préfecture du Morbihan, Vannes et Auray sont un relais naturel entre Quimper et Rennes / Nantes.",
    "155 €",
    [
      { to: "/convoyage-lorient", label: "Lorient" },
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/convoyage-nantes", label: "Nantes" },
    ],
  ),
  ville(
    "convoyage-rennes",
    "Rennes",
    "Capitale régionale, Rennes polarise les stocks constructeurs, mandataires et livraisons clients de tout l’ouest.",
    "245 €",
    [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-nantes", label: "Nantes" },
      { to: "/convoyage-saint-brieuc", label: "Saint-Brieuc" },
    ],
  ),
  ville(
    "convoyage-saint-brieuc",
    "Saint-Brieuc",
    "Côte-d’Armor : Saint-Brieuc et Plérin, livraisons nord Bretagne depuis la base Quimper.",
    "185 €",
    [
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-bretagne", label: "Bretagne" },
    ],
  ),
  ville(
    "convoyage-nantes",
    "Nantes",
    "Porte de l’ouest vers le reste de la France. Nantes, Saint-Herblain, Montoir : transferts flotte et livraisons clients.",
    "310 €",
    [
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/convoyage-vannes", label: "Vannes" },
      { to: "/convoyage-voiture-france", label: "France" },
    ],
  ),
  {
    slug: "convoyage-bretagne",
    title: "Convoyage de véhicules en Bretagne · CLÉMENT CONVOYAGE",
    h1: "Convoyage de véhicules en Bretagne",
    description:
      "Livraison de voitures dans toute la Bretagne depuis Quimper. Finistère, Morbihan, Côtes-d’Armor, Ille-et-Vilaine.",
    kind: "region",
    image: IMG,
    intro:
      "Quatre départements, une base : Quimper. Nous couvrons Cornouaille, Brest, Lorient, Vannes, Saint-Brieuc, Rennes et Saint-Malo.",
    body: [
      "Le convoyage régional est notre cœur de métier : délais 24–48 h, EDL photo, tarif tout compris.",
      "Les pages villes détaillent les forfaits. Le simulateur calcule n’importe quel trajet intra-Bretagne.",
    ],
    nearby: [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/livraison-voiture-finistere", label: "Finistère" },
    ],
    faq: [
      { q: "Intervenez-vous dans les quatre départements ?", a: "Oui. Base Quimper, toute la Bretagne, puis la France et l’Europe." },
    ],
  },
  {
    slug: "livraison-voiture-finistere",
    title: "Livraison de voiture dans le Finistère · CLÉMENT CONVOYAGE",
    h1: "Livraison de voiture dans le Finistère",
    description:
      "Convoyage Finistère : Quimper, Brest, Concarneau, Douarnenez, Quimperlé, Morlaix. Devis sous 2 h.",
    kind: "region",
    image: IMG,
    intro:
      "Le 29 est une péninsule. Un convoyeur basé à Quimper évite les allers vides et tient les créneaux des concessions locales.",
    body: [
      "Forfaits locaux dès 55 €. Brest 105 €, Lorient 100 €, Concarneau 70 €.",
      "Idéal pour CT, carrosserie, prêts de courtoisie et livraisons clients VO.",
    ],
    nearby: [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-concarneau", label: "Concarneau" },
    ],
    faq: [{ q: "Délai type dans le 29 ?", a: "Jour J ou J+1 pour le local et Brest / Lorient." }],
  },
  {
    slug: "convoyage-voiture-france",
    title: "Convoyage de voiture en France · CLÉMENT CONVOYAGE",
    h1: "Convoyage de voiture en France",
    description:
      "Livraison de véhicules partout en France métropolitaine depuis Quimper. Paris 580 €, Nantes 310 €, Lyon 790 €.",
    kind: "france",
    image: "/images/04_europe_nuit.jpg",
    intro: "Depuis Quimper, nous livrons toute la France métropolitaine. Grille nationale, devis hors grille sous 2 h.",
    body: [
      "Paris 580 €, Nantes 310 €, Bordeaux 560 €, Lyon 790 €, Marseille 980 € — tout compris.",
      "Particuliers : règlement avant départ. Professionnels : 15 jours.",
    ],
    nearby: [
      { to: "/simulateur", label: "Simulateur" },
      { to: "/livraison-europe", label: "Europe" },
      { to: "/convoyage-bretagne", label: "Bretagne" },
    ],
    faq: [{ q: "Livrez-vous la Corse ?", a: "Devis spécifique ferry. Le simulateur couvre la métropole." }],
  },
  {
    slug: "livraison-vehicule-particulier",
    title: "Livraison de véhicule pour particulier · CLÉMENT CONVOYAGE",
    h1: "Livraison de véhicule pour particulier",
    description: "Acheté une voiture à distance ? Nous la convoyons jusqu’à chez vous, EDL photo, paiement avant départ.",
    kind: "metier",
    image: "/images/02_remise_cles.jpg",
    intro:
      "Achat Leboncoin, mandataire, concession hors département : vous ne prenez pas le train. Nous amenons le véhicule.",
    body: [
      "100 % virement avant départ. Photos horodatées. Remise en main propre.",
      "Options : lavage, mise en main, recharge VE.",
    ],
    nearby: [
      { to: "/simulateur", label: "Estimer" },
      { to: "/convoyage-concession", label: "Professionnels" },
    ],
    faq: [{ q: "Puis-je payer après ?", a: "Non pour un particulier. Le virement part avant la prise en charge." }],
  },
  {
    slug: "convoyage-concession",
    title: "Convoyage pour concessions et garages · CLÉMENT CONVOYAGE",
    h1: "Convoyage pour concessions et garages",
    description:
      "Transferts inter-sites, livraisons clients VO, CT et SAV. Standard issu des réseaux DS, Renault et Mercedes-Benz.",
    kind: "metier",
    image: "/images/06_etat_des_lieux.jpg",
    intro:
      "Trois missions test au tarif grille, puis un cadre volume. Un interlocuteur, des EDL photo, un compte-rendu à chaque remise.",
    body: [
      "Paiement 15 jours. Premier dossier : acompte 50 % possible.",
      "Équipe dédiée, astreinte 24 h pour les professionnels, gestion de crise.",
    ],
    nearby: [
      { to: "/a-propos", label: "À propos" },
      { to: "/contact", label: "Cadre volume" },
    ],
    faq: [{ q: "Facturez-vous un abonnement ?", a: "Non. À la mission, ou tarif dégressif si le volume est cadré." }],
  },
  ...[
    ["convoyage-belgique", "Belgique", "850 € vers Bruxelles"],
    ["convoyage-suisse", "Suisse", "1 090 € vers Genève"],
    ["convoyage-luxembourg", "Luxembourg", "870 €"],
    ["convoyage-allemagne", "Allemagne", "Francfort 1 140 € · Munich 1 450 €"],
    ["convoyage-espagne", "Espagne", "1 180 € vers Barcelone"],
    ["convoyage-italie", "Italie", "1 450 € vers Milan"],
    ["convoyage-pays-bas", "Pays-Bas", "980 € vers Amsterdam"],
    ["convoyage-royaume-uni", "Royaume-Uni", "1 290 € vers Londres (ferry)"],
  ].map(([slug, pays, tarif]) => ({
    slug,
    title: `Convoyage de voiture vers ${pays} · CLÉMENT CONVOYAGE`,
    h1: `Convoyage de véhicule vers ${pays}`,
    description: `Livraison de voiture en ${pays} depuis Quimper. ${tarif}. Carte verte, mandat, EDL photo.`,
    kind: "europe" as const,
    image: "/images/04_europe_nuit.jpg",
    intro: `Même standard qu’en France, majoration Europe. ${tarif}, devis écrit obligatoire hors exemple.`,
    body: [
      "Documents : carte grise ou mandat, assurance, carte verte selon le pays, contrôle technique à jour.",
      "Royaume-Uni : ferry inclus dans l’exemple Londres. Autres ports sur devis.",
      "Délai indicatif J+2 à J+4.",
    ],
    nearby: [
      { to: "/livraison-europe", label: "Europe" },
      { to: "/simulateur", label: "Simulateur" },
      { to: "/convoyage-voiture-france", label: "France" },
    ],
    faq: [
      {
        q: "Qui s’occupe du passage de frontière ?",
        a: "Nous. Vous préparez les documents listés au devis. Un véhicule non conforme est refusé avant départ.",
      },
    ],
  })),
];

export function seoBySlug(slug: string) {
  return SEO_PAGES.find((p) => p.slug === slug);
}
