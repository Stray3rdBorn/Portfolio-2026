"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function PDFViewer({ src, title }: { src: string; title?: string }) {
  const [mounted, setMounted] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full max-w-[800px] aspect-[1/1.414] mx-auto rounded-2xl border border-border bg-surface flex items-center justify-center text-muted">
        Loading...
      </div>
    );
  }

  if (!showPdf) {
    return (
      <div className="w-full max-w-[800px] aspect-[1/1.414] mx-auto rounded-2xl border border-border bg-surface flex flex-col items-center justify-center gap-4 shadow-lg">
        <p className="text-muted">
          View the document directly in your browser.
        </p>
        <Button variant="primary" onClick={() => setShowPdf(true)}>
          Load PDF Viewer
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center bg-surface rounded-2xl border border-border p-4 overflow-hidden">
      <div className="relative w-full max-w-[800px] aspect-[1/1.414] shadow-lg">
        <iframe
          src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
          className="absolute inset-0 w-full h-full border-none"
          title={title ?? "PDF Document"}
        />
      </div>
    </div>
  );
}
