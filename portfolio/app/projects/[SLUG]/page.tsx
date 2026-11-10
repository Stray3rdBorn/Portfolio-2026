import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";

export const instant = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <Section className="pt-32">
      <Link
        href="/projects"
        className="text-sm font-semibold text-accent hover:underline mb-8 inline-block"
      >
        ← Back to Projects
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl font-medium">
        {project.title}
      </h1>
      <p className="mt-4 text-muted">{project.year}</p>

      <div className="mt-10 max-w-3xl space-y-6 text-lg text-muted leading-relaxed text-justify">
        {project.longDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Download & Play</Button>
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost">View Source Code</Button>
          </a>
        )}
      </div>
    </Section>
  );
}
