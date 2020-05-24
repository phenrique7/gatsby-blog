const PostsQuery = `{
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          background
          description
          category
          timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        }
        timeToRead
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

function flatten(arr) {
  return arr.map(({ node: { frontmatter, ...rest } }) => {
    const date_timestamp = parseInt(
      (new Date(frontmatter.timestamp).getTime() / 1000).toFixed(0),
    );

    return {
      ...frontmatter,
      date_timestamp,
      ...rest,
    };
  });
}

const queries = [
  {
    query: PostsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'Posts',
    settings: {
      attributesToSnippet: ['excerpt:20'],
    },
  },
];

module.exports = queries;
