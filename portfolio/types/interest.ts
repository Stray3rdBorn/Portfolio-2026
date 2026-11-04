export type InterestCategory =
  | "Gaming"
  | "Books"
  | "Anime"
  | "Manga"
  | "Philosophy"
  | "History"
  | "Astronomy"
  | "Politics"
  | "Other";

export interface Interest {
  id: string;
  title: string;
  category: InterestCategory;
  description: string;
  image?: string;
}
