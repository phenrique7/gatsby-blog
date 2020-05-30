import styled from 'styled-components';
import { Link } from 'gatsby';

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

export const MenuLink = styled(Link)`
  color: var(--texts);
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;
