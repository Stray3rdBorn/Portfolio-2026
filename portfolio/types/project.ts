export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string[]; // Changed to array for multiple paragraphs
  tags: string[];
  images?: string[]; // Added ? because not all projects have images
  liveLabel?: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}
