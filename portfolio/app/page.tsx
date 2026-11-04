import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";

export default function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            Building elegant <br />
            digital experiences
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am a developer who cares about clarity, performance, and
            thoughtful design. Welcome to my corner of the internet.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects">
              <Button variant="primary" size="lg">
                View Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-3xl font-medium">Selected Work</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-turquoise hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all hover:border-turquoise/50"
            >
              <h3 className="text-xl font-medium group-hover:text-turquoise transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
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
    </>
  );
}
