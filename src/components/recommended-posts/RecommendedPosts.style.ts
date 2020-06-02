import styled from 'styled-components';
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const RecommendedPostsRoot = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;

  &.next {
    justify-content: flex-end;
  }
`;

export const RecommendedPostsLink = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan('large')`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--borders);
  }

  &.previous {
    box-shadow: 1px 0 0 0 var(--borders);
  }

  &.next {
    box-shadow: -1px 0 0 0 var(--borders);
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
