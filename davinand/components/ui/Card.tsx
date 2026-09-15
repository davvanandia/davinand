import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  const base =
    "rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40";
  const hover = interactive
    ? "hover:border-zinc-300 dark:hover:border-zinc-700"
    : "";
  return <div className={`${base} ${hover} ${className}`}>{children}</div>;
}