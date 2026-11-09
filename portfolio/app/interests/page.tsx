import { Section } from "@/components/ui/Section";
import { interests } from "@/lib/data";

export const metadata = {
  title: "Interests",
};

export default function InterestsPage() {
  const categories = Array.from(new Set(interests.map((i) => i.category)));

  return (
    <Section className="pt-32">
      <div className="max-w-3xl mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          Interests
        </h1>
        <p className="mt-6 text-lg text-muted">
          The things that shape how I think — kept on a separate page so the
          rest of the site can stay focused and professional.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-sm font-medium uppercase tracking-wider text-accent mb-6">
              {category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {interests
                .filter((i) => i.category === category)
                .map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-muted">{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
