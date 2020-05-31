import styled from 'styled-components';

export const PaginationRoot = styled.section`
  display: flex;
  align-items: center;
  box-shadow: 0 -1px 0 0 var(--borders);
  color: var(--texts);
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: var(--texts);
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`;
