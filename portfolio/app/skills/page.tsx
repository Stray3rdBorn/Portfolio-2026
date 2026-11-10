import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Skills",
};

const skillGroups = [
  {
    title: "Fundamentals",
    skills: [
      "DSA",
      "OOP",
      "System Design Basics",
      "OS",
      "DBMS",
      "Networks & Security",
      "Competitive Programming",
      "Secure Coding Practices",
      "OWASP TOP 10",
    ],
  },
  {
    title: "Languages",
    skills: [
      "Python",
      "Rust",
      "C/C++",
      "TypeScript",
      "JavaScript",
      "Lua",
      "Assembly",
    ],
  },

  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & Security",
    skills: [
      "Node.js (Express)",
      "FastAPI",
      "Django",
      "REST APIs",
      "JWT",
      "API-key auth",
      "Input Validation",
      "Password Hashing (PBKDF2, bcrypt)",
      "HTTPS/TLS",
      "HSTS",
      "CORS",
      "Content Security Policy",
      "CSRF Protection",
      "XSS Prevention",
      "SQL Injection Prevention",
    ],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
  },
  {
    title: "Data & Domain Libraries",
    skills: [
      "OpenCV (Vision)",
      "Librosa (Audio)",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Linux",
      "Postman",
      "Render",
      "Neon",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    title: "Game Dev",
    skills: ["Pygame", "Love2D"],
  },
];

export default function SkillsPage() {
  return (
    <Section className="pt-32">
      <h1 className="font-serif text-4xl md:text-5xl font-medium mb-16">
        Skills
      </h1>

      <div className="flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-b border-border pb-8 last:border-0 last:pb-0"
          >
            <h2 className="text-xl font-medium text-accent mb-5">
              {group.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-5 py-2 text-sm text-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
