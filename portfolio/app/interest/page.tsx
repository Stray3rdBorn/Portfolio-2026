import { Section } from "@/components/ui/Section";
import { interests } from "@/lib/data";

export const metadata = {
  title: "Interests",
};

export default function InterestsPage() {
  // Group by category for a clean layout
  const categories = Array.from(new Set(interests.map((i) => i.category)));

  return (
    <Section className="pt-32">
      <div className="max-w-3xl mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          Interests
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          The things that shape how I think — kept on a separate page so the
          rest of the site can stay focused and professional.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-sm font-medium uppercase tracking-wider text-turquoise mb-6">
              {category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {interests
                .filter((i) => i.category === category)
                .map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6"
                  >
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
