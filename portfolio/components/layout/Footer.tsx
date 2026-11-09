import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-surface bg-bg">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <p className="text-sm text-muted">
          © {currentYear} MD Wahidul Islam | All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="/interests"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Interests
          </Link>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
