import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const STATIC = new Set([
  "/",
  "/prestations",
  "/convoyage",
  "/livraison-vehicule",
  "/nettoyage-vehicule",
  "/livraison-europe",
  "/traqueur-gps",
  "/securite-vehicule",
  "/coffrets-livraison",
  "/controle-vehicule",
  "/destinations",
  "/simulateur",
  "/professionnels",
  "/pack-mise-a-la-route",
  "/preparation-vehicule",
  "/protocole-clement",
  "/faq",
  "/a-propos",
  "/avis",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
  "/jockey-gares-aeroports",
  "/tarifs",
  "/missions",
  "/suivi",
]);

export function AppLink({
  to,
  className,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (STATIC.has(to)) {
    return (
      <Link to={to as "/"} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  const slug = to.replace(/^\//, "");
  return (
    <Link to="/$slug" params={{ slug }} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
