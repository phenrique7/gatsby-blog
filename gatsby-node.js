/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    `src/templates/blog-post/BlogPost.tsx`,
  );
  const blogListTemplate = path.resolve(
    `src/templates/blog-list/BlogList.tsx`,
  );

  return graphql(
    `
      query loadPagesQuery {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
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
                date(
                  locale: "pt-br"
                  formatString: "DD [de] MMMM [de] YYYY"
                )
              }
              timeToRead
            }
            previous {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
            next {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.fields.slug,
          previousPost: edge.next,
          nextPost: edge.previous,
        },
      });
    });

    const postsPerPage = 6;
    const pages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: pages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/' : `/page/${index + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          pages,
          currentPage: index + 1,
        },
      });
    });
  });
};
