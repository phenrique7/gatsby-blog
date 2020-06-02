import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Avatar from '../avatar/Avatar';
import * as S from './Profile.style';
import { getThemeColor } from '../../utils/theme';

export default function Profile() {
  const {
    site: { siteMetadata },
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
      <S.ProfileLink
        to="/"
        direction="left"
        duration={0.6}
        bg={getThemeColor()}
        cover
      >
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
