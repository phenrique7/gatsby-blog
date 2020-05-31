import * as React from 'react';
// @ts-ignore
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './Avatar.style';

export default function Avatar() {
  const { avatar } = useStaticQuery(graphql`
    query Avatar {
      avatar: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <S.AvatarRoot fluid={avatar.childImageSharp.fluid} alt="Avatar" />
  );
}
