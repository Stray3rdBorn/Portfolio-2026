import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          About Me
        </h1>
        <div className="mt-10 space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>
            I am a developer who believes that the best digital products feel
            inevitable — clear, fast, and quietly beautiful.
          </p>
          <p>
            My work sits at the intersection of design and engineering. I care
            deeply about performance, accessibility, and the small details that
            make an interface feel considered.
          </p>
          <p>
            Outside of work you will find me exploring games, books, philosophy,
            history, and the night sky. Those interests live on a separate page
            so this site can stay focused and professional.
          </p>
        </div>
      </div>
    </Section>
  );
}
