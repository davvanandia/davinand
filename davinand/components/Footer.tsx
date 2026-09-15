export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-700 dark:text-zinc-300 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div>© {year} Davina Anandia. All rights reserved.</div>
    </footer>
  );
}