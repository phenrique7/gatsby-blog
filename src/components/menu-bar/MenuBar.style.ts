import styled from 'styled-components';
import { Link } from 'gatsby';

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
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
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
