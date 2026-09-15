import { projects, sectionMeta } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  const { number, title, meta } = sectionMeta.projects;

  return (
    <section id="projects" className="space-y-6">
      <SectionHeader number={number} title={title} meta={meta} />

      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 md:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400">
                  {project.status}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-500">
                {project.domain}
              </p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium font-mono transition shadow-sm self-start shrink-0"
            >
              <span>Visit Live Website</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mb-6">
            {project.description}
          </p>

          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-zinc-400 font-mono">
              Status: Public Web App
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}