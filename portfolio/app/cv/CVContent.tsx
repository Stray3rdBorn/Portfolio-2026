"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("./PDFViewer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="h-[80vh] flex items-center justify-center border border-border rounded-2xl bg-surface text-muted">
        Preparing viewer...
      </div>
    ),
  },
);

export function CVContent() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium">
            Curriculum Vitae
          </h1>
          <p className="mt-3 text-muted">
            Software Engineer based in Dhaka, Bangladesh.
          </p>
        </div>
        <a href="/resume.pdf" download="MD_Wahidul_Islam_CV.pdf">
          <Button variant="primary" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </a>
      </div>

      {!showPdf ? (
        <div className="w-full h-[80vh] rounded-2xl border border-border bg-surface flex flex-col items-center justify-center gap-4">
          <p className="text-muted">View the CV directly in your browser.</p>
          <Button variant="ghost" onClick={() => setShowPdf(true)}>
            Load PDF Viewer
          </Button>
        </div>
      ) : (
        <PDFViewer src="/resume.pdf" />
      )}
    </>
  );
}
