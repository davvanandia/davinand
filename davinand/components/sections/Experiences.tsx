import { experiences, sectionMeta } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function Experiences() {
  const { number, title, meta } = sectionMeta.experiences;

  return (
    <section className="space-y-6">
      <SectionHeader number={number} title={title} meta={meta} />

      <div className="space-y-5">
        {experiences.map((exp) => (
          <Card
            key={`${exp.role}-${exp.period}`}
            interactive
            className="p-5 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {exp.role}
                {exp.company && (
                  <span className="text-zinc-700 dark:text-zinc-300 font-normal">
                    {" "}
                    at {exp.company}
                  </span>
                )}
              </h3>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 shrink-0">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}