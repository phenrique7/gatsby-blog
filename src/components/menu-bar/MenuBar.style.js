import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarRoot = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444d;
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
  color: #8899a6;
  cursor: pointer;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  position: relative;

  &:hover {
    color: #1fa1f2;
  }
`;
