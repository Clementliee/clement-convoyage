import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const STATIC = new Set([
  "/",
  "/prestations",
  "/livraison-vehicule",
  "/nettoyage-vehicule",
  "/livraison-europe",
  "/simulateur",
  "/a-propos",
  "/avis",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
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
