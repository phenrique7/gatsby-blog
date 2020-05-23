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
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

  return graphql(
    `
      query loadPagesQuery {
        allMarkdownRemark {
          edges {
            node {
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

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });
  });
};
