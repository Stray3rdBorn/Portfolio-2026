// Reads one finished repo from GitHub and adds a hidden draft card to lib/data.ts.
// Runs inside the GitHub Action, started by the Run workflow button.

import { readFileSync, writeFileSync } from "node:fs";

const OWNER = process.env.GITHUB_OWNER || "Stray3rdBorn";
const REPO = (process.env.REPO_NAME || "").trim();
const TOKEN = process.env.GITHUB_TOKEN || "";
const API = process.env.GITHUB_API || "https://api.github.com";
const DATA_FILE = process.env.DATA_FILE || "lib/data.ts";
const MARKER = "// NEW-PROJECTS-GO-ABOVE";

if (!REPO) {
  console.error("REPO_NAME is empty.");
  process.exit(1);
}

// One helper for every GitHub request. Returns null when the file or page does not exist.
async function gh(path, raw = false) {
  const res = await fetch(`${API}${path}`, {
    headers: {
      Accept: raw
        ? "application/vnd.github.raw+json"
        : "application/vnd.github+json",
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (res.status === 404) return null;
  if (!res.ok)
    throw new Error(`GitHub request failed (${res.status}) for ${path}`);
  return raw ? res.text() : res.json();
}

// Dependency name found in package.json or requirements.txt, mapped to the label shown on the card.
const NODE_FRAMEWORKS = {
  next: "Next.js",
  react: "React",
  vue: "Vue",
  svelte: "Svelte",
  express: "Express",
  "socket.io": "Socket.io",
  mongoose: "MongoDB",
  tailwindcss: "Tailwind CSS",
  vite: "Vite",
  prisma: "Prisma",
  typescript: "TypeScript",
};
const PY_FRAMEWORKS = {
  flask: "Flask",
  django: "Django",
  fastapi: "FastAPI",
  torch: "PyTorch",
  tensorflow: "TensorFlow",
  "scikit-learn": "scikit-learn",
  pandas: "Pandas",
  numpy: "NumPy",
  streamlit: "Streamlit",
  transformers: "Transformers",
};

async function detectFrameworks() {
  const found = [];

  const pkg = await gh(`/repos/${OWNER}/${REPO}/contents/package.json`, true);
  if (pkg) {
    try {
      const json = JSON.parse(pkg);
      const deps = { ...json.dependencies, ...json.devDependencies };
      for (const [name, label] of Object.entries(NODE_FRAMEWORKS)) {
        if (deps[name]) found.push(label);
      }
    } catch {
      // A broken package.json is skipped, the other sources still work.
    }
  }

  const req = await gh(
    `/repos/${OWNER}/${REPO}/contents/requirements.txt`,
    true,
  );
  if (req) {
    const names = req
      .split("\n")
      .map((line) =>
        line
          .split(/[=<>~\[;#\s]/)[0]
          .trim()
          .toLowerCase(),
      )
      .filter(Boolean);
    for (const [name, label] of Object.entries(PY_FRAMEWORKS)) {
      if (names.includes(name)) found.push(label);
    }
  }

  if (await gh(`/repos/${OWNER}/${REPO}/contents/Dockerfile`))
    found.push("Docker");

  const workflows = await gh(
    `/repos/${OWNER}/${REPO}/contents/.github/workflows`,
  );
  if (Array.isArray(workflows) && workflows.length > 0)
    found.push("GitHub Actions");

  return found;
}

// Pulls the first real paragraph out of the README, skipping badges, images, headings and html.
function readmeIntro(readme) {
  if (!readme) return "";
  const blocks = readme.replace(/\r/g, "").split(/\n\s*\n/);
  for (const block of blocks) {
    const text = block
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/<[^>]+>/g, "")
      .replace(/[*_`>]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (text.length < 40) continue;
    if (/^(#|\||[-=]{3,}|```)/.test(block.trim())) continue;
    return text.length > 320 ? text.slice(0, 317).trimEnd() + "..." : text;
  }
  return "";
}

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toTitle(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

async function main() {
  const repo = await gh(`/repos/${OWNER}/${REPO}`);
  if (!repo)
    throw new Error(`Repo ${OWNER}/${REPO} was not found or is private.`);

  const slug = toSlug(repo.name);
  const source = readFileSync(DATA_FILE, "utf8");

  if (!source.includes(MARKER)) {
    throw new Error(`The line ${MARKER} is missing from ${DATA_FILE}.`);
  }
  if (source.includes(`slug: "${slug}"`)) {
    throw new Error(`A card with the slug "${slug}" already exists.`);
  }

  const languages = await gh(`/repos/${OWNER}/${REPO}/languages`);
  const topLanguages = Object.entries(languages || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);

  const topics = (repo.topics || []).map(toTitle);
  const frameworks = await detectFrameworks();
  const tags = [...new Set([...frameworks, ...topLanguages, ...topics])].slice(
    0,
    8,
  );

  const readme = await gh(`/repos/${OWNER}/${REPO}/readme`, true);
  const intro = readmeIntro(readme);

  const about = (repo.description || "").trim();
  const description = about || intro || "Add a short description.";
  const longParagraph =
    intro || about || "Add the full write up for this project.";
  const year = new Date(repo.created_at).getFullYear();

  const lines = [
    `  {`,
    `    slug: ${JSON.stringify(slug)},`,
    `    title: ${JSON.stringify(toTitle(repo.name))},`,
    `    description: ${JSON.stringify(description)},`,
    `    longDescription: ${JSON.stringify([longParagraph])},`,
    `    tags: ${JSON.stringify(tags)},`,
    `    githubUrl: ${JSON.stringify(repo.html_url)},`,
  ];
  if (repo.homepage) {
    lines.push(`    liveUrl: ${JSON.stringify(repo.homepage)},`);
    lines.push(`    liveLabel: "Live demo",`);
  }
  lines.push(`    year: ${year},`);
  lines.push(`    draft: true,`);
  lines.push(`  },`);

  const updated = source.replace(
    new RegExp(`^[ \\t]*${MARKER}`, "m"),
    `${lines.join("\n")}\n  ${MARKER}`,
  );
  writeFileSync(DATA_FILE, updated);

  console.log(`Added draft card "${slug}" with tags: ${tags.join(", ")}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
