import styled from 'styled-components';
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// @ts-ignore
import media from 'styled-media-query';

export const ProfileRoot = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  transition: color 0.5s;

  ${media.lessThan('large')`
    display: flex;
    align-items: center;
  `}

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5rem;

  ${media.lessThan('large')`
    font-size: 0.8rem;
    text-align: left;
    line-height: 1.125rem;
  `}
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan('large')`
    display: none;
  `}
`;
