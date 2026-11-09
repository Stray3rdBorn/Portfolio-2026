import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-text">
          Get in Touch
        </h1>

        <p className="mt-6 text-lg text-muted leading-relaxed">
          Have a project in mind or just want to say hello? I would love to hear
          from you.
        </p>

        {/* Kept as a separate client component so the page stays server-rendered */}
        <ContactForm />
      </div>
    </Section>
  );
}
