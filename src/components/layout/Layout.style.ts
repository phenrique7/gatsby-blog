import styled from 'styled-components';

export const LayoutRoot = styled.div`
  display: flex;
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
`;
