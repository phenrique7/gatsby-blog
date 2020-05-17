import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Avatar from '../avatar/Avatar';
import * as S from './Profile.style';

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
    <S.ProfileRoot>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {siteMetadata.title}
          <S.ProfilePosition>{siteMetadata.position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>
        {siteMetadata.description}
      </S.ProfileDescription>
    </S.ProfileRoot>
  );
}
