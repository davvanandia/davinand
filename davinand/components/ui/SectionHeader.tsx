type SectionHeaderProps = {
  number: string;
  title: string;
  meta?: string;
};

export function SectionHeader({ number, title, meta }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
          {number}.
        </span>{" "}
        {title}
      </h2>
      {meta && <span className="text-xs font-mono text-zinc-500">{meta}</span>}
    </div>
  );
}