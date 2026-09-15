import { organizations, sectionMeta } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function Organizations() {
  const { number, title, meta } = sectionMeta.organizations;

  return (
    <section className="space-y-6">
      <SectionHeader number={number} title={title} meta={meta} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {organizations.map((org) => (
          <Card key={`${org.role}-${org.period}`} className="p-5 space-y-3">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {org.period}
              </span>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {org.role}
              </h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {org.organization}
              </p>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {org.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {org.tags.map((tag) => (
                <Tag key={tag} size="xs">
                  {tag}
                </Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}