import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
