export const SITE = {
  name: "Convoyage BZH",
  mark: "BZH",
  legalName: "Clément René Dominique LELIÈGE",
  tradeName: "BZH3D",
  baseline: "Convoyeur automobile à Quimper, Cornouaille. Packs particuliers et professionnels. Conciergerie de véhicules en Bretagne.",
  sub: "Base Quimper. Bretagne, France, Europe. Disponibilité 7j/7. Chauffeur professionnel, pas un particulier.",
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
  { to: "/tarifs", label: "Tarifs" },
  { to: "/jockey-gares-aeroports", label: "Conciergerie" },
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
    to: "/pack-mise-a-la-route",
    title: "Packs particuliers",
    text: "Route, Sérénité, Sécurisé. Plein et traceur GPS dans le menu. Pas d’à la carte.",
    price: "3 packs",
    image: "/images/plein-carburant-vehicule.jpg",
    alt: "Plein de carburant avant restitution",
  },
  {
    to: "/pack-mise-a-la-route",
    title: "Packs professionnels",
    text: "Atelier, Livraison client, Signature réseau. Coffrets et protocole dans le menu.",
    price: "3 packs",
    image: "/images/coffret-terroir-breton.jpg",
    alt: "Coffret Terroir Breton",
  },
  {
    to: "/traqueur-gps",
    title: "Traceur GPS 4G",
    text: "Inclus au Pack Sécurisé. Cédé à l’acquéreur, 12 mois de suivi.",
    price: "Inclus pack",
    image: "/images/balise-gps-4g-vehicule.jpg",
    alt: "Balise GPS 4G autonome",
  },
  {
    to: "/jockey-gares-aeroports",
    title: "Conciergerie à la carte",
    text: "Gare, aéroport, CT, attente, lavage. Uniquement sur la conciergerie.",
    price: "À la carte",
    image: "/images/jockey-gare-quimper.jpg",
    alt: "Berline sur le parvis d’une gare",
  },
] as const;

export const SERVICES = [
  {
    to: "/livraison-vehicule",
    title: "Livraison de véhicule",
    text: "Prise en charge partout. Remise chez le destinataire. France. Mise en main offerte.",
    image: "/images/remise-cles-vehicule.jpg",
    alt: "Remise des clés d’un véhicule",
    cta: "Obtenir un devis",
  },
  {
    to: "/livraison-europe",
    title: "Livraison Europe",
    text: "Belgique, Allemagne, Pologne, Monaco, Espagne, Italie, Royaume-Uni. Le même tarif de base, plus le trajet.",
    image: "/images/convoyage-europe-autoroute.jpg",
    alt: "Convoyage sur autoroute européenne",
    cta: "Estimer un trajet Europe",
  },
  {
    to: "/jockey-gares-aeroports",
    title: "Conciergerie de véhicules",
    text: "Bretagne, Rennes, Nantes. Dépose gare ou aéroport, rapatriement, CT, attente. À la carte. Pas de gardiennage.",
    image: "/images/jockey-gare-quimper.jpg",
    alt: "Berline qui attend sur le parvis d’une gare",
    badge: "Nouveau",
    cta: "Réserver un créneau",
  },
  {
    to: "/pack-mise-a-la-route",
    title: "Packs de livraison",
    text: "Particuliers : Route, Sérénité, Sécurisé. Professionnels : Atelier, Livraison client, Signature. Mise en main offerte.",
    image: "/images/preparation-esthetique-vehicule.jpg",
    alt: "Préparation esthétique d’un véhicule",
    cta: "Voir les menus",
  },
] as const;
