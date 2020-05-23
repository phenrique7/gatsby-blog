import * as React from 'react';
import { graphql } from 'gatsby';
import { Frontmatter } from '../utils/types';

interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
}

interface BlogPostProps {
  data: { markdownRemark: MarkdownRemark };
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark;

  return (
    <>
      <h1>Title: {post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
