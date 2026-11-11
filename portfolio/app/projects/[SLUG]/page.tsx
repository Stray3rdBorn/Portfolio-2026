import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";

export const instant = false;
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const captions: Record<string, string[]> = {
    decadome: [
      "Gameplay: surviving waves in the arena",
      "Live leaderboard: scores ranked from Redis",
    ],
    campfire: [
      "Rooms page: create or join by ID, edit or delete rooms",
      "Chat room: real time messages over WebSockets",
    ],
    "lua-project": [
      "Gameplay: jumping over the enemy, 1 point per jump",
      "Game over: instant restart loop",
    ],
    "portfolio-2026": [
      "Home page in light mode with red accent",
      "Projects page in dark mode with turquoise accent",
    ],
  };

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

      <div className="mt-10 max-w-5xl space-y-6 text-lg text-muted leading-relaxed text-justify">
        {project.longDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {project.images.map((img, index) => {
            const caption = captions[project.slug]?.[index] ?? "";
            return (
              <div key={img} className="flex flex-col">
                <div className="rounded-2xl border border-border overflow-hidden bg-surface">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                    priority={index === 0}
                  />
                </div>
                {caption && (
                  <p className="mt-2 text-sm text-muted text-center">
                    {caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-16 flex flex-wrap gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              {project.liveLabel ?? "View Site"}
            </Button>
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
