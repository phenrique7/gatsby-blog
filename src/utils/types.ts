export type Theme = 'dark' | 'light';
export type Display = 'list' | 'grid';

export interface SiteMetadata {
  title: string;
  author: string;
  position: string;
  description: string;
  siteUrl: string;
}

export interface Frontmatter {
  title: string;
  description: string;
  category: string;
  background: string;
  date: string;
  image: string;
}

export interface RecommendedPost {
  frontmatter: { title: string };
  fields: { slug: string };
}
