import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Profile() {
  const {
    site: {
      /** @type {SiteMetadata} */
      siteMetadata,
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `,
  );

  return (
    <div className="Profile-wrapper">
      <h1>{siteMetadata.title}</h1>
      <h2>{siteMetadata.position}</h2>
      <p>{siteMetadata.description}</p>
    </div>
  );
}
