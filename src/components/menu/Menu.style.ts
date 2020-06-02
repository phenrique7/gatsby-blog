import styled from 'styled-components';
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const MenuNav = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
  }
`;

export const MenuLink = styled(AniLink)`
  color: var(--texts);
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;
