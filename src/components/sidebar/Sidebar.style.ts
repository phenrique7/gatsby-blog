import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarRoot = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 0.75rem 1.5rem;
    width: 100%;
    box-shadow: 0 1px 0 0 var(--borders);
  `}
`;
