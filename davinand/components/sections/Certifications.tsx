import { certifications, sectionMeta } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function Certifications() {
  const { number, title, meta } = sectionMeta.certifications;

  return (
    <section className="space-y-6">
      <SectionHeader number={number} title={title} meta={meta} />

      {certifications.map((cert) => (
        <Card
          key={cert.title}
          className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="space-y-0.5">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {cert.issuer}
              </p>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
                Issued {cert.issued} · Expires {cert.expires}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={cert.credentialUrl || "#"}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 shadow-sm transition"
            >
              <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              View Credential File
            </a>
          </div>
        </Card>
      ))}
    </section>
  );
}