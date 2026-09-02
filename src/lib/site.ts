export const SITE = {
  name: "Convoyage BZH",
  mark: "BZH",
  legalName: "Clément René Dominique LELIÈGE",
  tradeName: "Convoyage BZH",
  baseline: "Convoyeur automobile à Quimper. Acheminement en France et en Europe. Conciergerie de véhicules en Bretagne.",
  sub: "Base opérationnelle à Quimper. Intervention 7 jours sur 7. Chauffeur professionnel.",
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
  domain: "",
  origin: "https://clement-convoyage.vercel.app",
  host: "Vercel Inc., 440 Terry Avenue North, San Francisco, CA 94158, États-Unis",
  quotePromise: "En une minute, votre devis par e-mail. Tarif national fermé 7 jours. Vous signez en ligne.",
  quoteValidityDays: 7,
} as const;

export const NAV = [
  { to: "/prestations", label: "Prestations" },
  { to: "/jockey-gares-aeroports", label: "Conciergerie" },
  { to: "/missions", label: "Missions" },
  { to: "/contact", label: "Contact" },
] as const;

export const INCLUDED = [
  {
    t: "Convoyage routier",
    d: "Prise en charge, acheminement, restitution. Véhicule particulier ou utilitaire jusqu’à 3,5 t, en état de marche. Un chauffeur dédié, assuré en tous risques. Pas de sous-traitance.",
  },
  {
    t: "Frais de route",
    d: "Carburant, péages et logistique retour du convoyeur, intégrés à la mission. Ils figurent sur le devis. Ils ne s’ajoutent pas après.",
  },
  {
    t: "État des lieux numérique",
    d: "Rapport haute définition, départ et arrivée. Compteur, carrosserie, habitacle. Photographies horodatées. Jointes au compte rendu.",
  },
  {
    t: "Restitution des clés",
    d: "En main propre, à la personne désignée. Documents de bord. Compte-rendu de mission le jour même. Rien n’est laissé en suspens.",
  },
  {
    t: "Mise en main personnalisée",
    d: "Offerte. Vingt à trente minutes : aides à la conduite, multimédia, recharge. Sur place, à la remise. Pas un mot dans un mail.",
  },
] as const;

export const ADDONS = [
  {
    to: "/pack-mise-a-la-route",
    title: "Packs particuliers",
    text: "Formules Route, Sérénité et Sécurisé. Plein et traceur GPS inclus selon la formule.",
    price: "3 packs",
    image: "/images/plein-carburant-vehicule.jpg",
    alt: "Plein de carburant avant restitution",
  },
  {
    to: "/pack-mise-a-la-route",
    title: "Packs professionnels",
    text: "Formules Atelier, Livraison client et Signature réseau. Coffrets et protocole selon la formule.",
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
    title: "Conciergerie",
    text: "Gares, ateliers, flottes et véhicules de prestige en Bretagne. Devis immédiat, à signer.",
    price: "Devis immédiat",
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare",
  },
] as const;

export const SERVICES = [
  {
    to: "/livraison-vehicule",
    title: "Livraison de véhicule",
    text: "Prise en charge partout. Remise chez le destinataire. France. Mise en main offerte.",
    image: "/images/mission-bmw-x3.jpg",
    alt: "BMW X3 neuve, livraison client",
    cta: "Obtenir un devis",
  },
  {
    to: "/livraison-europe",
    title: "Livraison Europe",
    text: "Belgique, Allemagne, Pologne, Monaco, Espagne, Italie, Royaume-Uni. Le même tarif de base, plus le trajet.",
    image: "/images/mission-passat.jpg",
    alt: "Volkswagen Passat sur autoroute européenne",
    cta: "Estimer un trajet Europe",
  },
  {
    to: "/jockey-gares-aeroports",
    title: "Conciergerie de véhicules",
    text: "Bretagne. Gare, atelier, flotte, prestige. Devis immédiat. Pas de gardiennage.",
    image: "/images/mission-tiguan-gare.jpg",
    alt: "Volkswagen Tiguan sur le parvis d’une gare",
    badge: "Nouveau",
    cta: "Réserver un créneau",
  },
  {
    to: "/pack-mise-a-la-route",
    title: "Packs de livraison",
    text: "Particuliers : Route, Sérénité, Sécurisé. Professionnels : Atelier, Livraison client, Signature. Mise en main offerte.",
    image: "/images/mission-audi-a4.jpg",
    alt: "Audi A4 Avant en convoyage",
    cta: "Voir les formules",
  },
] as const;

