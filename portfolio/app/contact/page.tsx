import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-2xl">
        {/* Heading - */}
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-zinc-900 dark:text-zinc-50">
          Get in Touch
        </h1>

        {/* Paragraph  */}
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Have a project in mind or just want to say hello? I would love to hear
          from you.
        </p>

        {/* Contact Form */}
        <form className="mt-12 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-turquoise"
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
