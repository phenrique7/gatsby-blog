import styled from 'styled-components';
import { Link } from 'gatsby';

export const RecommendedPostsRoot = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;

  &.next {
    justify-content: flex-end;
  }
`;

export const RecommendedPostsLink = styled(Link)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    background: var(--borders);
  }

  &.previous {
    box-shadow: 1px 0 0 0 var(--borders);
  }

  &.next {
    box-shadow: -1px 0 0 0 var(--borders);
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
