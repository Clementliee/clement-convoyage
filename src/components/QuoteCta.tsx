import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type SimulatorSearch = {
  from?: string;
  to?: string;
  mission?: string;
  service?: string;
  client?: string;
  vehicle?: string;
};

const STYLES = {
  coral: "inline-flex h-12 w-fit items-center justify-center rounded-full bg-coral px-6 text-sm font-semibold text-white",
  navy: "inline-flex h-12 w-fit items-center justify-center rounded-full bg-navy px-6 text-sm font-semibold text-white",
  ghost:
    "inline-flex h-12 w-fit items-center justify-center rounded-full border border-navy px-6 text-sm font-semibold text-navy",
  inverse:
    "inline-flex h-12 w-fit items-center justify-center rounded-full border border-white/35 px-6 text-sm font-semibold text-white",
} as const;

export function QuoteCta({
  children,
  search,
  variant = "coral",
  className = "",
}: {
  children: ReactNode;
  search?: SimulatorSearch;
  variant?: keyof typeof STYLES;
  className?: string;
}) {
  return (
    <Link to="/simulateur" search={search ?? {}} className={`${STYLES[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
