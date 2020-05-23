import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './Avatar.style';

export default function Avatar() {
  const { avatar } = useStaticQuery(graphql`
    query Avatar {
      avatar: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <S.AvatarRoot fixed={avatar.childImageSharp.fixed} alt="Avatar" />
  );
}
