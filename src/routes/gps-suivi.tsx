import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/gps-suivi")({
  beforeLoad: () => {
    throw redirect({ to: "/traqueur-gps" });
  },
});
