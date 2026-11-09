import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-2xl">
        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-text">
          Get in Touch
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Have a project in mind or just want to say hello? I would love to hear
          from you.
        </p>

        {/* Contact Form */}
        <form className="mt-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-text"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-surface bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-text"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-xl border border-surface bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-text"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-surface bg-bg text-text px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <Button type="submit" variant="primary" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}
