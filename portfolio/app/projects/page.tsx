import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-32">
      <h1 className="font-serif text-4xl md:text-5xl font-medium mb-12">
        Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border border-surface bg-surface p-8 transition-all hover:border-accent/40"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <span className="text-sm text-muted">{project.year}</span>
            </div>
            <p className="mt-3 text-muted">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
