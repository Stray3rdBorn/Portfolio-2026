import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";

export const instant = false;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <Section className="pt-32">
      <Link
        href="/projects"
        className="text-sm text-accent hover:underline mb-8 inline-block"
      >
        ← Back to projects
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl font-medium">
        {project.title}
      </h1>
      <p className="mt-4 text-muted">{project.year}</p>

      <div className="mt-10 max-w-3xl space-y-6 text-lg text-muted leading-relaxed">
        {project.longDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Live Site</Button>
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost">View Code</Button>
          </a>
        )}
      </div>
    </Section>
  );
}
