import Link from "next/link";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto font-semibold flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
          <a
            href="https://www.facebook.com/share/1HKVK2JHYB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://github.com/Stray3rdborn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/md-wahidul-islam-973304265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/wahidihan_514m/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@stray3rdborn36"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Youtube
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted order-2 md:order-1 text-center md:text-left">
          © {currentYear} MD Wahidul Islam | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
