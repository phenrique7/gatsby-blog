import styled from 'styled-components';

export const PaginationRoot = styled.section`
  display: flex;
  align-items: center;
  border-top: 1px solid #38444d;
  color: #8899a6;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: #8899a6;
    transition: color 0.5s;

    &:hover {
      color: #1fa1f2;
    }
  }
`;
