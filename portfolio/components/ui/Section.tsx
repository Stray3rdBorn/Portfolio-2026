import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Simple wrapper that gives every section consistent spacing.
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
