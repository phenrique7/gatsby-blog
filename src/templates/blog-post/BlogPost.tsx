import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/SEO';
import RecommendedPosts from '../../components/recommended-posts/RecommendedPosts';
import { Frontmatter, RecommendedPost } from '../../utils/types';
import * as S from './BlogPost.style';

interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
  timeToRead: number;
}

interface BlogPostProps {
  data: { markdownRemark: MarkdownRemark };
  pageContext: {
    nextPost: RecommendedPost | null;
    previousPost: RecommendedPost | null;
  };
}

export default function BlogPost({ data, pageContext }: BlogPostProps) {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead}
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>
          {post.frontmatter.description}
        </S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;
