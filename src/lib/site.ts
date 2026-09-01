export const SITE = {
  name: "CLÉMENT CONVOYAGE",
  baseline: "Votre véhicule livré comme en concession.",
  sub: "Base Quimper. Toute la Bretagne, la France, l’Europe.",
  city: "Quimper",
  region: "Finistère · Bretagne",
  coords: "47.99° N · 4.10° O",
  phone: "06 00 00 00 00",
  phoneHref: "tel:+33600000000",
  email: "leliege.clement@gmail.com",
  hours: "Lundi – Dimanche · 7j/7",
  siret: "________________",
} as const;

export const NAV = [
  { to: "/prestations", label: "Prestations" },
  { to: "/simulateur", label: "Simulateur" },
  { to: "/a-propos", label: "À propos" },
  { to: "/avis", label: "Avis" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    to: "/livraison-vehicule",
    title: "Livraison France",
    text: "Convoyage en conduite, VL et utilitaires ≤ 3,5 t. EDL photo, carburant et péages inclus.",
    image: "/images/02_remise_cles.jpg",
    alt: "Remise des clés d’un véhicule premium",
  },
  {
    to: "/nettoyage-vehicule",
    title: "Nettoyage",
    text: "Préparation avant remise : lavage extérieur ou complet, mise en main, recharge VE.",
    image: "/images/03_nettoyage.jpg",
    alt: "Nettoyage professionnel d’une berline",
  },
  {
    to: "/livraison-europe",
    title: "Livraison Europe",
    text: "Même standard. Belgique, Suisse, Allemagne, Pologne, Monaco, Serbie, Espagne, Italie, Royaume-Uni.",
    image: "/images/04_europe_nuit.jpg",
    alt: "Convoyage de nuit sur autoroute européenne",
  },
] as const;
