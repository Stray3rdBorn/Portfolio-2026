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
    year: 2026,
  },
  {
    slug: "emotion-analytics",
    title: "Real-Time Multimodal Emotion Analytics",
    description:
      "An undergraduate thesis project fusing facial and speech emotion recognition using deep learning.",
    longDescription: [
      "For my undergraduate thesis, I built a multimodal emotion recognition system that combines facial expression analysis with speech prosody to classify five emotions: happy, sad, angry, fear, and neutral. The goal was to test whether two modalities could produce a more reliable system than either one alone, since faces fail under occlusion and speech fails under noise. The system was trained on FER 2013 and RAVDESS, plus a custom dataset of 5,500 video clips I collected and labeled by hand because no existing dataset captured what I needed.",
      "The facial branch used a CNN trained on 48 by 48 grayscale crops, and the speech branch used an LSTM trained on MFCC features with first and second derivatives. Both models output class probabilities, and a late fusion layer combines them: when both agree, the label is accepted directly; when they disagree, the higher confidence prediction wins; and when one modality is unavailable, the system falls back to the other. The final system reached about 82 percent accuracy on speech and 68 percent on facial expressions, with the fusion layer improving reliability in cases where either single modality was weak.",
      "I am currently rebuilding the system with a more modern stack. The facial branch now uses MobileNetV2 as a pretrained backbone, the speech branch uses a Bidirectional LSTM, and face detection runs on MediaPipe instead of Haar cascades. The fusion layer applies weighted averaging with temporal smoothing over a short window, and the entire pipeline is modular, with separate scripts for preprocessing, training, evaluation, and real time inference. Results for the rebuilt models will be added once training is complete.",
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
