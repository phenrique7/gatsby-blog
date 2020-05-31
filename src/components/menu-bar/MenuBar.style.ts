import styled from 'styled-components';
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// @ts-ignore
import media from 'styled-media-query';

export const MenuBarRoot = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  height: 100vh;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

  ${media.lessThan('large')`
    bottom: 0;
    width: 100%;
    flex-direction: row;
    height: auto;
    padding: 0;
    box-shadow: 0 -1px 0 0 var(--borders);
`}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(AniLink)`
  display: block;
`;

export const MenuBarItem = styled.span`
  display: block;
  color: var(--texts);
  cursor: pointer;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  position: relative;

  ${media.lessThan('large')`
    height: 3rem;
    width: 3rem;
    padding: 0.75rem;

    &.display {
      display: none;
    }
  `}

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`;
