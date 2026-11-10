import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { PDFViewer } from "./PDFViewer";

export const metadata = {
  title: "CV",
};

export default function CVPage() {
  return (
    <Section className="pt-32 pb-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          Curriculum Vitae
        </h1>
        <a href="/resume.pdf" download="MD_Wahidul_Islam_CV.pdf">
          <Button variant="primary" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </a>
      </div>

      <PDFViewer src="/resume.pdf" />
    </Section>
  );
}
