import { educations, sectionMeta } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function Education() {
  const { number, title, meta } = sectionMeta.education;

  return (
    <section id="education" className="space-y-6 scroll-mt-20">
      <SectionHeader number={number} title={title} meta={meta} />

      <div className="space-y-4">
        {educations.map((edu) => (
          <Card
            key={edu.institution}
            className="p-5 flex flex-col md:flex-row md:items-start justify-between gap-3"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.institution}
                </h3>
                {edu.grade && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-medium">
                    {edu.grade}
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {edu.degree}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                {edu.description}
              </p>
            </div>
            <div className="shrink-0 font-mono text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded self-start md:self-auto">
              {edu.period}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}