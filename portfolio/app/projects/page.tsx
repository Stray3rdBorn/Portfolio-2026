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
            className="group block rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:bg-accent/80 hover:border-accent  dark:hover:border-accent"
          >
            {/* Title */}
            <h3 className="text-xl font-medium text-text group-hover:text-white transition-colors">
              {project.title}
            </h3>

            <p className="mt-2 text-muted group-hover:text-white/80 transition-colors">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface border border-border px-3 py-1 text-xs text-text dark:group-hover:bg-black/40 group-hover:border-transparent group-hover:text-white transition-colors"
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
