import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          Research
        </h1>
        <p className="mt-6 text-lg text-muted">
          My undergraduate thesis explored how combining facial expression and
          speech prosody can produce a more reliable emotion recognition system
          than either modality alone.
        </p>
      </div>

      <div className="space-y-16">
        {/* Thesis */}
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-serif text-2xl font-medium text-text">
              Towards Real-Time Emotion Analytics
            </h2>
            <span className="text-sm text-muted">2025</span>
          </div>
          <p className="mt-2 text-sm text-accent">
            Undergraduate Thesis · Sonargaon University
          </p>

          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              A bimodal emotion recognition system that fuses facial expression
              analysis with speech prosody to classify five emotions: happy,
              sad, angry, fear, and neutral. The facial branch used a CNN on
              48×48 grayscale face crops; the speech branch used an LSTM on MFCC
              features with first and second derivatives.
            </p>
            <p>
              The two models were combined with confidence-based late fusion:
              when both agreed, the label was accepted directly; when they
              disagreed, the higher-confidence prediction won; when one modality
              was unavailable, the system fell back to the other.
            </p>
          </div>

          {/* Metrics */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-4">
              <p className="text-3xl font-serif text-accent">82%</p>
              <p className="mt-1 text-sm text-muted">Speech accuracy (LSTM)</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="text-3xl font-serif text-accent">68%</p>
              <p className="mt-1 text-sm text-muted">Facial accuracy (CNN)</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="text-3xl font-serif text-accent">+5–10%</p>
              <p className="mt-1 text-sm text-muted">Gain from fusion</p>
            </div>
          </div>

          {/* Meta */}
          <dl className="mt-8 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted">Datasets</dt>
              <dd className="text-text">
                FER-2013, RAVDESS, 5,500 custom video clips
              </dd>
            </div>
            <div>
              <dt className="text-muted">Stack</dt>
              <dd className="text-text">Python, TensorFlow, OpenCV, librosa</dd>
            </div>
            <div>
              <dt className="text-muted">Fusion</dt>
              <dd className="text-text">Confidence-based late fusion</dd>
            </div>
            <div>
              <dt className="text-muted">Status</dt>
              <dd className="text-text">Defended · 2025</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            {["CNN", "LSTM", "MFCC", "Late Fusion", "FER-2013", "RAVDESS"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg border border-border px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Rebuild note */}
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="font-serif text-2xl font-medium text-text">
            Modernized Pipeline
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            I'm rebuilding the system as a cleaner, modular pipeline:
            MobileNetV2 for the facial branch, a Bidirectional LSTM for speech,
            MediaPipe for face detection, and a weighted late-fusion layer with
            temporal smoothing. The results will be added once the rebuilt
            models are trained.
          </p>
          <p className="mt-3 text-sm text-muted">
            <span className="text-accent">Status:</span> In progress
          </p>
        </div>
      </div>
    </Section>
  );
}
