export const SITE = {
  name: "Convoyage BZH",
  mark: "BZH",
  legalName: "Clément René Dominique LELIÈGE",
  tradeName: "BZH3D",
  baseline: "Votre véhicule livré comme en concession.",
  sub: "Base Quimper. Toute la Bretagne, la France, l’Europe.",
  city: "Quimper",
  region: "Finistère, Bretagne",
  street: "11 rue Hoche",
  postalCode: "29000",
  coords: "47.99 N, 4.10 O",
  phone: "06 24 04 85 73",
  phoneHref: "tel:+33624048573",
  email: "leliege.clement@gmail.com",
  hours: "Tous les jours",
  siren: "894 337 120",
  siret: "894 337 120 00048",
  ape: "6201Z",
  apeLabel: "Programmation informatique",
  rne: "02/07/2026",
  form: "Entrepreneur individuel, micro-entreprise",
  vat: "Franchise en base de TVA, article 293 B du CGI",
  domain: "bzh3d.fr",
  origin: "https://clement-convoyage.vercel.app",
  host: "Vercel Inc., 440 Terry Avenue North, San Francisco, CA 94158, États-Unis",
} as const;

export const NAV = [
  { to: "/prestations", label: "Prestations" },
  { to: "/professionnels", label: "Professionnels" },
  { to: "/simulateur", label: "Estimer" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export const INCLUDED = [
  {
    t: "Conduite",
    d: "Prise en charge, trajet, remise. Véhicule particulier ou utilitaire jusqu’à 3,5 t, en état de marche.",
  },
  {
    t: "Carburant et péages",
    d: "Ceux du véhicule convoyé, sur le trajet convenu.",
  },
  {
    t: "Retour du convoyeur",
    d: "Le retour à vide est dans la mission. Pas à votre charge.",
  },
  {
    t: "Photos du véhicule",
    d: "Au départ et à l’arrivée. Compteur, carrosserie, intérieur. Pour éviter les discussions sur une rayure.",
  },
  {
    t: "Remise des clés",
    d: "En main propre. Documents. Compte-rendu de mission.",
  },
  {
    t: "Mise en main",
    d: "Offerte à chaque livraison. Vingt à trente minutes. Commandes, options, charge.",
  },
] as const;

export const ADDONS = [
  {
    to: "/nettoyage-vehicule",
    title: "Nettoyage intérieur et extérieur",
    text: "Le véhicule arrive propre. 45 €.",
    price: "45 €",
    image: "/images/03_nettoyage.jpg",
    alt: "Nettoyage intérieur et extérieur",
  },
  {
    to: "/traqueur-gps",
    title: "Traqueur GPS 4G",
    text: "Pour l’acheteur. Il le garde. 12 mois inclus. 199 €.",
    price: "199 €",
    image: "/images/07_gps.jpg",
    alt: "Traceur GPS 4G pour l’acheteur",
  },
  {
    to: "/nettoyage-vehicule",
    title: "Plein ou charge 90 %",
    text: "Essence : réservoir plein. Électrique : batterie à 90 % ou plus. 65 €, énergie au réel.",
    price: "65 €",
    image: "/images/11_plein.jpg",
    alt: "Plein de carburant ou recharge",
  },
  {
    to: "/coffrets-livraison",
    title: "Coffret Armor",
    text: "Galettes, caramels, cidre, carte. 45 €.",
    price: "45 €",
    image: "/images/09_coffret_armor.jpg",
    alt: "Coffret Armor",
  },
  {
    to: "/coffrets-livraison",
    title: "Coffret Champagne",
    text: "Champagne brut, chocolats, écrin. 89 €.",
    price: "89 €",
    image: "/images/10_coffret_champagne.jpg",
    alt: "Coffret Champagne",
  },
] as const;

export const SERVICES = [
  {
    to: "/livraison-vehicule",
    title: "Livraison France",
    text: "Convoyage en conduite, particuliers et utilitaires jusqu’à 3,5 t. État des lieux photo, carburant et péages inclus.",
    image: "/images/02_remise_cles.jpg",
    alt: "Remise des clés d’un véhicule premium",
  },
  {
    to: "/nettoyage-vehicule",
    title: "Préparation",
    text: "Lavage, plein, recharge. La mise en main est offerte à chaque remise.",
    image: "/images/03_nettoyage.jpg",
    alt: "Nettoyage professionnel d’une berline",
  },
  {
    to: "/livraison-europe",
    title: "Livraison Europe",
    text: "Belgique, Suisse, Allemagne, Pologne, Monaco, Serbie, Espagne, Italie, Royaume-Uni. Le même standard.",
    image: "/images/04_europe_nuit.jpg",
    alt: "Convoyage de nuit sur autoroute européenne",
  },
] as const;
