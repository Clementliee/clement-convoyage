export const CONVOYAGE_STEPS = [
  {
    n: "01",
    title: "Le brief",
    text: "Départ, arrivée, créneau, véhicule. Vous validez. Nous confirmons sous deux heures.",
  },
  {
    n: "02",
    title: "La prise en charge",
    text: "Photos. Compteur. Carrosserie. Documents. Nous partons. Vous n’êtes pas au volant.",
  },
  {
    n: "03",
    title: "L’acheminement",
    text: "Un chauffeur. Une assurance. Un créneau tenu. Imprévu : nous appelons.",
  },
  {
    n: "04",
    title: "La remise",
    text: "Photos. Clés en main. Mise en main offerte. La personne nommée récupère le véhicule.",
  },
  {
    n: "05",
    title: "Le compte rendu",
    text: "Le soir même. Départ, arrivée, faits. Rien d’autre.",
  },
] as const;

export const CONVOYAGE_CATALOGUE = [
  {
    id: "france",
    kicker: "France",
    title: "A vers B",
    text: "Prise en charge où se trouve le véhicule. Remise chez le destinataire. Bretagne, Paris, Lyon, Nice. Tous les jours.",
    image: "/images/mission-audi-a4.jpg",
    alt: "Audi A4 Avant en convoyage France",
  },
  {
    id: "europe",
    kicker: "Europe",
    title: "Import, export",
    text: "Belgique, Allemagne, Pologne, Monaco, Espagne, Italie, Royaume-Uni. Documents vérifiés avant de tourner la clé.",
    image: "/images/mission-passat.jpg",
    alt: "Volkswagen Passat sur autoroute européenne",
  },
  {
    id: "livraison",
    kicker: "Professionnel",
    title: "Livraison client",
    text: "Concession, garage, mandataire. Le commercial reste en showroom. Nous livrons. Mise en main. Compte rendu.",
    image: "/images/mission-bmw-x3.jpg",
    alt: "BMW X3 neuve, livraison client",
  },
  {
    id: "prestige",
    kicker: "Prestige",
    title: "Sportive, collection",
    text: "Scellés. GPS le temps de la mission. Conduite adaptée. Remise à la personne nommée. Ce n’est pas de la sécurité privée.",
    image: "/images/mission-porsche-911.jpg",
    alt: "Porsche 911 en convoyage prestige",
  },
  {
    id: "retour",
    kicker: "Aller et retour",
    title: "Un véhicule à reprendre",
    text: "Un à l’aller. Un autre au retour. Pas de rentrée à vide. Le second trajet est dans le devis.",
    image: "/images/mission-golf-brest.jpg",
    alt: "Volkswagen Golf 8 en convoyage",
  },
  {
    id: "achat",
    kicker: "Particulier",
    title: "Achat à distance",
    text: "Leboncoin, garage, mandataire. Nous allons chercher. Nous livrons. Photos. Mise en main.",
    image: "/images/mission-308.jpg",
    alt: "Peugeot 308 en convoyage entre particuliers",
  },
] as const;

export const CONVOYAGE_CLIENTS = [
  {
    id: "part",
    kicker: "Particulier",
    title: "Vous achetez. Vous vendez. Vous déménagez.",
    text: "Un véhicule à faire venir, ou à faire partir. Pack Route, Sérénité ou Sécurisé. Mise en main offerte.",
    to: "/simulateur",
    cta: "Devis particulier",
  },
  {
    id: "pro",
    kicker: "Professionnel",
    title: "Concession, garage, flotte.",
    text: "Navettes atelier, livraisons clients, imports. Pack Atelier, Livraison client ou Signature. Facture à quinze jours.",
    to: "/simulateur",
    cta: "Devis professionnel",
  },
] as const;