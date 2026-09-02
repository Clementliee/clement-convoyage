import { PRESTIGE_PROTOCOL } from "@/lib/offers";
import { SITE } from "@/lib/site";

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
  locality?: string;
  country?: string;
  kicker?: string;
  zones?: { t: string; d: string }[];
  trajets?: { to: string; label: string; d: string }[];
  services?: { to: string; t: string; d: string }[];
  highlights?: { t: string; d: string }[];
  disclaimer?: string;
};

const IMG = "/images/mission-golf-brest.jpg";
const EU = "/images/mission-passat.jpg";
const KEYS = "/images/mission-bmw-x3.jpg";
const EDL = "/images/mission-bmw-controle.jpg";
const GPS = "/images/balise-gps-4g-vehicule.jpg";
const SEC = "/images/mission-ds7-vauban.jpg";

function ville(
  slug: string,
  name: string,
  identity: string,
  extra: string,
  nearby: SeoPage["nearby"],
): SeoPage {
  return {
    slug,
    title: `Convoyage automobile à ${name} | Convoyage BZH`,
    h1: `Convoyage automobile à ${name}`,
    description: `Convoyage de véhicule à ${name}. Prise en charge, transfert sécurisé, remise protocolaire. Base Quimper. Mise en main offerte. Devis sous 2 h.`,
    kind: "ville",
    image: IMG,
    locality: name,
    country: "FR",
    intro: identity,
    body: [
      `Convoyage BZH est basé à Quimper. Pour ${name}, vous avez un interlocuteur local, joignable tous les jours, qui connaît les délais, les axes et les remises en concession.`,
      extra,
      "Chaque mission comprend la conduite de A à B, le carburant du véhicule convoyé, les péages, le retour du convoyeur, un état des lieux photo au départ et à l’arrivée, la remise des clés et la mise en main offerte.",
      "Le simulateur prépare une fourchette après vos coordonnées. Packs particuliers et professionnels. Devis ferme sous 2 heures.",
      "Véhicules acceptés : particuliers, utilitaires et vans ≤ 3,5 t, en état de marche. Hors champ : plateau, poids lourd, non-roulant.",
    ],
    nearby,
    faq: [
      {
        q: `Pourquoi un convoyeur basé à Quimper pour ${name} ?`,
        a: "La proximité change les délais et les retours. Un interlocuteur unique, pas une plateforme anonyme. Standard issu des réseaux la remise en concession.",
      },
      {
        q: "Le véhicule est-il suivi pendant le trajet ?",
        a: "État des lieux photo horodaté. Option traqueur GPS et protocole sécurité (clés en main propre, points de contrôle). Si ça coince, on prévient si incident.",
      },
      {
        q: "Comment obtenir le tarif ?",
        a: "Via le simulateur : trajet, véhicule, pack, puis nom, téléphone et e-mail. Une fourchette s’affiche. Devis ferme sous 2 heures ouvrées.",
      },
    ],
  };
}

function pays(
  slug: string,
  name: string,
  city: string,
  identity: string,
  docs: string,
): SeoPage {
  return {
    slug,
    title: `Convoyage de voiture vers ${name}. Depuis Quimper.`,
    h1: `Convoyage de véhicule vers ${name}`,
    description: `Livraison de voiture en ${name} depuis Quimper (${city}). Convoyage automobile, photos du véhicule, GPS. Devis après coordonnées.`,
    kind: "europe",
    image: EU,
    locality: city,
    country: name,
    intro: identity,
    body: [
      `Même standard qu’en France : remise comme en concession, photos du véhicule, interlocuteur unique depuis Quimper. Destination type : ${city}.`,
      docs,
      "Une fourchette est calculée au simulateur après vos coordonnées, à confirmer sous 2 heures. Délai type J+2 à J+4 selon axes et formalités.",
      "Options recommandées à l’international : traqueur GPS, protocole sécurité, lavage avant remise.",
    ],
    nearby: [
      { to: "/livraison-europe", label: "Toutes les destinations" },
      { to: "/traqueur-gps", label: "Traqueur GPS" },
      { to: "/securite-vehicule", label: "Sécurité" },
      { to: "/simulateur", label: "Simulateur" },
    ],
    faq: [
      {
        q: `Quels documents pour ${name} ?`,
        a: docs,
      },
      {
        q: "Qui s’occupe du passage de frontière ?",
        a: "Nous. Un véhicule non conforme est refusé avant départ. Si ça coince, on prévient si contrôle, panne ou retard.",
      },
      {
        q: "Le GPS est-il obligatoire ?",
        a: "Non. Fortement recommandé à l’international, sur l’import et les véhicules de valeur. Cochez l’option au simulateur.",
      },
    ],
  };
}

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "convoyage-quimper",
    title: "Convoyage automobile à Quimper. Convoyeur en Cornouaille.",
    h1: "Convoyage automobile à Quimper",
    description:
      "Convoyeur automobile à Quimper. Livraison de voiture en Cornouaille, Finistère, France et Europe. État des lieux photo, mise en main offerte. 06 24 04 85 73.",
    kind: "ville",
    image: IMG,
    locality: "Quimper",
    country: "FR",
    kicker: "Base Convoyage BZH",
    intro:
      "Quimper n’est pas une antenne. C’est la base. Clément y prend les véhicules, y rend les clés, y cadre les missions France et Europe.",
    body: [
      "Convoyage BZH est un convoyeur automobile basé à Quimper, en Cornouaille. Particuliers et professionnels. Véhicules jusqu’à 3,5 t, en état de marche. La remise se fait comme en concession : photos, documents, mise en main offerte.",
      "L’agglomération tourne autour des concessions, des garages, des mandataires et des particuliers qui achètent à distance. Un convoyeur sur place évite de mobiliser un vendeur ou un mécanicien pour un aller-retour CT, une courtoisie ou une livraison client.",
      "Les missions locales partent souvent le jour même, si le créneau tient. Bénodet, Fouesnant, Concarneau, Pont-l’Abbé, Douarnenez : le même interlocuteur. Brest, Lorient, Rennes, Nantes, Paris : le même protocole.",
      "Toujours inclus : conduite, carburant du véhicule convoyé, péages, retour du convoyeur, état des lieux photo, clés, mise en main. Packs particuliers (Route, Sérénité, Sécurisé) et professionnels (Atelier, Livraison client, Signature).",
      "Le prix se calcule au simulateur, après nom, téléphone et e-mail. Devis ferme sous 2 heures ouvrées.",
    ],
    highlights: [
      { t: "Base ici", d: "Pas une plateforme. Un interlocuteur à Quimper, tous les jours. Astreinte 24 h pour les professionnels." },
      { t: "Jour même", d: "CT, carrosserie, courtoisie, livraison client. Si le créneau existe, on le prend. Sinon, on le dit." },
      { t: "Cornouaille", d: "Pluguffan, Ergué-Gabéric, Penhars, Kerfeunteun, Creac’h Gwen. Puis tout le Finistère." },
      { t: "France, Europe", d: "Le véhicule part de Quimper, ou y arrive. Même exigence qu’une remise en concession." },
    ],
    zones: [
      { t: "Quimper centre", d: "Remise en main propre, rues du centre, parkings convenus. Horaires tenus, pas d’attente improvisée." },
      { t: "Pluguffan", d: "Aéroport Quimper-Bretagne, zones d’activités, accès RN165. Prises en charge rapides." },
      { t: "Ergué-Gabéric", d: "Quartiers résidentiels, artisans, livraisons à domicile. photos du véhicule au pas de porte." },
      { t: "Penhars, Kerfeunteun", d: "Quartiers d’habitation, garages de proximité, retours atelier." },
      { t: "Creac’h Gwen, Poulguinan", d: "Pôle commercial et concessions. Livraisons clients, transferts inter-sites, VO." },
      { t: "Cornouaille proche", d: "Bénodet, Fouesnant, Beg-Meil, Concarneau, Pont-l’Abbé, Douarnenez, Audierne, Pont-Aven." },
    ],
    trajets: [
      { to: "/convoyage-benodet", label: "Quimper, Bénodet", d: "Littoral, saisonnalité. Créneaux d’été à réserver." },
      { to: "/convoyage-concarneau", label: "Quimper, Concarneau", d: "Allers-retours concession, CT, particuliers. Axe fluide." },
      { to: "/convoyage-brest", label: "Quimper, Brest", d: "RN165. Missions du jour ou J+1 selon charge." },
      { to: "/convoyage-lorient", label: "Quimper, Lorient", d: "Est du Finistère, Morbihan proche. Utilitaires fréquents." },
      { to: "/convoyage-rennes", label: "Quimper, Rennes", d: "Capitale régionale. Mandataires, VO, livraisons entreprises." },
      { to: "/convoyage-nantes", label: "Quimper, Nantes", d: "Pays de la Loire. Longue distance, même protocole." },
      { to: "/convoyage-paris", label: "Quimper, Paris", d: "Longue distance. GPS souvent. Délai J+1 à J+2." },
      { to: "/livraison-europe", label: "Quimper, Europe", d: "Belgique, Allemagne, Pologne, Monaco, Serbie. Formalités cadrées." },
    ],
    services: [
      { to: "/livraison-vehicule-particulier", t: "Particuliers", d: "Achat à distance, Leboncoin, mandataire, déménagement. Remise à domicile." },
      { to: "/professionnels", t: "Professionnels", d: "Concessions, garages, marchands VO. Compte, quinze jours, compte-rendu." },
      { to: "/pack-mise-a-la-route", t: "Packs mise à la route", d: "Essentiel, Confort, Premium. Le véhicule arrive prêt." },
      { to: "/preparation-vehicule", t: "Préparation", d: "Lavage, niveaux, pression, plein ou recharge. Pas du detailing de concours." },
      { to: "/protocole-clement", t: "Protocole Clément", d: "Photos, kilométrage, documents, compte-rendu. Avant, pendant, après." },
      { to: "/traqueur-gps", t: "GPS temporaire", d: "Suivi du véhicule le temps de la mission. Retrait à la remise." },
    ],
    nearby: [
      { to: "/livraison-voiture-finistere", label: "Finistère" },
      { to: "/convoyage-bretagne", label: "Bretagne" },
      { to: "/convoyage-benodet", label: "Bénodet" },
      { to: "/convoyage-concarneau", label: "Concarneau" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/professionnels", label: "Professionnels" },
      { to: "/a-propos", label: "À propos" },
    ],
    faq: [
      {
        q: "Où se trouve Convoyage BZH à Quimper ?",
        a: "Base Quimper, Cornouaille. Prise en charge et remise sur rendez-vous : centre, Pluguffan, Ergué-Gabéric, concessions, domicile. Téléphone 06 24 04 85 73.",
      },
      {
        q: "Faites-vous du convoyage le jour même à Quimper ?",
        a: "Oui, pour les missions locales, si le créneau existe. CT, carrosserie, courtoisie, livraison client. Si ça ne tient pas, on le dit avant.",
      },
      {
        q: "Combien coûte un convoyage à Quimper ?",
        a: "Un forfait local existe pour les courtes distances. Le montant dépend du trajet, du véhicule et des options. La fourchette s’affiche après vos coordonnées. Prix indicatif, à confirmer.",
      },
      {
        q: "Intervenez-vous à Pluguffan et Ergué-Gabéric ?",
        a: "Oui. Toute l’agglomération, puis Bénodet, Fouesnant, Concarneau, Pont-l’Abbé, Douarnenez, et le reste du Finistère.",
      },
      {
        q: "Travaillez-vous avec les concessions et garages de Quimper ?",
        a: "Oui. Livraison client, transferts, VO, retours atelier. Compte professionnel, paiement à quinze jours, astreinte 24 h.",
      },
      {
        q: "Quels véhicules acceptez-vous ?",
        a: "Particuliers et utilitaires jusqu’à 3,5 t, en état de marche, permis B. Pas de plateau, pas de non-roulant, pas de poids lourd.",
      },
      {
        q: "La mise en main est-elle facturée ?",
        a: "Non. Offerte à chaque remise à Quimper, comme partout ailleurs.",
      },
      {
        q: "Livrez-vous hors de Quimper ?",
        a: "Oui. Quimper est la base. On récupère le véhicule où il se trouve, on le ramène chez le client. France et Europe.",
      },
    ],
  },
  ville("convoyage-concarneau", "Concarneau", "Ville close, port et zones commerciales : Concarneau génère des livraisons VO, CT et retours atelier vers Quimper au quotidien.", "Axe Quimper, Concarneau fluide. Idéal pour les allers-retours concession / client.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-fouesnant", label: "Fouesnant" },
    { to: "/livraison-voiture-finistere", label: "Finistère" },
  ]),
  ville("convoyage-benodet", "Bénodet", "Station de la côte de Cornouaille, Bénodet concentre résidences, saisonnalité et livraisons de véhicules neufs ou d’occasion vers le littoral.", "Les créneaux d’été se réservent. Un interlocuteur Quimper évite les allers vides depuis Rennes ou Nantes.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-fouesnant", label: "Fouesnant" },
    { to: "/convoyage-pont-labbe", label: "Pont-l'Abbé" },
  ]),
  ville("convoyage-fouesnant", "Fouesnant", "Fouesnant et Beg-Meil : livraisons littoral, mandataires et retours atelier depuis la base Quimper.", "Même bassin que Bénodet et Concarneau. Délai local, remise en main propre.", [
    { to: "/convoyage-benodet", label: "Bénodet" },
    { to: "/convoyage-concarneau", label: "Concarneau" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-pont-labbe", "Pont-l'Abbé", "Capitale du Pays Bigouden : Pont-l'Abbé, Loctudy, Île-Tudy. Flux de particuliers, artisans et livraisons VO.", "Trajet court depuis Quimper. Utile pour CT, carrosserie et véhicules d’entreprise.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-benodet", label: "Bénodet" },
    { to: "/convoyage-audierne", label: "Audierne" },
  ]),
  ville("convoyage-douarnenez", "Douarnenez", "Port, Portzic, Tréboul : Douarnenez relie le cap Sizun au bassin quimpérois.", "Les retours vides se gèrent depuis la base. Un seul interlocuteur pour le 29 sud-ouest.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-pont-labbe", label: "Pont-l'Abbé" },
    { to: "/convoyage-audierne", label: "Audierne" },
  ]),
  ville("convoyage-quimperle", "Quimperlé", "Porte du Finistère vers Lorient : Quimperlé, Clohars, Guidel. Axe N165.", "Position de relais entre Cornouaille et Morbihan. Utile pour flottes et concessions.", [
    { to: "/convoyage-lorient", label: "Lorient" },
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-pont-aven", label: "Pont-Aven" },
  ]),
  ville("convoyage-brest", "Brest", "Métropole du Finistère nord, Brest et Guipavas concentrent concessions, loueurs et flux vers le sud Cornouaille.", "Le trajet Brest, Quimper est un classique : VO, SAV, livraisons clients. Protocole EDL strict.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-morlaix", label: "Morlaix" },
    { to: "/livraison-voiture-finistere", label: "Finistère" },
  ]),
  ville("convoyage-morlaix", "Morlaix", "Morlaix et Landivisiau : nord Finistère, axe vers Brest et Saint-Brieuc.", "Moins de volume qu’à Brest, davantage de missions sur-mesure. Interlocuteur unique.", [
    { to: "/convoyage-brest", label: "Brest" },
    { to: "/convoyage-roscoff", label: "Roscoff" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-chateaulin", "Châteaulin", "Châteaulin, Porzay, Pleyben : la vallée de l’Aulne entre Quimper et Brest.", "Missions courtes, CT, artisans. La base Quimper tient les créneaux du matin.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-carhaix", label: "Carhaix" },
    { to: "/convoyage-brest", label: "Brest" },
  ]),
  ville("convoyage-audierne", "Audierne", "Audierne, Esquibien, pointe du Raz : livraisons cap Sizun, souvent saisonnières.", "Distance réelle plus longue que la carte. On calcule au kilomètre GPS, pas au sentiment.", [
    { to: "/convoyage-douarnenez", label: "Douarnenez" },
    { to: "/convoyage-pont-labbe", label: "Pont-l'Abbé" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-pont-aven", "Pont-Aven", "Pont-Aven, Névez, Riec : livraisons littoral et résidences, entre Concarneau et Quimperlé.", "Créneaux d’été à anticiper. Remise en main propre, pas un parking.", [
    { to: "/convoyage-concarneau", label: "Concarneau" },
    { to: "/convoyage-quimperle", label: "Quimperlé" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-carhaix", "Carhaix", "Carhaix-Plouguer, centre Bretagne. Moins de flux, davantage de sur-mesure.", "Utile pour flottes agricoles, artisans et livraisons familiales. Interlocuteur unique.", [
    { to: "/convoyage-chateaulin", label: "Châteaulin" },
    { to: "/convoyage-morlaix", label: "Morlaix" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-roscoff", "Roscoff", "Roscoff : ferry Royaume-Uni et Irlande. Correspondances, import, livraisons portuaires.", "On cadré le ferry avant de partir. GPS recommandé. Voir aussi la page Royaume-Uni.", [
    { to: "/convoyage-morlaix", label: "Morlaix" },
    { to: "/convoyage-royaume-uni", label: "Royaume-Uni" },
    { to: "/convoyage-irlande", label: "Irlande" },
  ]),
  ville("convoyage-lannion", "Lannion", "Lannion, Perros-Guirec, côte de granit rose. Livraisons nord Bretagne.", "Délai J+1 type depuis Quimper. Même exigence de remise qu’en Cornouaille.", [
    { to: "/convoyage-saint-brieuc", label: "Saint-Brieuc" },
    { to: "/convoyage-morlaix", label: "Morlaix" },
    { to: "/convoyage-brest", label: "Brest" },
  ]),
  ville("convoyage-lorient", "Lorient", "Lorient, Lanester, Guidel : axe N165, volume de VO et d’utilitaires entre le Morbihan et le Finistère sud.", "Flux professionnels denses. Astreinte possible pour les sites du groupe.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-vannes", label: "Vannes" },
    { to: "/convoyage-quimperle", label: "Quimperlé" },
  ]),
  ville("convoyage-vannes", "Vannes", "Préfecture du Morbihan, Vannes et Auray relaient Quimper vers Rennes et Nantes.", "Idéal pour les stocks inter-sites et les livraisons clients du golfe.", [
    { to: "/convoyage-lorient", label: "Lorient" },
    { to: "/convoyage-auray", label: "Auray" },
    { to: "/convoyage-nantes", label: "Nantes" },
  ]),
  ville("convoyage-auray", "Auray", "Auray, golfe du Morbihan, Carnac. Livraisons littoral et stocks inter-sites.", "Relais entre Vannes et Lorient. Remise client ou concession.", [
    { to: "/convoyage-vannes", label: "Vannes" },
    { to: "/convoyage-quiberon", label: "Quiberon" },
    { to: "/convoyage-lorient", label: "Lorient" },
  ]),
  ville("convoyage-quiberon", "Quiberon", "Presqu’île de Quiberon : saisonnalité forte, livraisons résidences et locations.", "Les week-ends d’été se réservent. Option lavage avant remise souvent demandée.", [
    { to: "/convoyage-auray", label: "Auray" },
    { to: "/convoyage-vannes", label: "Vannes" },
    { to: "/convoyage-lorient", label: "Lorient" },
  ]),
  ville("convoyage-rennes", "Rennes", "Capitale régionale : stocks constructeurs, mandataires, livraisons clients de tout l’ouest.", "Rennes polarise. Nous ramenons le véhicule en Cornouaille sans faire prendre le TGV au client.", [
    { to: "/convoyage-quimper", label: "Quimper" },
    { to: "/convoyage-nantes", label: "Nantes" },
    { to: "/convoyage-saint-brieuc", label: "Saint-Brieuc" },
  ]),
  ville("convoyage-saint-brieuc", "Saint-Brieuc", "Côte-d’Armor : Saint-Brieuc, Plérin. Livraisons nord Bretagne depuis Quimper.", "Moins de fréquence, même standard. photos du véhicule, remise en main propre.", [
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-saint-malo", label: "Saint-Malo" },
    { to: "/convoyage-lannion", label: "Lannion" },
  ]),
  ville("convoyage-saint-malo", "Saint-Malo", "Saint-Malo, Dinard, ferry Angleterre : livraisons littoral et correspondances UK.", "Pour le Royaume-Uni, voir aussi la page convoyage vers l’Angleterre. GPS recommandé.", [
    { to: "/convoyage-saint-brieuc", label: "Saint-Brieuc" },
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-royaume-uni", label: "Royaume-Uni" },
  ]),
  ville("convoyage-nantes", "Nantes", "Porte de l’ouest. Nantes, Saint-Herblain, Montoir : transferts flotte et livraisons clients.", "Nantes ouvre la France. Protocole professionnel, paiement 15 jours pour les sites.", [
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-vannes", label: "Vannes" },
    { to: "/convoyage-angers", label: "Angers" },
  ]),
  ville("convoyage-angers", "Angers", "Angers relie l’ouest au Val de Loire. Livraisons mandataires et particuliers.", "Mission France type. Fourchette après coordonnées, confirmation sous 2 h.", [
    { to: "/convoyage-nantes", label: "Nantes" },
    { to: "/convoyage-le-mans", label: "Le Mans" },
    { to: "/convoyage-tours", label: "Tours" },
  ]),
  ville("convoyage-le-mans", "Le Mans", "Le Mans, axe A11 vers Paris. Stocks, mandataires, livraisons prestige.", "Délai J+2 type. Option GPS et protocole sécurité pour les véhicules de valeur.", [
    { to: "/convoyage-angers", label: "Angers" },
    { to: "/convoyage-paris", label: "Paris" },
    { to: "/convoyage-nantes", label: "Nantes" },
  ]),
  ville("convoyage-tours", "Tours", "Tours, Val de Loire. Mandataires, livraisons particuliers, axe A10.", "Relais entre Nantes, Le Mans et Bordeaux. Même standard de remise.", [
    { to: "/convoyage-angers", label: "Angers" },
    { to: "/convoyage-orleans", label: "Orléans" },
    { to: "/convoyage-bordeaux", label: "Bordeaux" },
  ]),
  ville("convoyage-orleans", "Orléans", "Orléans, porte sud de l’Île-de-France. Flux Paris et Centre.", "Utile en relais Paris, ouest. photos du véhicule, option GPS.", [
    { to: "/convoyage-paris", label: "Paris" },
    { to: "/convoyage-tours", label: "Tours" },
    { to: "/convoyage-le-mans", label: "Le Mans" },
  ]),
  ville("convoyage-caen", "Caen", "Caen, Calvados. Livraisons Normandie depuis Quimper, ferries Ouistreham.", "Correspondances UK possibles via Ouistreham. Voir aussi Royaume-Uni.", [
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-rouen", label: "Rouen" },
    { to: "/convoyage-royaume-uni", label: "Royaume-Uni" },
  ]),
  ville("convoyage-rouen", "Rouen", "Rouen, axe Seine. Livraisons Haute-Normandie, relais vers Paris et Lille.", "Mission France. Protocole professionnel, fourchette après dossier.", [
    { to: "/convoyage-caen", label: "Caen" },
    { to: "/convoyage-paris", label: "Paris" },
    { to: "/convoyage-lille", label: "Lille" },
  ]),
  ville("convoyage-paris", "Paris", "Île-de-France : Paris et petite couronne. Livraisons clients, mandataires, retours Bretagne.", "Le trajet Quimper, Paris est fréquent. photos du véhicule, option GPS, remise sur rendez-vous.", [
    { to: "/convoyage-le-mans", label: "Le Mans" },
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-voiture-france", label: "France" },
  ]),
  ville("convoyage-lille", "Lille", "Lille, métropole, porte de la Belgique. Import VO, mandataires, livraisons nord.", "Souvent couplé à Bruxelles. GPS recommandé sur l’import.", [
    { to: "/convoyage-belgique", label: "Belgique" },
    { to: "/convoyage-paris", label: "Paris" },
    { to: "/convoyage-reims", label: "Reims" },
  ]),
  ville("convoyage-reims", "Reims", "Reims, Champagne. Relais Paris, est, livraisons mandataires.", "Axe vers Metz, Luxembourg, Allemagne. EDL et option GPS.", [
    { to: "/convoyage-paris", label: "Paris" },
    { to: "/convoyage-metz", label: "Metz" },
    { to: "/convoyage-lille", label: "Lille" },
  ]),
  ville("convoyage-metz", "Metz", "Metz, Moselle. Porte du Luxembourg et de l’Allemagne.", "Formalités internationales à cadrer si la mission continue hors France.", [
    { to: "/convoyage-strasbourg", label: "Strasbourg" },
    { to: "/convoyage-luxembourg", label: "Luxembourg" },
    { to: "/convoyage-reims", label: "Reims" },
  ]),
  ville("convoyage-strasbourg", "Strasbourg", "Strasbourg, Alsace. Livraisons est, Allemagne, Suisse.", "Long trajet depuis Quimper. GPS et protocole sécurité souvent demandés.", [
    { to: "/convoyage-metz", label: "Metz" },
    { to: "/convoyage-allemagne", label: "Allemagne" },
    { to: "/convoyage-suisse", label: "Suisse" },
  ]),
  ville("convoyage-dijon", "Dijon", "Dijon, Bourgogne. Relais Lyon, Paris, livraisons Centre-Est.", "Mission France. Même exigence de remise, délai J+2 / J+3.", [
    { to: "/convoyage-lyon", label: "Lyon" },
    { to: "/convoyage-paris", label: "Paris" },
    { to: "/convoyage-strasbourg", label: "Strasbourg" },
  ]),
  ville("convoyage-lyon", "Lyon", "Lyon, carrefour est. Livraisons Rhône-Alpes depuis Quimper.", "Axe long. Même standard concession. Si ça coince, on prévient sur autoroute.", [
    { to: "/convoyage-paris", label: "Paris" },
    { to: "/convoyage-geneve", label: "Suisse" },
    { to: "/convoyage-grenoble", label: "Grenoble" },
  ]),
  ville("convoyage-grenoble", "Grenoble", "Grenoble, Alpes. Livraisons de montagne, conditions météo à cadrer.", "Hiver : pneus et horaires. Si ça coince, on prévient si col fermé.", [
    { to: "/convoyage-lyon", label: "Lyon" },
    { to: "/convoyage-geneve", label: "Genève" },
    { to: "/convoyage-marseille", label: "Marseille" },
  ]),
  ville("convoyage-bordeaux", "Bordeaux", "Bordeaux et l’axe atlantique. Livraisons sud-ouest depuis la Cornouaille.", "Mission France longue. Protocole sécurité recommandé. Délai J+2 / J+3.", [
    { to: "/convoyage-nantes", label: "Nantes" },
    { to: "/convoyage-la-rochelle", label: "La Rochelle" },
    { to: "/convoyage-toulouse", label: "Toulouse" },
  ]),
  ville("convoyage-la-rochelle", "La Rochelle", "La Rochelle, Charente-Maritime. Livraisons atlantique, île de Ré sur devis.", "Relais Nantes, Bordeaux. Saisonnalité estivale.", [
    { to: "/convoyage-nantes", label: "Nantes" },
    { to: "/convoyage-bordeaux", label: "Bordeaux" },
    { to: "/convoyage-angers", label: "Angers" },
  ]),
  ville("convoyage-toulouse", "Toulouse", "Toulouse, porte du sud. Mandataires, import, livraisons particuliers.", "Long trajet. Traqueur GPS et photos du véhicule sont souvent demandés.", [
    { to: "/convoyage-bordeaux", label: "Bordeaux" },
    { to: "/convoyage-pau", label: "Pau" },
    { to: "/convoyage-espagne", label: "Espagne" },
  ]),
  ville("convoyage-pau", "Pau", "Pau, Béarn. Porte de l’Espagne et de l’Andorre.", "Formalités si la mission continue hors France. GPS recommandé.", [
    { to: "/convoyage-toulouse", label: "Toulouse" },
    { to: "/convoyage-bordeaux", label: "Bordeaux" },
    { to: "/convoyage-espagne", label: "Espagne" },
  ]),
  ville("convoyage-clermont-ferrand", "Clermont-Ferrand", "Clermont-Ferrand, Massif central. Relais Lyon, Bordeaux.", "Trajet moins linéaire. On calcule au GPS, pas à vol d’oiseau affiché.", [
    { to: "/convoyage-lyon", label: "Lyon" },
    { to: "/convoyage-bordeaux", label: "Bordeaux" },
    { to: "/convoyage-dijon", label: "Dijon" },
  ]),
  ville("convoyage-marseille", "Marseille", "Marseille, Aix : livraisons PACA. Particularités étiquette, péages, chaleur l’été.", "Prévoir un délai J+3. Lavage avant remise souvent demandé.", [
    { to: "/convoyage-nice", label: "Nice" },
    { to: "/convoyage-monaco", label: "Monaco" },
    { to: "/convoyage-montpellier", label: "Montpellier" },
  ]),
  ville("convoyage-montpellier", "Montpellier", "Montpellier, axe languedocien. Relais Toulouse, Marseille.", "Mission sud. Option lavage et GPS selon le véhicule.", [
    { to: "/convoyage-marseille", label: "Marseille" },
    { to: "/convoyage-perpignan", label: "Perpignan" },
    { to: "/convoyage-toulouse", label: "Toulouse" },
  ]),
  ville("convoyage-perpignan", "Perpignan", "Perpignan, porte de l’Espagne. Import, mandataires, livraisons Catalogne.", "Souvent couplé à Barcelone. Documents et GPS à cadrer.", [
    { to: "/convoyage-espagne", label: "Espagne" },
    { to: "/convoyage-montpellier", label: "Montpellier" },
    { to: "/convoyage-andorre", label: "Andorre" },
  ]),
  ville("convoyage-nice", "Nice", "Nice, Cannes, Antibes. Prestige, locations, livraisons Côte d’Azur.", "Véhicules souvent haut de gamme : GPS et protocole sécurité conseillés. Voir aussi Monaco.", [
    { to: "/convoyage-monaco", label: "Monaco" },
    { to: "/convoyage-marseille", label: "Marseille" },
    { to: "/convoyage-prestige", label: "Prestige" },
  ]),
  ville("convoyage-landerneau", "Landerneau", "Landerneau, entre Brest et Morlaix. Concessions, particuliers, flux Elorn.", "Trajet court depuis Quimper via la N165. Remise en main propre.", [
    { to: "/convoyage-brest", label: "Brest" },
    { to: "/convoyage-morlaix", label: "Morlaix" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-landivisiau", "Landivisiau", "Landivisiau, nord Finistère. Flottes, artisans, livraisons familiales.", "Relais Brest, Morlaix. Un interlocuteur unique à Quimper.", [
    { to: "/convoyage-morlaix", label: "Morlaix" },
    { to: "/convoyage-brest", label: "Brest" },
    { to: "/convoyage-landerneau", label: "Landerneau" },
  ]),
  ville("convoyage-crozon", "Crozon", "Presqu’île de Crozon, Camaret, Morgat. Livraisons littoral et saisonnières.", "Distance réelle plus longue que la carte. Créneaux d’été à anticiper.", [
    { to: "/convoyage-brest", label: "Brest" },
    { to: "/convoyage-chateaulin", label: "Châteaulin" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-guidel", "Guidel", "Guidel, entre Quimperlé et Lorient. Flux N165, particuliers et VO.", "Idéal pour les allers-retours atelier et livraisons clients.", [
    { to: "/convoyage-lorient", label: "Lorient" },
    { to: "/convoyage-quimperle", label: "Quimperlé" },
    { to: "/convoyage-quimper", label: "Quimper" },
  ]),
  ville("convoyage-ploemeur", "Ploemeur", "Ploemeur, Lorient-Bretagne Sud. Aéroport, littoral, livraisons résidentielles.", "Complémentaire du jockey aéroport Lorient. Remise à domicile possible.", [
    { to: "/convoyage-lorient", label: "Lorient" },
    { to: "/jockey-gares-aeroports", label: "Jockey aéroport" },
    { to: "/convoyage-guidel", label: "Guidel" },
  ]),
  ville("convoyage-hennebont", "Hennebont", "Hennebont, Lanester, Inzinzac. Bassin lorientais, utilitaires et VO.", "Navettes atelier et stocks inter-sites fréquents.", [
    { to: "/convoyage-lorient", label: "Lorient" },
    { to: "/convoyage-vannes", label: "Vannes" },
    { to: "/convoyage-quimperle", label: "Quimperlé" },
  ]),
  ville("convoyage-pontivy", "Pontivy", "Pontivy, centre Bretagne. Artisans, flottes, livraisons familiales.", "Moins de volume, davantage de sur-mesure. Base Quimper.", [
    { to: "/convoyage-vannes", label: "Vannes" },
    { to: "/convoyage-carhaix", label: "Carhaix" },
    { to: "/convoyage-lorient", label: "Lorient" },
  ]),
  ville("convoyage-dinan", "Dinan", "Dinan, vallée de la Rance. Livraisons Côtes-d’Armor et Ille-et-Vilaine.", "Relais Saint-Malo, Rennes. Même exigence de remise.", [
    { to: "/convoyage-saint-malo", label: "Saint-Malo" },
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-saint-brieuc", label: "Saint-Brieuc" },
  ]),
  ville("convoyage-saint-nazaire", "Saint-Nazaire", "Saint-Nazaire, Montoir, presqu’île guérandaise. Flottes, import, livraisons portuaires.", "Axe Nantes. Utile pour les retours chantier et VO.", [
    { to: "/convoyage-nantes", label: "Nantes" },
    { to: "/convoyage-la-baule", label: "La Baule" },
    { to: "/convoyage-vannes", label: "Vannes" },
  ]),
  ville("convoyage-la-baule", "La Baule", "La Baule, Le Pouliguen, Pornichet. Livraisons littoral, saisonnalité forte.", "Week-ends d’été à réserver. Lavage avant remise souvent demandé.", [
    { to: "/convoyage-saint-nazaire", label: "Saint-Nazaire" },
    { to: "/convoyage-nantes", label: "Nantes" },
    { to: "/convoyage-vannes", label: "Vannes" },
  ]),
  ville("convoyage-laval", "Laval", "Laval, Mayenne. Relais Rennes, Le Mans, Angers.", "Mission ouest. Délai type J+1 depuis Quimper.", [
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-le-mans", label: "Le Mans" },
    { to: "/convoyage-angers", label: "Angers" },
  ]),
  ville("convoyage-vitre", "Vitré", "Vitré, porte de la Bretagne vers Laval et Le Mans.", "Stocks inter-sites et livraisons clients du 35 est.", [
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-laval", label: "Laval" },
    { to: "/convoyage-fougeres", label: "Fougères" },
  ]),
  ville("convoyage-fougeres", "Fougères", "Fougères, nord-est Ille-et-Vilaine. Relais Normandie et Mayenne.", "Complémentaire de Rennes et Saint-Malo.", [
    { to: "/convoyage-rennes", label: "Rennes" },
    { to: "/convoyage-vitre", label: "Vitré" },
    { to: "/convoyage-caen", label: "Caen" },
  ]),
  ville("convoyage-aix-en-provence", "Aix-en-Provence", "Aix-en-Provence, PACA. Prestige, livraisons particulières, relais Marseille.", "Délai J+3. Option lavage et GPS selon le véhicule.", [
    { to: "/convoyage-marseille", label: "Marseille" },
    { to: "/convoyage-nice", label: "Nice" },
    { to: "/convoyage-lyon", label: "Lyon" },
  ]),
  ville("convoyage-biarritz", "Biarritz", "Biarritz, Bayonne, côte basque. Prestige, locations, porte de l’Espagne.", "Souvent couplé à un import. Formalités si la mission continue hors France.", [
    { to: "/convoyage-bordeaux", label: "Bordeaux" },
    { to: "/convoyage-pau", label: "Pau" },
    { to: "/convoyage-espagne", label: "Espagne" },
  ]),
  ville("convoyage-le-havre", "Le Havre", "Le Havre, port, import. Correspondances ferry et livraisons normandes.", "Relais Rouen, Caen, Paris. GPS recommandé à l’arrivée.", [
    { to: "/convoyage-rouen", label: "Rouen" },
    { to: "/convoyage-caen", label: "Caen" },
    { to: "/convoyage-paris", label: "Paris" },
  ]),
  {
    slug: "convoyage-bretagne",
    title: "Convoyage de véhicules en Bretagne, Convoyage BZH",
    h1: "Convoyage de véhicules en Bretagne",
    description: "Livraison de voitures dans toute la Bretagne. Prise en charge locale ou hors région, remise chez le client. Finistère, Morbihan, Côtes-d’Armor, Ille-et-Vilaine. Devis sous 2 h.",
    kind: "region",
    image: IMG,
    locality: "Bretagne",
    country: "FR",
    intro: "Quatre départements, une base : Quimper. Cornouaille, Brest, Lorient, Vannes, Saint-Brieuc, Rennes, Saint-Malo.",
    body: [
      "Le convoyage régional est le cœur du métier : délais courts, photos du véhicule, interlocuteur unique.",
      "Les pages villes détaillent chaque bassin. Le simulateur prépare n’importe quel trajet intra-Bretagne, sans afficher de grille publique.",
      "Options fréquentes en Bretagne : lavage avant remise, week-end, prêt de courtoisie pour les concessions.",
    ],
    nearby: [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-rennes", label: "Rennes" },
      { to: "/livraison-voiture-finistere", label: "Finistère" },
    ],
    faq: [{ q: "Intervenez-vous dans les quatre départements ?", a: "Oui. Base Quimper, toute la Bretagne, puis la France et l’Europe." }],
  },
  {
    slug: "livraison-voiture-finistere",
    title: "Livraison de voiture dans le Finistère, Convoyage BZH",
    h1: "Livraison de voiture dans le Finistère",
    description: "Convoyage Finistère : Quimper, Brest, Concarneau, Bénodet, Douarnenez, Pont-l'Abbé, Morlaix. Devis sous 2 h.",
    kind: "region",
    image: IMG,
    locality: "Finistère",
    country: "FR",
    intro: "Le 29 est une péninsule. Un convoyeur basé à Quimper évite les allers vides et tient les créneaux des concessions locales.",
    body: [
      "Couverture : Quimper, Bénodet, Fouesnant, Pont-l’Abbé, Douarnenez, Audierne, Concarneau, Pont-Aven, Quimperlé, Châteaulin, Carhaix, Brest, Morlaix, Roscoff.",
      "Idéal pour CT, carrosserie, prêts de courtoisie et livraisons clients VO. Le tarif se calcule au simulateur, jamais en grille publique.",
    ],
    nearby: [
      { to: "/convoyage-quimper", label: "Quimper" },
      { to: "/convoyage-brest", label: "Brest" },
      { to: "/convoyage-benodet", label: "Bénodet" },
      { to: "/convoyage-bretagne", label: "Bretagne" },
    ],
    faq: [{ q: "Délai type dans le 29 ?", a: "Jour J ou J+1 pour le local, Brest et Lorient selon créneau." }],
  },
  {
    slug: "convoyage-voiture-france",
    title: "Convoyage de voiture en France, Convoyage BZH",
    h1: "Convoyage de voiture en France",
    description: "Livraison de véhicules partout en France métropolitaine depuis Quimper. Paris, Lyon, Bordeaux, Marseille, Nice, Lille, Strasbourg. Devis sous 2 h.",
    kind: "france",
    image: EU,
    country: "FR",
    intro: "Depuis Quimper, nous livrons toute la France métropolitaine. Pas de grille publiée : fourchette après vos coordonnées.",
    body: [
      "Paris, Lyon, Bordeaux, Toulouse, Marseille, Nice, Nantes, Rennes, Lille, Strasbourg : le même standard de remise.",
      "Particuliers : règlement avant départ. Professionnels : 15 jours. Options GPS et sécurité pour les longs trajets.",
    ],
    nearby: [
      { to: "/simulateur", label: "Simulateur" },
      { to: "/livraison-europe", label: "Europe" },
      { to: "/destinations", label: "Toutes les villes" },
      { to: "/securite-vehicule", label: "Sécurité" },
    ],
    faq: [{ q: "Livrez-vous la Corse ?", a: "Devis spécifique ferry. Le simulateur couvre la métropole." }],
  },
  {
    slug: "livraison-vehicule-particulier",
    title: "Livraison de véhicule pour particulier, Convoyage BZH",
    h1: "Livraison de véhicule pour particulier",
    description: "Achat à distance, Leboncoin, mandataire : nous convoyons jusqu’à chez vous. photos du véhicule, GPS optionnel, paiement avant départ.",
    kind: "metier",
    image: KEYS,
    intro: "Vous n’avez pas à prendre le train. Nous amenons le véhicule, photos horodatées, remise en main propre.",
    body: [
      "Cas typiques : achat Leboncoin, mandataire, concession hors département, donation familiale.",
      "Virement avant départ. Options : lavage, traqueur GPS, protocole sécurité. Mise en main offerte.",
    ],
    nearby: [
      { to: "/simulateur", label: "Estimer" },
      { to: "/convoyage-mandataire", label: "Mandataire" },
      { to: "/convoyage-occasion", label: "Occasion" },
    ],
    faq: [{ q: "Puis-je payer après ?", a: "Non pour un particulier. Le virement part avant la prise en charge." }],
  },
  {
    slug: "convoyage-concession",
    title: "Convoyage pour concessions et garages, Convoyage BZH",
    h1: "Convoyage pour concessions et garages",
    description: "Transferts inter-sites, livraisons clients VO, CT et SAV. Standard issu des une concession.",
    kind: "metier",
    image: EDL,
    intro: "Trois missions test, puis un cadre volume. Un interlocuteur, des photos du véhicule, un compte-rendu à chaque remise.",
    body: [
      "Paiement 15 jours. Premier dossier : acompte 50 % possible. Astreinte 24 h pour les professionnels.",
      "Équipe dédiée, si ça coince, on prévient, option GPS sur les flux sensibles.",
    ],
    nearby: [
      { to: "/a-propos", label: "À propos" },
      { to: "/securite-vehicule", label: "Sécurité" },
      { to: "/contact", label: "Cadre volume" },
    ],
    faq: [{ q: "Facturez-vous un abonnement ?", a: "Non. À la mission, ou tarif dégressif si le volume est cadré." }],
  },
  {
    slug: "convoyage-mandataire",
    title: "Convoyage pour mandataire auto, Convoyage BZH",
    h1: "Convoyage pour mandataire automobile",
    description: "Livraison des véhicules mandataire depuis les plates-formes vers la Bretagne et la France. EDL, GPS, remise client.",
    kind: "metier",
    image: KEYS,
    intro: "Le mandataire vend. Nous livrons. Le client reçoit une remise de concession, pas un parking.",
    body: [
      "Photos au départ de la plate-forme, suivi, remise chez le client ou en point relais convenu.",
      "Option GPS sur les importations et les hauts de gamme. Pas de tarif public : fourchette après dossier.",
    ],
    nearby: [
      { to: "/livraison-vehicule-particulier", label: "Particuliers" },
      { to: "/traqueur-gps", label: "GPS" },
      { to: "/convoyage-import", label: "Import" },
    ],
    faq: [{ q: "Livrez-vous depuis l’Allemagne ou la Belgique ?", a: "Oui. Voir les pages pays. Documents et carte verte vérifiés avant départ." }],
  },
  {
    slug: "convoyage-prestige",
    title: "Convoyage véhicule prestige. Protocole de remise. Convoyage BZH",
    h1: "Convoyage de véhicule prestige",
    description:
      "Pour sportives, prestige, collection et imports. Même convoyage conduit. Plus de cadre.",
    kind: "metier",
    kicker: PRESTIGE_PROTOCOL.kicker,
    image: KEYS,
    intro: "Au-dessus d’un certain seuil de valeur, ce n’est plus un trajet. C’est une remise.",
    body: [
      "Protocole Prestige : photos détaillées, clés et documents du véhicule sous scellé numéroté, mallette dédiée, suivi GPS le temps de la mission, conduite souple, horaires tenus, compte-rendu, remise à la personne nommée. Issu des habitudes de remise en réseau premium. Clément conduit. Pas d’intermédiaire.",
      "Si ça coince — incident, météo, destinataire absent — on prévient.",
      "Option 150 €, en plus du convoyage. Sur un véhicule marqué prestige, le trajet est déjà majoré de 20 %. Le protocole est le cadre, pas une seconde taxe kilométrique.",
      "Hors périmètre : fonds, bijoux, documents autres que ceux du véhicule, protection d’une personne, remorque fermée. Véhicule non roulant : orientation plateau.",
    ],
    highlights: PRESTIGE_PROTOCOL.items.map((item) => ({ t: item.t, d: item.d })),
    disclaimer: PRESTIGE_PROTOCOL.disclaimer,
    nearby: [
      { to: "/protocole-clement", label: "Protocole Clément" },
      { to: "/traqueur-gps", label: "GPS 199 €" },
      { to: "/simulateur", label: "Estimer une mission" },
    ],
    faq: [
      {
        q: "Acceptez-vous collection et youngtimers ?",
        a: "Oui s’ils sont roulants, assurés, ≤ 3,5 t, permis B. Sinon orientation plateau.",
      },
      {
        q: "Le GPS 199 € est-il le protocole ?",
        a: "Non. 199 € = traceur laissé à l’acheteur, 12 mois inclus. 150 € = cadre de la mission, GPS temporaire retiré à la remise. Les deux peuvent se cumuler.",
      },
    ],
  },
  {
    slug: "convoyage-electrique",
    title: "Convoyage de véhicule électrique, Convoyage BZH",
    h1: "Convoyage de véhicule électrique",
    description: "Livraison VE depuis Quimper. Plan de recharge, EDL, remise avec niveau de batterie convenu.",
    kind: "metier",
    image: "/images/preparation-esthetique-vehicule.jpg",
    intro: "Un VE ne se convoyage pas comme un thermique. Autonomie, bornes, contrat de recharge.",
    body: [
      "Plan de trajet avec recharges. Remise à un niveau de batterie convenu. Mise en main offerte.",
      "Pas de tarification publiée. Le simulateur intègre l’option recharge.",
    ],
    nearby: [
      { to: "/nettoyage-vehicule", label: "Préparation" },
      { to: "/simulateur", label: "Simulateur" },
    ],
    faq: [{ q: "Et si une borne est hors service ?", a: "Plan B prévu. C’est de la si ça coince, on prévient, pas de l’improvisation." }],
  },
  {
    slug: "convoyage-utilitaire",
    title: "Convoyage d’utilitaire et van, Convoyage BZH",
    h1: "Convoyage d’utilitaire et van",
    description: "Livraison d’utilitaires et vans ≤ 3,5 t depuis Quimper. Artisans, loueurs, flottes. photos du véhicule.",
    kind: "metier",
    image: EDL,
    intro: "Fourgons, vans, cabines approfondies : tant que c’est permis B et roulant.",
    body: [
      "Flottes, loueurs, artisans. EDL soigné : un utilitaire a plus de points d’usure.",
      "Hors champ au-delà de 3,5 t. Devis après coordonnées.",
    ],
    nearby: [
      { to: "/convoyage-concession", label: "Professionnels" },
      { to: "/convoyage-location", label: "Loueurs" },
      { to: "/simulateur", label: "Simulateur" },
    ],
    faq: [{ q: "Le chargement est-il possible ?", a: "Non. Véhicule vide, en état de marche. Marchandise = autre métier." }],
  },
  {
    slug: "etat-des-lieux-convoyage",
    title: "État des lieux photo convoyage, Convoyage BZH",
    h1: "État des lieux photo",
    description: "photos du véhicule horodaté au départ et à l’arrivée. Preuve, sérénité, standard concession.",
    kind: "metier",
    image: EDL,
    intro: "Sans photos, ce n’est pas une remise. C’est une discussion.",
    body: [
      "Série de photos horodatées : intérieur, extérieur, compteur, carrosserie, documents.",
      "Conservées le temps du dossier. Complément possible : scellé des clés, GPS.",
    ],
    nearby: [
      { to: "/securite-vehicule", label: "Sécurité" },
      { to: "/a-propos", label: "À propos" },
    ],
    faq: [{ q: "Le client reçoit-il les photos ?", a: "Oui, avec le compte-rendu de mission." }],
  },
  {
    slug: "convoyage-urgence",
    title: "Convoyage urgent de véhicule, Convoyage BZH",
    h1: "Convoyage urgent",
    description: "Livraison de véhicule sous 24 h selon disponibilité, depuis Quimper. Astreinte professionnels, photos du véhicule.",
    kind: "metier",
    image: EU,
    intro: "Urgent ne veut pas dire improvisé. Un créneau, un protocole, une confirmation.",
    body: [
      "Sous 24 h selon disponibilité. Pas de promesse magique : si le créneau n’existe pas, on le dit.",
      "Astreinte 24 h pour les professionnels. Le simulateur a une option Urgent. Fourchette après coordonnées.",
    ],
    nearby: [
      { to: "/simulateur", label: "Simulateur" },
      { to: "/convoyage-week-end", label: "Week-end" },
      { to: "/contact", label: "Appeler" },
    ],
    faq: [{ q: "C’est toujours possible en 24 h ?", a: "Non. Selon charge, distance et documents. On confirme dans l’heure si le créneau tient." }],
  },
  {
    slug: "convoyage-week-end",
    title: "Convoyage le week-end, Convoyage BZH",
    h1: "Convoyage le week-end et les jours fériés",
    description: "Week-end et jours fériés inclus. Standard sous 5 jours, urgent sous 72 h, sous réserve de disponibilité des équipes.",
    kind: "metier",
    image: IMG,
    intro: "Les remises ne tombent pas toutes un mardi. Nous roulons tous les jours.",
    body: [
      "Week-end et jours fériés inclus, sans option à cocher. Standard, prise en charge sous cinq jours, du lundi au vendredi. Urgent, sous 72 heures. Dans les deux cas, sous réserve de disponibilité des équipes.",
      "Utile pour les particuliers qui reçoivent le véhicule chez eux, et pour les concessions en rush.",
    ],
    nearby: [
      { to: "/simulateur", label: "Simulateur" },
      { to: "/convoyage-urgence", label: "Urgent" },
      { to: "/livraison-vehicule-particulier", label: "Particuliers" },
    ],
    faq: [{ q: "Le dimanche est-il possible partout ?", a: "En France oui, selon créneau. En Europe : selon formalités et ferries." }],
  },
  {
    slug: "convoyage-import",
    title: "Convoyage de véhicule import, Convoyage BZH",
    h1: "Convoyage de véhicule importé",
    description: "Ramener un véhicule acheté en Belgique, Allemagne, Pologne, Espagne. EDL, GPS, formalités, base Quimper.",
    kind: "metier",
    image: EU,
    intro: "L’achat est fait. Reste la route, les papiers, la preuve.",
    body: [
      "Plates-formes, mandataires, particuliers à l’étranger : nous prenons en charge le véhicule, documents vérifiés, photos du véhicule.",
      "GPS quasi systématique. Pologne, Allemagne, Belgique, Espagne : pages pays dédiées. Pas de tarif vitrine.",
    ],
    nearby: [
      { to: "/convoyage-pologne", label: "Pologne" },
      { to: "/convoyage-allemagne", label: "Allemagne" },
      { to: "/traqueur-gps", label: "GPS" },
      { to: "/convoyage-mandataire", label: "Mandataire" },
    ],
    faq: [{ q: "Vous gérez les plaques et la carte grise ?", a: "Non. Nous convoyons un véhicule en règle. Immatriculation = autre prestataire." }],
  },
  {
    slug: "convoyage-occasion",
    title: "Convoyage de véhicule d’occasion, Convoyage BZH",
    h1: "Convoyage de véhicule d’occasion",
    description: "Livraison VO : Leboncoin, concession, particulier. photos du véhicule stricte, option GPS, depuis Quimper.",
    kind: "metier",
    image: EDL,
    intro: "Un VO n’a pas le vernis d’un neuf. L’état des lieux est encore plus important.",
    body: [
      "Photos détaillées au départ : rayures, pneus, intérieur, compteur. Le vendeur et l’acheteur voient la même chose.",
      "Si le véhicule n’est pas roulant ou non conforme, on refuse. Orientation plateau.",
    ],
    nearby: [
      { to: "/livraison-vehicule-particulier", label: "Particuliers" },
      { to: "/etat-des-lieux-convoyage", label: "EDL" },
      { to: "/simulateur", label: "Simulateur" },
    ],
    faq: [{ q: "Que se passe-t-il si l’annonce ment ?", a: "On documente, on prévient, on n’embarque pas un doute. C’est de la si ça coince, on prévient, pas un débat." }],
  },
  {
    slug: "convoyage-location",
    title: "Convoyage pour loueurs, Convoyage BZH",
    h1: "Convoyage pour agences de location",
    description: "Transferts de flotte, one-way, rééquilibrage. photos du véhicule, tous les jours, base Quimper.",
    kind: "metier",
    image: KEYS,
    intro: "Une flotte qui n’est pas au bon endroit ne se loue pas. Nous rééquilibrons.",
    body: [
      "One-way, aéroports, agences littorales l’été, retours atelier. EDL type loueur.",
      "Cadre volume possible après trois missions test. Pas d’abonnement imposé.",
    ],
    nearby: [
      { to: "/convoyage-concession", label: "Professionnels" },
      { to: "/convoyage-utilitaire", label: "Utilitaires" },
      { to: "/contact", label: "Cadre volume" },
    ],
    faq: [{ q: "Gérez-vous les one-way saisonniers ?", a: "Oui, surtout Bretagne littorale. Les créneaux d’été se réservent." }],
  },
  {
    slug: "convoyage-suivi-gps",
    title: "Suivi GPS d’un véhicule convoyé, Convoyage BZH",
    h1: "Suivi GPS pendant le convoyage",
    description: "Traqueur GPS temporaire sur le véhicule livré. Pose discrète, retrait à la remise. Prestige, import, Europe.",
    kind: "metier",
    image: GPS,
    intro: "Savoir où il est, sans en faire un spectacle. Pose le temps de la mission.",
    body: [
      "Complément de la page Traqueur GPS : ici le point de vue métier. import, prestige, Pologne, Serbie, Royaume-Uni, Monaco.",
      "Ce n’est pas de la surveillance de chauffeur. C’est la tenue d’une concession qui sait où est sa démonstration.",
    ],
    nearby: [
      { to: "/traqueur-gps", label: "Prestation GPS" },
      { to: "/securite-vehicule", label: "Sécurité" },
      { to: "/convoyage-prestige", label: "Prestige" },
    ],
    faq: [{ q: "Le boîtier reste-t-il après la remise ?", a: "Non, sauf demande écrite. Retrait à l’arrivée, mentionné sur l’EDL." }],
  },
  {
    slug: "protocole-securite-convoyage",
    title: "Protocole sécurité convoyage, Convoyage BZH",
    h1: "Protocole sécurité du véhicule",
    description: "Clés en main propre, photos du véhicule, GPS, si ça coince, on prévient. Base Quimper.",
    kind: "metier",
    image: SEC,
    intro: "Le véhicule n’est pas un colis. Clés, documents, carrosserie, trajet : un ordre.",
    body: [
      "Même exigence qu’une remise en réseau premium. Le Protocole Prestige se coche au simulateur. Option 150 €.",
      "Incident, client absent, contrôle, météo : escalade, faits, photos, prochaine action.",
    ],
    nearby: [
      { to: "/securite-vehicule", label: "Page sécurité" },
      { to: "/convoyage-prestige", label: "Protocole Prestige" },
      { to: "/traqueur-gps", label: "GPS" },
    ],
    faq: [{ q: "C’est obligatoire ?", a: "L’photos du véhicule l’est. Le scellé et le GPS se cochent selon la valeur et la destination." }],
  },
  pays("convoyage-belgique", "Belgique", "Bruxelles", "Belgique : Bruxelles, Liège, Anvers. Flux mandataires et livraisons clients depuis Quimper.", "Carte grise ou mandat, assurance, contrôle technique. Carte verte selon le contrat."),
  pays("convoyage-suisse", "Suisse", "Genève", "Suisse : Genève, Lausanne, Bâle. Formalités spécifiques, véhicules souvent prestige.", "Carte grise, mandat, assurance. Anticiper douane et vignette. GPS recommandé."),
  pays("convoyage-luxembourg", "Luxembourg", "Luxembourg", "Luxembourg : place financière, flottes, livraisons courtes depuis l’est de la France.", "Documents France + assurance. Passage simple, même exigence de remise."),
  pays("convoyage-allemagne", "Allemagne", "Francfort", "Allemagne : Francfort, Munich, Düsseldorf. Import VO, mandataires, prestige.", "Carte grise ou mandat, CT, assurance. Plaques et export : à cadrer au devis."),
  pays("convoyage-espagne", "Espagne", "Barcelone", "Espagne : Barcelone, Madrid, Valence, Pays basque. Saisonnalité et mandataires.", "Carte verte, mandat, CT. Chaleur l’été : lavage et niveau fluides vérifiés."),
  pays("convoyage-italie", "Italie", "Milan", "Italie : Milan, Turin, Gênes. Prestige et import. Péages denses.", "Documents + carte verte. GPS et protocole sécurité souvent demandés."),
  pays("convoyage-pays-bas", "Pays-Bas", "Amsterdam", "Pays-Bas : Amsterdam, Rotterdam. Ports, mandataires, VE.", "Documents Schengen. Recharge VE à planifier si électrique."),
  pays("convoyage-royaume-uni", "Royaume-Uni", "Londres", "Royaume-Uni : Londres et sud. Ferry, formalités post-Brexit.", "Passeport, assurance frontière, ferry. GPS fortement recommandé. Autres ports sur devis."),
  pays("convoyage-pologne", "Pologne", "Varsovie", "Pologne : Varsovie, Poznań, Wrocław. Import VO, plates-formes, reimport.", "Mandat, CT, assurance, cartes. Trajet long : GPS et photos du véhicule."),
  pays("convoyage-monaco", "Monaco", "Monaco", "Monaco et Monte-Carlo : prestige, discrétion, remise sur rendez-vous. Voisin de Nice.", "Documents France. Protocole sécurité et GPS presque systématiques. Horaires tenus."),
  pays("convoyage-serbie", "Serbie", "Belgrade", "Serbie : Belgrade. Hors UE : formalités, assurance frontière, temps de contrôle.", "Carte verte, mandat, éventuel carnet. GPS obligatoire sur ce type de mission."),
  pays("convoyage-portugal", "Portugal", "Lisbonne", "Portugal : Lisbonne, Porto. Atlantique, mandataires, livraisons particuliers.", "Carte verte, CT, mandat. Trajet long par l’Espagne."),
  pays("convoyage-autriche", "Autriche", "Vienne", "Autriche : Vienne, Salzbourg. Prestige et corridors Allemagne.", "Documents Schengen. Vignette autoroute gérée dans la mission."),
  pays("convoyage-tchequie", "République tchèque", "Prague", "République tchèque : Prague. Import, plates-formes, reimport ouest.", "Mandat, CT, assurance. GPS sur les flux d’import."),
  pays("convoyage-croatie", "Croatie", "Zagreb", "Croatie : Zagreb, littoral. Saisonnalité, livraisons estivales.", "Documents UE. Anticiper les week-ends d’été."),
  pays("convoyage-irlande", "Irlande", "Dublin", "Irlande : Dublin. Ferry + route. Formalités spécifiques.", "Ferry, assurance, documents. GPS recommandé."),
  pays("convoyage-danemark", "Danemark", "Copenhague", "Danemark : Copenhague. Ponts, ferries, VE fréquents.", "Documents Schengen. Plan de recharge si électrique."),
  pays("convoyage-hongrie", "Hongrie", "Budapest", "Hongrie : Budapest. Import centre-Europe.", "Mandat, CT, vignette. GPS sur l’import."),
  pays("convoyage-andorre", "Andorre", "Andorre", "Andorre : vallée, douane, véhicules souvent neufs ou prestige.", "Formalités frontalières. Protocole sécurité."),
  pays("convoyage-slovenie", "Slovénie", "Ljubljana", "Slovénie : Ljubljana. Corridor vers les Balkans.", "Documents UE. Peut précéder une mission Serbie."),
  pays("convoyage-slovaquie", "Slovaquie", "Bratislava", "Slovaquie : Bratislava, jumelée à Vienne.", "Documents UE. GPS si import."),
  pays("convoyage-grece", "Grèce", "Athènes", "Grèce : Athènes. Long corridor, ferries éventuels.", "Documents, temps de trajet. GPS et photos du véhicule."),
  pays("convoyage-suede", "Suède", "Stockholm", "Suède : Stockholm. Distances, hiver, VE.", "Documents Schengen. Conditions hivernales à cadrer."),
  pays("convoyage-norvege", "Norvège", "Oslo", "Norvège : Oslo. Hors UE, péages, tunnels.", "Douane, assurance. GPS."),
  pays("convoyage-roumanie", "Roumanie", "Bucarest", "Roumanie : Bucarest. Import, long trajet.", "Mandat, CT, GPS."),
  pays("convoyage-finlande", "Finlande", "Helsinki", "Finlande : Helsinki. Distances, ferry éventuel, VE, hiver.", "Documents Schengen. Conditions hivernales et plan de recharge à cadrer."),
  pays("convoyage-bulgarie", "Bulgarie", "Sofia", "Bulgarie : Sofia. Import centre-est, long corridor.", "Mandat, CT, assurance. GPS et photos du véhicule."),
  pays("convoyage-albanie", "Albanie", "Tirana", "Albanie : Tirana. Hors UE, formalités, temps de contrôle.", "Carte verte, mandat. GPS quasi systématique."),
  pays("convoyage-montenegro", "Monténégro", "Podgorica", "Monténégro : Podgorica, littoral. Hors UE, prestige saisonnier.", "Carte verte, formalités. GPS et protocole sécurité."),
  pays("convoyage-bosnie", "Bosnie-Herzégovine", "Sarajevo", "Bosnie-Herzégovine : Sarajevo. Hors UE, corridors Balkans.", "Carte verte, mandat, contrôles. GPS."),
  pays("convoyage-macedoine", "Macédoine du Nord", "Skopje", "Macédoine du Nord : Skopje. Hors UE, import.", "Carte verte, mandat. GPS et photos du véhicule."),
  pays("convoyage-estonie", "Estonie", "Tallinn", "Estonie : Tallinn. Baltique, distances, VE.", "Documents Schengen. Trajet long : GPS."),
  pays("convoyage-lettonie", "Lettonie", "Riga", "Lettonie : Riga. Corridor baltique.", "Documents Schengen. GPS sur l’import."),
  pays("convoyage-lituanie", "Lituanie", "Vilnius", "Lituanie : Vilnius. Porte de la Pologne vers les pays baltes.", "Documents UE. Souvent couplé à une mission Pologne."),
  pays("convoyage-malte", "Malte", "La Valette", "Malte : La Valette. Ferry / mer, formalités spécifiques.", "Trajet mer à cadrer au devis. GPS et documents."),
  pays("convoyage-chypre", "Chypre", "Nicosie", "Chypre : Nicosie. Trajet mer / air, devis spécifique.", "Pas un convoyage routier classique. Devis sur dossier, hors simulateur standard."),
  pays("convoyage-liechtenstein", "Liechtenstein", "Vaduz", "Liechtenstein : Vaduz. Prestige, discrétion, voisin de la Suisse.", "Formalités type Suisse. Protocole sécurité."),
  pays("convoyage-geneve", "Genève", "Genève", "Genève, pour les recherches locales. Voir aussi la page Suisse.", "Même formalités que la Suisse. Prestige fréquent."),
  {
    slug: "coffret-livraison-vehicule",
    title: "Coffret cadeau à la livraison de véhicule, Convoyage BZH",
    h1: "Coffret cadeau à la livraison",
    description: "Deux coffrets maison remis avec les clés : Armor (galettes, caramels, cidre) ou Champagne (brut + chocolats). Composés à Quimper.",
    kind: "metier",
    image: "/images/coffret-terroir-breton.jpg",
    intro: "La remise n’est pas un colis. Un coffret, composé ici, posé avec les clés.",
    body: [
      "Deux compositions, pas un catalogue. Coffret Armor : galettes, caramels au beurre salé, cidre. Coffret Champagne : brut 75 cl et chocolats.",
      "Clément va chercher les produits et assemble. Ce n’est pas une boîte Amazon étiquetée. Un coffret par mission, coché au simulateur. Tarif dans la fourchette, jamais en vitrine.",
    ],
    nearby: [
      { to: "/coffrets-livraison", label: "Les deux coffrets" },
      { to: "/simulateur", label: "Simulateur" },
      { to: "/nettoyage-vehicule", label: "Préparation" },
    ],
    faq: [{ q: "Puis-je commander les deux ?", a: "Un coffret par mission. Armor ou Champagne." }],
  },
  {
    slug: "controle-visuel-vehicule",
    title: "Contrôle visuel véhicule convoyé, Convoyage BZH",
    h1: "Contrôle visuel du véhicule convoyé",
    description: "Contrôle visuel 20 points au départ et à l’arrivée. Niveaux, pneus, éclairage, carrosserie. Ce n’est pas une expertise automobile.",
    kind: "metier",
    image: EDL,
    intro: "Un regard de concession, pas un rapport d’expert. Vingt points, des photos.",
    body: [
      "Ce n’est pas une expertise. Pas de rapport opposable. Un contrôle visuel de présentation : niveaux, éclairage, pneus, carrosserie visible, témoins, documents.",
      "Si un point bloque le départ, la mission s’arrête et le client est appelé. Option au simulateur, tarif dans la fourchette.",
    ],
    nearby: [
      { to: "/controle-vehicule", label: "Page contrôle visuel" },
      { to: "/etat-des-lieux-convoyage", label: "État des lieux" },
      { to: "/securite-vehicule", label: "Sécurité" },
    ],
    faq: [{ q: "Remplace-t-il le contrôle technique ?", a: "Non. Il documente l’état présenté, rien d’autre." }],
  },
  {
    slug: "plein-carburant-livraison",
    title: "Plein de carburant à la livraison, Convoyage BZH",
    h1: "Plein de carburant à la livraison",
    description: "Plein à la remise du véhicule convoyé. Carburant au réel, forfait dans la fourchette. Base Quimper.",
    kind: "metier",
    image: "/images/plein-carburant-vehicule.jpg",
    intro: "Une remise avec la réserve allumée, ce n’est pas une concession.",
    body: [
      "Le plein se fait à l’arrivée. Le carburant est repris au réel. Un forfait entre dans la fourchette du simulateur, à confirmer.",
      "Souvent couplé au lavage et au contrôle visuel. Pour les VE, c’est la recharge au niveau convenu.",
    ],
    nearby: [
      { to: "/nettoyage-vehicule", label: "Préparation" },
      { to: "/simulateur", label: "Simulateur" },
      { to: "/convoyage-electrique", label: "Véhicule électrique" },
    ],
    faq: [{ q: "Le plein est-il inclus dans le convoyage ?", a: "Le carburant du trajet l’est. Le plein à la remise est une option." }],
  },
  {
    slug: "convoyage-automobile",
    title: "Convoyage automobile, base Quimper. Convoyage BZH",
    h1: "Convoyage automobile",
    description: "Convoyage automobile, base Quimper. Prise en charge partout en France et en Europe, remise chez le client. Photos du véhicule, devis sous 2 h.",
    kind: "metier",
    image: IMG,
    locality: SITE.city,
    country: "FR",
    intro: "Le convoyage automobile, c’est amener un véhicule d’un point A à un point B, en conduite, comme en concession.",
    body: [
      "Convoyage BZH achemine des véhicules particuliers et utilitaires jusqu’à 3,5 t, en état de marche. Base Quimper. Prise en charge partout en France et en Europe.",
      "Chaque mission comprend la conduite, le carburant du véhicule convoyé, les péages, le retour du convoyeur, un état des lieux photo et la mise en main offerte.",
      "Ce n’est pas un transport plateau. Ce n’est pas un taxi. C’est une remise. Le prix n’est pas publié. Le simulateur prépare une fourchette après vos coordonnées.",
    ],
    nearby: [
      { to: "/livraison-vehicule", label: "Livraison France" },
      { to: "/convoyeur-automobile", label: "Convoyeur" },
      { to: "/simulateur", label: "Simulateur" },
      { to: "/convoyage-quimper", label: "Quimper" },
    ],
    faq: [
      {
        q: "Quelle est la différence avec un transporteur ?",
        a: "Nous roulons le véhicule. Permis B, jusqu’à 3,5 t, en état de marche. Un plateau, un poids lourd ou un non-roulant, ce n’est pas notre métier.",
      },
      {
        q: "Où intervenez-vous ?",
        a: "Prise en charge et remise partout en France, et en Europe selon mission. Quimper est la base, pas un départ obligatoire. Pologne, Monaco, Serbie comprises.",
      },
    ],
  },
  {
    slug: "convoyeur-automobile",
    title: "Convoyeur automobile à Quimper. Convoyage BZH",
    h1: "Convoyeur automobile, base Quimper",
    description: "Convoyeur automobile basé à Quimper. Livraison de véhicules tous les jours, France et Europe. Un interlocuteur, photos du véhicule.",
    kind: "metier",
    image: KEYS,
    locality: SITE.city,
    country: "FR",
    intro: "Un convoyeur, pas une plateforme. Clément pilote Convoyage BZH depuis Quimper.",
    body: [
      "Vous parlez à quelqu’un qui connaît les axes, les concessions et les remises. Expérience la remise en concession. Si ça coince, on prévient.",
      "Particuliers, mandataires, garages, loueurs. Astreinte 24 h pour les professionnels. Tous les jours.",
      "Le simulateur prépare le trajet. Le devis ferme arrive sous 2 heures ouvrées.",
    ],
    nearby: [
      { to: "/a-propos", label: "À propos" },
      { to: "/convoyage-automobile", label: "Convoyage automobile" },
      { to: "/contact", label: "Contact" },
    ],
    faq: [
      {
        q: "Travaillez-vous avec les professionnels ?",
        a: "Oui. Concessions, garages, mandataires, loueurs. Paiement à quinze jours. Un cadre volume après trois missions test.",
      },
    ],
  },
  {
    slug: "livraison-voiture-neuve",
    title: "Livraison de voiture neuve. Convoyage BZH",
    h1: "Livraison de voiture neuve",
    description: "Livraison de voiture neuve depuis Quimper. Remise comme en concession, état des lieux photo, mise en main offerte.",
    kind: "metier",
    image: KEYS,
    locality: SITE.city,
    country: "FR",
    intro: "Une voiture neuve n’arrive pas dans un parking. Elle arrive préparée.",
    body: [
      "Convoyage depuis la concession, le constructeur ou le mandataire jusqu’au client. Lavage, plein, mise en main offerte.",
      "L’état des lieux photo protège le vendeur et l’acheteur. Option GPS sur les flux prestige et import.",
      "Le tarif n’est pas affiché. Fourchette après vos coordonnées, à confirmer.",
    ],
    nearby: [
      { to: "/convoyage-concession", label: "Concessions" },
      { to: "/nettoyage-vehicule", label: "Préparation" },
      { to: "/coffrets-livraison", label: "Coffret cadeau" },
      { to: "/simulateur", label: "Simulateur" },
    ],
    faq: [
      {
        q: "Faites-vous la mise en main ?",
        a: "Oui. Offerte à chaque remise. Vingt à trente minutes. Commandes, options, charge.",
      },
    ],
  },
  {
    slug: "transport-voiture-conduite",
    title: "Transport de voiture en conduite. Convoyage BZH",
    h1: "Transport de voiture en conduite",
    description: "Transport de voiture en conduite depuis Quimper. Convoyage, pas de plateau. Particuliers et utilitaires jusqu’à 3,5 t.",
    kind: "metier",
    image: IMG,
    locality: SITE.city,
    country: "FR",
    intro: "Le véhicule roule. Nous le conduisons. Carburant, péages, retour, photos.",
    body: [
      "Le transport en conduite convient aux véhicules en état de marche, permis B, jusqu’à 3,5 t. Sinon, un transporteur plateau.",
      "Inclus : conduite, carburant du véhicule convoyé, péages, retour du convoyeur, état des lieux photo, mise en main.",
      "France et Europe. Devis après coordonnées, jamais de grille publique.",
    ],
    nearby: [
      { to: "/convoyage-automobile", label: "Convoyage automobile" },
      { to: "/livraison-vehicule", label: "Livraison France" },
      { to: "/simulateur", label: "Simulateur" },
    ],
    faq: [
      {
        q: "Le véhicule doit-il être assuré ?",
        a: "Oui. En règle, roulant, documents à bord. Un doute, on n’embarque pas.",
      },
    ],
  },
  {
    slug: "convoyage-garage",
    title: "Convoyage pour garage automobile. Convoyage BZH",
    h1: "Convoyage pour garage",
    description: "CT, carrosserie, retours atelier. Un garage qui garde ses techniciens au banc. Convoyage depuis Quimper.",
    kind: "metier",
    image: EDL,
    locality: SITE.city,
    country: "FR",
    intro: "Un mécanicien sur la route ne répare rien.",
    body: [
      "Convoyage BZH prend les allers-retours CT, carrosserie, prêts. État des lieux photo. Compte-rendu.",
      "Compte professionnel, paiement à quinze jours, cadre volume après trois missions test.",
    ],
    nearby: [
      { to: "/professionnels", label: "Compte professionnel" },
      { to: "/convoyage-concession", label: "Concessions" },
      { to: "/simulateur", label: "Estimer" },
    ],
    faq: [{ q: "Utilitaires d’atelier ?", a: "Oui, jusqu’à 3,5 t, vides, permis B." }],
  },
  {
    slug: "convoyage-marchand-vo",
    title: "Convoyage pour marchand VO. Convoyage BZH",
    h1: "Convoyage pour marchand de véhicules d’occasion",
    description: "Rééquilibrage, livraisons, photos. Convoyage pour marchands VO depuis Quimper. Import possible.",
    kind: "metier",
    image: KEYS,
    locality: SITE.city,
    country: "FR",
    intro: "Un VO mal placé ne se vend pas. Un VO mal documenté se discute.",
    body: [
      "photos du véhicule stricte. Flux plates-formes, enchères, livraisons clients. Import Allemagne, Belgique, Pologne.",
      "GPS souvent. Cadre volume possible. Pas de grille publique.",
    ],
    nearby: [
      { to: "/professionnels", label: "Professionnels" },
      { to: "/convoyage-occasion", label: "Occasion" },
      { to: "/traqueur-gps", label: "GPS" },
    ],
    faq: [{ q: "Paiement ?", a: "Quinze jours. Acompte possible au premier dossier." }],
  },
  {
    slug: "convoyage-flotte",
    title: "Convoyage de flotte d’entreprise. Convoyage BZH",
    h1: "Convoyage de flotte",
    description: "Transfert de flotte, leasing, entreprises. Interlocuteur unique, facturation, compte-rendu. Base Quimper.",
    kind: "metier",
    image: KEYS,
    locality: SITE.city,
    country: "FR",
    intro: "Plusieurs véhicules, un interlocuteur. Pas une plateforme.",
    body: [
      "Entreprises, leasing, loueurs. Transferts, one-way, rééquilibrage. EDL et rapports standardisés.",
      "Compte professionnel. L’espace client viendra. Aujourd’hui : téléphone, e-mail, facture.",
    ],
    nearby: [
      { to: "/professionnels", label: "Compte professionnel" },
      { to: "/convoyage-location", label: "Loueurs" },
      { to: "/contact", label: "Contact" },
    ],
    faq: [{ q: "Facturation mensuelle ?", a: "Oui, une fois le cadre volume posé." }],
  },
  {
    slug: "preparation-livraison-automobile",
    title: "Préparation avant livraison automobile. Convoyage BZH",
    h1: "Préparation avant livraison automobile",
    description: "Lavage, contrôle, carburant, photos avant remise client. Pour concessions et particuliers, depuis Quimper.",
    kind: "metier",
    image: "/images/preparation-esthetique-vehicule.jpg",
    locality: SITE.city,
    country: "FR",
    intro: "La préparation fait la remise. Ce n’est pas du detailing de concours.",
    body: [
      "Packs Essentiel, Confort, Premium. Contrôle visuel, nettoyage, kit. Prix indicatifs, à confirmer.",
      "Les concessions y gagnent un client qui récupère un véhicule présentable. Sans mobiliser l’atelier.",
    ],
    nearby: [
      { to: "/pack-mise-a-la-route", label: "Packs" },
      { to: "/preparation-vehicule", label: "Préparation" },
      { to: "/professionnels", label: "Professionnels" },
    ],
    faq: [{ q: "Délai ?", a: "La préparation se fait dans le temps de la mission, ou avant si convenu." }],
  },
];

export function seoBySlug(slug: string) {
  return SEO_PAGES.find((p) => p.slug === slug);
}

export function seoSlugs() {
  return SEO_PAGES.map((p) => p.slug);
}

export function seoByKind(kind: SeoPage["kind"]) {
  return SEO_PAGES.filter((p) => p.kind === kind);
}
