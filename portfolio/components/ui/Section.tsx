import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Simple wrapper that gives every section consistent spacing.
 * Keeps the layout clean and professional.
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 px-6", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
