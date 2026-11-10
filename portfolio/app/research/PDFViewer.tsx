"use client";

import { useEffect, useState } from "react";

export function PDFViewer({ src }: { src: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[80vh] rounded-2xl border border-border bg-surface flex items-center justify-center text-muted">
        Loading PDF...
      </div>
    );
  }

  return (
    <div className="w-full h-[80vh] rounded-2xl border border-border overflow-hidden bg-surface">
      <iframe src={src} className="w-full h-full" title="Thesis PDF" />
    </div>
  );
}
