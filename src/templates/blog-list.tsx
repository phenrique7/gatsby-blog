import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo/SEO';
import Post from '../components/post/Post';
import Layout from '../components/layout/Layout';
import { Frontmatter } from '../utils/types';

interface Node {
  fields: { slug: string };
  frontmatter: Frontmatter;
  timeToRead: string;
}

interface AllMarkdownRemark {
  edges: { node: Node }[];
}

interface BlogPostProps {
  data: { allMarkdownRemark: AllMarkdownRemark };
}

export default function BlogList({ data }: BlogPostProps) {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            fields: { slug },
            frontmatter: {
              title,
              description,
              date,
              category,
              background,
            },
            timeToRead,
          },
        }) => (
          <Post
            key={title}
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
          />
        ),
      )}
    </Layout>
  );
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            category
            background
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          }
          timeToRead
        }
      }
    }
  }
`;
