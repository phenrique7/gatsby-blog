import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/SEO';
import { Frontmatter } from '../../utils/types';
import * as S from './BlogPost.style';

interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
  timeToRead: number;
}

interface BlogPostProps {
  data: { markdownRemark: MarkdownRemark };
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark;

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
