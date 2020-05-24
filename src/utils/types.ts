export interface SiteMetadata {
  title: string;
  author: string;
  position: string;
  description: string;
}

export interface Frontmatter {
  title: string;
  description: string;
  category: string;
  background: string;
  date: string;
}

export interface RecommendedPost {
  frontmatter: { title: string };
  fields: { slug: string };
}
