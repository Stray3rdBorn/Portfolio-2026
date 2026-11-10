import { Section } from "@/components/ui/Section";
import { CVContent } from "./CVContent";

export const metadata = {
  title: "CV",
};

export default function CVPage() {
  return (
    <Section className="pt-32 pb-20">
      <CVContent />
    </Section>
  );
}
