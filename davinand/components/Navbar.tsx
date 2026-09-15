import { navLinks, siteConfig } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-50/85 dark:bg-zinc-950/85 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          davina
          <span className="text-emerald-600 dark:text-emerald-400 font-mono">
            nd
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-zinc-950 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}