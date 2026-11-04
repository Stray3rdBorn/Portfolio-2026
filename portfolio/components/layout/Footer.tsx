import Link from "next/link";

export function Footer() {
  // We put the year in a constant so Next.js is happy
  const currentYear = 2026;

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {currentYear} Your Name. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="/interests"
            className="text-sm text-zinc-500 hover:text-turquoise transition-colors"
          >
            Interests
          </Link>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-turquoise transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-turquoise transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
