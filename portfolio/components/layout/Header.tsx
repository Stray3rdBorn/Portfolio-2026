"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/skills", label: "Skills" },
  { href: "/cv", label: "CV" },
  { href: "/interests", label: "Interests" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        {/* Left: Mobile Menu Toggle */}
        <div className="flex items-center md:hidden z-50">
          <button
            className="rounded-full p-2 text-muted hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Logo / Name: grows on desktop so the nav and theme toggle sit at the right edge */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-1">
          <Link
            href="/"
            className="font-serif text-lg lg:text-xl font-semibold tracking-tight text-text whitespace-nowrap"
          >
            MD WAHIDUL ISLAM
          </Link>
        </div>

        {/* Desktop Navigation: only as wide as its links, tighter gap on medium screens to fit beside the logo */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === item.href ? "text-accent" : "text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Theme Toggle. Left margin on desktop spaces it from the last nav link */}
        <div className="flex items-center justify-end md:ml-2 lg:ml-6">
          {/*button size keeps the nav from shifting when the icon appears after mount */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            {/* Icon renders only after mount to avoid a theme mismatch on first load */}
            {mounted && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  d="M12 3a9 9 0 0 0 0 18z"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 w-64 md:hidden overflow-hidden transition-all duration-200 ease-out origin-top",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-3 scale-95 pointer-events-none",
        )}
      >
        {/* Solid background so page text behind the panel stays hidden */}
        <div className="border-r border-b border-border bg-bg shadow-2xl rounded-br-2xl">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-accent",
                  pathname === item.href
                    ? "bg-accent/20 text-accent"
                    : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
