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
              Towards Real-Time Emotion Analytics: Integrating Facial Landmarks
              and Speech Prosody
            </h2>
            <span className="text-sm text-muted">2025</span>
          </div>
          <p className="mt-2 text-sm text-accent">
            Undergraduate Thesis - Sonargaon University
          </p>

          <div className="mt-6 space-y-4 text-muted leading-relaxed text-justify">
            <p>
              For my undergraduate thesis, I built a multimodal emotion
              recognition system that combines facial expression analysis with
              speech prosody to classify five emotions: happy, sad, angry, fear,
              and neutral. The goal was to test whether two modalities could
              produce a more reliable system than either one alone, since faces
              fail under occlusion and speech fails under noise. The system was
              trained on FER 2013 and RAVDESS, plus a custom dataset of 5,500
              video clips I collected and labeled by hand because no existing
              dataset captured what I needed.
            </p>
            <p>
              The facial branch used a CNN trained on 48 by 48 grayscale crops,
              and the speech branch used an LSTM trained on MFCC features with
              first and second derivatives. Both models output class
              probabilities, and a late fusion layer combines them: when both
              agree, the label is accepted directly; when they disagree, the
              higher confidence prediction wins; and when one modality is
              unavailable, the system falls back to the other. The final system
              reached about 82 percent accuracy on speech and 68 percent on
              facial expressions, with the fusion layer improving reliability in
              cases where either single modality was weak.
            </p>
            <p>
              I am currently rebuilding the system with a more modern stack. The
              facial branch now uses MobileNetV2 as a pretrained backbone, the
              speech branch uses a Bidirectional LSTM, and face detection runs
              on MediaPipe instead of Haar cascades. The fusion layer applies
              weighted averaging with temporal smoothing over a short window,
              and the entire pipeline is modular, with separate scripts for
              preprocessing, training, evaluation, and real time inference.
              Results for the rebuilt models will be added once training is
              complete.
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
              <dd className="text-text">Defended (May, 2025)</dd>
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
