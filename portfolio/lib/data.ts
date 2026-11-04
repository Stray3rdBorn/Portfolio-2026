import { Project } from "@/types/project";
import { Interest } from "@/types/interest";

export const projects: Project[] = [
  {
    slug: "elegant-dashboard",
    title: "Elegant Dashboard",
    description: "A clean analytics dashboard built with Next.js and Tailwind.",
    longDescription:
      "This project focused on clarity and performance. I designed a minimal interface that still feels powerful. The biggest challenge was balancing information density with whitespace.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/project-1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    year: 2025,
  },
  {
    slug: "portfolio-v2",
    title: "Personal Portfolio",
    description: "The very site you are looking at right now.",
    longDescription:
      "Built with a strong focus on performance, accessibility, and restrained motion. Every animation was carefully chosen to feel elegant rather than flashy.",
    tags: ["Next.js", "Framer Motion", "Design"],
    image: "/images/project-2.jpg",
    year: 2026,
  },
];

export const interests: Interest[] = [
  {
    id: "1",
    title: "Elden Ring & FromSoftware",
    category: "Gaming",
    description:
      "I love the world-building, difficulty, and quiet storytelling.",
  },
  {
    id: "2",
    title: "Meditations – Marcus Aurelius",
    category: "Philosophy",
    description: "A book I return to whenever I need clarity and calm.",
  },
  {
    id: "3",
    title: "Cosmos & Space Documentaries",
    category: "Astronomy",
    description: "The scale of the universe never stops fascinating me.",
  },
  {
    id: "4",
    title: "Attack on Titan",
    category: "Anime",
    description:
      "Masterful pacing, moral complexity, and unforgettable payoff.",
  },
  {
    id: "5",
    title: "Political Philosophy & History",
    category: "Politics",
    description: "Understanding how societies organize themselves over time.",
  },
  {
    id: "6",
    title: "One Piece & Classic Manga",
    category: "Manga",
    description: "Long-form storytelling done at the highest level.",
  },
];
