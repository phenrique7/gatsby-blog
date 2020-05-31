import styled from 'styled-components';
// @ts-ignore
import media from 'styled-media-query';

export const LayoutRoot = styled.div`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding-right: 3.75rem;
  padding-left: 20rem;
  width: 100%;

  body#grid {
    grid-template-areas: 'posts' 'pagination';
  }

  ${media.lessThan('large')`
    padding-left: 0;
    padding-right: 0;
  `}
`;
