import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Skills",
};

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "Figma", "Accessibility", "Performance", "SEO"],
  },
  {
    title: "Currently Exploring",
    skills: ["Advanced animations", "Design systems", "System design"],
  },
];

export default function SkillsPage() {
  return (
    <Section className="pt-32">
      <h1 className="font-serif text-4xl md:text-5xl font-medium mb-16">
        Skills
      </h1>

      <div className="space-y-16">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xl font-medium text-accent mb-6">
              {group.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
