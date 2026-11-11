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
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-text">
            Software Engineer <br />& Developer.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed text-justify">
            I code at the intersection of logic, research, and play. Whether
            it's writing optimized software, exploring complex data, or building
            interactive game worlds, I just like making things work. This site
            is a living archive of my experiments, breakthroughs, and
            half-finished ideas. Above all, I love to learn.
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
      <Section className="bg-surface">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-3xl font-medium">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:bg-accent hover:border-accent"
            >
              {/* Title */}
              <h3 className="text-xl font-medium text-text group-hover:text-white transition-colors">
                {project.title}
              </h3>

              {/* Description */}
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

      {/* Research Brief */}
      <Section>
        <div className="max-w-3xl text-justify">
          <h2 className="font-serif text-3xl font-medium mb-6 ">Research</h2>
          <p className="text-lg text-muted leading-relaxed mb-6 ">
            For my undergraduate thesis, I built a multimodal emotion
            recognition system that combines facial expression analysis with
            speech prosody. By fusing a CNN for facial features with an LSTM for
            audio, the system achieved roughly 82% accuracy on speech and 68% on
            facial expressions.
          </p>
          <Link href="/research">
            <Button variant="ghost">View Research Details</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
