type TagProps = {
  children: React.ReactNode;
  size?: "sm" | "xs";
};

export function Tag({ children, size = "sm" }: TagProps) {
  const sizeClass =
    size === "xs" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-0.5 text-xs";
  return (
    <span
      className={`${sizeClass} rounded font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60`}
    >
      {children}
    </span>
  );
}