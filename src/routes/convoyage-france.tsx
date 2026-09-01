import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/convoyage-france")({
  beforeLoad: () => {
    throw redirect({ to: "/livraison-vehicule" });
  },
});
