import styled from 'styled-components';
import { Link } from 'gatsby';

export const RecommendedPostsRoot = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;

  &.next {
    justify-content: flex-end;
  }
`;

export const RecommendedPostsLink = styled(Link)`
  align-items: center;
  background: #192734;
  color: #1fa1f2;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    background: #38444d;
  }

  &.previous {
    box-shadow: 1px 0 0 0 #38444d;
  }

  &.next {
    box-shadow: -1px 0 0 0 #38444d;
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
