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
            className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 transition-all hover:border-turquoise/40"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium group-hover:text-turquoise transition-colors">
                {project.title}
              </h2>
              <span className="text-sm text-zinc-500">{project.year}</span>
            </div>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs"
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
