import { Project } from "@/types/project";
import { Interest } from "@/types/interest";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}

export const projects: Project[] = [
  {
    slug: "decadome",
    title: "DecaDome",
    description:
      "A 2D arena shooter with a live, deployable backend, Redis leaderboard, and downloadable client.",
    longDescription:
      "DecaDome is a top-down arena survival shooter where you survive 10 waves of enemies. The game client is built with Pygame and packaged into a downloadable Windows executable using PyInstaller. The real challenge was the backend: a FastAPI score API alongside a Django application for accounts and admin, with Redis keeping a fast sorted set of scores and PostgreSQL as the fallback. Django is mounted inside FastAPI so the whole system runs as a single deployment. Deployed on Render, Neon, and Cloudflare Pages, tested with pytest, and built with GitHub Actions.",
    tags: [
      "Python",
      "Pygame",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/Stray3rdBorn/2D-Game-Project-in-Pygame",
    liveUrl:
      "https://github.com/Stray3rdBorn/2D-Game-Project-in-Pygame/releases/latest",
    year: 2026,
  },
  {
    slug: "campfire",
    title: "Campfire",
    description:
      "A real-time chat application with JWT auth, secure WebSockets, and room-based messaging.",
    longDescription:
      "Campfire is a full-stack messaging app built for real-time communication. Users create rooms, join by ID, and exchange messages instantly, with all history persisted to MongoDB. Security was the focus: JWT authentication, bcrypt password hashing, Socket.io handshakes authenticated with the JWT, server-side room membership checks before any history is sent, and sender identity pulled from the verified token rather than the client payload. Built with React and Tailwind on the frontend, Node.js and Express on the backend, dockerized, deployed on Render, and tested through GitHub Actions.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/Stray3rdBorn/messaging-app",
    liveUrl: "https://campfire-dcsw.onrender.com",
    year: 2026,
  },
  {
    slug: "lua-project",
    title: "Lua Project",
    description: "A game project built with Lua and Love2D.",
    longDescription:
      "A project built with Lua and Love2D. Details to be filled in.",
    tags: ["Lua", "Love2D"],
    year: 2026,
  },
  {
    slug: "emotion-analytics",
    title: "Multimodal Emotion Analytics",
    description:
      "An undergraduate thesis project fusing facial and speech emotion recognition using deep learning.",
    longDescription:
      "My undergraduate thesis. The goal was to see if combining facial expressions and speech prosody could create a more reliable emotion recognition system than either modality alone. A CNN was trained on 48x48 grayscale face crops and an LSTM on MFCC audio features, combined with confidence-based late fusion: agreement accepts the label, disagreement picks the higher-confidence model, and a missing modality falls back to the other. The system hit roughly 82% accuracy on speech and 68% on facial expressions, supported by a custom dataset of 5,500 manually curated video clips. Currently being rebuilt with MobileNetV2, BiLSTM, and MediaPipe.",
    tags: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Librosa",
      "CNN",
      "LSTM",
      "Late Fusion",
    ],
    githubUrl:
      "https://github.com/Stray3rdBorn/Real-Time-Multimodal-Emotion-Analytics",
    year: 2025,
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
