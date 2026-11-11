import { Project } from "@/types/project";
import { Interest } from "@/types/interest";

export const projects: Project[] = [
  {
    slug: "decadome",
    title: "DecaDome",
    description:
      "A 2D arena shooter with a live, deployable backend, Redis leaderboard, and downloadable client.",
    longDescription: [
      "DecaDome is a top down arena shooter built in Python with Pygame, where you survive ten waves of enemies and then see where your score ranks against everyone else. The client is packaged into a downloadable Windows executable, but the real work sits behind it: a full backend with accounts, a global leaderboard, and a deployment pipeline that builds and publishes the game automatically.",
      "FastAPI serves the score API and Django handles registration, login, and the admin panel. Both run as a single service, so one deploy covers everything. PostgreSQL stores every user and score, while Redis keeps a fast sorted ranking that rebuilds itself from the database whenever it starts empty. Login is protected with salted password hashes and signed tokens that expire after a day, and every value sent to the API is checked on the server before it touches the database.",
      "The part I am most proud of is the engineering around the game rather than the game itself. There are 142 tests split between the client and the server, a CI pipeline that runs lint, tests, and a Docker smoke test on every push, and a release workflow that builds the executable on a Windows runner and publishes it with a checksum. The free hosting tier sleeps after fifteen minutes, so the client and the landing page both wait patiently for the server to wake up instead of failing.",
    ],
    tags: [
      "Python",
      "Pygame",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Render",
      "Cloudflare Pages",
      "Neon",
    ],
    githubUrl: "https://github.com/Stray3rdBorn/2D-Game-Project-in-Pygame",
    liveUrl: "https://decadome.pages.dev/",
    liveLabel: "Download & Play",
    images: [
      "/projects/decadome-gameplay.png",
      "/projects/decadome-leaderboard.png",
    ],
    year: 2026,
  },
  {
    slug: "campfire",
    title: "Campfire",
    description:
      "A real-time chat application with JWT auth, secure WebSockets, and room-based messaging.",
    longDescription: [
      "Campfire is a full stack chat application built around real time communication. Users can sign up, create rooms or join existing ones by ID, and exchange messages instantly. Every message is persisted to MongoDB, so opening a room loads the full history instead of starting from a blank slate.",
      "Most of the work went into making the real time layer safe. The Socket.io connection is authenticated with a JWT during the handshake, not after it, so an unauthenticated client never gets a live socket. Room membership is checked on the server before any message history is sent, and the sender identity is read from the verified token rather than the client payload, so a user cannot send a message as somebody else. Messages are validated on the server for type, length, and empty content, and deleting a room also deletes its messages.",
      "The app is built with React and Tailwind on the frontend and Node, Express, and Socket.io on the backend, with MongoDB through Mongoose for storage. Passwords are hashed with bcrypt and sessions are carried by JWT. Both the client and server have Dockerfiles and a compose file for local runs, GitHub Actions runs CI on every push, and the live demo is deployed on Render with Express serving the built React app.",
    ],
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
    liveLabel: " View Live site",
    images: ["/projects/campfire-rooms.png", "/projects/campfire-chat.png"],
    year: 2026,
  },
  {
    slug: "lua-project",
    title: "Lua Project",
    description: "A minimal Endless Jumper game built with Lua and Love2D.",
    longDescription: [
      "Endless Jumper Sandbox is a small side-scrolling game where the player jumps over an enemy square that speeds up over time. It was built in pure Lua with LÖVE2D, with no external libraries. Everything is written against the raw LÖVE API.",
      "The project is intentionally kept small and readable so it can be used as a learning reference. It implements a clean three-state game system (startscreen → play → gameover), simple gravity and jump physics, and AABB collision detection for the player and enemy hitboxes.",
      "The game also includes an instant restart loop that resets player position, velocity, and enemy speed without reloading the scene. The whole thing lives in a single main.lua file, which made it a good exercise in writing code that is easy to read rather than easy to hide behind.",
    ],
    tags: ["Lua", "Love2D"],
    githubUrl: "https://github.com/Stray3rdBorn/Love2d-Endless-Runner-Sandbox",
    images: ["/projects/lua-gameplay.png", "/projects/lua-gameover.png"],
    year: 2026,
  },
  {
    slug: "portfolio-2026",
    title: "My Portfolio",
    description:
      "A fully custom portfolio site built with Next.js, TypeScript and Tailwind, a dynamic dark mode system, deployed on Vercel.",
    longDescription: [
      "This is the site you are currently on. I built it from scratch using Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. I wanted a personal space that felt like a hybrid of a resume, a project showcase, and a research archive, without relying on a generic template.",
      "The design system is built on CSS variables. I built a custom light and dark theme where every color (background, surface, border, text, accent) is a single variable that swaps when the theme changes. The light mode uses an off white, chocolate and red palette, while the dark mode uses a dark gray and turquoise palette. The rest of the styling is handled through Tailwind utility classes, and the theme toggle uses next-themes to persist the choice.",
      "The site is deployed on Vercel and updates automatically on every push to the main branch. It includes dynamic routing for project details, a PDF viewer for my CV and thesis, and a fully functional contact form powered by Web3Forms.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Stray3rdBorn/Portfolio-2026",
    liveUrl: "https://wahidihan.vercel.app",
    liveLabel: "View Live Site",
    images: ["/projects/portfolio-light.png", "/projects/portfolio-dark.png"],
    year: 2026,
  },
  {
    slug: "emotion-analytics",
    title: "Real-Time Multimodal Emotion Analytics",
    description:
      "An undergraduate thesis project fusing facial and speech emotion recognition using deep learning.",
    longDescription: [
      "My undergraduate thesis explored whether combining facial expressions and speech prosody could create a more reliable emotion recognition system than either modality alone. I trained a CNN on grayscale face crops and an LSTM on audio features, then fused their predictions using confidence based late fusion. The system hit roughly 82% accuracy on speech and 68% on facial expressions, supported by a custom dataset of 5,500 video clips I collected by hand.",
      "The full breakdown of the architecture, the datasets, and the modernized rebuild is on the Research page.",
    ],
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
