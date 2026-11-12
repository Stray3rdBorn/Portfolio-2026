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
    title: "Elden Ring",
    category: "Gaming",
    description:
      "Soulsborne & Soulslike games are my jam. Elden Ring is my all time favorite. Dark Souls 3 comes close, but Elden Ring has a special place in my heart, and I hold both very dearly. I love the world building, difficulty, and quiet lore. Above all, I am a sucker for difficult games. Hollow Knight is another one of my picks in the indie category. Games can change your mindset just like books, movies, and songs. They can shape your world, teach you perspective, and give you knowledge of different worlds, countries, cultures, and traditions. The difference is that with games, you can interact with said countries and cultures yourself, which is a different level of immersion compared to books and movies, not to discredit them, though.",
  },
  {
    id: "2",
    title: "Sekiro: Shadows Die Twice",
    category: "Gaming",
    description:
      "Another one of my absolute favorites. There is something about sword games that I love, and the metal clashing is music to my ears. These games are also known for their immaculate scores. They taught me perseverance, emotional control, resilience through failure, risk and resource management, and deliberate problem solving, embodying the age old saying 'failure is data', quite fitting for my Computer Science field. Above all, they taught me patience, which is valuable in work, studies, friends, and relationships.",
  },
  {
    id: "3",
    // Placeholder, replace title and description
    title: "Crime and Punishment by Fyodor Dostoevsky (1866)",
    category: "Books",
    description:
      "Dostoevsky throws you inside the head of a broke student who thinks being smart puts him above basic morality. Spoiler: it doesn't. Watching Raskolnikov crack under his own logic is a blunt reminder that raw intellect without a conscience just eats you alive, and real redemption hurts way more than pride ever will. Sometimes the heaviest prison is just your own mind. With all that being said, though, most teenagers go through this smart-rebellious phase, we call them edgelords in this century. It's not a bad phase, it teaches us a lot of things, it is only bad when people build their indentities around it, instead of learning the lessions.",
    quote:
      "Pain and suffering are always inevitable for a broad consciousness and a deep heart. Truly great men, it seems to me, must feel great sorrow on earth.",
  },
  {
    id: "4",
    title: "1984 by George Orwell (1949)",
    category: "Books",
    description:
      "Orwell paints a bleak world where a totalitarian regime doesn't just police your actions; it rewrites history and shrinks language until rebellious thoughts become impossible to form. Watching Winston get broken from the inside out is a chilling reminder that true control isn't about chains or violence, it's about making people willingly surrender their own minds to comfortable lies. It starts from the moment a child is born. Some break free of their own accord, some can never break free, and some willingly accept the indoctrination because going against it carries a cost too high.",
    quote:
      "Power is not a means; it is an end. One does not establish a dictatorship in order to safeguard a revolution; one makes the revolution in order to establish the dictatorship.",
  },
  {
    id: "5",
    // Placeholder, replace title and description
    title: "The Trial by Franz Kafka (1925)",
    category: "Books",
    description:
      "Kafka drops an ordinary guy into a faceless legal nightmare where he's arrested for a crime nobody will ever explain to him. No villain, just endless bureaucracy grinding him down. It’s a sharp look at how systems trap people using invisible rules and their own guilt, and a quiet warning never to waste your life begging for approval from broken machines. The Trial mirrors the corporate-cog-in-the-machine life people lead in this century. To go against the flow is to shoot yourself in the foot for most people, and of course, there are exceptions. I suppose I am not one of them.",
    quote:
      "The right perception of any matter and a misunderstanding of the same matter do not wholly exclude each other.",
  },
  {
    id: "6",
    // Placeholder, replace title and description
    title: "No Longer Human by Osamu Dazai (1948)",
    category: "Books",
    description:
      "Dazai strips away all polite social lies to show what it feels like to be fundamentally alienated from normal human society. Watching Yozo hide behind jokes just to survive is brutal, honest, and deeply uncomfortable. It’s a raw reminder that wearing a fake mask just to fit in slowly hollows you out, and pretending to belong eventually costs you yourself. But that's easier said than done. Almost everyone, at some point in their life, has had to fake themselves to fit into a social circle out of fear of being alone, to save a relationship, to not dishonor their family, or even for jobs. In the end, even with all the fakeness, if you have a grip on yourself, then that's enough.",
    quote:
      "Society? Isn't 'society' just the individual?. Cowards fear even happiness; they can get hurt even by cotton wool.",
  },
  {
    id: "7",
    title:
      "Beyond Good and Evil: Prelude to a Philosophy of the Future by Friedrich Nietzsche (1886)",
    category: "Philosophy",
    description:
      "Nietzsche takes a sledgehammer to inherited morality, religion, and herd mentality, exposing how rigid labels of good and evil just mask people’s hidden motives. No sugarcoating, no comforting dogma. It’s a sharp reminder to tear down hand-me-down beliefs, think without training wheels, and forge your own values instead of swallowing whatever safe, pre-packaged rules the crowd expects you to follow. If you read around, you probably caught a reference to one of his greatest quotes.",
    quote:
      "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you. (Aphorism 146)",
  },
  {
    id: "8",
    title: "The Myth of Sisyphus by Albert Camus (1942)",
    category: "Philosophy",
    description:
      "Camus stares straight at an indifferent universe and asks the only question that actually matters: why keep going when life has no built in meaning? Instead of selling comforting lies or self pity, he argues for pure defiance. You accept the absurdity, drop the illusions, and push the boulder anyway just to prove the universe does not own you. This way of thinking is very beneficial to everyday life. I prefer steering the wheel of my own life rather than wallowing in misery and being pessimistic about things larger than life. I always say, learn as much as you can, but never let a single thing narrow your perspective. Yes, you can quote me on that.",
    quote:
      "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
  },
  {
    id: "9",
    title: "Breaking Bad (2008)",
    category: "TV Shows",
    description:
      "Walter White is Raskolnikov with a chemistry degree. Need starts the story, but ego finishes it, and that is what stuck with me: most people fall because of pride, not circumstance. I fall because of both.",
  },
  {
    id: "10",
    title: "Dark (2017)",
    category: "TV Shows",
    description:
      "Time travel done right, and cold enough to make your head hurt, not my head though. I still remember being able to predict the infinity sign loop of different worlds intersecting. Not really a fan of deterministic philosophy but I get the idea.",
  },
  {
    id: "14",
    title: "Monster: The Jeffrey Dahmer Story (2022)",
    category: "TV Shows",
    description:
      "If you haven't recognized the pattern yet, let me spell it out for you: I have knowledge about every famous & not so famous serial killer. I have always had a weird fascination with learning about these criminals. So I don't repeat their mistakes.",
  },
  {
    id: "15",
    title: "Mouse (2021)",
    category: "TV Shows",
    description:
      "Korean thrillers just always hit that spot, don't they? Psychopaths are born & sociopaths are made. The conclusion isn't comfortable and it shouldn't be.",
  },
  {
    id: "11",
    title: "Anime Favorites",
    category: "Anime",
    description:
      "What? Anime is the trend now but I'm an old fan. And I always consider it a better medium than most countries' media.",
    list: [
      {
        title: "Monster (2004)",
        description:
          "Most definitely one of the greatest written villains in all of fiction, by Naoki Urasawa. This is one of those masterpieces that you watch for the villain, and of course, the narrative and Tenma's moral dilemma (meh).",
      },
      {
        title: "Neon Genesis Evangelion (1995)",
        description:
          "Giant robots on the outside, a therapy session on the inside. It made me realize loneliness and the fear of getting close can live in the same person, which is uncomfortable and true.",
      },
      {
        title: "Code Geass (2006)",
        description:
          "Lelouch plays war like a chess match and I was hooked. It left me arguing with myself about whether a good end can excuse rotten means, and my answer is yes. All hail Emperor Lelouch vi Britannia.",
      },
      {
        title: "Orb: On the Movements of the Earth (2024)",
        description:
          "Every character picks truth over comfort, even when it costs them everything. It made me appreciate how much of what we know was paid for by people who refused to stay quiet.",
      },
      {
        title: "Death Note (2006)",
        description:
          "Light is right, although his ego became his own demise, admittedly. However, Light is superior to both L and Near. You can debate me on that if you've got the guts.",
      },
      {
        title: "Legend of the Galactic Heroes (1988)",
        description:
          "Easily one of the smartest things I have watched about politics. Nobody is purely good here, and it makes you sit with the fact that both freedom and strong rule have rot inside.",
      },
      {
        title: "Vinland Saga (2019)",
        description:
          "Thorfinn's arc hit harder than any revenge story should. Real strength is putting the sword down, and the 'you have no enemies' line was one of the most self reflective moments of my life.",
      },
      {
        title: "Steins;Gate (2011)",
        description:
          "Best show about time travel from a technical standpoint. You can't have your cake and eat it too. Doesn't make sense, does it? If it's my cake, you're damn right I can eat it too.",
      },
      {
        title: "Hunter x Hunter (2011)",
        description:
          "The show that never needed to be edgy to be dark. I consider this one the great grandfather of how a shounen anime should be: it has world building, mystery, thrill, politics, and hype, everything.",
      },
      {
        title: "Fullmetal Alchemist: Brotherhood (2009)",
        description:
          "I always believed in a saying that you must choose the path that seems the most difficult. And it ties into how you must sacrifice something of equal value to what you desire.",
      },
    ],
  },
  // Manga
  {
    id: "13",
    title: "Manga Notables",
    category: "Manga",
    description:
      "Ten manga for anyone who still thinks comics are only for kids. Slower than watching, and a lot of them hit harder than any adaptation could.",
    list: [
      {
        title: "Vagabond (1998)",
        description:
          "Inoue's art is unreal, and watching Musashi chase being the strongest while slowly realizing it was never about the sword is something else. Still unfinished, and I am still angry about it.",
      },
      {
        title: "Berserk (1989)",
        description:
          "The blueprint for everything I love about dark fantasy, Dark Souls included. Guts is basically Sisyphus with a sword the size of a door, and I mean that as the highest compliment. RIP Miura.",
      },
      {
        title: "Kingdom (2006)",
        description:
          "Pure hype with actual brains behind it. A slave kid and a young king chasing the same dream of ending war, and the battles are planned so well you end up studying them.",
      },
      {
        title: "20th Century Boys (1999)",
        description:
          "Urasawa again, because the man does not miss. A decades long mystery where childhood nostalgia turns into a doomsday cult, and the answer to who Friend is hurts more than it surprises.",
      },
      {
        title: "Akumetsu (2002)",
        description:
          "Masked vigilantes hunting corrupt elites in a Japan collapsing under greed. Extremely violent and openly political, and it is right and satisfying in equal measure.",
      },
      {
        title: "Tokyo Ghoul (2011)",
        description:
          "Yes, the edgelord gateway, and I am not embarrassed. Kaneki's spiral is still one of the best character breakdowns in manga, and the idea of belonging to neither side is genius. It speaks to me.",
      },
      {
        title: "Attack on Titan (2009)",
        description:
          "Every theory I had was wrong, which is the best compliment a story can get. However, in this case, my theory for the ending was far superior. A truly disappointing ending to what is otherwise a masterpiece by Isayama. If only he had the guts to do what had to be done.",
      },
      {
        title: "Ravages of Time (2006)",
        description:
          "Three Kingdoms retold as a war of minds, where the real battles happen in the heads of strategists before a single sword is drawn. I suppose I have a hidden thing for stories told through multiple perspectives. It is an absolute genius way to tell a story.",
      },
      {
        title: "Usogui (2006)",
        description:
          "Gambling mind games where every game is a trap inside a trap. Baku is easily one of the most unhinged protagonists I know, and I love him for it. I play eFootball, which is also a gambling game. Too bad I'm not Baku.",
      },
      {
        title: "Homunculus (2003)",
        description:
          "A man lets a stranger drill a hole in his skull to see what people are really like, and the manga makes you wonder what yours would look like. Quite a unique way of telling a psychological character driven story. But I wouldn't want a hole in my head. Not good for jobs.",
      },
    ],
  },
  {
    id: "12",
    title: "Movie Notables",
    category: "Movies",
    description:
      "Ten films from the uncomfortable side of cinema. None of them make you feel better, and every one of them left something in my head.",
    list: [
      {
        title: "Oldboy (2003)",
        description:
          "Revenge movies usually feel good. This one makes you feel dirty, and I respect it for that. I love it though. Sometimes you gotta be the karma itself.",
      },
      {
        title: "Parasite (2019)",
        description:
          "A comedy that stops being funny right when you stop laughing. It is the sharpest film I have seen about class: the poor always end up fighting each other instead of the system.",
      },
      {
        title: "Se7en (1995)",
        description:
          "I still think about that ending. Fincher refused to hand the audience a win, which proved that a film can be great without making anyone feel better. Sometimes evil wins. That's just the reality.",
      },
      {
        title: "Taxi Driver (1976)",
        description:
          "Travis is not a monster, just a lonely guy with a plan. Isolation can turn a mind against itself, a theme I keep finding in everything I love. Must be why I despise isolation myself.",
      },
      {
        title: "Incendies (2010)",
        description:
          "Quietly the most devastating film I have watched. The cycle of hatred gets passed down like an inheritance, and someone has to be brave enough to stop passing it on, but nobody who suffered wants to be that someone.",
      },
      {
        title: "Zodiac (2007)",
        description:
          "No satisfying ending, and that is the point. It taught me that obsession will happily eat your life if you let it chase answers that may never exist.",
      },
      {
        title: "Cure (1997)",
        description:
          "Not loud horror. It just sits in your head. Violence exists even in the most innocent, decent human being. The sooner people realize this, the better it is to be self aware of one's every decision, so it doesn't start a chain reaction of misfortune.",
      },
      {
        title: "Prisoners (2013)",
        description:
          "A good man doing awful things for a good reason. Ah, the moral dilemma once again, such an ironic theme for creativity. You can't help but enjoy every iteration.",
      },
      {
        title: "Monster (2023)",
        description:
          "Same story told three times, and each version convinces you that you know who the monster is. You are wrong every time. Same question as the anime, and I am not immune to judging people off half the story.",
      },
      {
        title: "Audition (1999)",
        description:
          "Watch it blind. An hour of quiet romance lulls you, then it grabs you by the throat, and I admire how patient it is about it. And patience is one of my things, though not always.",
      },
    ],
  },
];
