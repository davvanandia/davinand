export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div>© {year} Davina Anandia. All rights reserved.</div>
      <div className="flex items-center gap-4">
        <span>Built with Clean Standards</span>
        <span>•</span>
        <span className="text-emerald-600 dark:text-emerald-400">
          Light &amp; Dark Ready
        </span>
      </div>
    </footer>
  );
}