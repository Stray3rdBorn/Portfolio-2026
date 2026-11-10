"use client";

import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { PDFViewer } from "./PDFViewer";

export function CVContent() {
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

      <PDFViewer src="/resume.pdf" title="Curriculum Vitae" />
    </>
  );
}
