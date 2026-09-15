import { hero } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="about" className="space-y-6 pt-4">

      <div className="space-y-3">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          {hero.name}
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
          {hero.headline}{" "}
          <span className="text-zinc-900 dark:text-white font-medium">
            {hero.institution}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-1">
        {hero.tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
            )}
            <span className="px-3 py-1 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
              {tag}
            </span>
          </span>
        ))}
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed text-sm md:text-base">
        {hero.bio}
      </p>

      <div className="pt-2 flex flex-wrap gap-3">
        <a
          href={hero.primaryCta.href}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-sm font-medium transition shadow-sm"
        >
          {hero.primaryCta.label}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <a
          href={hero.secondaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-sm font-medium transition"
        >
          {hero.secondaryCta.label}
          <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}