export type InterestCategory =
  | "Gaming"
  | "Books"
  | "Anime"
  | "Manga"
  | "Philosophy"
  | "History"
  | "Astronomy"
  | "Politics"
  | "TV Shows"
  | "Movies";

export interface Interest {
  id: string;
  title: string;
  category: InterestCategory;
  description: string;
  quote?: string;
  image?: string;
}
