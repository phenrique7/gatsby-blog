import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/SEO';
import RecommendedPosts from '../../components/recommended-posts/RecommendedPosts';
import { Frontmatter, RecommendedPost } from '../../utils/types';
import * as S from './BlogPost.style';
import Comments from '../../components/comments/Comments';

interface MarkdownRemark {
  fields: { slug: string };
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
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
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
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`;
