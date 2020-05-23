import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import Post from '../components/post/Post';
import { Frontmatter } from '../utils/types';

interface Node {
  fields: { slug: string };
  frontmatter: Frontmatter;
  timeToRead: string;
}

interface AllMarkdownRemark {
  edges: { node: Node }[];
}

export default function Index() {
  const {
    allMarkdownRemark,
  }: { allMarkdownRemark: AllMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
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
  `);

  const postList = allMarkdownRemark.edges;

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
