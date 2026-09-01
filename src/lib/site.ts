export const SITE = {
  name: "Convoyage BZH",
  mark: "BZH",
  legalName: "Clément René Dominique LELIÈGE",
  tradeName: "BZH3D",
  baseline: "Acheminement, préparation et remise de véhicules, au standard concession.",
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
  { to: "/jockey-gares-aeroports", label: "Jockey" },
  { to: "/professionnels", label: "Professionnels" },
  { to: "/simulateur", label: "Estimer" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export const INCLUDED = [
  {
    t: "Convoyage routier",
    d: "Prise en charge, acheminement, restitution. Véhicule particulier ou utilitaire jusqu’à 3,5 t, en état de marche. Assurance tous risques dédiée.",
  },
  {
    t: "Frais de route",
    d: "Carburant, péages et logistique retour du convoyeur, intégrés à la mission.",
  },
  {
    t: "État des lieux numérique",
    d: "Rapport haute définition, départ et arrivée. Compteur, carrosserie, habitacle.",
  },
  {
    t: "Restitution des clés",
    d: "En main. Documents de bord. Compte-rendu de mission.",
  },
  {
    t: "Mise en main personnalisée",
    d: "Offerte. 20 à 30 minutes : aides à la conduite, multimédia, recharge.",
  },
] as const;

export const ADDONS = [
  {
    to: "/nettoyage-vehicule",
    title: "Préparation esthétique complète",
    text: "Nettoyage minutieux intérieur et extérieur. Finition vitres et plastiques. 45 €.",
    price: "45 €",
    image: "/images/03_nettoyage.jpg",
    alt: "Préparation esthétique d’un véhicule",
  },
  {
    to: "/traqueur-gps",
    title: "Balise traqueur GPS 4G autonome",
    text: "Cédée à l’acquéreur. Pose discrète, 12 mois de suivi. 199 €.",
    price: "199 €",
    image: "/images/07_gps.jpg",
    alt: "Balise GPS 4G autonome",
  },
  {
    to: "/nettoyage-vehicule",
    title: "Plein carburant ou charge 90 %",
    text: "Réservoir plein ou batterie à 90 % ou plus. 65 €, énergie au réel.",
    price: "65 €",
    image: "/images/11_plein.jpg",
    alt: "Plein de carburant avant restitution",
  },
  {
    to: "/coffrets-livraison",
    title: "Coffret Terroir Breton",
    text: "Cidre d’exception, galettes fines, caramel au beurre salé. 45 €.",
    price: "45 €",
    image: "/images/09_coffret_armor.jpg",
    alt: "Coffret Terroir Breton",
  },
  {
    to: "/coffrets-livraison",
    title: "Coffret Prestige Champagne",
    text: "Champagne brut sélectionné et chocolats fins. 89 €.",
    price: "89 €",
    image: "/images/10_coffret_champagne.jpg",
    alt: "Coffret Prestige Champagne",
  },
] as const;

export const SERVICES = [
  {
    to: "/jockey-gares-aeroports",
    title: "Jockey VIP gares et aéroports",
    text: "Prise en charge à la gare de Quimper et aux aéroports de Brest et Lorient. Récupération et dépose sur le parvis.",
    image: "/images/18_jockey_gare.jpg",
    alt: "Berline qui attend sur le parvis d’une gare",
    badge: "Nouveau · Cadres et voyageurs",
  },
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
