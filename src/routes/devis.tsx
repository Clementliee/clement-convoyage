import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/devis")({
  beforeLoad: () => {
    throw redirect({ to: "/simulateur" });
  },
});
