import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/seo/SEO';
import Post from '../../components/post/Post';
import Layout from '../../components/layout/Layout';
import { Frontmatter } from '../../utils/types';
import Pagination from '../../components/pagination/Pagination';

interface Node {
  fields: { slug: string };
  frontmatter: Frontmatter;
  timeToRead: number;
}

interface AllMarkdownRemark {
  edges: { node: Node }[];
}

interface BlogPostProps {
  data: { allMarkdownRemark: AllMarkdownRemark };
  pageContext: { currentPage: number; pages: number };
}

export default function BlogList({ data, pageContext }: BlogPostProps) {
  const postList = data.allMarkdownRemark.edges;
  const { currentPage, pages } = pageContext;
  const firstPage = currentPage === 1;
  const lastPage = currentPage === pages;
  const prevPage =
    currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

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
      <Pagination
        first={firstPage}
        last={lastPage}
        currentPage={currentPage}
        pages={pages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
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
